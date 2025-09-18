// src/layouts/footer/Index.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaPhone, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaClock, 
  FaFacebookF, FaInstagram, FaLinkedinIn 
} from 'react-icons/fa';

// This is the new transparent logo URL from your provided code
const logoUrl = "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757606012236-screenshot-2025-07-01-at-9.14.27a-am-m6LbrGO8q8u17rjK_converted-removebg-preview.png";

export default function Footer() {

  const FooterLink = ({ path, label }) => (
    <Link 
      to={path} 
      className="relative text-gray-400 transition-colors duration-300 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-brand-pink before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:text-white hover:before:scale-x-100"
    >
      {label}
    </Link>
  );

  const expertiseLinks = [
    { label: "Medical Dermatology", path: "/services/medical" },
    { label: "Aesthetic & Cosmetic Dermatology", path: "/services/aesthetic" },
    { label: "Laser Services", path: "/services/laser" },
    { label: "Skin Brightening & Glow", path: "/skincare/glow" },
    { label: "Hair Services", path: "/services/hair" },
    { label: "Customized Skin & Hair Care", path: "/skincare/custom" },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };
  
  const listVariants = {
    visible: { transition: { staggerChildren: 0.1 } },
    hidden: {},
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };


  return (
    <>
      <footer className="bg-brand-dark-brown text-white pt-20 pb-8 relative overflow-hidden">
        <div className="absolute -bottom-1/2 -left-1/4 w-3/4 h-3/4 bg-gradient-radial from-brand-brown/10 via-transparent to-transparent rounded-full blur-3xl animate-drift" aria-hidden="true" />
        <div className="absolute -top-1/2 -right-1/4 w-3/4 h-3/4 bg-gradient-radial from-brand-pink/5 via-transparent to-transparent rounded-full blur-3xl animate-drift animation-delay-[-5s]" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Column 1: Company Info */}
            <motion.div variants={columnVariants}>
              <div className="flex items-center mb-4">
                {/* CHANGE 2: Increased logo size from h-16 w-16 to h-20 w-20 */}
                <img src={logoUrl} alt="Fathima Clinic Logo" className="h-20 w-20 object-contain" />
                <div className="ml-3">
                  <h3 className="font-serif text-xl font-bold">Fathima Clinic</h3>
                  <p className="text-sm text-gray-400">Skin & Hair Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">Delivering expert skin and hair care through personalized treatment and advanced technology.</p>
              <div className="flex space-x-4">
                <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={20} /></motion.a>
                <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></motion.a>
                <motion.a whileHover={{ scale: 1.2, y: -2 }} href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={20} /></motion.a>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div variants={columnVariants}>
              <h3 className="text-lg font-bold mb-4 font-serif">Quick Links</h3>
              <motion.ul variants={listVariants} className="space-y-3 group">
                <motion.li variants={listItemVariants}><FooterLink path="/" label="Home" /></motion.li>
                <motion.li variants={listItemVariants}><FooterLink path="/services" label="Services" /></motion.li>
                <motion.li variants={listItemVariants}><FooterLink path="/skincare" label="Skincare" /></motion.li>
                <motion.li variants={listItemVariants}><FooterLink path="/contact" label="Contact" /></motion.li>
              </motion.ul>
            </motion.div>

            {/* Column 3: Our Expertise */}
            <motion.div variants={columnVariants}>
              <h3 className="text-lg font-bold mb-4 font-serif">Our Expertise</h3>
              <motion.ul variants={listVariants} className="space-y-3 group">
                {expertiseLinks.map(link => <motion.li variants={listItemVariants} key={link.label}><FooterLink path={link.path} label={link.label} /></motion.li>)}
              </motion.ul>
            </motion.div>

            {/* Column 4: Contact Info */}
            <motion.div variants={columnVariants}>
              <h3 className="text-lg font-bold mb-4 font-serif">Contact Info</h3>
              <motion.ul variants={listVariants} className="space-y-4 text-gray-400">
                <motion.li variants={listItemVariants} whileHover={{x:5, color: '#FFFFFF'}} transition={{duration:0.2}} className="flex items-start cursor-pointer"><FaMapMarkerAlt className="text-brand-pink mt-1 mr-3 flex-shrink-0" /><span>Vellore, Tamil Nadu, 632004</span></motion.li>
                <motion.li variants={listItemVariants} whileHover={{x:5, color: '#FFFFFF'}} transition={{duration:0.2}} className="flex items-start cursor-pointer"><FaPhone className="text-brand-pink mt-1 mr-3 flex-shrink-0" /><span>+91 12345 67890</span></motion.li>
                <motion.li variants={listItemVariants} whileHover={{x:5, color: '#FFFFFF'}} transition={{duration:0.2}} className="flex items-start cursor-pointer"><FaEnvelope className="text-brand-pink mt-1 mr-3 flex-shrink-0" /><span>contact@fathimaclinic.com</span></motion.li>
                <motion.li variants={listItemVariants} whileHover={{x:5, color: '#FFFFFF'}} transition={{duration:0.2}} className="flex items-start cursor-pointer"><FaClock className="text-brand-pink mt-1 mr-3 flex-shrink-0" /><span>Mon - Sat: 9:00 AM – 7:00 PM</span></motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* CTA Banner */}
          <motion.div 
            className="mt-16 rounded-2xl p-1 relative bg-gradient-to-r from-brand-pink via-brand-brown to-brand-pink"
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink via-brand-brown to-brand-pink rounded-2xl blur opacity-75 animate-pulse"></div>
            <div className="relative bg-brand-dark-brown rounded-[14px] p-8 flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-xl md:text-2xl font-bold text-center md:text-left mb-4 md:mb-0">Ready for Radiant Skin & Hair?</h3>
              <motion.a href="#" className="bg-white text-brand-brown px-8 py-3 rounded-full font-bold transition hover:bg-brand-gold shadow-lg" whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400 }}>
                Book a Consultation
              </motion.a>
            </div>
          </motion.div>
          
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Fathima Skin & Hair Clinic. All Rights Reserved. <span className="hidden md:inline mx-2">|</span> <br className="md:hidden" /> Developed & Maintained By {""} <a href="https://digitner.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white underline underline-offset-2 transition-colors">Digitner Tech Solutions Pvt Ltd</a></p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* CHANGE 1: Removed the infinite "dancing" animation */}
        <motion.a 
          href="tel:+911234567890" 
          className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg" 
          whileHover={{ scale: 1.15, rotate: 10, transition: { type: 'spring', stiffness: 300 } }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        >
          <FaPhone size={24} />
        </motion.a>
        {/* CHANGE 1: Removed the infinite "dancing" animation */}
        <motion.a 
          href="https://wa.me/911234567890" 
          target="_blank" rel="noopener noreferrer" 
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg" 
          whileHover={{ scale: 1.15, rotate: -10, transition: { type: 'spring', stiffness: 300 } }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.2 }}
        >
          <FaWhatsapp size={28} />
        </motion.a>
      </div>
    </>
  );
}