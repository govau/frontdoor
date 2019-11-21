import { Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

const NotFoundPage = () => (
  <DefaultLayout>
    <h1>404: Page not found.</h1>
    <p>
      You've hit the void. <Link to="/">Go back.</Link>
    </p>
  </DefaultLayout>
);

export default NotFoundPage;
