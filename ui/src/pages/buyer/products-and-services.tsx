import AUheading from '@gov.au/headings';
import React from 'react';
import CommonInterestGroup from '../../components/buyer/CommonInterestGroup';
import Search from '../../components/buyer/Search';
import StartSouring from '../../components/buyer/StartSourcing';
import Events from '../../components/Events';
import BuyerLayout from '../../layouts/buyerLayout';

const ProductsAndServicesPage: React.FC = () => {
  return (
    <BuyerLayout>
      <>
        <div className="padding-top-3 margin-bottom-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className="padding-top-1 padding-bottom-1 background-white margin-top-3">
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
        <div className="background-light-grey margin-top-3 padding-bottom-3">
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
