import AUheading from '@gov.au/headings';
import { Link } from 'gatsby';
import React from 'react';

const Nce: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          As a non-corporate Commonwealth entity, you should also be aware of:
        </div>
      </div>
      <div className="row margin-top-1">
        <div className="col-sm-12">
          <AUheading size="sm" level="3">
            Contracting through whole of government arrangements
          </AUheading>
          If you choose a participating vendor after a formal approach-to-market process, you must use the relevant whole-of-government arrangement.
          <br/>
          <Link to="#">
            [TODO]Find out more about whole-of-government arrangements
          </Link>
        </div>
      </div>
      <div className="row margin-top-1">
        <div className="col-sm-12">
          <AUheading size="sm" level="3">
            Sourcing policies for DTA panels
          </AUheading>
            Non-corporate Commonwealth entities must comply with four mandatory policies when using DTA panels.
          <br/>
          <Link to="#">
            [TODO]Find out more about sourcing policies
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nce;
