import AUheading from '@gov.au/headings';
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
        <div className="col-xs-12 col-sm-3">
          <div className="float-left"><a href="https://marketplace.service.gov.au" target="_blank" rel="external noreferrer" className="margin-sm-right-2 margin-md-right-2">Digital Marketplace</a></div>
        </div>
        <div className="col-xs-12 col-sm-3">
          <div className="float-left"><a href="https://ictprocurement.service-now.com/" target="_blank" rel="external noreferrer" className="margin-sm-right-2 margin-md-right-2">ICT Procurement Portal</a></div>
        </div>
      </div>
    </>
  );
};

export default StartSourcing;
