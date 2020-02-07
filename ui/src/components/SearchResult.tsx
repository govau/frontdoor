import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';
import Nce from './Nce';
import { ISearchResult } from './SearchField';


interface ISearchResultProps {
  agency: ISearchResult | null;
  panels: ISearchResult[];
  product: ISearchResult | null;
  data: {
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
    },
  };
}

const SearchResult: React.SFC<ISearchResultProps> = ({ data, agency, panels, product }) => {
  return (
    <div className="margin-2">
      <div className="row padding-2">
        <div className="col-sm-12 text-align-center">
          <AUheading size="lg" level="2">{product && product.text}</AUheading>
          {product && product.metadata.summary}
        </div>
      </div>
      {panels.map((p) => (
        data.allMarkdownRemark.edges.map((e) => (
          e.node.frontmatter.panel === p.metadata.panel &&
          <div key={e.node.fields.slug} className="row border-top-width-1 border-light-grey padding-top-2 padding-bottom-2">
            <div className="col-sm-8">
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
                  Use the <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
                </AUheading>
              </div>
              <div>
                {e.node.frontmatter.summary}
              </div>
            </div>
            <div className="col-sm-4 text-align-right">
              <Link to={e.node.fields.slug}>Find out more about the {e.node.frontmatter.title}</Link>
            </div>
          </div>
        ))
      ))}
      {agency && agency.metadata.typeofbody === 'nce' && (
        <div className="row border-top-width-1 border-light-grey padding-top-2 padding-bottom-2">
          <div className="col-sm-12">
            <Nce />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
