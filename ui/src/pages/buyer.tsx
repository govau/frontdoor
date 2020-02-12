import React from 'react';
import BuyerSearch from '../components/BuyerSearch';
import CommonInterestGroup from '../components/CommonInterestGroup';
import Events from '../components/Events';
import StartSouring from '../components/StartSourcing';
import DefaultLayout from '../layouts/defaultLayout';

const BuyerPage: React.SFC = () => {
  return (
    <DefaultLayout bottomSection={(
      <>
        <div className="au-grid padding-top-1 padding-bottom-1 background-white margin-top-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="background-white">
                  <Events />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="background-white">
                  <CommonInterestGroup />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="au-grid background-light-grey margin-top-3 margin-bottom-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 margin-left-1">
                <StartSouring />
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    children={(
      <div className="row">
        <div className="col-sm-12">
          <BuyerSearch />
        </div>
      </div>
    )}/>
  );
};

export default BuyerPage;
