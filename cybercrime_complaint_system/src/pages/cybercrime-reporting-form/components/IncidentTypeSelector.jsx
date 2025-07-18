import React from 'react';
import Icon from '../../../components/AppIcon';

const IncidentTypeSelector = ({ selectedType, onTypeSelect }) => {
  const incidentTypes = [
    {
      id: 'identity_theft',
      title: 'Identity Theft',
      description: 'Unauthorized use of personal information',
      icon: 'UserX',
      color: 'bg-red-50 border-red-200 hover:bg-red-100'
    },
    {
      id: 'financial_fraud',
      title: 'Financial Fraud',
      description: 'Credit card, banking, or investment fraud',
      icon: 'CreditCard',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    },
    {
      id: 'online_harassment',
      title: 'Online Harassment',
      description: 'Cyberbullying, stalking, or threats',
      icon: 'MessageSquareWarning',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    },
    {
      id: 'phishing_scam',
      title: 'Phishing/Scam',
      description: 'Fake emails, websites, or messages',
      icon: 'Mail',
      color: 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100'
    },
    {
      id: 'data_breach',
      title: 'Data Breach',
      description: 'Unauthorized access to personal data',
      icon: 'Shield',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      id: 'ransomware',
      title: 'Ransomware/Malware',
      description: 'Malicious software or file encryption',
      icon: 'Bug',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      id: 'social_media',
      title: 'Social Media Crime',
      description: 'Fake profiles, impersonation, or abuse',
      icon: 'Users',
      color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
    },
    {
      id: 'other',
      title: 'Other',
      description: 'Other types of cybercrime incidents',
      icon: 'MoreHorizontal',
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          What type of cybercrime incident would you like to report?
        </h3>
        <p className="text-gray-600">
          Select the category that best describes your incident
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {incidentTypes.map((type) => (
          <div
            key={type.id}
            onClick={() => onTypeSelect(type.id)}
            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedType === type.id 
                ? 'border-blue-500 bg-blue-50 shadow-md' 
                : type.color
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`p-3 rounded-full ${
                selectedType === type.id ? 'bg-blue-500' : 'bg-gray-100'
              }`}>
                <Icon 
                  name={type.icon} 
                  size={24} 
                  color={selectedType === type.id ? 'white' : '#6B7280'} 
                />
              </div>
              <div>
                <h4 className={`font-medium ${
                  selectedType === type.id ? 'text-blue-800' : 'text-gray-800'
                }`}>
                  {type.title}
                </h4>
                <p className={`text-sm mt-1 ${
                  selectedType === type.id ? 'text-blue-600' : 'text-gray-600'
                }`}>
                  {type.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncidentTypeSelector;