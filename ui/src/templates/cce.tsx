import { graphql } from 'gatsby';
import * as React from 'react';
import BuyerSearch from '../components/BuyerSearch';
import DefaultLayout from '../layouts/defaultLayout';

interface ICceTemplateProps {
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

const CceTemplate: React.FC<ICceTemplateProps> = ({ data }) => (
  <DefaultLayout>
    <BuyerSearch />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

    {/* <Link to="/events" partiallyActive={true}>Back to Events</Link> */}
    <div>
      As a Corporate Commonwealth Entity, you should also consider:

      <h3>Contracting through volume sourcing arrangements</h3>
      There are whole of government sourcing arrangements which can provide discounts for CCEs when you choose participating providers.

      <h3>Relevant policies</h3>
      CCEs must comply with the Digital Sourcing Framework, which contrains four policies to help buyers purchase digital products and services.
    </div>
  </DefaultLayout>
);

export default CceTemplate;

export const query = graphql`
query CceTemplateQuery($slug: String!) {
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
