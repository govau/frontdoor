import React from 'react';

export default () => (
  <footer className="au-body au-body--dark au-grid au-footer au-footer--dark" role="contentinfo">
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <a href="https://dta.gov.au">
            <img className="au-responsive-media-img dta-image" src="/dta-wordmark-white.png" alt="DTA website" />
          </a>
        </div>
        <div className="col-sm-10">
          <div className="row">
            <div className="col-sm-12">
              <ul className="au-link-list au-link-list--inline">
                <li><a href="#">[TODO]Contact us</a></li>
                <li><a href="#">[TODO]Accessibility</a></li>
                <li><a href="#">[TODO]Cookies</a></li>
                <li><a href="#">[TODO]Privacy</a></li>
                <li><a href="#">[TODO]Disclaimer and copyright</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 au-footer__end">
              <p>&copy; Commonwealth of Australia. With the exception of the Commonwealth Coat of Arms and where otherwise noted, this work is licensed under the CC BY 4.0 license.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
