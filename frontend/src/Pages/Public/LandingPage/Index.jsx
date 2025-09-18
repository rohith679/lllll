// src/Pages/Public/LandingPage/Index.jsx

import React from 'react';

// Import all the final, enhanced section components
import HeroSection from './components/HeroSection.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import ServicesTabs from './components/ServicesTabs.jsx';
import MissionAndGoals from './components/MissionAndGoals.jsx';
import ScrollingTestimonials from './components/ScrollingTestimonials.jsx';

const LandingPage = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <WhyChooseUs />
      <ServicesTabs />
      <MissionAndGoals />
      <ScrollingTestimonials />
    </main>
  );
};

export default LandingPage;