import AUheading from '@gov.au/headings';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

interface IStaticQueryProps {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          frontmatter: {
            title: string,
            layout: string,
            summary: string,
            panel: string,
          },
          fields: {
            slug: string,
          },
        },
      },
    ],
  };
}

const CommonInterestGroup: React.FC = () => {
  const data: IStaticQueryProps = useStaticQuery(graphql`
    query CommonInterestGroup {
      allMarkdownRemark(filter: {fields: {slug: {regex: "/buyer/cig/"}}}) {
        edges {
          node {
            frontmatter {
              title
              layout
              summary
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="padding-md-left-2 padding-md-top-1 padding-md-right-2 padding-md-bottom-1">
        <div className="row">
          <div className="col-sm-12 margin-md-bottom-1">
            <AUheading size="md" level="2">Common interest groups</AUheading>
          </div>
        </div>
        {data.allMarkdownRemark.edges.map((e) => (
          <div key={e.node.fields.slug} className="row">
            <div className="col-sm-12">
              <div className="border-top-width-1 border-light-grey padding-md-top-2 padding-md-bottom-2">
                <AUheading size="sm" level="3">
                  <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
                </AUheading>
                <div className="margin-md-top-05">
                  {e.node.frontmatter.summary}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="col-sm-12 text-align-right">
            <div className="border-top-width-1 border-light-grey padding-md-top-1">
              <Link to="#">
                [TODO]See more groups
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonInterestGroup;
