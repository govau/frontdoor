import axios, { AxiosResponse } from 'axios';
import { navigate } from 'gatsby';
import React, { useCallback, useState } from 'react';
import SearchField from './SearchField';

const BuyerChat: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [agencies] = useState<any>([]);

  const askCallback = (ref: React.MutableRefObject<null>, filters: any[]): Promise<AxiosResponse<any>> => {
    if (ref.current) {
      const search: any = ref.current;

      if (search) {
        return axios.post('/api/answer', {
          question: search.value,
          strictFilters: filters,
        });
      }
    }
    return Promise.reject();
  };

  const askAgencyCallback = useCallback((inputEl) => {
    agencies.splice(0, agencies.length);
    setLoading(true);
    askCallback(inputEl, [{
      name: 'result',
      value: 'agency',
    }]).then((r: any) => {
      agencies.push(r.data);
      setLoading(false);
      return r;
    }, () => '');
  }, [agencies]);

  const askProductCallback = (inputEl: React.MutableRefObject<null>) => {
    setLoading(true);

    let filters: any[] = [];
    if (agencies) {
      agencies.map((agency: any) => (
        agency.answers && agency.answers.forEach((a: any) => (
          filters = a.metadata.filter((i: any) => i.name === 'typeofbody')
        ))
      ));
    }
    askCallback(inputEl, filters)
      .then((r: any) => {
        setLoading(false);
        return r.data;
      }, () => '')
      .then((product) => {
        if (product.answers) {
          product.answers.map((p: any) => {
              navigate(`/buyer/${p.answer}`);
          });
        }
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
          <SearchField searchFunc={askAgencyCallback} label="Which government agency do you work for?" />
        </div>
      </div>
      <div className="row">
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
            label="What product or service do you want to buy?"
          />
        </div>
      </div>
    </>
  );
};

export default BuyerChat;
