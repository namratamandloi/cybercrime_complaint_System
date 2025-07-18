import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import AuthHeader from './components/AuthHeader';
import Footer from 'components/ui/Footer';
import Header from 'components/ui/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import SecurityInfo from './components/SecurityInfo';

const UserRegistrationLogin = () => {
  const [activeTab, setActiveTab] = useState('login');
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    console.log('Login successful:', formData);
    // Redirect based on role
    if (formData.role === 'ADMIN') {
      navigate('/admin-dashboard');
    } else {
      navigate('/complaint-status-dashboard');
    }
  };

  const handleRegister = (formData) => {
    console.log('Registration successful:', formData);
    // Mock successful registration - redirect to dashboard
    navigate('/complaint-status-dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header/>
      
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Authentication Form Section */}
            <div className="order-2 lg:order-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 sm:p-8">
                {/* Tab Navigation */}
                <div className="flex mb-8 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('login')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'login' ?'bg-white dark:bg-gray-800 text-primary shadow-sm' :'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setActiveTab('register')}
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      activeTab === 'register' ?'bg-white dark:bg-gray-800 text-primary shadow-sm' :'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                {/* Form Content */}
                {activeTab === 'login' ? (
                  <LoginForm
                    onSubmit={handleLogin}
                    onSwitchToRegister={() => setActiveTab('register')}
                    //onForgotPassword={() => setShowForgotPassword(true)}
                  />
                ) : (
                  <RegisterForm
                    onSubmit={handleRegister}
                    onSwitchToLogin={() => setActiveTab('login')}
                  />
                )}
              </div>
            </div>

            {/* Security Information Section */}
            <div className="order-1 lg:order-2">
              <SecurityInfo/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
    
  );
};

export default UserRegistrationLogin;