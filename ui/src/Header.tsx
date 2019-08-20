import React from 'react';
import AUheader, { AUheaderBrand } from '@gov.au/header';

export default () => (
  <AUheader dark>
    <div className="col-xs-offset-3">
      <AUheaderBrand
        title="Digital Sourcing Front Door"
        subline="Service sub-title that could be a little longer"
        link="#"
        brandImage="https://designsystem.gov.au/assets/img/placeholder/256x80.png"
        brandImageAlt="Insert alternate text here"
      />
    </div>
  </AUheader>
)