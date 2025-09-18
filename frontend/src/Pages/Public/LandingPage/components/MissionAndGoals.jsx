// src/Pages/Public/LandingPage/components/MissionAndGoals.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaCheckCircle } from 'react-icons/fa';

const backgroundUrl = "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=2070&auto=format&fit=crop";

const goals = [
  "Provide proven solutions for a wide range of skin and hair concerns.",
  "Maintain the highest standards of ethics, safety, and patient care.",
  "Integrate clinical expertise with the latest advancements in dermatology.",
  "Build long-term relationships based on trust, transparency, and visible results.",
];

const MissionAndGoals = () => {
  // Main container variant to stagger the two cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  // Variant for each glass card to slide in
  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };
  
  // Variant for the content inside the cards to stagger-fade in
  const contentVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section 
      className="relative py-24 bg-cover bg-center" 
      style={{
        backgroundImage: `url(${backgroundUrl})`, 
        willChange: 'transform', 
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <div className="absolute inset-0 bg-brand-dark-brown opacity-80" style={{ willChange: 'opacity' }} />
      
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 text-white items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* Mission Card */}
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-2xl"
          variants={cardVariants}
          whileHover={{ scale: 1.02, boxShadow: "0px 15px 30px rgba(232, 62, 140, 0.1)" }}
          style={{ willChange: 'transform' }}
        >
          {/* ANIMATION FIX: The content now reliably animates with its parent card */}
          <motion.div variants={contentVariants}>
            <motion.div variants={itemVariants} className="flex items-center mb-4">
              <FaBullseye className="text-brand-pink mr-4" size={32} />
              <h3 className="font-serif text-3xl font-bold">Our Mission</h3>
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              To deliver expert skin and hair care through a senior dermatologist, combining personalized treatment with advanced technology for safe, effective, and affordable outcomes.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Goals Card */}
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-2xl"
          variants={cardVariants}
          whileHover={{ scale: 1.02, boxShadow: "0px 15px 30px rgba(232, 62, 140, 0.1)" }}
          style={{ willChange: 'transform' }}
        >
          {/* ANIMATION FIX: The content now reliably animates with its parent card */}
          <motion.div variants={contentVariants}>
            <motion.h3 variants={itemVariants} className="font-serif text-3xl font-bold mb-6">Our Goals</motion.h3>
            <div className="space-y-4">
              {goals.map((goal, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4" 
                  variants={itemVariants}
                >
                  <FaCheckCircle className="text-brand-pink text-2xl mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-300">{goal}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default React.memo(MissionAndGoals);