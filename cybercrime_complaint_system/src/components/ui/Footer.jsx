import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from 'components/AppIcon';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Report Cybercrime', path: '/cybercrime-reporting-form' },
    { name: 'Report Online Fraud', path: '/online-fraud-reporting-form' },
    { name: 'Track Complaint', path: '/complaint-status-dashboard' },
    { name: 'User Login', path: '/user-registration-login' }
  ];

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Icon name="Shield" size={24} color="#fff" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">CyberCrime Portal</h3>
                <p className="text-sm text-gray-400">Secure & Confidential</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Helping citizens report cybercrime and fraud easily and securely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Box */}
          <div>
            <div className="bg-red-100 border border-red-400 text-red-800 px-4 py-3 rounded-md shadow-md">
              <div className="flex items-center mb-2">
                <Icon name="AlertTriangle" size={18} className="text-red-600 mr-2" />
                <span className="font-semibold text-sm">Emergency Alert</span>
              </div>
              <p className="text-sm">
                If you're facing an immediate cyber threat, call <strong>1930</strong> for assistance.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
          &copy; {currentYear} CyberCrime Portal. Designed for citizen safety.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
