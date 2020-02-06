import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import axios, { AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import SearchField, { ISearchResult } from './SearchField';
import ToggleButton, { IOption } from './ToggleButton';


interface IBuyerSearchProps {
  itemSelectedFunc?: (product: ISearchResult, panels: ISearchResult[]) => void;
}

const BuyerSearch: React.FC<IBuyerSearchProps> = ({ itemSelectedFunc }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [agencies, setAgencies] = useState<ISearchResult[]>([]);
  const [products, setProducts] = useState<ISearchResult[]>([]);
  const [selectedAgencyType, setSelectedAgencyType] = useState<string>('federal');
  const [selectedAgency, setSelectedAgency] = useState<ISearchResult | null>();

  const getSessionObject = (key: string): any => {
    if (sessionStorage) {
      const stored = sessionStorage.getItem(key);
      if (stored) {
        return JSON.parse(stored);
      }
    }
    return null;
  };
  const setSessionObject = (key: string, value: any) => {
    if (sessionStorage) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  };

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

  const searchCallback = (search: any): Promise<AxiosResponse<any>> => {
    if (search) {
      return axios.post('/api/answer', search);
    }
    return Promise.reject();
  };

  const agencySearchCallback = useCallback((searchValue) => {
    products.splice(0, products.length);
    setLoading(true);
    return searchCallback({
      query: searchValue,
      top: 10,
      type: 'agency',
    }).then((r: any) => {
      setAgencies(r.data);
      setLoading(false);
      return r;
    }, () => '');
  }, [agencies]);

  const productSearchCallback = (searchValue: string) => {
    setLoading(true);
    if ((selectedAgency && selectedAgencyType === 'federal') || selectedAgencyType === 'state') {
      return searchCallback({
        query: searchValue,
        top: 10,
        type: 'product',
      })
      .then((r: any) => {
        setProducts(r.data);
        setLoading(false);
        return r.data;
      }, () => '');
    }
    return Promise.resolve({});
  };

  const panelSearchCallback = (product: ISearchResult) => {
    setLoading(true);
    if ((selectedAgency && selectedAgencyType === 'federal') || selectedAgencyType === 'state') {
      return searchCallback({
        query: product.text,
        top: 10,
        type: 'panel',
      })
      .then((r: any) => {
        if (itemSelectedFunc) {
          itemSelectedFunc(product, r.data);
        }
        setLoading(false);
        return r.data;
      });
    }
    return Promise.resolve({});
  };

  const agencySelected = (a: ISearchResult) => {
    setSelectedAgency(a);
    setSessionObject('selectedAgency', a);
  };

  const productSelected = (product: ISearchResult) => {
    panelSearchCallback(product);
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
      <div className="row margin-top-2">
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
        <div className="row margin-top-2">
          <div className="col-sm-12 text-align-center">
            <AUheading size="sm" level="1">{selectedAgency.text}</AUheading>
            <p className="font-style-italics">{getTypeOfBodyName(selectedAgency)}</p>
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
                <div className="row margin-top-2">
                  <div className="col-sm-8 col-sm-push-2 text-align-center">
                    <AUheading size="lg" level="1" className="margin-bottom-1">
                      Which federal government organisation do you work for?
                  </AUheading>
                    Some DTA panels and arrangements are mandatory for non-corporate Commonwealth entities.
                </div>
                </div>
                <div className="row margin-top-1">
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
      <div className="row margin-top-2">
        <div className="col-sm-8 col-sm-push-2 text-align-center">
          <AUheading size="lg" level="1" className="margin-bottom-1">
            What digital product or service do you need to buy?
          </AUheading>
          If your requirements are not well-defined, ask sellers for innovative solutions or ideas.
        </div>
      </div>
      <div className="row margin-top-1">
        <div className="col-sm-8 col-sm-push-2">
          <SearchField
            searchFunc={productSearchCallback}
            itemSelectedFunc={productSelected}
            list={products}
            label="What product or service do you want to buy?"
          />
        </div>
      </div>
      <div>
        {loading && 'Searching...'}
      </div>
    </>
  );
};

export default BuyerSearch;
