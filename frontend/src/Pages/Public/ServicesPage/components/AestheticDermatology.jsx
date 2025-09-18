// src/Pages/Public/ServicesPage/components/AestheticDermatology.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaShieldAlt, FaGem, FaClock } from 'react-icons/fa';

const AestheticDermatology = () => {
  const treatments = [
    {
      name: 'Chemical Peels',
      description: 'Professional peels for pigmentation, acne marks, and skin rejuvenation with visible results',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
      types: ['Glycolic Acid', 'Salicylic Acid', 'TCA Peels'],
      duration: '30-45 min',
      downtime: '3-7 days',
      details: 'Our chemical peels use medical-grade acids to exfoliate damaged skin layers, revealing fresher, more youthful skin underneath. We customize the peel depth based on your skin concerns and tolerance.',
      benefits: ['Improved skin texture', 'Reduced pigmentation', 'Minimized pore size', 'Enhanced radiance']
    },
    {
      name: 'Botox & Fillers',
      description: 'Wrinkle reduction and facial contouring with premium injectable treatments for natural results',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',
      types: ['Botox', 'Dermal Fillers', 'Lip Enhancement'],
      duration: '15-30 min',
      downtime: 'Minimal',
      details: 'We use FDA-approved neurotoxins and hyaluronic acid fillers to smooth wrinkles, restore volume, and enhance facial contours while maintaining natural expression and movement.',
      benefits: ['Wrinkle reduction', 'Facial contouring', 'Volume restoration', 'Natural appearance']
    },
    {
      name: 'Anti-Aging Skin Treatments',
      description: 'Comprehensive anti-aging protocols for youthful, radiant skin using advanced technology',
      imageUrl: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2070&auto=format&fit=crop',
      types: ['Radiofrequency', 'Ultrasound Therapy', 'LED Therapy'],
      duration: '45-60 min',
      downtime: 'None',
      details: 'Our non-invasive anti-aging treatments stimulate collagen production, tighten skin, and improve elasticity using cutting-edge radiofrequency and ultrasound technologies.',
      benefits: ['Skin tightening', 'Collagen stimulation', 'Fine line reduction', 'Improved elasticity']
    },
    {
      name: 'Microneedling with PRP',
      description: 'Advanced collagen induction therapy with platelet-rich plasma for natural skin renewal',
      imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2070&auto=format&fit=crop',
      types: ['RF Microneedling', 'PRP Treatment', 'Dermaroller'],
      duration: '60 min',
      downtime: '1-2 days',
      details: 'This treatment combines micro-injuries with your own growth factors from platelet-rich plasma to stimulate natural collagen production and accelerate healing for optimal results.',
      benefits: ['Natural rejuvenation', 'Scar improvement', 'Skin texture enhancement', 'Long-lasting results']
    },
    {
      name: 'Mesotherapy',
      description: 'Targeted injections for skin rejuvenation and hair regrowth with customized nutrient cocktails',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      types: ['Skin Cocktails', 'Hair Mesotherapy', 'Fat Dissolving'],
      duration: '30-45 min',
      downtime: 'Minimal',
      details: 'We inject customized vitamin and nutrient cocktails directly into the skin to nourish, hydrate, and rejuvenate at the cellular level for targeted improvement.',
      benefits: ['Deep hydration', 'Nutrient delivery', 'Skin revitalization', 'Targeted treatment']
    },
    {
      name: 'Laser Skin Rejuvenation',
      description: 'Advanced laser treatments for skin tightening and texture improvement with precision technology',
      imageUrl: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2070&auto=format&fit=crop',
      types: ['Fractional Laser', 'CO2 Laser', 'IPL Therapy'],
      duration: '30-60 min',
      downtime: '3-10 days',
      details: 'Our state-of-the-art laser systems resurface skin, stimulate collagen remodeling, and address various concerns including wrinkles, scars, and pigmentation issues.',
      benefits: ['Skin resurfacing', 'Texture improvement', 'Wrinkle reduction', 'Pigmentation correction']
    }
  ];

  const benefits = [
    {
      icon: <FaGem />,
      title: 'Youthful Appearance',
      description: 'Restore and maintain a naturally youthful look'
    },
    {
      icon: <FaStar />,
      title: 'Premium Results',
      description: 'Achieve exceptional aesthetic outcomes'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe Procedures',
      description: 'FDA-approved treatments with minimal risks'
    },
    {
      icon: <FaClock />,
      title: 'Quick Recovery',
      description: 'Minimal downtime with most treatments'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-pink">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm inline-block mb-4">
              Aesthetic & Cosmetic Dermatology
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Enhance Your Natural Beauty
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Advanced aesthetic treatments to restore, refresh, and rejuvenate your skin with natural-looking results using the latest cosmetic dermatology techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-brand-pink px-8 py-3 rounded-full font-bold text-center hover:bg-brand-gold transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-full font-bold text-center hover:bg-white/10 transition-colors"
              >
                View Gallery
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
              alt="Aesthetic dermatology treatment" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-brand-gold">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4 font-serif">
              Why Choose Our Aesthetic Treatments?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-pink rounded-full flex items-center justify-center text-white text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-dark-brown mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4 font-serif">
              Our Aesthetic Treatments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your appearance with our comprehensive range of cosmetic dermatology treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img 
                    src={treatment.imageUrl}
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark-brown mb-2">{treatment.name}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {treatment.details}
                    </p>
                    
                    <div>
                      <span className="text-sm font-medium text-brand-dark-brown">Treatment Types:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.types.map((type, typeIndex) => (
                          <span key={typeIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-sm font-medium text-brand-dark-brown">Key Benefits:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="bg-brand-gold text-brand-dark-brown px-2 py-1 rounded text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Duration:</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{treatment.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Downtime:</span>
                      <span className="bg-brand-pink text-white px-2 py-1 rounded text-sm">{treatment.downtime}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 bg-brand-pink text-white py-3 rounded-full font-bold text-center block hover:bg-brand-pink/90 transition-colors"
                  >
                    Book Consultation
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-pink">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Enhance Your Natural Beauty?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a personalized consultation to discover which aesthetic treatments are perfect for achieving your beauty goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-pink px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors inline-block"
          >
            Get Your Custom Treatment Plan
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AestheticDermatology;