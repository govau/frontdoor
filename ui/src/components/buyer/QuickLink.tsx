import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';

const QuickLink: React.FC = () => {
  return (
    <div className="padding-md-1">
      <div className="row">
        <div className="col-sm-12 margin-sm-bottom-1 margin-md-bottom-1">
          <AUheading size="md" level="2">Quick links</AUheading>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div>What do you need to buy?</div>
          <div className="margin-sm-top-1 margin-md-top-05">
            <Link to="/buyer/products-and-services/cloud">Cloud Marketplace</Link>
            <span className="text-colour-grey"> (software as a service, customer relationship management, development tools)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/data-centres">Data Centre Facilities Supplies Panel</Link>
            <span className="text-colour-grey"> (data centres and facilities, ICT floorspace)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/digital-marketplace">Digital Marketplace</Link>
            <span className="text-colour-grey"> (contractors, consultants, advisory services)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/hardware">Hardware Marketplace</Link>
            <span className="text-colour-grey"> (desktops, laptops, storage, network equipment)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/mobile">Mobile Panel</Link>
            <span className="text-colour-grey"> (mobile handsets, bulk SMS, phone accessories, SIM plans)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/software">Software Marketplace</Link>
            <span className="text-colour-grey"> (enterprise software, development tools, associated services)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/telecommunications">Telecommunications Marketplace</Link>
            <span className="text-colour-grey"> (internet connections, data carriage, satellite and managed networks)</span>
          </div>
          <div className="margin-sm-top-2 margin-md-top-2">View list of:</div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/contact-us">DTA panels and marketplaces</Link>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/sourcing-arrangements">Whole-of-government arrangements</Link>
          </div>
          <div className="margin-sm-top-2 margin-md-top-2">Can't find what you need?</div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="/buyer/products-and-services/ask-the-market">Ask sellers to help define your digital requirements</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLink;
