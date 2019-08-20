import React from 'react';
import AUfooter, { AUfooterNav, AUfooterEnd } from '@gov.au/footer';

const Footer: React.FC = () => {
  return (

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
  )
}
export default Footer