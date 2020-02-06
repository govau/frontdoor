import { Link } from 'gatsby';
// import AUheading from '@gov.au/headings';
// import axios from 'axios';
// import moment from 'moment';
import React from 'react';
import { ISearchResult } from './SearchField';


interface ISearchResultProps {
  panels: ISearchResult[];
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

const SearchResult: React.SFC<ISearchResultProps> = ({ data, panels }) => {
  return (
    <>
      {panels.map((p) => (
        data.allMarkdownRemark.edges.map((e) => (
          e.node.frontmatter.panel === p.metadata.panel &&
          <div key={e.node.fields.slug}>
            <p>
              Use the <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
            </p>
            {e.node.frontmatter.summary}
          </div>
        ))
      ))}
    </>
  );
};

export default SearchResult;
