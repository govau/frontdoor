import { graphql } from 'gatsby';
import * as React from 'react';

import BuyerChat from '../components/BuyerChat';
import DefaultLayout from '../layouts/defaultLayout';

interface INcceTemplateProps {
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

const NcceTemplate: React.SFC<INcceTemplateProps> = ({ data }) => (
  <DefaultLayout>
    <BuyerChat />
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

    {/* <Link to="/events" partiallyActive={true}>Back to Events</Link> */}
    <div>
      <h3>Policies</h3>
      Non-corporate Commonwealth Entities are mandated to apply these policies when using DTA panels:
      
      * Consider first policy
      * Fair criteria policy
      * ICT contract capped term and value policy
      * Panels policy
    </div>
  </DefaultLayout>
);

export default NcceTemplate;

export const query = graphql`
query NcceTemplateQuery($slug: String!) {
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
