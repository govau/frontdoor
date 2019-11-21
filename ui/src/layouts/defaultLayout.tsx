import { graphql, StaticQuery } from 'gatsby';
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

const DefaultLayout: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query DefaultLayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data: IStaticQueryProps) => (
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
        <div className="container">{children}</div>
        <Footer />
      </div>
    )}
  />
);

export default DefaultLayout;
