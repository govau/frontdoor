import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import axios, { AxiosResponse } from 'axios';
import React, { useRef, useState } from 'react';
import ProductsAndServicesList from '../ProductsAndServicesList';
import SearchField, { ISearchResult } from '../SearchField';
import SearchResult from './SearchResult';

const Search: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ISearchResult[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ISearchResult | null>();
  const [panels, setPanels] = useState<ISearchResult[]>();
  const [showProductsAndServices, setShowProductsAndServices] = useState<boolean>(false);
  const searchResultEl = useRef<HTMLDivElement>(null);
  const productSearchField = useRef<SearchField>(null);

  const searchCallback = (search: any): Promise<AxiosResponse<ISearchResult[]>> => {
    if (search) {
      return axios.post('/api/sellersearch', search);
    }
    return Promise.reject();
  };

  const productSearchCallback = (searchValue: string): Promise<ISearchResult[]> => {
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
  };

  const panelSearchCallback = (product: ISearchResult): Promise<ISearchResult[]> => {
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
  };

  const productSelected = (product: ISearchResult) => {
    panelSearchCallback(product);
    setSelectedProduct(product);
    scrollSearchIntoView();
  };

  const productsAndServicesListItemSelected = (searchValue: string) => {
    productSearchCallback(searchValue).then((data) => {
      if (data.length > 0) {
        productSelected(data[0]);
      }
    });
  };

  const scrollSearchIntoView = () => {
    if (searchResultEl && window) {
      searchResultEl.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <div className="row margin-md-top-2" ref={searchResultEl}>
        <div className="col-sm-8 col-sm-push-2 text-align-center">
          <AUheading size="lg" level="1">
            <label htmlFor="product">What do you want to sell to government?</label>
          </AUheading>
          <div className="margin-sm-top-1 margin-md-top-1">
            Find out where to sell your products or services through DTA panels.
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
            ref={productSearchField}
            helpComponent={(
              <>
                <AUheading size="sm" level="3">
                  Can't find what you sell?
                </AUheading>
                <div className="margin-sm-top-05 margin-md-top-05">
                  <a href="" onClick={(e) => {
                    e.preventDefault();
                    setShowProductsAndServices(true);
                    productSearchField.current?.setModalVisible(false);
                  }}>View list of products and services</a>
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
                    Check your spelling or <a href="" onClick={(e) => {
                      e.preventDefault();
                      setShowProductsAndServices(true);
                      productSearchField.current?.setModalVisible(false);
                    }}>view the full list of products and services</a> to help define your search.
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
            Browse available products and services
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
              <ProductsAndServicesList itemSelectedFunc={productsAndServicesListItemSelected} userType="seller" />
            </div>
          </div>
        </div>
      )}
      {!loading && !showProductsAndServices && panels && selectedProduct && (
        <div className="row margin-sm-top-1 margin-md-top-1">
          <div className="col-sm-12">
            <div className="background-white border-width-1 border-light-grey">
              <SearchResult
                panels={panels}
                product={selectedProduct}
                viewProductsAndServicesClicked={() => {
                  setShowProductsAndServices(true);
                  scrollSearchIntoView();
                }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
