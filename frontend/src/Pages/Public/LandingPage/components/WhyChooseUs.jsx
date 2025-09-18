// src/Pages/Public/LandingPage/components/WhyChooseUs.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaShieldAlt, FaRocket, FaHandHoldingHeart, FaBalanceScale, FaUsers, FaLightbulb } from 'react-icons/fa';

// FINALIZED: Replaced the broken Unsplash links with new, permanent, high-quality images.
const values = [
  { 
    icon: <FaUserMd size={48} />, 
    title: "Trusted Expertise", 
    short: "20+ Years of Experience",
    full: "Led by a senior dermatologist trained at a reputed government medical college, we combine deep clinical knowledge with decades of hands-on experience.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621194861-Gemini_Generated_Image_etndchetndchetnd.png" // <-- CORRECTED IMAGE
  },
  { 
    icon: <FaRocket size={48} />, 
    title: "Advanced Technology", 
    short: "World-Class Equipment",
    full: "We are equipped with a wide range of cutting-edge devices—including Fractional CO₂ Laser, Nd:YAG Laser, and MN-RF—for precise and effective treatments.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621290142-photo-1552693673-1bf958298935.avif"
  },
  { 
    icon: <FaHandHoldingHeart size={48} />, 
    title: "Personalized & Ethical Care", 
    short: "Tailored to Your Needs",
    full: "Every treatment is customized to your needs with a strong commitment to ethical, safe, and transparent medical practice. We prioritize honesty and realistic expectations.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621321177-photo-1622253692010-333f2da6031d.avif"
  },
  { 
    icon: <FaUsers size={48} />, 
    title: "Complete In-Clinic Solutions", 
    short: "Everything Under One Roof",
    full: "From diagnosis to recovery, we provide everything under one roof—medicines, skin products, hair serums, and post-care support—for your total convenience.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621234229-Gemini_Generated_Image_8g9p9u8g9p9u8g9p.png" // <-- CORRECTED IMAGE
  },
  { 
    icon: <FaBalanceScale size={48} />, 
    title: "Affordable Excellence", 
    short: "Quality Care, Fair Prices",
    full: "We deliver high-quality results at fair and transparent prices, making professional skin and hair care accessible to all, with no compromise on standards.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621353460-photo-1542848285-0d50a56a0dfc.avif"
  },
  { 
    icon: <FaLightbulb size={48} />, 
    title: "Innovation & Learning", 
    short: "At the Forefront of Science",
    full: "We continually upgrade our treatments and stay ahead with the latest advancements in dermatology and trichology to provide the best possible care.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621383521-photo-1532187863486-abf9dbad1b69.avif"
  },
  { 
    icon: <FaShieldAlt size={48} />, 
    title: "Compassion & Trust", 
    short: "Building Relationships",
    full: "We believe in building long-term relationships through care, respect, and visible results that speak for themselves.",
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757621409603-photo-1612349317150-e413f6a5b16d.avif"
  },
];

const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // Memoize values to prevent recreating objects on each render
  const memoizedValues = useMemo(() => values, []);

  return (
    <section className="py-24 bg-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark-brown">Why Choose Fathima Clinic?</h2>
          <p className="mt-4 text-lg text-gray-600">An unparalleled commitment to your skin and hair health.</p>
        </motion.div>

        <div 
          className="flex flex-wrap justify-center gap-8"
          onMouseLeave={() => setActiveIndex(-1)}
        >
          {memoizedValues.map((value, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative rounded-xl shadow-lg cursor-pointer overflow-hidden"
              animate={{ width: activeIndex === index ? '28rem' : '18rem' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ 
                height: '24rem',
                willChange: 'width',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            >
              <AnimatePresence>
                {activeIndex === index ? (
                  <motion.div key="expanded" className="relative w-full h-full" style={{ willChange: 'opacity, transform' }}>
                    <motion.img 
                      src={value.imageUrl} 
                      alt={value.title} 
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ willChange: 'transform' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" style={{ willChange: 'opacity' }} />
                    <motion.div 
                      className="relative h-full flex flex-col justify-end p-6 text-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                      style={{ willChange: 'opacity' }}
                    >
                      <h3 className="text-2xl font-bold font-serif">{value.title}</h3>
                      <p className="mt-2 leading-relaxed">{value.full}</p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div key="collapsed" className="flex flex-col items-center justify-center h-full text-center p-6 bg-white" style={{ willChange: 'opacity, transform' }}>
                    <motion.span 
                      className="text-brand-pink"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      style={{ willChange: 'opacity, transform' }}
                    >
                      {value.icon}
                    </motion.span>
                    <h3 className="mt-4 text-xl font-bold font-serif text-brand-dark-brown">{value.title}</h3>
                    <p className="mt-1 text-gray-500">{value.short}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(WhyChooseUs);