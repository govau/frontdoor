import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationBarSeller from '../components/NavigationBarSeller';

interface IStaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string,
    },
  };
}

interface ISellerLayoutProps {
  bottomSection?: React.ReactNode;
}

const SellerLayout: React.SFC<ISellerLayoutProps> = ({ children, bottomSection }) => {
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
        <NavigationBarSeller />
      </div>
      <div className="au-grid">
        <div className="container margin-top-3 margin-bottom-3">{children}</div>
      </div>
      {bottomSection && <>{bottomSection}</>}
      <div className=" au-grid">
        <Footer />
      </div>
    </div>
  );
};

export default SellerLayout;
