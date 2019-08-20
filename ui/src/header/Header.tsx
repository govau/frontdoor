import React from 'react';
import AUheader, { AUheaderBrand } from '@gov.au/header';

const Header: React.FC = () => {
  return (
    <AUheader dark>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <AUheaderBrand
              title="Digital Sourcing Front Door"
              subline="Service sub-title that could be a little longer"
              link="#"
              brandImage="https://designsystem.gov.au/assets/img/placeholder/256x80.png"
              brandImageAlt="Insert alternate text here"
            />
          </div>
        </div>
      </div>
    </AUheader>
  )
}
export default Header