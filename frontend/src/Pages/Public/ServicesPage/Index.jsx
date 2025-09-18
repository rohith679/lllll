// src/Pages/Public/TreatmentsPage/Index.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const serviceCategories = [
  {
    id: 1,
    title: "Medical Dermatology",
    slug: "medical-dermatology",
    description:
      "Evidence-based treatment protocols for complex dermatological conditions. Our board-certified dermatologists provide personalized care for lasting results.",
    specialization: "Clinical Dermatology",
    popular: false,
    consultationFee: "₹1,500",
    services: [
      "Acne & Scarring Treatment",
      "Psoriasis & Eczema Management",
      "Vitiligo & Pigmentation Disorders",
      "Dermatitis & Allergic Reactions",
      "Comprehensive Skin Cancer Screening",
    ],
    patientCount: "500+",
  },
  {
    id: 2,
    title: "Aesthetic & Cosmetic",
    slug: "aesthetic-dermatology",
    description:
      "Advanced anti-aging and cosmetic procedures combining medical expertise with aesthetic innovation for natural-looking, beautiful results.",
    specialization: "Cosmetic Medicine",
    popular: true,
    consultationFee: "₹2,000",
    services: [
      "Botulinum Toxin (Botox) Injections",
      "Dermal Filler Treatments",
      "Medical-Grade Chemical Peels",
      "Microneedling with Growth Factors",
      "Thread Lift & Skin Tightening",
    ],
    patientCount: "1,200+",
  },
  {
    id: 3,
    title: "Laser Treatments",
    slug: "laser-treatments",
    description:
      "State-of-the-art FDA-approved laser technology for safe, effective treatment of various skin conditions with minimal downtime.",
    specialization: "Laser Medicine",
    popular: false,
    consultationFee: "₹2,500",
    services: [
      "Laser Hair Removal (All Skin Types)",
      "Pigmentation & Dark Spot Treatment",
      "Professional Tattoo Removal",
      "Acne Scar Laser Resurfacing",
      "Vascular & Spider Vein Treatment",
    ],
    patientCount: "800+",
  },
  {
    id: 4,
    title: "Skin Brightening & Glow",
    slug: "skin-brightening",
    description:
      "Premium facial treatments and skin brightening solutions for radiant, healthy-looking skin that glows naturally.",
    specialization: "Medical Aesthetics",
    popular: true,
    consultationFee: "₹1,800",
    services: [
      "HydraFacial MD Treatment",
      "Professional Skin Polishing",
      "Glutathione IV Therapy",
      "Vitamin C & E Infusions",
      "Customized Glow Packages",
    ],
    patientCount: "2,000+",
  },
  {
    id: 5,
    title: "Hair & Scalp Treatments",
    slug: "hair-treatments",
    description:
      "Comprehensive hair restoration and scalp treatment programs addressing hair loss with proven, scientifically-backed approaches.",
    specialization: "Trichology",
    popular: false,
    consultationFee: "₹2,200",
    services: [
      "PRP Hair Restoration Therapy",
      "Hair Transplant Consultation",
      "Advanced Scalp Analysis",
      "Alopecia Treatment Programs",
      "Hair Growth Maintenance Plans",
    ],
    patientCount: "600+",
  },
  {
    id: 6,
    title: "Preventive & Wellness",
    slug: "customized-care",
    description:
      "Comprehensive skin health programs focusing on prevention and long-term maintenance for optimal skin condition throughout life.",
    specialization: "Preventive Medicine",
    popular: false,
    consultationFee: "₹1,200",
    services: [
      "Annual Skin Health Assessment",
      "Personalized Skincare Regimens",
      "UV Damage Prevention Programs",
      "Nutritional Dermatology Consultation",
      "Lifestyle & Wellness Guidance",
    ],
    patientCount: "400+",
  }
];

const TreatmentCard = ({ category, index }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/services/${category.slug}`);
  };

  return (
    <motion.div
      className="group bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-2xl relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="w-14 h-14 bg-brand-pink rounded-2xl flex items-center justify-center shadow-sm">
            <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
          </div>
          <div className="text-right">
            <span className="text-xs text-brand-brown border border-brand-brown/30 px-2 py-1 rounded-full">
              {category.specialization}
            </span>
          </div>
        </div>
        
        <h3 className="text-xl font-serif font-semibold text-brand-dark-brown group-hover:text-brand-pink transition-colors mb-3">
          {category.title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed text-sm mb-6">
          {category.description}
        </p>

        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-medium text-brand-brown mb-3 flex items-center">
            <span className="w-2 h-2 bg-brand-pink rounded-full mr-2"></span>
            What's Included:
          </h4>
          {category.services.map((service, sIdx) => (
            <div
              key={sIdx}
              className="flex items-start gap-3 text-sm text-gray-700 hover:text-brand-pink transition-colors"
            >
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
              <span className="leading-relaxed">{service}</span>
            </div>
          ))}
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={handleLearnMore}
            className="flex-1 bg-gradient-to-r from-brand-pink to-pink-500 hover:from-pink-500 hover:to-brand-pink text-white font-medium py-2.5 px-4 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-pink rounded-full text-center text-sm"
          >
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const [playZoom, setPlayZoom] = useState(false);

  return (
    <div className="min-h-screen bg-brand-gold relative overflow-hidden">
      {/* Skip link for keyboard users */}
      <a href="#services-main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:px-3 focus:py-2 focus:rounded-md focus:shadow-md">
        Skip to content
      </a>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-40 h-40 bg-brand-pink/8 rounded-full blur-sm"></div>
        <div className="absolute top-32 right-16 w-24 h-24 bg-brand-pink/6 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 right-12 w-48 h-48 bg-brand-pink/5 rounded-full blur-sm"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-brand-pink/7 rounded-full blur-sm"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="bg-brand-gold py-12 px-8 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark-brown mb-4">
            Our Services
          </h1>
          <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
            Discover our comprehensive range of dermatological services designed to enhance your natural beauty and health.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div id="services-main" role="main" className="py-12 px-8 bg-brand-gold relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {serviceCategories.map((category, idx) => (
              <TreatmentCard key={category.id} category={category} index={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <motion.div 
        className="bg-brand-dark-brown py-16 px-8 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Ready to Begin Your Service Journey?
          </h2>
          <p className="text-brand-gold/80 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive consultation with our dermatology specialists to develop a personalized service plan tailored to your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-brand-pink hover:bg-brand-pink/90 text-white px-8 py-3 font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </Link>
            <a
              href="tel:+911234567890"
              className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-dark-brown px-8 py-3 font-medium rounded-full transition-all duration-300 hover:scale-105"
            >
              Call +91 12345 67890
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;