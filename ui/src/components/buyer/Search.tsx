import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { getSessionObject, setSessionObject } from '../../utils/Browser';
import SearchField, { ISearchResult } from '../SearchField';
import ToggleButton, { IOption } from '../ToggleButton';
import ProductsAndServicesList from './ProductsAndServicesList';
import SearchResult from './SearchResult';

const Search: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [agencies, setAgencies] = useState<ISearchResult[]>([]);
  const [products, setProducts] = useState<ISearchResult[]>([]);
  const [selectedAgencyType, setSelectedAgencyType] = useState<string>('federal');
  const [selectedAgency, setSelectedAgency] = useState<ISearchResult | null>();
  const [selectedProduct, setSelectedProduct] = useState<ISearchResult | null>();
  const [panels, setPanels] = useState<ISearchResult[]>();
  const [showProductsAndServices, setShowProductsAndServices] = useState<boolean>(false);

  useEffect(() => {
    if (!loaded) {
      const storedSelectedAgencyTypeObject = getSessionObject('selectedAgencyType');
      if (storedSelectedAgencyTypeObject) {
        setSelectedAgencyType(storedSelectedAgencyTypeObject.key);
      }
      const storedSelectedAgencyObject = getSessionObject('selectedAgency');
      if (storedSelectedAgencyObject) {
        setSelectedAgency(storedSelectedAgencyObject);
      }
      setLoaded(true);
    }
  });

  const searchCallback = (search: any): Promise<AxiosResponse<ISearchResult[]>> => {
    if (search) {
      return axios.post('/api/buyersearch', search);
    }
    return Promise.reject();
  };

  const agencySearchCallback = (searchValue: string): Promise<ISearchResult[]> => {
    products.splice(0, products.length);
    return searchCallback({
      query: searchValue,
      top: 10,
      type: 'agency',
    }).then((r) => {
      setAgencies(r.data);
      return r.data;
    });
  };

  const productSearchCallback = (searchValue: string): Promise<ISearchResult[]> => {
    if ((selectedAgency && selectedAgencyType === 'federal') || selectedAgencyType === 'state') {
      setLoading(true);
      setShowProductsAndServices(false);
      return searchCallback({
        query: searchValue,
        top: 10,
        type: 'product',
      }).then((r) => {
        setProducts(r.data);
        setLoading(false);
        return r.data;
      });
    }
    return Promise.resolve([]);
  };

  const panelSearchCallback = (product: ISearchResult): Promise<ISearchResult[]> => {
    if ((selectedAgency && selectedAgencyType === 'federal') || selectedAgencyType === 'state') {
      setLoading(true);
      setShowProductsAndServices(false);
      return searchCallback({
        query: product.text,
        top: 10,
        type: 'panel',
      }).then((r) => {
        setPanels(r.data);
        setLoading(false);
        return r.data;
      });
    }
    return Promise.resolve([]);
  };

  const agencySelected = (a: ISearchResult) => {
    setSelectedAgency(a);
    setSessionObject('selectedAgency', a);
  };

  const productSelected = (product: ISearchResult) => {
    panelSearchCallback(product);
    setSelectedProduct(product);
  };

  const productsAndServicesListItemSelected = (searchValue: string) => {
    productSearchCallback(searchValue).then((data) => {
      if (data.length > 0) {
        productSelected(data[0]);
      }
    });
  };

  const toggleSelected = (option: IOption) => {
    setSelectedAgencyType(option.key);
    setSessionObject('selectedAgencyType', option);
    clearAgency();
  };

  const getTypeOfBodyName = (agency: ISearchResult): string => {
    const typeOfBody = agency.metadata.typeofbody;

    if (typeOfBody) {
      switch (typeOfBody) {
        case 'cce':
          return 'Commonwealth Corporate Entity (CCE)';
        case 'nce':
          return 'Non-corporate Commonwealth Entity (NCE)';
        case 'gbe':
          return 'Government Business Enterprises (GBE)';
        default:
          return `${typeOfBody} unknown`;
      }
    }
    return 'agency is missing type of body';
  };

  const clearAgency = () => {
    setSelectedAgency(null);
    setSessionObject('selectedAgency', null);
  };

  return (
    <>
      <div className="row padding-md-top-2">
        <div className="col-sm-12 text-align-center">
          <ToggleButton
            options={[{
              key: 'federal',
              text: 'Federal government',
            }, {
              key: 'state',
              text: 'State or local government',
            }]}
            initialKey={selectedAgencyType ? selectedAgencyType : 'federal'}
            optionSelectedFunc={toggleSelected}
          />
        </div>
      </div>
      {selectedAgency ? (
        <div className="row margin-sm-top-2 margin-md-top-2">
          <div className="col-sm-12 text-align-center">
            <AUheading size="sm" level="1">{selectedAgency.text}</AUheading>
            <div className="font-style-italic">{getTypeOfBodyName(selectedAgency)}</div>
            <AUbutton
              onClick={() => clearAgency()}
              as="tertiary">
              Change organisation
            </AUbutton>
          </div>
        </div>
      ) : (
          <>
            {selectedAgencyType === 'federal' && (
              <>
                <div className="row margin-sm-top-2 margin-md-top-2">
                  <div className="col-sm-8 col-sm-push-2 text-align-center">
                    <AUheading size="lg" level="1">
                      <label htmlFor="agency">Which federal government organisation do you work for?</label>
                    </AUheading>
                    <div className="margin-sm-top-1 margin-md-top-1">
                      Some DTA panels and arrangements are mandatory for non-corporate Commonwealth entities.
                    </div>
                  </div>
                </div>
                <div className="row margin-sm-top-1 margin-md-top-05">
                  <div className="col-sm-8 col-sm-push-2">
                    <SearchField
                      searchFunc={agencySearchCallback}
                      itemSelectedFunc={agencySelected}
                      id="agency"
                      list={agencies}
                      helpComponent={(
                        <>
                          <AUheading size="sm" level="3">
                            Can't find your organisation?
                          </AUheading>
                          <div className="margin-sm-top-05 margin-md-top-05"><a href="#footer-feedback">Send us feedback</a> if your government organisation name does not appear.</div>
                        </>
                      )}
                      notFoundComponent={(s) => (
                        <>
                          <div className="padding-sm-2 padding-md-2">
                            <AUheading size="sm" level="3">
                              Sorry, '{s}' could not be found
                            </AUheading>
                            <div className="margin-sm-top-05 margin-md-top-05">
                              Check your spelling or <a href="https://www.directory.gov.au/departments-and-agencies" target="_blank" rel="external noreferrer">search the government directory</a> to find your organisation name
                            </div>
                          </div>
                        </>
                      )}
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      {(selectedAgency || selectedAgencyType === 'state') && (
        <>
          {selectedAgencyType === 'state' && (
            <div className="row margin-sm-top-2 margin-md-top-2">
              <div className="col-sm-8 col-sm-push-2 text-align-center">
                  You work for a state, territory or local organisation. This includes educational instututions.
              </div>
            </div>
          )}
          <div className="row margin-sm-top-2 margin-md-top-2">
            <div className="col-sm-8 col-sm-push-2 text-align-center">
              <AUheading size="lg" level="1">
                <label htmlFor="product">What digital product or service do you need to buy?</label>
              </AUheading>
              <div className="margin-sm-top-1 margin-md-top-1">
                If your requirements are not well-defined, <Link to="/buyer/products-and-services/ask-the-market">ask sellers for innovative solutions or ideas</Link>.
              </div>
            </div>
          </div>
          <div className="row margin-sm-top-1 margin-md-top-05">
            <div className="col-sm-8 col-sm-push-2">
              <SearchField
                searchFunc={productSearchCallback}
                itemSelectedFunc={productSelected}
                list={products}
                id="product"
                helpComponent={(
                  <>
                    <AUheading size="sm" level="3">
                      Can't find what you need?
                    </AUheading>
                    <div className="margin-sm-top-05 margin-md-top-05">
                      <a href="">[TODO]View the broader list of products and services</a>
                    </div>
                    <div className="margin-sm-top-05 margin-md-top-05">
                      If you can't find what you need, <a href="/buyer/products-and-services/ask-the-market">ask sellers</a> to help define your digital requirements.
                    </div>
                  </>
                )}
                notFoundComponent={(s) => (
                  <>
                    <div className="padding-sm-2 padding-md-2">
                      <AUheading size="sm" level="3">
                        Sorry, '{s}' could not be found
                      </AUheading>
                      <div className="margin-sm-top-05 margin-md-top-05">
                        Check your spelling or <a href="">[TODO]view the broader list of products and services</a> to help define your search.
                      </div>
                    </div>
                    <div className="background-light-grey padding-sm-2 padding-md-2">
                      <AUheading size="sm" level="3">
                        Test the market
                      </AUheading>
                      <div className="margin-sm-top-05 margin-md-top-05">
                        If you can't find what you need, <a href="/buyer/products-and-services/ask-the-market">ask sellers</a> to help define your digital requirements.
                      </div>
                    </div>
                  </>
                )}
              />
            </div>
          </div>
          <div className="row margin-sm-top-1 margin-md-top-05">
            <div className="col-sm-6 col-sm-push-4">
              <AUbutton
                  onClick={() => setShowProductsAndServices(!showProductsAndServices)}
                  as="tertiary">
                  Browse avaliable products and services
                </AUbutton>
            </div>
          </div>
          {loading &&
            <div className="row margin-sm-top-1 margin-md-top-1">
              <div className="col-sm-8 col-sm-push-2">
                Loading...
              </div>
            </div>
          }
          {showProductsAndServices && (
            <div className="row margin-sm-top-1 margin-md-top-1">
              <div className="col-sm-12">
                <div className="background-white border-width-1 border-light-grey">
                  <ProductsAndServicesList itemSelectedFunc={productsAndServicesListItemSelected} />
                </div>
              </div>
            </div>
          )}
          {!loading && panels && selectedProduct && (
            <div className="row margin-sm-top-1 margin-md-top-1">
              <div className="col-sm-12">
                <div className="background-white border-width-1 border-light-grey">
                  <SearchResult
                    agency={selectedAgency}
                    panels={panels}
                    product={selectedProduct} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Search;
