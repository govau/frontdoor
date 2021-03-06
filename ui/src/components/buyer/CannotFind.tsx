import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';

interface ICannotFindProps {
  viewProductsAndServicesClicked?: () => void;
}

const CannotFind: React.FC<ICannotFindProps> = ({ viewProductsAndServicesClicked }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <AUheading size="md" level="3">
            Can’t find what you're after?
          </AUheading>
        </div>
      </div>
      <div className="row margin-sm-top-1 margin-sm-bottom-1 margin-md-top-1">
        <div className="col-sm-6">
          <AUheading size="sm" level="3">
            Test the market
          </AUheading>
          <div className="margin-sm-top-05 margin-md-top-1">
            If you can't find what you need, ask sellers to help define your digital requirements.
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/ask-the-market" className="au-btn">Learn more</Link>
          </div>
        </div>
        <div className="col-sm-6 margin-sm-top-2">
          <AUheading size="sm" level="3">
            View full list of products and services
          </AUheading>
          <div className="margin-sm-top-05 margin-md-top-1">
            Can’t find the product or service you are after? You can view our list on our website.
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <AUbutton
              onClick={() => {
                if (viewProductsAndServicesClicked) {
                  viewProductsAndServicesClicked();
                }
              }}>
              View products and services
            </AUbutton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CannotFind;
