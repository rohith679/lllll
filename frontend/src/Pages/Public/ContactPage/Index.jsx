// src/Pages/Public/ContactPage/Index.jsx

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

// Import the modular components
import ContactHeader from './components/ContactHeader.jsx';
import ContactInfoAndMap from './components/ContactInfoAndMap.jsx';
import ContactForm from './components/ContactForm.jsx';

// The professional background image from your inspiration site
const backgroundUrl = "https://images.unsplash.com/photo-1606761353220-93fa83e332ca?q=80&w=2070&auto=format&fit=crop";

const ContactPage = () => {
  return (
    <>
      <Toaster position="bottom-center" toastOptions={{ style: { background: '#363636', color: '#fff' } }}/>

      {/* CHANGE: The background is now a fixed parallax image, creating a sense of depth */}
      <section 
        className="relative min-h-screen bg-cover bg-center py-24 px-4" 
        style={{ 
          backgroundImage: `url(${backgroundUrl})`,
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* A subtle dark overlay ensures the glass cards and text are always readable */}
        <div className="absolute inset-0 bg-brand-dark-brown/70" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <ContactHeader />

          {/* This container staggers the animation of the two main cards */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <ContactInfoAndMap />
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;