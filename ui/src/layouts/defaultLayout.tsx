import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';

interface IStaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string,
    },
  };
}

interface IDefaultLayoutProps {
  bottomSection?: React.ReactNode;
}

const DefaultLayout: React.SFC<IDefaultLayoutProps> = ({ children, bottomSection }) => {
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
        <NavigationBar />
      </div>
      <div className="au-grid">
        <div className="container margin-top-3 margin-bottom-3">{children}</div>
      </div>
      {bottomSection && <div className="margin-top-3 margin-bottom-3">{bottomSection}</div>}
      <div className=" au-grid">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
