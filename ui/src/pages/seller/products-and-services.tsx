import AUheading from '@gov.au/headings';
import React from 'react';
import Events from '../../components/Events';
import Search from '../../components/seller/Search';
import WorkingWithGovernment from '../../components/seller/WorkingWithGovernment';
import SellerLayout from '../../layouts/sellerLayout';
import { getSingleBreadCrumbItem } from '../../utils/BreadCrumb';

const ProductsAndServicesPage: React.FC = () => {
  return (
    <SellerLayout>
      <>
        <div className="padding-sm-top-2 padding-md-top-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <nav className="au-breadcrumbs" aria-label="breadcrumb">
                  <ul className="au-link-list au-link-list--inline">
                    {getSingleBreadCrumbItem('Sell products and services')}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-sm-top-2 margin-sm-bottom-3 padding-md-top-3 margin-md-bottom-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className="background-white padding-sm-top-2 padding-sm-bottom-2 padding-md-top-2 padding-md-bottom-2">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <WorkingWithGovernment />
              </div>
              <div className="col-sm-6 margin-sm-top-2">
                <AUheading size="md" level="2">
                  What's on
                </AUheading>
                <Events />
              </div>
            </div>
          </div>
        </div>
        <div className="padding-sm-top-2 padding-md-top-2"></div>
      </>
    </SellerLayout>
  );
};

export default ProductsAndServicesPage;
