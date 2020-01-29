import axios, { AxiosResponse } from 'axios';
import { navigate } from 'gatsby';
import React, { useCallback, useState } from 'react';
import SearchField from './SearchField';

const BuyerChat: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [agencies] = useState<any>([]);
  const [products] = useState<any>([]);
  const [selectedAgency, setSelectedAgency] = useState<any>(null);

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
    setLoading(true);
    if (selectedAgency) {
      const filters = selectedAgency.metadata.filter((i: any) => i.name === 'typeofbody');
      return askCallback(searchValue, filters)
        .then((r: any) => {
          products.push(r.data);
          setLoading(false);
          return r.data;
        }, () => '');
        // .then((product) => {

        //   if (product.answers) {
        //     product.answers.map((p: any) => {
        //         navigate(`/buyer/${p.answer}`);
        //     });
        //   }
        // });
    }
    return Promise.reject();
  };

  const agencySelected = (a: any) => {
    setSelectedAgency(a);
  };

  const productSelected = (product: any) => {
    // setSelectedAgency(a);
    // navigate(`/buyer/${p.answer}`);
    product.answers.map((p: any) => {
        navigate(`/buyer/${p.answer}`);
    });
  };

  return (
    <>
      <div>
        {loading && 'Searching...'}
      </div>
      <div className="row">
        <div className="col-sm-6">
          Which government agency do you work for?
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <SearchField
            searchFunc={askAgencyCallback}
            itemSelectedFunc={agencySelected}
            label="Which government agency do you work for?"
            list={agencies}
          />
        </div>
      </div>

      {/* <div className="row">
        <div className="col-sm-12">
          {agencies && agencies.map((agency: any) => (
            <>
              {agency.answers && agency.answers.map((a: any) => (
                <div className="margin-bottom-2 margin-top-2">
                  <div>{a.answer}</div>
                </div>
              ))}
            </>
          ))}
        </div>
      </div> */}
      <div className="row">
        <div className="col-sm-6">
          {selectedAgency && selectedAgency.answer}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          What product or service do you want to buy?
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <SearchField
            searchFunc={askProductCallback}
            itemSelectedFunc={productSelected}
            list={products}
            label="What product or service do you want to buy?"
          />
        </div>
      </div>
    </>
  );
};

export default BuyerChat;
