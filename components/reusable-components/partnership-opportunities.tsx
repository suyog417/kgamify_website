import React from 'react';

interface PartnershipSection {
  title: string;
  description: string;
}

interface Responsibility {
  entity: string;
  items: string[];
}

const PartnershipOpportunities: React.FC = () => {
  const opportunities: PartnershipSection[] = [
    {
      title: 'Championship Sponsor',
      description: 'Sponsor subject-specific championships and offer rewards like coupons, internships, or scholarships.'
    },
    {
      title: 'Skill & Career Collaborations',
      description: 'Host skill-building contests with real-world problem statements aligned to your industry.'
    },
    {
      title: 'Brand Presence in the App',
      description: 'Get logo placement, custom themes, or ad space in the app environment.'
    },
    {
      title: 'Recruitment & Internship Integration',
      description: 'Find talent through performance in domain-specific challenges.'
    }
  ];

  const responsibilities: Responsibility[] = [
    {
      entity: 'kGamify',
      items: [
        'Create and manage the championship.',
        'Provide in-app advertising and promotion.',
        'Track performance metrics and share reports with the partner brand.'
      ]
    },
    {
      entity: 'Partner Brands',
      items: [
        'Offer agreed-upon discounts or rewards.',
        'Ensure seamless reward recognition at physical stores or online.',
        'Collaborate on marketing and promotional activities.'
      ]
    }
  ];

  return (
     <section className="text-center relative">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Partnership Opportunities</h2>
        <p className='max-w-5xl text-center m-auto mb-6'>Explore comprehensive collaboration possibilities designed to align with your organizational goals while maximizing mutual value through our innovative gamified learning and talent discovery platform.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {/* Connecting Lines */}
          <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="25%" y1="20%" x2="75%" y2="20%" stroke="#ff8200" strokeWidth="2" />
            <line x1="25%" y1="20%" x2="25%" y2="70%" stroke="#ff8200" strokeWidth="2" />
            <line x1="75%" y1="20%" x2="75%" y2="70%" stroke="#ff8200" strokeWidth="2" />
            <line x1="25%" y1="70%" x2="75%" y2="70%" stroke="#ff8200" strokeWidth="2" />
          </svg>

          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition z-10 bg-white w-5/6 m-auto h-full">
            <h3 className="text-xl font-medium mb-2">Sponsor Excellence, Discover Talent</h3>
            <p>Lead championship sponsorships in specialized knowledge domains while providing compelling rewards—from exclusive offers and internship opportunities to merit-based scholarships—that showcase your commitment to developing future industry leaders.</p>
          </div>
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition z-10 bg-white w-5/6 m-auto h-full">
            <h3 className="text-xl font-medium mb-2">Industry-Specific Talent Development</h3>
            <p>Partner with us to design contests that combine skill assessment with practical industry exposure, challenging participants to tackle real-world problems while providing your organization with insights into emerging talent capabilities.</p>
          </div>
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition z-10 bg-white w-5/6 m-auto h-full">
            <h3 className="text-xl font-medium mb-2">Strategic Brand Positioning</h3>
            <p>Leverage high-impact brand placement opportunities including prominent logo visibility, custom-branded app themes, and targeted advertising space that connects your organization with active learners and professionals.</p>
          </div>
          <div className="border rounded-xl p-6 shadow hover:shadow-lg transition z-10 bg-white w-5/6 m-auto h-full">
            <h3 className="text-xl font-medium mb-2">Performance-Based Talent Acquisition</h3>
            <p>Discover high-potential candidates through their demonstrated expertise in targeted challenges, allowing you to assess practical skills and domain knowledge before making recruitment and internship decisions.</p>
          </div>
        </div>
      </section>
    // <div className="max-w-4xl mx-auto p-6 font-sans">
    //   <h1 className="text-3xl font-bold text-gray-800 mb-8">Partnership Opportunities</h1>
      
    //   <div className="grid md:grid-cols-2 gap-8 mb-12">
    //     {opportunities.map((opp, index) => (
    //       <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    //         <h2 className="text-xl font-semibold text-gray-700 mb-3">{opp.title}</h2>
    //         <p className="text-gray-600">{opp.description}</p>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="border-t-2 border-gray-200 pt-8">
    //     <h2 className="text-2xl font-bold text-gray-800 mb-6">Roles and Responsibilities</h2>
        
    //     <div className="grid md:grid-cols-2 gap-8">
    //       {responsibilities.map((role, index) => (
    //         <div key={index} className="bg-gray-50 p-6 rounded-lg">
    //           <h3 className="text-lg font-semibold text-gray-700 mb-4">{role.entity}</h3>
    //           <ul className="list-disc pl-5 space-y-2">
    //             {role.items.map((item, i) => (
    //               <li key={i} className="text-gray-600">{item}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default PartnershipOpportunities;