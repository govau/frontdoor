import AUheading from '@gov.au/headings';
import React from 'react';

interface IProductsAndServicesListProps {
  itemSelectedFunc?: (item: any) => void;
}

const ProductsAndServicesList: React.FC<IProductsAndServicesListProps> = ({ itemSelectedFunc }) => {
  const data = [{
    group: 'Accessibility',
    terms: [
      'Accessibility contractors and consultants',
      'Accessibility services',
    ],
  }, {
    group: 'Analytics',
    terms: [
      'Analytics contractors and consultants',
      'Analytics services',
    ],
  }, {
    group: 'Cloud',
    terms: [
      'Anything as a service',
      'Infrastructure as a service',
      'Platform as a service',
      'Software as a service',
      'Cloud contractors and consultants',
      'Cloud computing',
      'Cloud Marketplace',
      'Cloud services',
    ],
  }, {
    group: 'Mobile',
    terms: [
      'Mobile panel',
      'Mobile phone accessories',
      'Mobile phones',
      'Mobile routers',
    ],
  }, {
    group: 'Content',
    terms: [
      'Content contractors and consultants',
      'Content design and creation services',
      'Content management services',
      'Content software',
    ],
  }, {
    group: 'Servers',
    terms: [
      'Servers ',
      'Servers and enterprise computing',
    ],
  }, {
    group: 'Data and Data centres',
    terms: [
      'Data visualisation software',
      'Data contractors and consultants',
      'data carriage services',
      'Data centres',
      'Data plans',
      'Data services',
      'Data software',
      'data visualisation services',
      'Database management software',
      'ICT Enclosure',
    ],
  }, {
    group: 'Cybersecurity',
    terms: [
      'Cyber security software',
      'Cyber security contractors and consultants',
      'Cyber security services',
      'Risk management services',
      'DDoS protection',
      'Risk management contractors and consultants',
    ],
  }, {
    group: 'Customer experience and business support',
    terms: [
      'Customer experience software',
      'Customer relationship management software',
      'Contact centre systems',
      'Support and operations contractors and consultants',
      'Support and operations services',
      'business services',
    ],
  }, {
    group: 'Communications and change management',
    terms: [
      'Communications services',
      'Communications systems',
      'Communications contractors and consultants',
      'Change management',
      'Change manager',
    ],
  }, {
    group: 'Hardware appliances and systems',
    terms: [
      'Heating, Ventilation and Air conditioning system',
      'Racks, enclosures and accessories',
      'IT equipment energy',
      'Thin Client',
      'Switches',
    ],
  }, {
    group: 'Computers and accessories',
    terms: [
      'Laptops',
      'Desktops',
      'Monitors',
      'Video or audio conferencing',
      'Dongles',
    ],
  }, {
    group: 'Professional services',
    terms: [
      'Asset Management',
      'Asset Sanitation and Disposal',
      'Cabling Services',
      'Ethernet services',
      'Routers',
      'System maintenance services',
      'System maintenance technician',
    ],
  }, {
    group: 'Software tools and services',
    terms: [
      'Solution architect',
      'Quality assurance tester',
      'Quality assurance testing services',
      'Operating systems software',
      'Software',
      'Software development kit',
      'API management',
      'Development tools',
      'Software engineering services',
      'Software engineering contractors and consultants',
    ],
  }, {
    group: 'Business and industry software',
    terms: [
      'E-commerce software',
      'Engineering software',
      'Field operations software',
      'Financial software',
      'Virtual assistants software',
      'Workflow software',
      'Business continuity software',
      'Business intelligence software',
    ],
  }, {
    group: 'Integration',
    terms: [
      'Integration software',
      'Integration contractors and consultants',
      'System integration contractors and consultants',
      'Integration services',
    ],
  }, {
    group: 'Sourcing and policy',
    terms: [
      'Digital sourcing contractors and consultants',
      'Policy contractors and consultants',
      'Digital sourcing services',
      'Indigenous procurement',
      'Procurement systems',
      'Policy services',
      'Recruitment systems',
    ],
  }, {
    group: 'Project design and delivery',
    terms: [
      'Design contractors and consultants',
      'Digital contractors and consultants',
      'Project management contractors and consultants',
      'User research contractors and consultants',
      'User research services',
      'Design services',
      'Business analysis services',
      'Business analyst',
      'Project management services',
      'Quality assurance tester',
      'Quality assurance testing services',
    ],
  }, {
    group: 'Backup, storage and migration',
    terms: [
      'Migration contractors and consultants',
      'Backup and Restore',
      'Direct Attached Storage',
      'Object-Based Storage',
      'Migration services',
      'Storage Area Network',
      'Network Attached Storage',
    ],
  }, {
    group: 'Marketplaces and panels',
    terms: [
      'Telecommunications Marketplace',
      'Digital Marketplace',
    ],
  }, {
    group: 'Training',
    terms: [
      'Training contractors and consultants',
      'Training services',
      'Training software',
      'Emerging technology contractors and consultants',
    ],
  }, {
    group: 'Managed services',
    terms: [
      'Managed network services',
      'Managed router services',
      'Managed services',
      'Managed voice services',
    ],
  }, {
    group: 'Networks and connectivity',
    terms: [
      'Broadband devices',
      'Dark fibre services',
      'Local Area Network Services',
      'Storage Area Network',
      'Ethernet services',
      'Routers',
      'Unmanaged WAN',
      'Network Attached Storage',
      'Internet carriage services',
      'Satellite services',
      'Video or audio conferencing',
      'Switches',
    ],
  }, {
    group: 'Industry services and systems',
    terms: [
      'Electronic Access Control System',
      'Enterprise resource planning systems',
      'National Australian Built Environment Rating System (NABERS)',
      'Governmance systems',
      'Management systems',
      'Building Code of Australia (BCA)',
    ],
  }, {
    group: 'Science and mapping',
    terms: [
      'Mapping services',
      'Medical software',
      'Survey software',
      'Disaster recovery software',
      'Geographic software',
      'Meteorology software',
      'Observation software',
      'Scientific software',
      'Environmental Management Systems',
    ],
  }];


  const onClick = (e: any) => {
    e.preventDefault();
    if (itemSelectedFunc) {
      itemSelectedFunc(e.target.innerText);
    }
  };

  const chunk = (array: any[], chunkSize: number) => {
    const results = [];
    const size = Math.ceil(array.length / chunkSize);

    while (array.length) {
      results.push(array.splice(0, size));
    }

    return results;
  };

  return (
    <div className="padding-md-1">
      <div className="row">
        <div className="col-sm-12 margin-sm-bottom-1 margin-md-bottom-1">
          <AUheading size="md" level="2">Products and services</AUheading>
        </div>
      </div>
      <div className="row">
        {chunk(data.sort((a, b) => a.group.localeCompare(b.group)), 3).map((c, i) => (
          <div key={i} className="col-sm-4">
            {c.map((d) => (
              <React.Fragment key={d.group}>
                <div className="margin-sm-top-1 margin-md-top-1 font-weight-7">{d.group}</div>
                <div>
                  {d.terms.map((t: string) => (
                    <React.Fragment key={`${d.group}${t}`}>
                      <a href="" onClick={(e) => onClick(e)}>{t}</a><br />
                    </React.Fragment>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsAndServicesList;
