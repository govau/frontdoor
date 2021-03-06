import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationBarDefault from '../components/NavigationBarDefault';

interface IStaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string,
    },
  };
}

const DefaultLayout: React.FC = ({ children }) => {
  const data: IStaticQueryProps = useStaticQuery(graphql`
    query DefaultLayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <div className="au-grid">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      >
        <html lang="en" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>
      <nav className="au-skip-link" aria-label="skip links navigation">
        <a className="au-skip-link__link" href="#content">Skip to main content</a>
        <a className="au-skip-link__link" href="#nav">Skip to main navigation</a>
      </nav>
      <Header title={data.site.siteMetadata.title} />
      <NavigationBarDefault id="nav" />
      <div className="au-body">
        <div id="content" className="background-light-grey">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
