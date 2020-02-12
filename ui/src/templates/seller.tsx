import AUheading from '@gov.au/headings';
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
    <div className="au-grid">
      <div className="container margin-top-3 margin-bottom-3">
        <div className="row margin-top-1">
          <div className="col-sm-12">
            <div className=" background-white padding-2">
              <AUheading size="xl" level="1">{data.markdownRemark.frontmatter.title}</AUheading>
              {/* eslint-disable-next-line react/no-danger */}
              <div className="margin-top-2" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>
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
