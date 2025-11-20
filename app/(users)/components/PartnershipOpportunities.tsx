'use client';

import React from 'react';

const opportunities = [
  {
    title: 'Trade Partners',
    description: 'Established exporters and distributors seeking reliable sourcing partners.',
    benefits: [
      'Access to exclusive product catalogs',
      'Competitive pricing and volume discounts',
      'Support for logistics and export compliance',
      'Dedicated account management',
    ],
    requirements: [
      'Valid business registration',
      'Proven track record in exporting',
      'Minimum order quantity (MOQ) capacity',
      'Compliance with international standards',
    ],
  },
  {
    title: 'Design Professionals',
    description: 'Interior designers, architects, and design firms requiring premium materials.',
    benefits: [
      'Exclusive product recommendations',
      'Project-specific sourcing capabilities',
      'Priority access to new collections',
      'Dedicated technical and design support',
    ],
    requirements: [
      'Active practice with client portfolio',
      'Professional certification or licensure',
      'Interest in sustainable and innovative materials',
    ],
  },
  {
    title: 'Retail Partners',
    description: 'Premium retailers and showrooms seeking unique product offerings.',
    benefits: [
      'Exclusive brand collaborations',
      'Marketing and sales support',
      'Co-branded promotional campaigns',
      'Monthly product updates and training',
    ],
    requirements: [
      'Minimum retail space requirement',
      'Strong visual merchandising capability',
      'Brand alignment with quality and aesthetics',
    ],
  },
  {
    title: 'Project Developers',
    description: 'Large-scale residential and commercial development projects.',
    benefits: [
      'Customized material solutions',
      'Project-based bulk pricing and delivery',
      'Dedicated project management teams',
      'On-site coordination and installation support',
    ],
    requirements: [
      'Registered construction or development firm',
      'Architectural plans and specifications',
      'Project timeline and budget documentation',
      'Ability to manage large-scale deliveries',
    ],
  },
];

const PartnershipOpportunities: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-6 font-bold text-secondary">Partnership Opportunities</h2>
          <p className="text-lg text-gray-900 max-w-3xl mx-auto">
            We work with various types of partners across the interior design and construction value chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>

              <div className="space-y-3 mb-6">
                <h4 className="font-medium text-gray-900">Networking Benefits</h4>
                <ul className="list-disc list-inside text-gray-900 space-y-2 marker:text-secondary">
                  {item.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900">Requirements</h4>
                <ul className="list-disc list-inside text-gray-900 space-y-2 mt-2 marker:text-secondary">
                  {item.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipOpportunities;
