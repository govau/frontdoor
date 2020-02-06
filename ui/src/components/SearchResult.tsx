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
    <div className="margin-1">
      <div className="row padding-2">
        <div className="col-sm-12 text-align-center">
          <AUheading size="lg" level="2">{product && product.text}</AUheading>
          {product && product.metadata.summary}
        </div>
      </div>
      {panels.map((p) => (
        data.allMarkdownRemark.edges.map((e) => (
          e.node.frontmatter.panel === p.metadata.panel &&
          <div key={e.node.fields.slug} className="row border-top-width-1 border-light-grey padding-1">
            <div className="col-sm-8">
              <p>
                {p.metadata.mandatory ? 'Mandatory' : 'Optional'}
              </p>
              <p>
                <AUheading size="md" level="2">
                  Use the <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
                </AUheading>
              </p>
              <p>
                {e.node.frontmatter.summary}
              </p>
            </div>
            <div className="col-sm-4 text-align-right">
              <Link to={e.node.fields.slug}>Find out more about the {e.node.frontmatter.title}</Link>
            </div>
          </div>
        ))
      ))}
    </div>
  );
};

export default SearchResult;
