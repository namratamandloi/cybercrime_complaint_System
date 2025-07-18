import Icon from 'components/AppIcon';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';
// import Icon from './components/AppIcon';
// import Button from '../../../components/ui/Button';


const NavigationHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/home-landing-page', icon: 'Home' },
    { name: 'AboutUs', path: '/about-us', icon: 'UserCircle' },
    { name: 'FeedBack', path: '/Feedback', icon: 'FileText' },
    // { name: 'Login', path: '/user-registration-login', icon: 'User' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigation('/home-landing-page')}
          >
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg mr-3">
              <Icon name="Shield" size={24} color="#FFFFFF" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                CyberCrime Portal
              </h1>
              <p className="text-xs text-gray-600">Secure Reporting System</p>
            </div>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-blue-100 text-blue-700' :'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Icon name={item.icon} size={18} className="mr-2" />
                {item.name}
              </button>
            ))}
          </nav>

          {/* Login Button - Desktop */}
          <div className="hidden md:block">
            <Button
              variant="solid"
              size="sm"
              iconName="User"
              iconPosition="left"
              className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700 shadow-md"
              onClick={() => navigate('/user-registration-login')}
            >
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActivePath(item.path)
                      ? 'bg-blue-100 text-blue-700' :'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <Icon name={item.icon} size={20} className="mr-3" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
              {/* Login Button - Mobile */}
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button
                  variant="outline"
                  size="md"
                  iconName="User"
                  iconPosition="left"
                  fullWidth
                  className="text-blue-700 border-blue-700 hover:bg-blue-50"
                  onClick={() => {
                    navigate('/user-registration-login');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavigationHeader;