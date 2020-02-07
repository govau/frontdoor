import { graphql } from 'gatsby';
import * as React from 'react';

import BuyerSearch from '../components/BuyerSearch';
import DefaultLayout from '../layouts/defaultLayout';

interface IBuyerTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string,
        },
      },
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string,
      },
    },
  };
}

const BuyerTemplate: React.SFC<IBuyerTemplateProps> = ({ data }) => (
  <DefaultLayout>
    <div className="row">
      <div className="col-sm-12">
        <BuyerSearch />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </div>
  </DefaultLayout>
);

export default BuyerTemplate;

export const query = graphql`
query BuyerTemplateQuery($slug: String!) {
  site {
    siteMetadata {
      title
      description
      author {
        name
        url
      }
    }
  }
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    excerpt
    frontmatter {
      title
    }
  }
}
`;
