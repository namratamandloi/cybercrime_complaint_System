import React from 'react';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "FileText",
      title: "Easy Reporting",
      description: "Simple step-by-step forms to report cybercrime incidents with guided assistance throughout the process."
    },
    {
      id: 2,
      icon: "Upload",
      title: "Evidence Upload",
      description: "Securely upload screenshots, documents, and other evidence to support your complaint with encrypted storage."
    },
    {
      id: 3,
      icon: "Search",
      title: "Track Complaints",
      description: "Monitor the status of your complaints in real-time with detailed updates and progress notifications."
    },
    {
      id: 4,
      icon: "Shield",
      title: "Data Protection",
      description: "Your personal information and complaint details are protected with bank-level security encryption."
    },
    {
      id: 5,
      icon: "Users",
      title: "Expert Support",
      description: "Get assistance from cybercrime experts and law enforcement professionals throughout the process."
    },
    {
      id: 6,
      icon: "Zap",
      title: "Quick Response",
      description: "Fast processing of complaints with priority handling for urgent cybercrime and fraud cases."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive cybercrime reporting with advanced features designed to make the process simple and secure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Icon name={feature.icon} size={24} color="#3B82F6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;