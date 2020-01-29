import AUcard, { AUcardInner, AUcardTitle } from '@gov.au/card';
import { Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

import '../styles/main.scss';

const Index = () => (
  <DefaultLayout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-two/">Go to page 2</Link>
    <AUcard>
      <AUcardInner>
        <AUcardTitle>Buyer</AUcardTitle>
        <p>Some text</p>
        <p>Additional content</p>
      </AUcardInner>
    </AUcard>
    <AUcard>
      <AUcardInner>
        <AUcardTitle>Seller</AUcardTitle>
        <p>Some text</p>
        <p>Additional content</p>
      </AUcardInner>
    </AUcard>
  </DefaultLayout>
);

export default Index;
