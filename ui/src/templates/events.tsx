import { graphql } from 'gatsby';
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
    {JSON.stringify(data, null, 4)}
    {data.allMarkdownRemark.edges.map((e) => (
      <>
        <div>{e.node.frontmatter.title}</div>
        <div>{e.node.fields.slug}</div>
      </>
    ))}
    {/* <h1>{data.markdownRemark.frontmatter.title}</h1> */}
    {/* eslint-disable-next-line react/no-danger */}
    {/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} /> */}
  </DefaultLayout>
);

export default EventsTemplate;

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {layout: {eq: "events"}}}, sort: {fields: frontmatter___eventDate, order: ASC}) {
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
