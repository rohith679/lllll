// src/Pages/Public/ContactPage/components/ContactInfoAndMap.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaPhone, FaRegCopy, FaCheck } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ContactInfoAndMap = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText("contact@fathimaclinic.com"); setCopied(true); toast.success('Email address copied!'); setTimeout(() => setCopied(false), 2000); };

  const contactDetails = [
    { icon: <FaMapMarkerAlt />, title: "Location", value: "Vellore, Tamil Nadu, 632004", href: "https://www.google.com/maps/place/Vellore,+Tamil+Nadu" },
    { icon: <FaPhone />, title: "Phone", value: "+91 12345 67890", href: "tel:+911234567890" },
    { icon: <FaEnvelope />, title: "Email", value: "contact@fathimaclinic.com", action: handleCopy, copied: copied },
    { icon: <FaClock />, title: "Hours", value: "Mon - Sat: 9:00 AM – 7:00 PM" },
  ];

  const cardVariants = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };
  const contentVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };

  const mapRef = useRef(null);
  const [showMap, setShowMap] = useState(true); // Start with true to avoid layout issues

  useEffect(() => {
    // Simplified approach - load map immediately but keep the ref for potential future use
    setShowMap(true);
  }, []);

  return (
    <motion.div className="space-y-8" variants={cardVariants}>
      {/* CHANGE: Removed 3D tilt, replaced with a subtle scale/lift hover effect */}
      <motion.div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-2xl transition-all duration-300 hover:shadow-brand-pink/20" whileHover={{ y: -5, scale: 1.02 }}>
        <motion.div variants={contentVariants}>
          <motion.h3 variants={itemVariants} className="font-serif text-2xl font-bold text-white mb-6">Contact Information</motion.h3>
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <motion.div key={item.title} variants={itemVariants} className="flex items-start" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300 }}>
                <span className="text-brand-pink text-xl mt-1 mr-4">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  {item.href ? (<a href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">{item.value}</a>)
                  : item.action ? (<div className="flex items-center space-x-2"><span className="text-gray-300">{item.value}</span><button onClick={item.action} className="text-gray-400 hover:text-white transition">{item.copied ? <FaCheck className="text-green-400" /> : <FaRegCopy />}</button></div>)
                  : (<p className="text-gray-300">{item.value}</p>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.div ref={mapRef} className="rounded-xl overflow-hidden shadow-2xl border border-white/20" whileHover={{ scale: 1.02 }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62232.32766861504!2d79.0945864112185!3d12.92314541018804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbede8ff7638659a4!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1678886363321!5m2!1sen!2sin" 
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </motion.div>
  );
};
export default ContactInfoAndMap;