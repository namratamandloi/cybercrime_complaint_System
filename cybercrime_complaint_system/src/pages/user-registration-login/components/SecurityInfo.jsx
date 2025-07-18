import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityInfo = () => {
  const securityFeatures = [
    {
      icon: 'Shield',
      title: 'End-to-End Encryption',
      description: 'Your data is protected with military-grade encryption'
    },
    {
      icon: 'Lock',
      title: 'Secure Authentication',
      description: 'Multi-factor authentication keeps your account safe'
    },
    {
      icon: 'Eye',
      title: 'Privacy Protection',
      description: 'Your personal information is never shared without consent'
    },
    {
      icon: 'FileText',
      title: 'Confidential Reports',
      description: 'All complaint details are handled with strict confidentiality'
    }
  ];

  return (
    <div className="hidden lg:block bg-gradient-to-br from-primary to-primary-500 text-white p-8 rounded-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Your Security is Our Priority</h3>
        <p className="text-primary-100 leading-relaxed">
          We implement the highest security standards to protect your sensitive information 
          and ensure your cybercrime reports are handled with complete confidentiality.
        </p>
      </div>

      <div className="space-y-6">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name={feature.icon} size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">{feature.title}</h4>
              <p className="text-sm text-primary-100">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-white bg-opacity-10 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="Info" size={16} className="text-primary-100" />
          <span className="text-sm font-medium">Privacy Notice</span>
        </div>
        <p className="text-xs text-primary-100 leading-relaxed">
          By creating an account, you agree to our data protection policies. 
          We comply with all applicable privacy laws and regulations to ensure 
          your information remains secure and confidential.
        </p>
      </div>
    </div>
  );
};

export default SecurityInfo;