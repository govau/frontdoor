import { Link } from 'gatsby';
import * as React from 'react';

interface IHeaderProps {
  title: string;
}

const Header: React.FC<IHeaderProps> = () => (
  <header className="au-header au-header--dark" role="banner">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Link className="au-header__brand" to="/">
            <img className="au-header__brand-image" alt="The Australian Government coat of Arms" src="/header-logo-agov.png" />
            <div className="au-header__text">
              <h1 className="au-header__heading">Digital Sourcing for Government</h1>
              <div className="au-header__subline">
                Initiative of the <span className="hide-md">DTA</span><span className="hide-sm">Digital Transformation Agency</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
