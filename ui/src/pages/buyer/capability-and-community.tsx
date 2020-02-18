import AUheading from '@gov.au/headings';
import React from 'react';
import Events from '../../components/Events';
import BuyerLayout from '../../layouts/buyerLayout';

const CapabilityAndCommunityPage: React.FC = () => {
  return (
    <BuyerLayout>
      <div className="container">
        <div className="row background-white margin-sm-top-1 margin-md-top-1">
          <div className="col-sm-12">
            <div className="padding-sm-top-2 padding-sm-bottom-2 padding-md-2">
              <div className="row">
                <div className="col-sm-12 padding-md-top-2">
                  <AUheading size="xxl" level="1">Capability and community</AUheading>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-12">
                  <AUheading size="lg" level="2">Digital Sourcing Network</AUheading>
                  <p>The Digital Sourcing Network (DSN) helps practitioners obtain information, form connections with the sourcing community, and discover new tools and resources.</p>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-12">
                  <nav className="au-inpage-nav-links" aria-label="in page navigation">
                    <h2 className="au-inpage-nav-links__heading">On this page:</h2>
                    <ul className="au-link-list">
                      <li><a href="#section1">What can you buy from the Digital Marketplace?</a></li>
                      <li><a href="#section2">Who can use this panel?</a></li>
                      <li><a href="#section3">Register or log in to source digital services</a></li>
                      <li><a href="#section4">Contact the team</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <AUheading size="lg" level="2">Events</AUheading>
                  <p>The DSN presents speaker, panel and roundtable events relevant to the digital sourcing community. Topics include:</p>
                  <ul>
                    <li>engaging with industry</li>
                    <li>complying with policies and guidelines</li>
                    <li>managing contracts</li>
                    <li>writing and evaluating briefs</li>
                    <li>using DTA panels, marketplaces and whole-of-government arrangements</li>
                  </ul>
                  <p>
                    Events are promoted on our Eventbrite page, social media and the Department of Finance Procurement Bulletin. Email us to join our mailing list and receive direct updates.
                    </p>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-12">
                  <AUheading size="lg" level="2">What's on</AUheading>
                  <Events />
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-6">
                  <AUheading size="lg" level="2">Common Interest Groups</AUheading>
                  <p>Common Interest Groups (CIGs) create networks of practitioners across the Australian Public Service who have shared experiences and want to exchange knowledge and resources around specific sourcing topics. CIGs comprise an online forum supported by informational and networking events.</p>
                  <p>Register</p>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-6">
                  <AUheading size="lg" level="2">Sourcing professionalisation</AUheading>
                  <p>
                    We aim to promote digital sourcing career development and build a clear career path from entry to advancement. We'll do this by identifying key capabilities and supporting the Australian Public Service (APS) to attract, develop and retain high performing staff. This work includes programs to uplift leader capability to drive digital sourcing transformation in their organisations.
                    </p>
                  <p>
                    <a href="mailto:#">[TODO]Email us</a> for more details on all programs or to be added to Digital Sourcing Network mailing list for updates.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BuyerLayout>
  );
};

export default CapabilityAndCommunityPage;
