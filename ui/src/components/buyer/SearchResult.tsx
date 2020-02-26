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
      <div className="">
        <div className="row">
          <div className="col-sm-12 text-align-center padding-sm-1 padding-md-2">
            <AUheading size="lg" level="2">{product && product.text}</AUheading>
            {product && product.metadata.summary}
          </div>
        </div>
        {panels.map((p) => (
          data.allMarkdownRemark.edges.map((e) => (
            e.node.frontmatter.panel === p.metadata.panel &&
            <div key={e.node.fields.slug} className="row">
              <div className="col-sm-12">
                <div className="border-top-width-1 border-light-grey padding-sm-1 padding-sm-top-2 padding-sm-bottom-2 padding-md-2">
                  {agency && agency.metadata.typeofbody === 'nce' && p.metadata.mandatory ? (
                    <span className="badge badge-red">
                      Mandatory
                    </span>
                  ) : (
                    <span className="badge badge-blue">
                      Optional
                    </span>
                  )}
                  <div className="margin-sm-top-1 margin-md-top-1">
                    <AUheading size="md" level="2">
                      <Link to={e.node.fields.slug}>Use the {e.node.frontmatter.title}</Link>
                    </AUheading>
                  </div>
                  <div className="margin-sm-top-05">
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
              <div className="border-top-width-1 border-light-grey padding-sm-1 padding-md-2">
                <Nce />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="border-top-width-1 border-light-grey padding-sm-1 padding-md-2 background-light-grey">
            <CannotFind />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
