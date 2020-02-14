import AUheading from '@gov.au/headings';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { ISearchResult } from '../SearchField';
import CannotFind from './CannotFind';
import Nce from './Nce';

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

interface ISearchResultProps {
  agency: ISearchResult | null | undefined;
  panels: ISearchResult[];
  product: ISearchResult | null;
}

const SearchResult: React.FC<ISearchResultProps> = ({ agency, panels, product }) => {
  const data: IStaticQueryProps = useStaticQuery(graphql`
    query SearchResult {
      allMarkdownRemark(filter: {fields: {slug: {regex: "/buyer/products-and-services/"}}}) {
        edges {
          node {
            frontmatter {
              title
              layout
              panel
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
      <div className="padding-left-2 padding-right-2 padding-top-2">
        <div className="row">
          <div className="col-sm-12 text-align-center padding-bottom-2">
            <AUheading size="lg" level="2">{product && product.text}</AUheading>
            {product && product.metadata.summary}
          </div>
        </div>
        {panels.map((p) => (
          data.allMarkdownRemark.edges.map((e) => (
            e.node.frontmatter.panel === p.metadata.panel &&
            <div key={e.node.fields.slug} className="row">
              <div className="col-sm-12">
                <div className="border-top-width-1 border-light-grey padding-top-1 padding-bottom-2">
                  {p.metadata.mandatory ? (
                    <span className="badge badge-red">
                      Mandatory
                    </span>
                  ) : (
                    <span className="badge badge-blue">
                      Optional
                    </span>
                  )}
                  <div className="margin-top-1">
                    <AUheading size="md" level="2">
                      <Link to={e.node.fields.slug}>Use the {e.node.frontmatter.title}</Link>
                    </AUheading>
                  </div>
                  <div>
                    {e.node.frontmatter.summary}
                  </div>
                </div>
              </div>
            </div>
          ))
        ))}
        {agency && agency.metadata.typeofbody === 'nce' && (
          <div className="row">
            <div className="col-sm-12">
              <div className="border-top-width-1 border-light-grey padding-top-1 padding-bottom-2">
                <Nce />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="border-top-width-1 border-light-grey padding-2 background-light-grey">
            <CannotFind />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
