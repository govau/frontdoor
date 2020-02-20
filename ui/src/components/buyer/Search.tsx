import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { getSessionObject, setSessionObject } from '../../utils/Browser';
import SearchField, { ISearchResult } from '../SearchField';
import ToggleButton, { IOption } from '../ToggleButton';
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
      return searchCallback({
        query: searchValue,
        top: 10,
        type: 'product',
      }).then((r) => {
        setProducts(r.data);
        return r.data;
      });
    }
    return Promise.resolve([]);
  };

  const panelSearchCallback = (product: ISearchResult): Promise<ISearchResult[]> => {
    if ((selectedAgency && selectedAgencyType === 'federal') || selectedAgencyType === 'state') {
      setLoading(true);
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
          return 'Commonwealth Corporate Entity';
        case 'nce':
          return 'Non-corporate Commonwealth Entity';
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
                      Which federal government organisation do you work for?
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
                      label="Which government agency do you work for?"
                      list={agencies}
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}
      {(selectedAgency || selectedAgencyType === 'state') && (
        <>
          <div className="row margin-sm-top-2 margin-md-top-2">
            <div className="col-sm-8 col-sm-push-2 text-align-center">
              <AUheading size="lg" level="1">
                What digital product or service do you need to buy?
              </AUheading>
              <div className="margin-sm-top-1 margin-md-top-1">
                If your requirements are not well-defined, ask sellers for innovative solutions or ideas.
              </div>
            </div>
          </div>
          <div className="row margin-sm-top-1 margin-md-top-05">
            <div className="col-sm-8 col-sm-push-2">
              <SearchField
                searchFunc={productSearchCallback}
                itemSelectedFunc={productSelected}
                list={products}
                label="What product or service do you want to buy?"
              />
            </div>
          </div>
          {loading &&
            <div className="row margin-sm-top-1 margin-md-top-1">
              <div className="col-sm-8 col-sm-push-2">
                Loading...
              </div>
            </div>
          }
          {panels && selectedProduct && (
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
