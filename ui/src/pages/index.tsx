import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

import '../styles/main.scss';

const Index = () => (
  <DefaultLayout>
    <div className="row margin-top-2">
      <div className="col-xs-12 text-align-center">
        <AUheading size="xl" level="1">
          Are you a buyer or a seller?
        </AUheading>
        <div>
          We can help you find out where to source or provide digital products and services for government.
        </div>
      </div>
    </div>
    <div className="row margin-top-2 margin-bottom-2">
      <div className="col-sm-5 background-white border-width-1 border-light-grey margin-1">
        <div className="padding-2 height-7">  
          <AUheading size="xxxl" level="2">
            <Link to="/buyer">
              Buyer
        </Link>
          </AUheading>
          <div>Source or purchase products and services for government.</div>
        </div>
      </div>
      <div className="col-sm-5 background-white border-width-1 border-light-grey margin-1">
        <div className="padding-2 height-7">
          <Link to="/seller">
            <AUheading size="xxxl" level="2">
              Seller
            </AUheading>
          </Link>
          <div>Sell products and services to government.</div>
        </div>
      </div>
    </div>
  </DefaultLayout>
);

export default Index;
