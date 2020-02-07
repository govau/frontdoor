// /import { graphql } from 'gatsby';
import React from 'react';
import BuyerSearch from '../components/BuyerSearch';
import Events from '../components/Events';
// import { ISearchResult } from '../components/SearchField';
import DefaultLayout from '../layouts/defaultLayout';

// interface IBuyerPageProps {
//   data: {
//     allMarkdownRemark: {
//       edges: [
//         {
//           node: {
//             frontmatter: {
//               title: string,
//               layout: string,
//               summary: string,
//               panel: string,
//             },
//             fields: {
//               slug: string,
//             },
//           },
//         },
//       ],
//     },
//   };
// }

const BuyerPage: React.SFC  = () => {
  return (
    <DefaultLayout>
      <div className="row">
        <div className="col-sm-12">
          <BuyerSearch />
        </div>
      </div>
      <div className="row margin-top-1">
        <div className="col-sm-6 background-white border-width-1 border-light-grey">
          <Events />
        </div>
      </div>
      {/* {data.allMarkdownRemark.edges.map((e) => (
        <p key={e.node.fields.slug}>
          <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
        </p>
      ))} */}
    </DefaultLayout>
  );
};

export default BuyerPage;

// export const query = graphql`
// {
//   allMarkdownRemark(filter: {fields: {slug: {regex: "/buyer/products-and-services/"}}}) {
//     edges {
//       node {
//         frontmatter {
//           title
//           layout
//           panel
//           summary
//         }
//         fields {
//           slug
//         }
//       }
//     }
//   }
// }
// `;
