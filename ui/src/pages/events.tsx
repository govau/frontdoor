import { graphql, Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

interface IEventsTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: {
              title: string,
              layout: string,
              eventDate: string,
            },
            fields: {
              slug: string,
            },
          },
        },
      ],
    },
  };
}

const EventsTemplate: React.SFC<IEventsTemplateProps> = ({ data }) => (
  <DefaultLayout>
    {data.allMarkdownRemark.edges.map((e) => (
      <p>
        <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
      </p>
    ))}
  </DefaultLayout>
);

export default EventsTemplate;

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "event"}}}, sort: {fields: frontmatter___eventDate, order: ASC}) {
      edges {
        node {
          frontmatter {
            title
            layout
            eventDate
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
