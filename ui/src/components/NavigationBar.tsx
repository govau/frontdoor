//import AUmainNav, { AUmainNavContent } from '@gov.au/main-nav';
import { Link } from 'gatsby';
import * as React from 'react';


interface INavigationBarProps {
  title?: string;
}

const NavigationBar: React.FC<INavigationBarProps> = () => (
  <nav className="au-main-nav" aria-label="main">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="main-nav-default" className="au-main-nav__content">
            <button
              aria-controls="main-nav-default"
              aria-expanded="false"
              className="au-main-nav__toggle au-main-nav__toggle--open"
              onClick="return AU.mainNav.Toggle( this )">
                Menu
            </button>
            <div className="au-main-nav__menu">
              <div className="au-main-nav__menu-inner">
                <div className="au-main-nav__focus-trap-top"></div>
                <button
                  aria-controls="main-nav-default"
                  className="au-main-nav__toggle au-main-nav__toggle--close"
                  onClick="return AU.mainNav.Toggle( this )">
                    Close
                </button>
                <ul className="au-link-list">
                  <li>
                    <a href="#">About</a>
                    <Link to="/" activeClassName="active">Home</Link>
                  </li>
                  <li>
                    <Link to="/buyer" activeClassName="active">Buyer</Link>
                  </li>
                  <li>
                    <Link to="/seller" activeClassName="active">Seller</Link>
                  </li>
                  <li>
                    <Link to="/news" activeClassName="active">News</Link>
                  </li>
                  <li>
                    <Link to="/Events" activeClassName="active">events</Link>
                  </li>
                </ul>
                <div className="au-main-nav__focus-trap-bottom"></div>
              </div>
            </div>
            <div
              className="au-main-nav__overlay"
              aria-controls="main-nav-default"
              onClick="return AU.mainNav.Toggle( this )">
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  // <AUmainNav dark>
  //   <div className="container">
  //     <div className="row">
  //       <div className="col-md-12">
  //         <AUmainNavContent items={[
  //           {
  //             active: 'true',
  //             link: '/',
  //             text: 'Home',
  //           },
  //           {
  //             link: '/buyer',
  //             text: 'Buyer',
  //           },
  //           {
  //             link: '/seller',
  //             text: 'Sellers',
  //           },
  //           {
  //             link: '/news',
  //             text: 'News',
  //           },
  //           {
  //             link: '/events',
  //             text: 'Events',
  //           },
  //         ]} />
  //       </div>
  //     </div>
  //   </div>
  // </AUmainNav>
);

export default NavigationBar;
