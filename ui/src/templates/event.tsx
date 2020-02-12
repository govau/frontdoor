import { graphql, Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

interface IEventTemplateProps {
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
        eventDate: Date,
      },
    },
  };
}

const EventTemplate: React.FC<IEventTemplateProps> = ({ data }) => (
  <DefaultLayout>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    {/* eslint-disable-next-line react/no-danger */}
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

    <Link to="/events" partiallyActive={true}>Back to Events</Link>
  </DefaultLayout>
);

export default EventTemplate;

export const query = graphql`
query EventTemplateQuery($slug: String!) {
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
      eventDate
    }
  }
}
`;
