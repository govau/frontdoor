import { Link } from 'gatsby';
import React from 'react';
import FeedbackButton from './FeedbackButton';


interface IFooterProps {
  hideFeedback?: boolean;
}

const Footer: React.FC<IFooterProps> = ({ hideFeedback }) => (
  <>
    {!hideFeedback && (
      <div className="background-light-grey">
        <div className="container">
          <div className="row">
            <div className="col-sm-12" id="footer-feedback">
              <FeedbackButton />
            </div>
          </div>
        </div>
      </div>
    )}
    <footer className="au-footer au-footer--dark au-body au-body--dark" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <a href="https://dta.gov.au">
              <img className="au-responsive-media-img dta-image" src="/dta-wordmark-white.png" alt="DTA website" />
            </a>
          </div>
          <div className="col-sm-10">
            <div className="row">
              <div className="col-xs-12 col-sm-2 max-width-6"><Link to="/accessibility">Accessibility</Link></div>
              <div className="col-xs-12 col-sm-2 max-width-4"><Link to="/privacy">Privacy</Link></div>
              <div className="col-xs-12 col-sm-4"><Link to="/disclaimer-and-copyright">Disclaimer and copyright</Link></div>
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
  </>
);

export default Footer;
