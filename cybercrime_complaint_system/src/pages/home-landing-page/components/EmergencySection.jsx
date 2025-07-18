import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencySection = () => {
  const emergencyContacts = [
    {
      id: 1,
      title: "Cybercrime Helpline",
      number: "1930",
      description: "24/7 National Cybercrime Helpline",
      icon: "Phone"
    },
    {
      id: 2,
      title: "Police Emergency",
      number: "100",
      description: "For immediate police assistance",
      icon: "Shield"
    },
    {
      id: 3,
      title: "Women Helpline",
      number: "181",
      description: "For women-related cybercrimes",
      icon: "Users"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-red-50 border-t-4 border-red-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Icon name="AlertTriangle" size={32} color="#DC2626" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Emergency Contacts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If you're facing an immediate cybercrime threat or emergency, contact these helplines directly for urgent assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {emergencyContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500 text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
                <Icon name={contact.icon} size={24} color="#DC2626" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {contact.title}
              </h3>
              <div className="text-3xl font-bold text-red-600 mb-2">
                {contact.number}
              </div>
              <p className="text-sm text-gray-600">
                {contact.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 border-red-500 text-red-600 hover:bg-red-50"
                onClick={() => window.open(`tel:${contact.number}`, '_self')}
              >
                Call Now
              </Button>
            </div>
          ))}
        </div> 
      </div>
    </section>
  );
};

export default EmergencySection;