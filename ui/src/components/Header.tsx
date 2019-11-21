import AUheader, { AUheaderBrand } from '@gov.au/header';
import AUmainNav, { AUmainNavContent } from '@gov.au/main-nav';
// import { Link } from 'gatsby';
import * as React from 'react';


interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = () => (
  <>
    <AUheader dark>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AUheaderBrand
              title="Digital Sourcing Front Door"
              subline="Service sub-title that could be a little longer"
              link="/"
              brandImage="https://designsystem.gov.au/assets/img/placeholder/256x80.png"
              brandImageAlt="Insert alternate text here"
            />
          </div>
        </div>
      </div>
    </AUheader>
    <AUmainNav dark>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <AUmainNavContent items={[
              {
                active: 'true',
                link: '/',
                text: 'Home',
              },
              {
                link: '/buyer',
                text: 'Buyer',
              },
              {
                link: '/seller',
                text: 'Sellers',
              },
              {
                link: '/about',
                text: 'About',
              },
              {
                link: '/users',
                text: 'Users',
              },
            ]} />
          </div>
        </div>
      </div>
    </AUmainNav>
  </>
);

export default Header;
