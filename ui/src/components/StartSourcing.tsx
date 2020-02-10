import AUheading from '@gov.au/headings';
import { Link} from 'gatsby';
import React from 'react';

const StartSourcing: React.SFC = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 margin-bottom-1">
          <AUheading size="md" level="2">Start sourcing through DTA portals</AUheading>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <Link to="#" className="margin-right-2">[TODO]Digital Marketplace</Link>
          <Link to="#" className="margin-right-2">[TODO]ICT Procurement Portal</Link>
          <Link to="#">[TODO]List of DTA panels and portals</Link>
        </div>
      </div>
    </>
  );
};

export default StartSourcing;
