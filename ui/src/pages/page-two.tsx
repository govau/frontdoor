import { Link } from 'gatsby';
import * as React from 'react';
import ConceptVideo from './dta_concept.mp4';

import DefaultLayout from '../layouts/defaultLayout';

const PageTwo = () => (
  <DefaultLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <video width="640" height="480" controls>
      <source src={ConceptVideo} type="video/mp4" />
    </video>
    <ul>
      <li>
        <Link to="/a-markdown-page/">Show me some Markdown!</Link>
      </li>
      <li>
        <Link to="/">Take me back home.</Link>
      </li>
    </ul>
  </DefaultLayout>
);

export default PageTwo;
