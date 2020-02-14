import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

import '../styles/main.scss';

const Index = () => (
  <DefaultLayout>
    <div className="au-grid">
      <div className="container margin-top-3 margin-bottom-3">
        <div className="row margin-top-1">
          <div className="col-xs-12 text-align-center">
            <AUheading size="xl" level="1">
              Are you a buyer or a seller?
            </AUheading>
            <div>
              We can help you find out where to source or provide digital products and services for government.
            </div>
          </div>
        </div>
        <div className="row margin-top-2 margin-bottom-4 home-links">
          <div className="col-sm-6">
            <Link to="/buyer/products-and-services">
              <div className="padding-2 height-9 background-white border-width-1 border-light-grey margin-right-1">
                <AUheading size="xxxl" level="2">
                  Buyer
                </AUheading>
                <div className="margin-top-1">Source or purchase products and services for government.</div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/seller/products-and-services">
              <div className="padding-2 height-9 background-white border-width-1 border-light-grey margin-right-1">
                <AUheading size="xxxl" level="2">
                  Seller
                </AUheading>
                <div className="margin-top-1">Sell products and services to government.</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default Index;
