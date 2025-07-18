import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Report Cybercrime &amp; Online Fraud
            <span className="block text-blue-300 mt-2">Safely &amp; Securely</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your trusted platform for reporting cybercrime incidents and online fraud. 
            Get help from law enforcement and protect others from digital threats.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center items-center mb-12">
            <Link to="/user-registration-login">
            <Button
              variant="primary"
              size="lg"
              iconName="Shield"
              iconPosition="left"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4"
              onClick={() => navigate('/cybercrime-reporting-form')}
            >
              Report Cybercrime
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;