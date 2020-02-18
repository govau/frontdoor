import { graphql } from 'gatsby';
import * as React from 'react';
import SellerLayout from '../layouts/sellerLayout';

interface ISellerTemplateProps {
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

const SellerTemplate: React.FC<ISellerTemplateProps> = ({ data }) => (
  <SellerLayout>
    <div className="container">
      <div className="row margin-md-top-1">
        <div className="col-sm-12">
          <div className=" background-white padding-md-2">
            {/* eslint-disable-next-line react/no-danger */}
            <div className="margin-md-top-2" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </div>
        </div>
      </div>
    </div>
  </SellerLayout>
);

export default SellerTemplate;

export const query = graphql`
query SellerTemplateQuery($slug: String!) {
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
