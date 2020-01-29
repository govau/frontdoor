import AUheader, { AUheaderBrand } from '@gov.au/header';
// import { Link } from 'gatsby';
import * as React from 'react';


interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = () => (
  <AUheader dark>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <AUheaderBrand
            title="Digital Sourcing for Government"
            subline="An initiative of the Digital Transformation Agency"
            brandImageAlt="Insert alternate text here"
          />
        </div>
      </div>
    </div>
  </AUheader>
);

export default Header;
