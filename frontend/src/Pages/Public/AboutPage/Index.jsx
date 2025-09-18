// src/Pages/Public/AboutPage/Index.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import all the necessary section components for the About Us page
import AboutHero from './components/AboutHero.jsx';
import MissionVision from './components/MissionVision.jsx';
import CoreValuesFeature from './components/CoreValuesFeature.jsx';
import GoalsSection from './components/GoalsSection.jsx';

// The high-quality background image for the CTA section
const ctaBackgroundUrl = "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2070&auto=format&fit=crop";

// This is the new, completely redesigned and highly-animated CTA component
const AboutCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section 
      className="relative py-24 bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${ctaBackgroundUrl})`,
        willChange: 'transform',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {/* This overlay ensures the text is always readable over the background image */}
      <div className="absolute inset-0 bg-brand-dark-brown/70" />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 
          className="text-4xl font-bold text-white sm:text-5xl font-serif"
          variants={itemVariants}
        >
          Ready to Begin Your Journey?
        </motion.h2>
        
        <motion.p 
          className="mt-4 text-lg leading-6 text-gray-300"
          variants={itemVariants}
        >
          Contact us today to schedule your personalized consultation.
        </motion.p>
        
        <motion.div className="mt-10" variants={itemVariants}>
          <Link
            to="/contact"
            className="inline-block bg-brand-pink text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg 
                       transition-all duration-300 ease-in-out
                       hover:bg-white hover:text-brand-pink hover:shadow-2xl hover:shadow-brand-pink/30 hover:scale-110"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

// This is the final assembly of the "About Us" page.
const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <MissionVision />
      <CoreValuesFeature />
      <GoalsSection />
      <AboutCTA />
    </main>
  );
};

export default AboutPage;