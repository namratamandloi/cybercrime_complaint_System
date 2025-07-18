import React from 'react';
// import NavigationHeader from './components/NavigationHeader';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CrimeTypesSection from './components/CrimeTypesSection';
import EmergencySection from './components/EmergencySection';
import Footer from 'components/ui/Footer';
import Header from 'components/ui/Header';

const HomeLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CrimeTypesSection />
        <EmergencySection />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLandingPage;