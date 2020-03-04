import { graphql, Link } from 'gatsby';
import * as React from 'react';
import BuyerLayout from '../layouts/buyerLayout';
import getBreadCrumbItem from '../utils/BreadCrumb';

interface IResourceAndPolicyTemplateProps {
  pageContext: {
    breadcrumb: {
      crumbs: [{
        crumbLabel: string,
        pathname: string,
      }],
    },
  };
  location: {
    pathname: string,
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

const ResourceAndPolicyTemplate: React.FC<IResourceAndPolicyTemplateProps> = ({ data, pageContext, location }) => {

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const getActiveClassName = (slug: string): string => {
    if (location.pathname.indexOf(slug) > 0) {
      return 'font-weight-8';
    }
    return '';
  };

  return (
    <BuyerLayout>
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
              <div className="row">
                <div className="col-sm-4">
                  <aside className="au-side-nav au-accordion margin-sm-bottom-2" aria-label="side navigation">
                    <div id="nav-default" className="au-side-nav__content au-accordion--closed au-accordion__body">
                      <h2 className="au-sidenav__title"><Link to="/buyer/resources-and-policies/early-market-research">Early market research</Link></h2>
                      <ul className="au-link-list">
                        <li><Link to="/buyer/resources-and-policies/early-market-research" className={getActiveClassName('/early-market-research')}>What is early market research?</Link></li>
                        <li><Link to="/buyer/resources-and-policies/why-do-early-market-research" className={getActiveClassName('/why-do-early-market-research')}>Why do early market research</Link></li>
                        <li><Link to="/buyer/resources-and-policies/planning-and-preparation" className={getActiveClassName('/planning-and-preparation')}>Planning and preparation</Link></li>
                        <li><Link to="/buyer/resources-and-policies/engage-with-sellers" className={getActiveClassName('/engage-with-sellers')}>Engaging with sellers</Link></li>
                        <li><Link to="/buyer/resources-and-policies/consider-risk" className={getActiveClassName('/consider-risk')}>Consider risk</Link></li>
                        <li><Link to="/buyer/resources-and-policies/consider-probity" className={getActiveClassName('/consider-probity')}>Consider probity</Link>
                          <ul className="au-link-list">
                            <li><Link to="/buyer/resources-and-policies/common-probity-concerns" className={getActiveClassName('/common-probity-concerns')}>Common probity concerns</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/buyer/resources-and-policies/other-considerations" className={getActiveClassName('/other-considerations')}>Other considerations</Link></li>
                        <li><Link to="/buyer/resources-and-policies/tips-for-success" className={getActiveClassName('/tips-for-success')}>Tips for success</Link></li>
                      </ul>
                    </div>
                  </aside>
                </div>
                <div className="col-sm-8">
                  {/* eslint-disable-next-line react/no-danger */}
                  <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BuyerLayout >
  );
};

export default ResourceAndPolicyTemplate;

export const query = graphql`
  query ResourceAndPolicyQuery($slug: String!) {
    allMarkdownRemark(filter: {fields: {slug: {eq: $slug}}}) {
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
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
