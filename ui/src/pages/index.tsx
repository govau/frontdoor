import AUcard, { AUcardInner } from '@gov.au/card';
import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

import '../styles/main.scss';

const Index = () => (
  <DefaultLayout>
    <div className="row">
      <div className="col-xs-12 text-align-center">
        <AUheading size="xl" level="1">
          Are you a buyer or a seller?
        </AUheading>
        <p>
          We can help you find out where to source or provide digital products and services for government.
        </p>
      </div>
    </div>
    <div className="row margin-1">
      <div className="col-xs-6">
        <AUcard>
          <AUcardInner>
            <Link to="/buyer">
              <AUheading size="xxxl" level="2">
                Buyer
              </AUheading>
            </Link>
            <div>Source or purchase products and services for government.</div>
          </AUcardInner>
        </AUcard>
      </div>
      <div className="col-xs-6">
        <AUcard>
          <AUcardInner>
            <Link to="/seller">
              <AUheading size="xxxl" level="2">
                Seller
              </AUheading>
            </Link>
            <div>Sell products and services to government.</div>
          </AUcardInner>
        </AUcard>
      </div>
    </div>
  </DefaultLayout>
);

export default Index;
