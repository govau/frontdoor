import AUheading from '@gov.au/headings';
import React from 'react';
import BuyerSearch from '../../components/BuyerSearch';
import CommonInterestGroup from '../../components/CommonInterestGroup';
import Events from '../../components/Events';
import StartSouring from '../../components/StartSourcing';
import BuyerLayout from '../../layouts/buyerLayout';

const ProductsAndServicesPage: React.FC = () => {
  return (
    <BuyerLayout>
      <>
        <div className="au-grid">
          <div className="container margin-top-3 margin-bottom-3">
            <div className="row">
              <div className="col-sm-12">
                <BuyerSearch />
              </div>
            </div>
          </div>
        </div>
        <div className="au-grid padding-top-1 padding-bottom-1 background-white margin-top-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="background-white padding-left-2 padding-top-1 padding-right-2 padding-bottom-1">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="padding-bottom-1 padding-bottom-1">
                        <AUheading size="md" level="2">
                          What's on
                        </AUheading>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="padding-bottom-1 padding-bottom-1">
                        <Events />
                      </div>
                    </div>
                  </div>
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
    </BuyerLayout>
  );
};

export default ProductsAndServicesPage;
