import AUmainNav, { AUmainNavContent } from '@gov.au/main-nav';
// import { Link } from 'gatsby';
import * as React from 'react';


interface INavigationBarProps {
  title: string;
}

const NavigationBar: React.FC<INavigationBarProps> = () => (
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
              link: '/news',
              text: 'News',
            },
            {
              link: '/events',
              text: 'Events',
            },
          ]} />
        </div>
      </div>
    </div>
  </AUmainNav>
);

export default NavigationBar;
