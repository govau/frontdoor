import React from 'react';
import Events from '../../components/Events';
import Search from '../../components/seller/Search';
import WorkingWithGovernment from '../../components/seller/WorkingWithGovernment';
import SellerLayout from '../../layouts/sellerLayout';

const ProductsAndServicesPage: React.FC = () => {
  return (
    <SellerLayout>
      <>
        <div className="container padding-top-3 margin-bottom-3">
          <div className="col-sm-12">
            <Search />
          </div>
        </div>
        <div className="background-white">
          <div className="container padding-top-2 padding-bottom-2 ">
            <div className="row">
              <div className="col-sm-6">
                <WorkingWithGovernment />
              </div>
              <div className="col-sm-6">
                <Events />
              </div>
            </div>
          </div>
        </div>
        <div className="padding-top-2"></div>
      </>
    </SellerLayout>
  );
};

export default ProductsAndServicesPage;
