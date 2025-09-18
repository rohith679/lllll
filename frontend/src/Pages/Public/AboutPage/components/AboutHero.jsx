// src/Pages/Public/AboutPage/components/AboutHero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const heroImageUrl = "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757673841443-photo-1683917335316-ddb0d64f7568.avif";

const AboutHero = () => {
  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${heroImageUrl})`,
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }} 
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4, ease: 'linear' }}
      />
      {/* Enhanced Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-brown/80 via-brand-dark-brown/60 to-transparent" style={{ willChange: 'opacity' }} />
      
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        style={{ willChange: 'opacity, transform' }}
      >
        <h1 className="font-serif text-5xl md:text-7xl font-bold [text-shadow:_2px_2px_4px_rgb(0_0_0_/_40%)]">About Fathima Clinic</h1>
        <p className="mt-4 text-xl text-brand-gold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_40%)]">Where Technology Meets Trust</p>
      </motion.div>
    </div>
  );
};

export default React.memo(AboutHero);