import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

const Index = () => (
  <DefaultLayout>
    <div className="container padding-sm-top-2 padding-sm-bottom-2 padding-md-top-3 padding-md-bottom-3">
      <div className="row margin-md-top-1">
        <div className="col-xs-12 text-align-center">
          <AUheading size="xl" level="1">
            Are you a buyer or a seller?
          </AUheading>
          <div className="margin-sm-top-1">
            We can help you find out where to source or provide digital products and services for government.
            </div>
        </div>
      </div>
      <div className="row margin-sm-top-1 margin-md-top-2 margin-md-bottom-4">
        <div className="col-sm-6">
          <Link to="/buyer/products-and-services">
            <div className="background-white height-9 border-width-1 border-light-grey padding-sm-1 margin-sm-bottom-1 padding-md-2 margin-md-right-1">
              <AUheading size="xxxl" level="2">
                Buyer
                </AUheading>
              <div className="margin-md-top-1">Source or purchase products and services for government.</div>
            </div>
          </Link>
        </div>
        <div className="col-sm-6">
          <Link to="/seller/products-and-services">
            <div className="background-white height-9 border-width-1 border-light-grey padding-sm-1 padding-md-2 margin-md-right-1">
              <AUheading size="xxxl" level="2">
                Seller
                </AUheading>
              <div className="margin-md-top-1">Sell products and services to government.</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default Index;
