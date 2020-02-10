import React from 'react';
import BuyerSearch from '../components/BuyerSearch';
import CommonInterestGroup from '../components/CommonInterestGroup';
import Events from '../components/Events';
import StartSouring from '../components/StartSourcing';
import DefaultLayout from '../layouts/defaultLayout';


const BuyerPage: React.SFC = () => {
  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-sm-12">
          <BuyerSearch />
        </div>
      </div>
      <div className="row margin-top-1">
        <div className="col-sm-6">
          <div className="background-white border-width-1 border-light-grey">
            <Events />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="background-white border-width-1 border-light-grey">
            <CommonInterestGroup />
          </div>
        </div>
      </div>
      <div className="row margin-top-2">
        <div className="col-sm-12 margin-left-2">
          <StartSouring />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BuyerPage;
