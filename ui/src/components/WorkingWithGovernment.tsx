import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';

const WorkingWithGovernment: React.SFC = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <AUheading size="md" level="3">
            Guidance for working with government
          </AUheading>
        </div>
      </div>
      <div className="row margin-top-2">
        <div className="col-sm-12">
          <AUheading size="sm" level="3">
            Before you join a panel
          </AUheading>
          <div className="margin-top-1">
            <div className="margin-top-05"><Link to="#">[TODO]How to work with government through panels</Link></div>
            <div className="margin-top-05"><Link to="#">[TODO]List of DTA panels and portals</Link></div>
            <div className="margin-top-05"><Link to="#">[TODO]Preparing to join a panel</Link></div>
            <div className="margin-top-05"><Link to="#">[TODO]What are government priorities?</Link></div>
          </div>

          <div className="row margin-top-2">
            <div className="col-sm-12">
              <AUheading size="sm" level="3">
                Once you are on a panel
              </AUheading>
              <div className="margin-top-1">
                <div className="margin-top-05"><Link to="#">[TODO]Winning work with government</Link></div>
                <div className="margin-top-05"><Link to="#">[TODO]Current opportunities on the Digital Marketplace</Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingWithGovernment;
