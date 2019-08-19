import React from 'react';
import AUheader, { AUheaderBrand } from '@gov.au/header';
import AUfooter, { AUfooterNav, AUfooterEnd } from '@gov.au/footer';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="au-body au-body--dark">
      <AUheader dark>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <AUheaderBrand
                title="Front Door"
                subline="Service sub-title that could be a little longer"
                link="#"
                brandImage="https://designsystem.gov.au/assets/img/placeholder/256x80.png"
                brandImageAlt="Insert alternate text here"
              />
            </div>
          </div>
        </div>
      </AUheader>
      <AUfooter>
        <div className="container">
          <AUfooterNav>
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <h3 className="au-display-lg">Section</h3>
                <ul className="au-link-list">
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6">
                <h3 className="au-display-lg">Section</h3>
                <ul className="au-link-list">
                  <li><a href="#">Link 1</a></li>
                  <li><a href="#">Link 2</a></li>
                  <li><a href="#">Link 3</a></li>
                </ul>
              </div>
            </div>
          </AUfooterNav>
          <div className="row">
            <div className="col-sm-12">
              <AUfooterEnd>
                <p>Footer text</p>
                <img className="au-responsive-media-img" src="https://designsystem.gov.au/assets/img/placeholder/157x80.png" alt="Brand image" />
                <p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/design-system-components/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>
              </AUfooterEnd>
            </div>
          </div>
        </div>
      </AUfooter>
    </div>
  );
}

export default App;
