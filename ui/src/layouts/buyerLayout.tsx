import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Helmet from 'react-helmet';

import NavigationBar from '../components/buyer/NavigationBar';
import FeedbackButton from '../components/FeedbackButton';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
        <NavigationBar />
      </div>
      <div>{children}</div>
      {/* <div className="au-grid">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <FeedbackButton />
            </div>
          </div>
        </div>
      </div> */}
      <div className="au-grid">
        <Footer />
      </div>
    </div>
  );
};

export default BuyerLayout;
