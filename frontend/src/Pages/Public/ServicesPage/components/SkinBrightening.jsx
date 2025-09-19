// src/Pages/Public/ServicesPage/components/SkinBrightening.jsx

import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSun, FaGem, FaFlask } from 'react-icons/fa';
import { GiSparkles } from 'react-icons/gi';

const SkinBrightening = () => {
  const treatments = [
    {
      name: 'MediFacials (Hydrafacial)',
      description: 'Advanced hydrating facial treatment for deep cleansing, exfoliation, and instant glow',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
      steps: ['Deep Cleansing', 'Exfoliation', 'Extraction', 'Hydration'],
      duration: '60-90 min',
      frequency: 'Monthly',
      details: 'Our signature HydraFacial treatment combines cleansing, exfoliation, extraction, and hydration in one session. This multi-step treatment removes dead skin cells and impurities while delivering moisturizing serums.',
      benefits: ['Instant glow', 'Deep hydration', 'Improved texture', 'No downtime']
    },
    {
      name: 'Professional Skin Polishing',
      description: 'Diamond microdermabrasion for smooth, radiant skin with immediate visible results',
      imageUrl: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2070&auto=format&fit=crop',
      steps: ['Skin Analysis', 'Diamond Polishing', 'Serum Application', 'Moisturizing'],
      duration: '45-60 min',
      frequency: 'Bi-weekly',
      details: 'Diamond-tip microdermabrasion gently removes the outermost layer of dead skin cells, revealing fresh, smooth skin underneath. This treatment improves skin texture and promotes cell renewal.',
      benefits: ['Smoother skin', 'Reduced fine lines', 'Even tone', 'Enhanced radiance']
    },
    {
      name: 'Glutathione IV Therapy',
      description: 'Powerful antioxidant infusion for skin brightening and overall health enhancement',
      imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2070&auto=format&fit=crop',
      steps: ['Health Assessment', 'IV Preparation', 'Infusion Process', 'Monitoring'],
      duration: '30-45 min',
      frequency: 'Weekly',
      details: 'Glutathione is a master antioxidant that helps brighten skin from within. Our IV therapy delivers high concentrations directly into the bloodstream for maximum absorption and effectiveness.',
      benefits: ['Skin brightening', 'Antioxidant protection', 'Detoxification', 'Anti-aging effects']
    },
    {
      name: 'Vitamin C & E Infusions',
      description: 'Nutrient-rich vitamin therapy for radiant, healthy skin and enhanced natural glow',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',
      steps: ['Vitamin Assessment', 'Custom Blend', 'Infusion Therapy', 'Follow-up'],
      duration: '30-40 min',
      frequency: 'Bi-weekly',
      details: 'High-dose vitamin C and E infusions provide powerful antioxidant protection, stimulate collagen production, and enhance skin brightness. These vitamins work synergistically for optimal results.',
      benefits: ['Collagen boost', 'Brightened complexion', 'Improved elasticity', 'Natural glow']
    },
    {
      name: 'Chemical Peels for Brightening',
      description: 'Medical-grade peels specifically formulated for skin brightening and pigmentation correction',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      steps: ['Skin Preparation', 'Peel Application', 'Neutralization', 'Post-care'],
      duration: '30-45 min',
      frequency: 'Monthly',
      details: 'Our brightening peels use kojic acid, arbutin, and glycolic acid to target pigmentation and reveal brighter, more even-toned skin. Treatment depth is customized for your skin type.',
      benefits: ['Pigmentation reduction', 'Even skin tone', 'Improved clarity', 'Youthful appearance']
    },
    {
      name: 'LED Light Therapy',
      description: 'Advanced LED technology for skin rejuvenation and enhanced natural radiance',
      imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1974&auto=format&fit=crop',
      steps: ['Skin Cleansing', 'LED Application', 'Serum Infusion', 'Moisturizing'],
      duration: '20-30 min',
      frequency: 'Twice weekly',
      details: 'Red and near-infrared LED light stimulates cellular energy production, promotes collagen synthesis, and enhances skin healing for a natural, healthy glow.',
      benefits: ['Cellular rejuvenation', 'Improved circulation', 'Natural glow', 'Anti-inflammatory']
    }
  ];

  const glowPackages = [
    {
      name: 'Instant Glow Package',
      description: 'Quick brightening treatment for immediate results',
      includes: ['HydraFacial', 'Vitamin C Infusion', 'LED Therapy'],
      duration: '2 hours',
      price: 'Starting from ₹8,000'
    },
    {
      name: 'Bridal Glow Package',
      description: 'Complete pre-wedding skin preparation',
      includes: ['6 HydraFacials', 'Glutathione Therapy', 'Chemical Peels', 'LED Sessions'],
      duration: '3 months',
      price: 'Starting from ₹35,000'
    },
    {
      name: 'Monthly Maintenance Glow',
      description: 'Regular skin brightening maintenance',
      includes: ['Monthly HydraFacial', 'Vitamin Infusions', 'Home Care Kit'],
      duration: 'Ongoing',
      price: 'Starting from ₹12,000/month'
    }
  ];

  const benefits = [
  {
    icon: <FaSun />,
    title: 'Radiant Complexion',
    description: 'Achieve a natural, healthy glow from within'
  },
  {
    icon: <FaGem />,
    title: 'Even Skin Tone',
    description: 'Reduce pigmentation and dark spots effectively'
  },
  {
    icon: <FaFlask />,
    title: 'Advanced Formulations',
    description: 'Medical-grade treatments for superior results'
  },
  {
    icon: <GiSparkles />,  // Changed from FaSparkles to GiSparkles
    title: 'Instant Results',
    description: 'See visible improvement after first session'
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-gold">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-brand-dark-brown">
            <div className="bg-brand-pink/10 text-brand-pink border border-brand-pink/30 px-3 py-1 rounded-full text-sm inline-block mb-4">
              Skin Brightening & Glow
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Unlock Your Natural Radiance
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Transform your skin with our advanced brightening treatments designed to reveal your natural glow and achieve an even, radiant complexion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold text-center hover:bg-brand-pink/90 transition-colors"
              >
                Book Glow Treatment
              </Link>
              <Link
                to="/about"
                className="border border-brand-pink text-brand-pink px-8 py-3 rounded-full font-bold text-center hover:bg-brand-pink/10 transition-colors"
              >
                See Results
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
              alt="Skin brightening and glow treatment" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4 font-serif">
              Why Choose Our Brightening Treatments?
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
      <section className="py-16 px-4 bg-brand-gold">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4 font-serif">
              Our Skin Brightening Treatments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional treatments designed to enhance your natural glow and achieve radiant skin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
                      <span className="text-sm font-medium text-brand-dark-brown">Treatment Steps:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.steps.map((step, stepIndex) => (
                          <span key={stepIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {step}
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
                      <span className="text-sm text-gray-600">Frequency:</span>
                      <span className="bg-brand-pink text-white px-2 py-1 rounded text-sm">{treatment.frequency}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 bg-brand-pink text-white py-3 rounded-full font-bold text-center block hover:bg-brand-pink/90 transition-colors"
                  >
                    Book Treatment
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Glow Packages */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-dark-brown mb-6 text-center font-serif">
              Our Popular Glow Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {glowPackages.map((pkg, index) => (
                <div key={index} className="bg-brand-gold border border-gray-200 rounded-lg p-6 relative">
                  {index === 1 && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-brand-pink text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-brand-dark-brown mb-2">{pkg.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-pink">{pkg.price}</div>
                      <div className="text-sm text-gray-600">{pkg.duration}</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-brand-dark-brown">Package Includes:</span>
                      <ul className="mt-2 space-y-1">
                        {pkg.includes.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-brand-pink rounded-full mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      to="/contact"
                      className="w-full bg-brand-pink text-white py-3 rounded-full font-bold text-center block hover:bg-brand-pink/90 transition-colors"
                    >
                      Choose Package
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brand-dark-brown mb-4 font-serif">
              The Brightening Process
            </h3>
            <p className="text-gray-600">
              Understanding how our treatments work to brighten your skin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive skin analysis and consultation' },
              { step: '02', title: 'Treatment', desc: 'Customized brightening therapy session' },
              { step: '03', title: 'Nourishment', desc: 'Vitamin and antioxidant infusion' },
              { step: '04', title: 'Glow', desc: 'Visible brightening and radiance enhancement' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-pink rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-brand-dark-brown mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brand-dark-brown mb-4 font-serif">
              Suitable for All Skin Types
            </h3>
            <p className="text-gray-600">
              Our treatments are customized for different skin types and concerns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: 'Oily Skin', treatment: 'Oil control + brightening peels' },
              { type: 'Dry Skin', treatment: 'Hydrating facials + vitamin therapy' },
              { type: 'Sensitive Skin', treatment: 'Gentle LED therapy + mild peels' },
              { type: 'Combination Skin', treatment: 'Customized multi-zone treatment' }
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-lg font-bold text-brand-dark-brown mb-2">{item.type}</h4>
                <p className="text-gray-600 text-sm">{item.treatment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-pink">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Reveal Your Natural Glow?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Start your journey to brighter, more radiant skin with our personalized brightening treatments.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-pink px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors inline-block"
          >
            Book Your Glow Session Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SkinBrightening;