import React from 'react';
import Events from '../../components/Events';
import Search from '../../components/seller/Search';
import WorkingWithGovernment from '../../components/WorkingWithGovernment';
import SellerLayout from '../../layouts/sellerLayout';

const ProductsAndServicesPage: React.FC = () => {
  return (
    <SellerLayout>
      <>
        <div className="au-grid">
          <div className="container margin-top-3 margin-bottom-3">
            <div className="col-sm-12">
              <Search />
            </div>
          </div>
        </div>
        <div className="au-grid padding-top-1 padding-bottom-1 background-white margin-top-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="background-white">
                  <WorkingWithGovernment />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="background-white">
                  <Events />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="au-grid background-light-grey margin-top-3 margin-bottom-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 margin-left-1">
                {/* <StartSouring /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </SellerLayout>
  );
};

export default ProductsAndServicesPage;
