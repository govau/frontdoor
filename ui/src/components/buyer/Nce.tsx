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
      <div className="row margin-sm-top-1 margin-md-top-1">
        <div className="col-sm-12">
          <AUheading size="sm" level="3">
            Contracting through whole of government arrangements
          </AUheading>
          <div className="margin-sm-top-05">
            If you choose a participating vendor after a formal approach-to-market process, you must use the relevant whole-of-government arrangement.
          </div>
          <div className="margin-sm-top-05">
            <Link to="/buyer/products-and-services/sourcing-arrangements">
              Find out more about whole-of-government arrangements
            </Link>
          </div>
        </div>
      </div>
      <div className="row margin-sm-top-1 margin-md-top-1">
        <div className="col-sm-12">
          <AUheading size="sm" level="3">
            Sourcing policies for DTA panels
          </AUheading>
          <div className="margin-sm-top-05">
            Non-corporate Commonwealth entities must comply with four mandatory policies when using DTA panels.
          </div>
          <div className="margin-sm-top-05">
            <Link to="/buyer/resources-and-policies#digital-policies">
              Find out more about sourcing policies
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nce;
