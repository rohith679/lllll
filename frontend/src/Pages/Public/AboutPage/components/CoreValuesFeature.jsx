// src/Pages/Public/AboutPage/components/CoreValuesFeature.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaShieldAlt, FaRocket, FaHandHoldingHeart, FaBalanceScale, FaUsers, FaLightbulb } from 'react-icons/fa';

// This is the full, detailed data for all 7 values, each with a unique, high-quality image.
const valuesData = [
  { 
    icon: <FaUserMd size={28} />, 
    title: "Trusted Expertise", 
    description: "Led by a senior dermatologist trained at a reputed government medical college, we combine deep clinical knowledge with over 20 years of hands-on experience.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621194861-Gemini_Generated_Image_etndchetndchetnd.png" // <-- CORRECTED IMAGE
  },
  { 
    icon: <FaRocket size={28} />, 
    title: "Advanced Technology", 
    description: "We use world-class equipment including Fractional CO₂ Laser, Nd:YAG Laser, MN-RF, and High-Frequency Machines to ensure precise and effective treatments.",
    imageUrl: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    icon: <FaHandHoldingHeart size={28} />, 
    title: "Personalized & Ethical Care", 
    description: "Every treatment is customized to your needs with a strong commitment to ethical, safe, and transparent medical practice. We prioritize honesty and realistic expectations.",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  },
  { 
    icon: <FaUsers size={28} />, 
    title: "Complete In-Clinic Solutions", 
    description: "From diagnosis to recovery, we provide everything under one roof—medicines, skin products, hair serums, and post-care support—for your total convenience.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621234229-Gemini_Generated_Image_8g9p9u8g9p9u8g9p.png"
  },
  { 
    icon: <FaBalanceScale size={28} />, 
    title: "Affordable Excellence", 
    description: "We deliver high-quality results at fair and transparent prices, making professional skin and hair care accessible to all, with no compromise on standards.",
    imageUrl: "https://images.unsplash.com/photo-1542848285-0d50a56a0dfc?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    icon: <FaLightbulb size={28} />, 
    title: "Innovation & Learning", 
    description: "We continually upgrade our treatments and stay ahead with the latest advancements in dermatology and trichology to provide the best possible care.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1974&auto=format&fit=crop"
  },
  { 
    icon: <FaShieldAlt size={28} />, 
    title: "Compassion & Trust", 
    description: "We believe in building long-term relationships through care, respect, and visible results that speak for themselves.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621409603-photo-1612349317150-e413f6a5b16d.avif"
  },
];

const FeatureSection = ({ value, index }) => {
  const isReversed = index % 2 !== 0; // Alternate layout for every other item

  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-center ${isReversed ? 'lg:[direction:rtl]' : ''}`}>
      <motion.div 
        className="relative h-96 md:h-[500px] w-full rounded-lg shadow-2xl overflow-hidden"
        initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ willChange: 'transform' }}
      >
        <img 
          src={value.imageUrl} 
          alt={value.title} 
          loading="lazy"
          decoding="async"
          className="absolute w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </motion.div>
      
      <motion.div 
        className="[direction:ltr]" // Ensure text direction is always left-to-right
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div 
          className="flex items-center space-x-4 mb-4" 
          variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
        >
          <span className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-brand-pink">{value.icon}</span>
          </span>
          <h3 className="text-3xl font-bold font-serif text-brand-dark-brown">{value.title}</h3>
        </motion.div>
        
        <motion.p 
          className="text-lg text-gray-600 leading-relaxed"
          variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
        >
          {value.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

// Memoize FeatureSection to avoid re-renders when parent re-renders
const MemoizedFeatureSection = React.memo(FeatureSection);

const CoreValuesFeature = () => {
  return (
    <section className="py-24 bg-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <motion.div 
          className="text-center" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark-brown">Our Core Values</h2>
          <p className="mt-4 text-lg text-gray-600">The principles that guide every decision we make.</p>
        </motion.div>

        {valuesData.map((value, index) => (
          <MemoizedFeatureSection key={value.title} value={value} index={index} />
        ))}
      </div>
    </section>
  );
};

export default CoreValuesFeature;