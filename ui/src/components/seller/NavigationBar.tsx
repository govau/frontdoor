import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';


interface INavigationBarProps {
  id?: string;
}

const NavigationBar: React.FC<INavigationBarProps> = ({id}) => {
  const productsAndServicesLinkRef = useRef(null);
  const workingWithGovernmentLinkRef = useRef(null);
  const contactUsLinkRef = useRef(null);

  useEffect(() => {
    const updateParent = (ref: any) => {
      if (ref && ref.current) {
        if (ref.current.className === 'active') {
          ref.current.parentElement.className = 'active';
        }
      }
    };
    updateParent(productsAndServicesLinkRef);
    updateParent(workingWithGovernmentLinkRef);
    updateParent(contactUsLinkRef);
  });

  return (
    <nav id={id} className="au-main-nav au-main-nav--dark" aria-label="main">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="main-nav-default" className="au-main-nav__content">
              <div className="au-main-nav__menu">
                <div className="au-main-nav__menu-inner">
                  <div className="au-main-nav__focus-trap-top"></div>
                  <ul className="au-link-list">
                    <li>
                      <Link to="/seller/products-and-services" ref={productsAndServicesLinkRef} activeClassName="active" partiallyActive={true}>Sell products and services</Link>
                    </li>
                    <li>
                      <Link to="/seller/working-with-government" ref={workingWithGovernmentLinkRef} activeClassName="active" partiallyActive={true}>Working with government</Link>
                    </li>
                    <li>
                      <Link to="/seller/contact-us" ref={contactUsLinkRef} activeClassName="active" partiallyActive={true}>Contact us</Link>
                    </li>
                  </ul>
                  <div className="au-main-nav__focus-trap-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
