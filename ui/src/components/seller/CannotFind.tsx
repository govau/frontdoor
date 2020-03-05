import AUbutton from '@gov.au/buttons';
import AUheading from '@gov.au/headings';
import React from 'react';

interface ICannotFindProps {
  viewProductsAndServicesClicked?: () => void;
}

const CannotFind: React.FC<ICannotFindProps> = ({ viewProductsAndServicesClicked }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 text-align-center">
          <AUheading size="md" level="3">
            Can’t find the product or services you sell?
          </AUheading>
          <div className="margin-sm-top-1 margin-md-top-1">
            If you can’t find the product or service you offer, you can browse through a categorised list of government digital needs.
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <AUbutton
              onClick={() => {
                if (viewProductsAndServicesClicked) {
                  viewProductsAndServicesClicked();
                }
              }}>
              View digital products and services
            </AUbutton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CannotFind;
