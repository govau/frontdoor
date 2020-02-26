import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationBar from '../components/seller/NavigationBar';

interface IStaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string,
    },
  };
}
const SellerLayout: React.FC = ({ children }) => {
  const data: IStaticQueryProps = useStaticQuery(graphql`
    query SellerLayoutQuery {
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
      </Helmet>
      <nav className="au-skip-link" aria-label="skip links navigation">
        <a className="au-skip-link__link" href="#content">Skip to main content</a>
        <a className="au-skip-link__link" href="#nav">Skip to main navigation</a>
      </nav>
      <Header title={data.site.siteMetadata.title} />
      <NavigationBar id="nav" />
      <div className="au-body">
        <div id="content" className="background-light-grey">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerLayout;
