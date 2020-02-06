import { graphql } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

interface IPanelLinkTemplateProps {
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

const PanelLinkTemplate: React.SFC<IPanelLinkTemplateProps> = ({ data }) => (
  <DefaultLayout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </DefaultLayout>
);

export default PanelLinkTemplate;

export const query = graphql`
query PanelLinkTemplateQuery($slug: String!) {
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
