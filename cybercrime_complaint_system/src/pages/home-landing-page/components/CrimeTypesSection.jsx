import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CrimeTypesSection = () => {
  const navigate = useNavigate();

  const crimeTypes = [
    {
      id: 1,
      icon: "CreditCard",
      title: "Financial Fraud",
      description: "Credit card fraud, online banking scams, investment fraud, and unauthorized transactions.",
      color: "bg-red-100 text-red-600",
      borderColor: "border-red-200"
    },
    {
      id: 2,
      icon: "Mail",
      title: "Email Scams",
      description: "Phishing emails, fake lottery winnings, romance scams, and business email compromise.",
      color: "bg-orange-100 text-orange-600",
      borderColor: "border-orange-200"
    },
    {
      id: 3,
      icon: "Smartphone",
      title: "Mobile Fraud",
      description: "SMS scams, fake mobile apps, SIM swapping, and mobile wallet fraud.",
      color: "bg-blue-100 text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      id: 4,
      icon: "Globe",
      title: "Online Shopping Fraud",
      description: "Fake e-commerce websites, non-delivery of goods, and counterfeit products.",
      color: "bg-green-100 text-green-600",
      borderColor: "border-green-200"
    },
    {
      id: 5,
      icon: "User",
      title: "Identity Theft",
      description: "Unauthorized use of personal information, fake profiles, and document forgery.",
      color: "bg-purple-100 text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      id: 6,
      icon: "MessageSquare",
      title: "Social Media Crimes",
      description: "Cyberbullying, fake accounts, harassment, and privacy violations on social platforms.",
      color: "bg-pink-100 text-pink-600",
      borderColor: "border-pink-200"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of Cybercrime We Handle
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform covers a wide range of cybercrime categories. Select the type that best matches your incident for specialized assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {crimeTypes.map((crime) => (
            <div
              key={crime.id}
              className={`bg-white rounded-xl p-6 border-2 ${crime.borderColor} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${crime.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={crime.icon} size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {crime.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {crime.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              iconName="FileText"
              iconPosition="left"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => navigate('/user-registration-login')}
            >
              Start Cybercrime Report
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Search"
              iconPosition="left"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => navigate('/user-registration-login')}
            >
              Check Complaint Status
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrimeTypesSection;