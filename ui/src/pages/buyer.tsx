import { graphql, Link } from 'gatsby';
import React from 'react';
import BuyerChat from '../components/BuyerChat';
import Events from '../components/Events';
import DefaultLayout from '../layouts/defaultLayout';

interface IBuyerPageProps {
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

const BuyerPage: React.SFC<IBuyerPageProps>  = ({ data }) => {
  return (
    <DefaultLayout>
      <BuyerChat />
      <Events />
      {data.allMarkdownRemark.edges.map((e) => (
      <p key={e.node.fields.slug}>
        <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
      </p>
    ))}
    </DefaultLayout>
  );
};

export default BuyerPage;

export const query = graphql`
{
  allMarkdownRemark(filter: {fields: {slug: {regex: "/buyer/"}}}) {
    edges {
      node {
        frontmatter {
          title
          layout
        }
        fields {
          slug
        }
      }
    }
  }
}
`;
