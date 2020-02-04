import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import axios, { AxiosResponse } from 'axios';
import { navigate } from 'gatsby';
import React, { useCallback, useEffect, useState } from 'react';
import SearchField from './SearchField';
import ToggleButton, { IOption } from './ToggleButton';

const BuyerSearch: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [agencies] = useState<any>([]);
  const [products] = useState<any>([]);
  const [selectedAgency, setSelectedAgency] = useState<any>(null);
  const [selectedAgencyType, setSelectedAgencyType] = useState<string>('federal');

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

  const askCallback = (searchValue: string, filters: any[]): Promise<AxiosResponse<any>> => {
    if (searchValue) {
      return axios.post('/api/answer', {
        question: searchValue,
        strictFilters: filters,
        top: 10,
      });
    }
    return Promise.reject();
  };

  const askAgencyCallback = useCallback((searchValue) => {
    agencies.splice(0, agencies.length);
    products.splice(0, products.length);
    setLoading(true);
    return askCallback(searchValue, [{
      name: 'result',
      value: 'agency',
    }]).then((r: any) => {
      agencies.push(r.data);
      setLoading(false);
      return r;
    }, () => '');
  }, [agencies]);

  const askProductCallback = (searchValue: string) => {
    products.splice(0, products.length);
    setLoading(true);
    if ((selectedAgency && selectedAgencyType === 'federal') || selectedAgencyType === 'state') {
      const filters = selectedAgencyType === 'federal' ? selectedAgency.metadata.filter((i: any) => i.name === 'typeofbody') : [];
      return askCallback(searchValue, filters)
        .then((r: any) => {
          products.push(r.data);
          setLoading(false);
          return r.data;
        }, () => '');
    }
    return Promise.resolve({});
  };

  const agencySelected = (a: any) => {
    setSelectedAgency(a);
    setSessionObject('selectedAgency', a);
  };

  const productSelected = (product: any) => {
    // setSelectedAgency(a);
    // navigate(`/buyer/${p.answer}`);
    product.answers.map((p: any) => {
      navigate(`/buyer/${p.answer}`);
    });
  };

  const toggleSelected = (option: IOption) => {
    setSelectedAgencyType(option.key);
    setSessionObject('selectedAgencyType', option);
    clearAgency();
  };

  const getTypeOfBodyName = (agency: any): string => {
    const typeOfBody = agency.metadata.filter((i: any) => i.name === 'typeofbody');

    if (typeOfBody && typeOfBody.length > 0) {
      switch (typeOfBody[0].value) {
        case 'cce':
          return 'Commonwealth Corporate Entity';
        case 'nce':
          return 'Non-corporate Commonwealth Entity';
        default:
          return `${typeOfBody[0].value} unknown`;
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
            <AUheading size="sm" level="1">{selectedAgency.answer}</AUheading>
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
                    searchFunc={askAgencyCallback}
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
            searchFunc={askProductCallback}
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
