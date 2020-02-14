import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';


interface INavigationBarProps {
  title?: string;
}

const NavigationBar: React.FC<INavigationBarProps> = () => {
  const buyLinkRef = useRef(null);
  const buyerLinkRef = useRef(null);
  const sellerLinkRef = useRef(null);
  const newsLinkRef = useRef(null);
  const feedbackLinkRef = useRef(null);

  useEffect(() => {
    const updateParent = (ref: any) => {
      if (ref && ref.current) {
        if (ref.current.className === 'active') {
          ref.current.parentElement.className = 'active';
        }
      }
    };
    updateParent(buyLinkRef);
    updateParent(buyerLinkRef);
    updateParent(sellerLinkRef);
    updateParent(newsLinkRef);
    updateParent(feedbackLinkRef);
  });

  return (
    <nav className="au-main-nav au-main-nav--dark" aria-label="main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="main-nav-default" className="au-main-nav__content">
              {/* <button
                aria-controls="main-nav-default"
                aria-expanded="false"
                className="au-main-nav__toggle au-main-nav__toggle--open"
                onClick="return AU.mainNav.Toggle( this )">
                  Menu
              </button> */}
              <div className="au-main-nav__menu">
                <div className="au-main-nav__menu-inner">
                  <div className="au-main-nav__focus-trap-top"></div>
                  {/* <button
                    aria-controls="main-nav-default"
                    className="au-main-nav__toggle au-main-nav__toggle--close"
                    onClick="return AU.mainNav.Toggle( this )">
                      Close
                  </button> */}
                  <ul className="au-link-list">
                    <li>
                      <Link to="/buyer/products-and-services" ref={buyLinkRef} activeClassName="active" partiallyActive={true}>Buy products and services</Link>
                    </li>
                    <li>
                      <Link to="/buyer/sourcing-resources-and-policies" ref={buyerLinkRef} activeClassName="active" partiallyActive={true}>Sourcing resources and policies</Link>
                    </li>
                    <li>
                      <Link to="/buyer/sourcing-capability-and-community" ref={sellerLinkRef} activeClassName="active" partiallyActive={true}>Sourcing capability and community</Link>
                    </li>
                    <li>
                      <Link to="/buyer/contact-us" ref={newsLinkRef} activeClassName="active" partiallyActive={true}>Contact us</Link>
                    </li>
                    <li>
                      <Link to="/buyer/feedback" ref={feedbackLinkRef} activeClassName="active" partiallyActive={true}>Feedback</Link>
                    </li>
                  </ul>
                  <div className="au-main-nav__focus-trap-bottom"></div>
                </div>
              </div>
              {/* <div
                className="au-main-nav__overlay"
                aria-controls="main-nav-default"
                onClick="return AU.mainNav.Toggle( this )">
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
