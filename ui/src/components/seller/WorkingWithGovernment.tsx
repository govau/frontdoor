import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';

const WorkingWithGovernment: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <AUheading size="md" level="3">
            Guidance for working with government
          </AUheading>
        </div>
      </div>
      <div className="row margin-sm-top-1 margin-md-top-2">
        <div className="col-sm-12">
          <AUheading size="sm" level="3">
            Before you join a panel
          </AUheading>
          <div className="margin-sm-top-1 margin-md-top-1">
            <div className="margin-sm-top-1 margin-md-top-05">
              <a href="https://sellingtogov.finance.gov.au/guide" target="_blank" rel="external noreferrer">General advice on selling products and services to the Australian Government</a>
            </div>
            <div className="margin-sm-top-1 margin-md-top-05"><Link to="/seller/selling-through-the-dta">Selling digital products and services through the DTA</Link></div>
            <div className="margin-sm-top-1 margin-md-top-05"><Link to="/seller/contact-us">List of DTA panels and portals</Link></div>
            <div className="margin-sm-top-1 margin-md-top-05"><a href="https://ictprocurement.service-now.com/sp" target="_blank" rel="external noreferrer">Register to use the ICT Procurement Portal</a></div>
          </div>

          <div className="row margin-sm-top-3 margin-md-top-2">
            <div className="col-sm-12">
              <AUheading size="sm" level="3">
                Once you are on a panel
              </AUheading>
              <div className="margin-sm-top-2 margin-md-top-1">
                <div className="margin-sm-top-2 margin-md-top-05"><Link to="/seller/selling-through-the-dta#winning-work-with-government">Winning work with government</Link></div>
                <div className="margin-sm-top-1 margin-md-top-05"><a href="https://marketplace.service.gov.au/2/opportunities?status=live" target="_blank" rel="external noreferrer">Current opportunities on the Digital Marketplace</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingWithGovernment;
