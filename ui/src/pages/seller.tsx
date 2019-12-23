import { graphql, Link } from 'gatsby';
import React from 'react';
import DefaultLayout from '../layouts/defaultLayout';

interface ISellerPageProps {
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

const SellerPage: React.SFC<ISellerPageProps>  = ({ data }) => {
  return (
    <DefaultLayout>
    {data.allMarkdownRemark.edges.map((e) => (
      <p key={e.node.fields.slug}>
        <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
      </p>
    ))}
    </DefaultLayout>
  );
};

export default SellerPage;


export const query = graphql`
{
  allMarkdownRemark(filter: {fields: {slug: {regex: "/seller/"}}}) {
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
