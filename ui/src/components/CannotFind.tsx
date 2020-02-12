import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';

const CannotFind: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <AUheading size="md" level="3">
            Can’t find what you're after?
          </AUheading>
        </div>
      </div>
      <div className="row margin-top-1">
        <div className="col-sm-6">
          <AUheading size="sm" level="3">
            Text the market
          </AUheading>
          <div className="margin-top-1">
            If you can't find what you need, ask sellers to help define your digital requirements.
          </div>
          <div className="margin-top-1">
            <Link to="/buyer/products-and-services/ask-the-market" className="au-btn">Learn more</Link>
          </div>
        </div>
        <div className="col-sm-6">
          <AUheading size="sm" level="3">
            View full list of products and services
          </AUheading>
          <div className="margin-top-1">
            Can’t find the product or service you are after? You can view our list on our website.
          </div>
          <div className="margin-top-1">
            <Link to="#" className="au-btn">[TODO]View products and services</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CannotFind;
