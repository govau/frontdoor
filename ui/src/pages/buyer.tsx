import { graphql, Link } from 'gatsby';
import React, {useState} from 'react';
import BuyerSearch from '../components/BuyerSearch';
import Events from '../components/Events';
import { ISearchResult } from '../components/SearchField';
import SearchResult from '../components/SearchResult';
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

const BuyerPage: React.SFC<IBuyerPageProps>  = ({ data }) => {
  const [searchResult, setSearchResult] = useState<{product: ISearchResult, panels: Array<ISearchResult>}|null>(null);

  return (
    <DefaultLayout>
      <div className="row background-light-grey">
        <div className="col-sm-12">
          <BuyerSearch itemSelectedFunc={(product, panels) => {
            setSearchResult({
              product,
              panels
            })
          }} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          {searchResult && <SearchResult data={data} panels={searchResult.panels} product={searchResult.product} />}
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Events />
        </div>
      </div>
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
`;
