import React from 'react';
import Icon from '../../../components/AppIcon';

const ContextualHelp = ({ currentStep, selectedType }) => {
  const getHelpContent = () => {
    switch (currentStep) {
      case 1:
        return {
          title: "Choosing the Right Category",
          content: [
            "Select the category that best matches your incident. If you're unsure, choose the closest match.",
            "Identity Theft: Someone using your personal information without permission",
            "Financial Fraud: Unauthorized transactions or fake investment schemes",
            "Online Harassment: Threatening messages, cyberbullying, or stalking",
            "Phishing/Scam: Fake emails, websites, or messages trying to steal information"
          ]
        };
      
      case 2:
        return {
          title: "Providing Accurate Details",
          content: [
            "Be as specific as possible with dates, times, and locations",
            "Include all relevant information that might help with the investigation",
            "If you don't remember exact details, provide your best estimate",
            "Your contact information will be kept confidential and used only for follow-up"
          ]
        };
      
      case 3:
        return {
          title: "Uploading Evidence",
          content: [
            "Screenshots are often the most helpful evidence",
            "Include any emails, messages, or documents related to the incident",
            "Remove or blur any sensitive personal information before uploading",
            "Multiple files can be uploaded - include everything relevant"
          ]
        };
      
      default:
        return {
          title: "Need Help?",
          content: ["Contact our support team if you need assistance"]
        };
    }
  };

  const helpContent = getHelpContent();

  const emergencyContacts = [
    {
      title: "Cyber Crime Helpline",
      number: "1930",
      description: "24/7 National Cyber Crime Helpline"
    },
    {
      title: "Emergency Services",
      number: "112",
      description: "For immediate emergency assistance"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Icon name="HelpCircle" size={20} color="#3B82F6" />
            <h3 className="font-semibold text-gray-800">{helpContent.title}</h3>
          </div>
          
          <div className="space-y-3">
            {helpContent.content.map((item, index) => (
              <p key={index} className="text-sm text-gray-600 leading-relaxed">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-medium text-gray-800 mb-4 flex items-center">
            <Icon name="Phone" size={16} className="mr-2" />
            Emergency Contacts
          </h4>
          
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-red-800">{contact.title}</p>
                    <p className="text-sm text-red-600">{contact.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-red-800 text-lg">{contact.number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-medium text-gray-800 mb-3 flex items-center">
            <Icon name="Shield" size={16} className="mr-2" />
            Privacy & Security
          </h4>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-sm text-green-700">
              Your information is encrypted and secure. We follow strict privacy protocols 
              and will only use your data for investigation purposes.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-medium text-gray-800 mb-3 flex items-center">
            <Icon name="Clock" size={16} className="mr-2" />
            What Happens Next?
          </h4>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Your complaint will be reviewed within 24-48 hours</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>You'll receive a complaint ID for tracking</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p>Investigation team will contact you if needed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualHelp;