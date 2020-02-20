import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';

const KeyLink: React.FC = () => {
  return (
    <div className="padding-md-1">
      <div className="row">
        <div className="col-sm-12 margin-sm-bottom-1 margin-md-bottom-1">
          <AUheading size="md" level="2">Key Links</AUheading>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div>You need to buy:</div>
          <div className="margin-sm-top-1 margin-md-top-05">
            <Link to="#">[TODO]Cloud services</Link>
            <span className="text-colour-grey"> (software as a service, customer relationship management, development tools)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Data centres</Link>
            <span className="text-colour-grey"> (data centres and facilities, ICT floorspace)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Digital services</Link>
            <span className="text-colour-grey"> (contractors, consultants, advisory services)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Hardware</Link>
            <span className="text-colour-grey"> (desktops, laptops, storage, network equipment)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Mobile</Link>
            <span className="text-colour-grey"> (mobile handsets, bulk SMS, phone accessories, SIM plans)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Software</Link>
            <span className="text-colour-grey"> (enterprise software, development tools, associated services)</span>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Telecommunications</Link>
            <span className="text-colour-grey"> (internet connections, data carriage, satellite and managed networks)</span>
          </div>
          <div className="margin-sm-top-2 margin-md-top-2">View list of:</div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Digital products and services</Link>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]DTA panels and portals</Link>
          </div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Whole-of-government arrangements</Link>
          </div>
          <div className="margin-sm-top-2 margin-md-top-2">Can't find what you need?</div>
          <div className="margin-sm-top-1 margin-md-top-1">
            <Link to="#">[TODO]Ask sellers to help define your digital requirements</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyLink;
