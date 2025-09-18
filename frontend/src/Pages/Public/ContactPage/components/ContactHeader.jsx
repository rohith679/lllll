// src/Pages/Public/ContactPage/components/ContactHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => (
  <motion.div 
    className="text-center mb-16" 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className="font-serif text-5xl md:text-7xl font-bold text-white">Get In Touch</h1>
    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
      We're here to help. Reach out to us for any questions or to book your consultation.
    </p>
  </motion.div>
);

export default ContactHeader;