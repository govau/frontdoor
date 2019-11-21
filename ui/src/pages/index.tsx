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
  </DefaultLayout>
);

export default Index;
