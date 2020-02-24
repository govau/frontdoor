import { Link } from 'gatsby';
import * as React from 'react';

const hiddenCrumbs = [
  '/buyer',
  '/seller',
];

interface ICrumb {
  crumbLabel: string;
  pathname: string;
}

const getBreadCrumbItem = (crumbs: ICrumb[], data: {
  allMarkdownRemark: {
    nodes: [{
      frontmatter: {
        title: string,
      }
      fields: {
        slug: string,
      },
    }],
  },
},                         crumb: ICrumb, i: number) => {
  if (hiddenCrumbs.includes(crumb.pathname)) {
    return <></>;
  }
  const node = data.allMarkdownRemark.nodes.find((n) => n.fields.slug === `${crumb.pathname}/`);
  let result = crumb.crumbLabel;
  if (node) {
    result = node.frontmatter.title;
  }
  return <li>{i < crumbs.length - 1 ? <Link to={crumb.pathname}>{result}</Link> : result}</li>;
};

export const getSingleBreadCrumbItem = (name: string) => {
  return (
    <>
      <li><Link to="/">Home</Link></li>
      <li>{name}</li>
    </>
  );
};

export default getBreadCrumbItem;
