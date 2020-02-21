import AUheading from '@gov.au/headings';
import { Link} from 'gatsby';
import React from 'react';

const StartSourcing: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 margin-md-bottom-1">
          <AUheading size="md" level="2">Start sourcing through DTA portals</AUheading>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-2">
          <div className="float-left"><Link to="/buyer/products-and-services/digital-marketplace/" className="margin-sm-right-2 margin-md-right-2">Digital Marketplace</Link></div>
        </div>
        <div className="col-xs-12 col-sm-3">
          <div className="float-left"><Link to="#" className="margin-sm-right-2 margin-md-right-2">[TODO]ICT Procurement Portal</Link></div>
        </div>
        <div className="col-xs-12 col-sm-3">
          <div className="float-left"><Link to="/buyer/contact-us">List of DTA panels and portals</Link></div>
        </div>
      </div>
    </>
  );
};

export default StartSourcing;
