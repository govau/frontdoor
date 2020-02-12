import { graphql, Link } from 'gatsby';
import * as React from 'react';

import DefaultLayout from '../layouts/defaultLayout';

interface IEventsPageProps {
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

const EventsPage: React.FC<IEventsPageProps> = ({ data }) => (
  <DefaultLayout>
    {data.allMarkdownRemark.edges.map((e) => (
      <p key={e.node.fields.slug}>
        <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
      </p>
    ))}
  </DefaultLayout>
);

export default EventsPage;

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
