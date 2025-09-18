// src/Pages/Public/AboutPage/components/GoalsSection.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

// The four goals from your provided content
const goals = [
  "Provide proven solutions for a wide range of skin and hair concerns.",
  "Maintain the highest standards of ethics, safety, and patient care.",
  "Integrate clinical expertise with the latest advancements in dermatology.",
  "Build long-term relationships based on trust, transparency, and visible results.",
];

// A high-quality, relevant image to represent professionalism and care
const imageUrl = "https://images.unsplash.com/photo-1606761353220-93fa83e332ca?q=80&w=2070&auto=format&fit=crop";

const GoalsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: The Goals List */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold text-brand-dark-brown mb-12"
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
          >
            Our Goals
          </motion.h2>

          <div className="space-y-6">
            {goals.map((goal, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-4" 
                variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
              >
                <FaCheckCircle className="text-brand-pink text-3xl mt-1 flex-shrink-0" />
                <p className="text-lg text-gray-700 leading-relaxed">{goal}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Right Column: The Image */}
        <motion.div 
          className="relative h-96 md:h-[500px] w-full rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8, ease: 'easeOut' }} 
          whileHover={{ scale: 1.03 }}
          style={{ willChange: 'transform' }}
        >
          <img 
            src={imageUrl} 
            alt="Fathima Clinic Professional Environment" 
            loading="lazy"
            decoding="async"
            className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>
        
      </div>
    </section>
  );
};

export default GoalsSection;