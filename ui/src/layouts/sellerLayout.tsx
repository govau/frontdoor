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
    <div className="au-body">
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords },
        ]}
      />
      <Header title={data.site.siteMetadata.title} />
      <NavigationBar />
      <div className="background-light-grey">{children}</div>
      <Footer />
    </div>
  );
};

export default SellerLayout;
