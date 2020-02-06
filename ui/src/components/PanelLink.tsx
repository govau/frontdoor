import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';


interface IPanelLinkProps {
  panelName: string;
  panelSummary: string;
}

const PanelLink: React.FC<IPanelLinkProps> = ({panelName, panelSummary}) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-8">
          BADGE
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <AUheading size="md" level="1">
            Use the <Link to="">{panelName}</Link>
          </AUheading>
          <p>{panelSummary}</p>
        </div>
        <div className="col-sm-4">
          <Link to="">Find out more about the {panelName}</Link>
        </div>
      </div>
    </>
  );
};

export default PanelLink;
