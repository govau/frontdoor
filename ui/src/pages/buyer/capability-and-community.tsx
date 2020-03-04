import AUheading from '@gov.au/headings';
import React from 'react';
import Events from '../../components/Events';
import BuyerLayout from '../../layouts/buyerLayout';
import { getSingleBreadCrumbItem } from '../../utils/BreadCrumb';

const CapabilityAndCommunityPage: React.FC = () => {
  return (
    <BuyerLayout>
      <div className="container">
        <div className="row margin-sm-top-2 margin-md-top-1">
          <div className="col-sm-12">
            <nav className="au-breadcrumbs" aria-label="breadcrumb">
              <ul className="au-link-list au-link-list--inline">
                {getSingleBreadCrumbItem('Capability and community')}
              </ul>
            </nav>
          </div>
        </div>
        <div className="row background-white margin-sm-top-2 margin-sm-bottom-2 margin-md-top-1">
          <div className="col-sm-12">
            <div className="padding-sm-top-2 padding-sm-bottom-2 padding-md-2">
              <div className="row">
                <div className="col-sm-12 padding-md-top-2">
                  <AUheading size="xxl" level="1">Capability and community through the Digital Sourcing Network</AUheading>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-12">
                  <AUheading size="lg" level="2">Digital Sourcing Network</AUheading>
                  <p>The Digital Sourcing Network (DSN) helps digital sourcing practitioners obtain information, form connections with the sourcing community, and discover new tools and resources.</p>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-12">
                  <nav className="au-inpage-nav-links" aria-label="in page navigation">
                    <h2 className="au-inpage-nav-links__heading">On this page:</h2>
                    <ul className="au-link-list">
                      <li><a href="#events">Events</a></li>
                      <li><a href="#working-groups">Working Groups</a></li>
                      <li><a href="#common-interest-groups">Common Interest Groups</a></li>
                      <li><a href="#sourcing-professionalisation">Sourcing professionalisation</a></li>
                      <li><a href="#contact-us">Contact us</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <AUheading size="lg" level="2" id="events">Events</AUheading>
                  <p>The DSN presents speaker, panel and roundtable events relevant to the digital sourcing community. Topics include:</p>
                  <ul>
                    <li>engaging with industry</li>
                    <li>complying with policies and guidelines</li>
                    <li>managing contracts</li>
                    <li>writing and evaluating briefs</li>
                    <li>DTA panels, marketplaces and whole-of-government arrangements</li>
                  </ul>
                  <p>
                    Events are promoted on our <a href="https://www.eventbrite.com.au/o/digital-transformation-agency-8025584572" target="_blank" rel="external noreferrer">Eventbrite page</a>, social media and the Department of Finance Procurement Bulletin.
                  </p>
                  <p><a href="mailto:dsn@digital.gov.au">Join our mailing list</a> to receive direct updates.</p>
                  <div className=" margin-sm-top-2 margin-md-top-3">
                  <Events />
                  </div>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-6">
                  <AUheading size="lg" level="2" id="working-groups">Working Groups</AUheading>
                  <p>Working Groups bring sourcing practitioners together to address sourcing challenges or opportunities identified through user research completed by the Digital Sourcing Centre of Excellence.</p>
                  <p><a href="https://www.dta.gov.au/help-and-advice/uplifting-digital-sourcing-capability/working-groups" target="_blank" rel="external noreferrer">Read more about Working Groups</a></p>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-6">
                  <AUheading size="lg" level="2" id="common-interest-groups">Common Interest Groups</AUheading>
                  <p>Common Interest Groups (CIGs) create networks of practitioners across the Australian Public Service who have shared experiences and want to exchange knowledge and resources around specific sourcing topics. CIGs comprise an online forum supported by informational and networking events.</p>
                  <AUheading size="md" level="3">Digital Sourcing Policy Group</AUheading>
                  <p>Gives digital sourcing practitioners the chance to exchange ideas about how to adopt the new digital sourcing policies and implement them within their own agency.</p>
                  <AUheading size="md" level="3">Sourcing Cloud Common Interest Group</AUheading>
                  <p>Provides government sourcing practitioners with access to a community of peers with a shared interest in sourcing cloud-based technologies and services.</p>
                  <p><a href="https://www.dta.gov.au/help-and-advice/uplifting-digital-sourcing-capability/digital-sourcing-network/joining-digital-sourcing-network-common-interest-groups" target="_blank" rel="external noreferrer">Register to join digital sourcing Common Interest Groups</a></p>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-6">
                  <AUheading size="lg" level="2" id="sourcing-professionalisation">Sourcing professionalisation</AUheading>
                  <p>We aim to promote digital sourcing career development and build a clear career path from entry to advancement. We'll do this by identifying key capabilities and supporting the Australian Public Service (APS) to attract, develop and retain high performing staff. This work includes programs to uplift leader capability to drive digital sourcing transformation in their organisations.</p>
                </div>
              </div>
              <div className="row margin-sm-top-2 margin-md-top-3">
                <div className="col-sm-6">
                  <AUheading size="lg" level="2" id="contact-us">Contact us</AUheading>
                  <p><a href="mailto:dsn@digital.gov.au">Email us</a> for more details on all programs or to be added to Digital Sourcing Network mailing list for updates.</p>
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
