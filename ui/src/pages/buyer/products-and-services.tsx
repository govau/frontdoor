import AUheading from '@gov.au/headings';
import React from 'react';
import QuickLink from '../../components/buyer/QuickLink';
import Search from '../../components/buyer/Search';
import StartSouring from '../../components/buyer/StartSourcing';
import Events from '../../components/Events';
import BuyerLayout from '../../layouts/buyerLayout';
import { getSingleBreadCrumbItem } from '../../utils/BreadCrumb';

const ProductsAndServicesPage: React.FC = () => {
  return (
    <BuyerLayout>
      <>
        <div className="padding-sm-top-2 padding-md-top-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <nav className="au-breadcrumbs" aria-label="breadcrumb">
                  <ul className="au-link-list au-link-list--inline">
                    {getSingleBreadCrumbItem('Buy products and services')}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-sm-top-2 margin-sm-bottom-3 padding-md-top-1 margin-md-bottom-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className="background-white padding-sm-top-2 padding-sm-bottom-2 padding-md-top-1 padding-md-bottom-1 margin-md-top-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="padding-md-left-2 padding-md-top-1 padding-md-right-2 padding-md-bottom-1">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="padding-sm-bottom-1 padding-md-bottom-1">
                        <AUheading size="md" level="2">
                          What's on
                        </AUheading>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="padding-sm-bottom-2 padding-md-bottom-1">
                        <Events />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="background-white">
                  <QuickLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="background-light-grey margin-sm-top-3 padding-sm-bottom-3 margin-md-top-3 padding-md-bottom-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 margin-md-left-1">
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
