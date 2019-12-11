import AUfooter, { AUfooterEnd, AUfooterNav } from '@gov.au/footer';
import React from 'react';

export default () => (
  <AUfooter dark>
    <div className="container">
      <div className="row">
        <AUfooterNav>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h3 className="au-display-lg">Section</h3>
              <ul className="au-link-list">
                <li><a href="https://marketplace.gov.au">Link 1</a></li>
              </ul>
            </div>
          </div>
        </AUfooterNav>
        <div className="row">
          <div className="col-sm-12">
            <AUfooterEnd>
              <p>Footer text</p>
              {/* <img className="au-responsive-media-img" alt="Brand" /> */}
              {/* <p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/design-system-components/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p> */}
            </AUfooterEnd>
          </div>
        </div>
      </div>
    </div>
  </AUfooter>
);
