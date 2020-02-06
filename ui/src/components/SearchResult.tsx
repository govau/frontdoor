import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';
import { ISearchResult } from './SearchField';


interface ISearchResultProps {
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

const SearchResult: React.SFC<ISearchResultProps> = ({ data, panels, product }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          <AUheading size="lg" level="2">{product && product.text}</AUheading>
          {product && product.metadata.summary}
        </div>
      </div>
      {panels.map((p) => (
        data.allMarkdownRemark.edges.map((e) => (
          e.node.frontmatter.panel === p.metadata.panel &&
          <div key={e.node.fields.slug} className="row border-top-width-1 border-dark-grey">
            <div className="col-sm-8">
              {p.metadata.mandatory ? 'Mandatory' : 'Optional'}
              <AUheading size="md" level="2">
                Use the <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
              </AUheading>
              {e.node.frontmatter.summary}
            </div>
            <div className="col-sm-4">
              <Link to={e.node.fields.slug}>Find out more about the {e.node.frontmatter.title}</Link>
            </div>
          </div>
        ))
      ))}
    </>
  );
};

export default SearchResult;
