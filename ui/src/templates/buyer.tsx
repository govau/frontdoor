import { graphql } from 'gatsby';
import * as React from 'react';
import BuyerLayout from '../layouts/buyerLayout';

interface IBuyerTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string,
        },
      },
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string,
      },
    },
  };
}

const BuyerTemplate: React.FC<IBuyerTemplateProps> = ({ data }) => (
  <BuyerLayout>
    <div className="container">
      <div className="row background-white margin-sm-top-2 margin-sm-bottom-2 margin-md-top-1 margin-md-bottom-1">
        <div className="col-sm-12">
          <div className="padding-sm-top-2 padding-sm-bottom-2 padding-md-2">
            {/* eslint-disable-next-line react/no-danger */}
            <div className="margin-md-top-2" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </div>
        </div>
      </div>
    </div>
  </BuyerLayout>
);

export default BuyerTemplate;

export const query = graphql`
query BuyerTemplateQuery($slug: String!) {
  site {
    siteMetadata {
      title
      description
      author {
        name
        url
      }
    }
  }
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    excerpt
    frontmatter {
      title
    }
  }
}
`;
