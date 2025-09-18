// src/Pages/Public/LandingPage/components/ServicesTabs.jsx

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const servicesData = [
  { 
    category: "Medical Dermatology", 
    description: "Expert diagnosis and treatment for a wide range of skin, hair, and nail conditions using proven medical approaches.",
    items: ["Acne & Scar Treatment", "Psoriasis & Eczema", "Vitiligo Treatment", "Skin Allergies & Rashes", "Fungal Infections", "Hair Loss Solutions", "Nail Disorders", "Wart / Mole Removal"],
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757624059870-pexels-shvetsa-4586726.jpg"
  },
  { 
    category: "Aesthetic & Cosmetic", 
    description: "Enhance your natural beauty with our advanced aesthetic procedures, designed to rejuvenate and refresh your appearance.",
    items: ["Chemical Peels", "Botox & Fillers", "Anti-Aging Treatments", "Microneedling with PRP", "Laser Skin Rejuvenation", "Mesotherapy"],
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757624079803-female-patient-receiving-cosmetic-treatment_107420-65218.webp"
  },
  { 
    category: "Laser Treatments", 
    description: "Utilizing state-of-the-art laser technology for precision treatments, from hair removal to scar revision, ensuring safe and effective results.",
    items: ["Laser Hair Removal", "Laser for Pigmentation", "Tattoo Removal", "Laser for Acne Scars"],
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757624136252-photo-1552693673-1bf958298935%20(1).avif"
  },
  { 
    category: "Skin Brightening", 
    description: "Achieve a radiant, glowing complexion with our specialized treatments designed to brighten skin tone and improve texture.",
    items: ["MediFacials (Hydrafacial, etc.)", "Skin Polishing", "Glutathione Injections", "Vitamin C Infusions"],
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757624157552-photo-1542848285-0d50a56a0dfc%20(1).avif"
  },
  { 
    category: "Hair Treatments", 
    description: "Comprehensive solutions to combat hair loss, nourish the scalp, and restore the health and vitality of your hair.",
    items: ["PRP Therapy for Regrowth", "Hair Fall Control", "Scalp Detox & Nourishment", "Dandruff & Itchy Scalp Care"],
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757624109035-hair-regrowth-treatment.webp"
  },
  { 
    category: "Customized Plans", 
    description: "Personalized care plans developed by our expert dermatologist to meet your unique skin and hair goals.",
    items: ["Teen Skincare Counseling", "Bridal Skin Packages", "Routine Consultations", "Diet & Lifestyle Counseling"],
    imageUrl: "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757624178537-photo-1542848285-0d50a56a0dfc%20(1).avif"
  }
];

const ServicesTabs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  // Memoize services data to prevent recreation on render
  const memoizedServices = useMemo(() => servicesData, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark-brown">A Comprehensive Range of Solutions</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          onMouseLeave={() => setActiveIndex(-1)}
        >
          {memoizedServices.map((service, index) => (
            <motion.div
              key={service.category}
              onMouseEnter={() => setActiveIndex(index)}
              className="relative rounded-xl shadow-lg cursor-pointer overflow-hidden h-[26rem]"
              // Simplified animation - removed expensive blur filter
              animate={
                activeIndex === -1 
                  ? { scale: 1, opacity: 1, zIndex: 0 } 
                  : (activeIndex === index 
                      ? { scale: 1.05, opacity: 1, zIndex: 10 } 
                      : { scale: 0.98, opacity: 0.8, zIndex: 0 })
              }
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <AnimatePresence>
                {activeIndex === index ? (
                  // EXPANDED VIEW
                  <motion.div key="expanded" className="relative w-full h-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ willChange: 'opacity' }}>
                    <motion.img 
                      src={service.imageUrl} 
                      alt={service.category} 
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
                      className="relative h-full flex flex-col justify-between p-6 text-white" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: 0.1, duration: 0.2 }}
                      style={{ willChange: 'opacity' }}
                    >
                      <div>
                        <h3 className="text-2xl font-bold font-serif">{service.category}</h3>
                        <p className="mt-2 text-gray-200 leading-relaxed text-sm">{service.description}</p>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/20 pt-4">
                        {service.items.map(item => (
                           <div key={item} className="flex items-center text-sm"><FaCheckCircle className="text-brand-pink mr-2 flex-shrink-0" /><span>{item}</span></div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  // COLLAPSED VIEW
                  <motion.div key="collapsed" className="flex flex-col h-full text-left p-6 bg-brand-gold/50 border border-gray-200" style={{ willChange: 'opacity, transform' }}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      style={{ willChange: 'opacity, transform' }}
                    >
                      <h3 className="text-xl font-bold font-serif text-brand-dark-brown">{service.category}</h3>
                      <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600">
                        {service.items.slice(0, 4).map(item => <li key={item}>{item}</li>)}
                      </ul>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(ServicesTabs);