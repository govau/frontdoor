import { graphql } from 'gatsby';
import * as React from 'react';

import BuyerChat from '../components/BuyerChat';
import DefaultLayout from '../layouts/defaultLayout';

interface ISellerTemplateProps {
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

const SellerTemplate: React.SFC<ISellerTemplateProps> = ({ data }) => (
  <DefaultLayout>
    <BuyerChat />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </DefaultLayout>
);

export default SellerTemplate;

export const query = graphql`
query SellerTemplateQuery($slug: String!) {
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
