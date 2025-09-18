// src/Pages/Public/LandingPage/components/HeroSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const imageUrl = "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757618111769-Untitled-design-1-min.png";

const HeroSection = () => {
  // Advanced animation variants for a professional, staggered entry effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased delay for more dramatic effect
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="relative h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* ANIMATION: The background image now has a subtle zoom effect on load */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${imageUrl})`, 
          willChange: 'transform', 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 5, ease: 'linear' }}
      />
      
      {/* Content Container */}
      <motion.div 
        className="relative z-20 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ willChange: 'opacity, transform' }}
      >
        <motion.p
          className="font-semibold tracking-widest mb-4 text-brand-pink [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]"
          variants={itemVariants}
        >
          EXPERT CARE • ADVANCED TECHNOLOGY • TRUSTED RESULTS
        </motion.p>
        
        <motion.h1
          className="font-serif text-5xl md:text-8xl font-bold"
          variants={itemVariants}
        >
          <span className="bg-black/20 backdrop-blur-sm py-2 px-6 rounded-md">
            Fathima Skin & Hair Clinic
          </span>
        </motion.h1>
        
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-white mt-6 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_50%)]"
          variants={itemVariants}
        >
          To be Vellore’s most trusted skin and hair clinic, known for expert care, ethical values, and consistent results.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-10">
          <motion.div
            // Simplified pulse animation
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ willChange: 'transform' }}
          >
            <Link
              to="/contact"
              className="inline-block bg-brand-pink text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-brand-pink hover:shadow-2xl hover:scale-105"
            >
              Book Your Consultation
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default React.memo(HeroSection);