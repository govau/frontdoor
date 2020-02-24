import { graphql } from 'gatsby';
import * as React from 'react';
import SellerLayout from '../layouts/sellerLayout';
import getBreadCrumbItem from '../utils/BreadCrumb';

interface ISellerTemplateProps {
  pageContext: {
    breadcrumb: {
      crumbs: [{
        crumbLabel: string,
        pathname: string,
      }],
    },
  };
  data: {
    allMarkdownRemark: {
      nodes: [{
        frontmatter: {
          title: string,
        }
        fields: {
          slug: string,
        },
      }],
    }
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

const SellerTemplate: React.FC<ISellerTemplateProps> = ({ data, pageContext }) => {

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <SellerLayout>
      <div className="container">
        <div className="row margin-sm-top-2 margin-md-top-1">
          <div className="col-sm-12">
            <nav className="au-breadcrumbs" aria-label="breadcrumb">
              <ul className="au-link-list au-link-list--inline">
                {crumbs.map((c, i) => getBreadCrumbItem(crumbs, data, c, i))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="row background-white margin-sm-top-2 margin-sm-bottom-2 margin-md-top-1 margin-md-bottom-1">
          <div className="col-sm-12">
            <div className="padding-sm-top-2 padding-sm-bottom-2 padding-md-2">
              {/* eslint-disable-next-line react/no-danger */}
              <div className="margin-md-top-2" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            </div>
          </div>
        </div>
      </div>
    </SellerLayout>
  );
};

export default SellerTemplate;

export const query = graphql`
query SellerTemplateQuery($slug: String!) {
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
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
