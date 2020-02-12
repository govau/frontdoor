import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationBarBuyer from '../components/NavigationBarBuyer';

interface IStaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string,
    },
  };
}

const BuyerLayout: React.FC = ({ children }) => {
  const data: IStaticQueryProps = useStaticQuery(graphql`
    query BuyerLayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <div className="au-body background-light-grey">
      <div className="au-grid">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <NavigationBarBuyer />
      </div>
      <div>{children}</div>
      <div className="au-grid">
        <Footer />
      </div>
    </div>
  );
};

export default BuyerLayout;
