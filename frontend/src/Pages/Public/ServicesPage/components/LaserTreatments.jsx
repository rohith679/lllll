// src/Pages/Public/ServicesPage/components/LaserTreatments.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBolt, FaCrosshairs, FaCog, FaAward } from 'react-icons/fa';

const LaserTreatments = () => {
  const treatments = [
    {
      name: 'Laser Hair Removal',
      description: 'Permanent hair reduction for face, arms, underarms, bikini, and full body with advanced laser technology',
      imageUrl: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2070&auto=format&fit=crop',
      areas: ['Face', 'Arms', 'Underarms', 'Bikini', 'Legs', 'Full Body'],
      sessions: '6-8 sessions',
      results: 'Up to 95% reduction',
      details: 'Our state-of-the-art diode and alexandrite lasers target hair follicles at the root, providing safe and effective permanent hair reduction. Treatment is customized for different skin types and hair colors.',
      benefits: ['Permanent results', 'Smooth skin', 'No ingrown hairs', 'Time-saving']
    },
    {
      name: 'Laser for Pigmentation',
      description: 'Advanced laser therapy for melasma, age spots, and hyperpigmentation with precision targeting',
      imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2070&auto=format&fit=crop',
      areas: ['Melasma', 'Age Spots', 'Sun Damage', 'Dark Spots'],
      sessions: '4-6 sessions',
      results: '80-90% improvement',
      details: 'Q-switched lasers break down melanin deposits in the skin, effectively treating various pigmentation issues. The treatment is precise and targets only the pigmented areas.',
      benefits: ['Even skin tone', 'Reduced dark spots', 'Brighter complexion', 'Long-lasting results']
    },
    {
      name: 'Tattoo Removal',
      description: 'Safe and effective laser tattoo removal for all colors and sizes using advanced Q-switched technology',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',
      areas: ['All Colors', 'Small Tattoos', 'Large Tattoos', 'Professional Work'],
      sessions: '8-12 sessions',
      results: 'Complete removal',
      details: 'Our Q-switched lasers can remove tattoos of all colors and sizes by breaking down ink particles. The number of sessions depends on tattoo size, color, and depth.',
      benefits: ['Complete removal', 'Minimal scarring', 'All colors treated', 'Safe procedure']
    },
    {
      name: 'Laser for Acne Scars',
      description: 'Fractional laser resurfacing for acne scar reduction and skin smoothing with advanced CO2 technology',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      areas: ['Boxcar Scars', 'Ice Pick Scars', 'Rolling Scars', 'Atrophic Scars'],
      sessions: '3-5 sessions',
      results: '70-85% improvement',
      details: 'Fractional CO2 laser creates controlled micro-injuries to stimulate collagen production and remodel scar tissue, significantly improving skin texture and appearance.',
      benefits: ['Scar reduction', 'Smoother texture', 'Improved confidence', 'Long-term results']
    }
  ];

  const advantages = [
    {
      icon: <FaBolt />,
      title: 'Advanced Technology',
      description: 'Latest generation laser systems for optimal results'
    },
    {
      icon: <FaCrosshairs />,
      title: 'Precision Treatment',
      description: 'Targeted therapy with minimal damage to surrounding tissue'
    },
    {
      icon: <FaCog />,
      title: 'Customizable Settings',
      description: 'Adjustable parameters for different skin types and conditions'
    },
    {
      icon: <FaAward />,
      title: 'Proven Results',
      description: 'Clinically proven effectiveness with high success rates'
    }
  ];

  const laserTypes = [
    {
      name: 'Alexandrite Laser',
      use: 'Hair removal for light to medium skin tones',
      wavelength: '755 nm'
    },
    {
      name: 'Nd:YAG Laser',
      use: 'Hair removal for darker skin tones',
      wavelength: '1064 nm'
    },
    {
      name: 'Q-Switched Laser',
      use: 'Pigmentation and tattoo removal',
      wavelength: '532/1064 nm'
    },
    {
      name: 'Fractional CO2',
      use: 'Acne scars and skin resurfacing',
      wavelength: '10,600 nm'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-dark-brown">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm inline-block mb-4">
              Laser Treatments
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Advanced Laser Technology
            </h1>
            <p className="text-xl opacity-90 mb-8">
              State-of-the-art laser treatments for hair removal, pigmentation correction, tattoo removal, and acne scar reduction with precision and safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-brand-dark-brown px-8 py-3 rounded-full font-bold text-center hover:bg-brand-gold transition-colors"
              >
                Book Consultation
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-full font-bold text-center hover:bg-white/10 transition-colors"
              >
                Free Assessment
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2070&auto=format&fit=crop"
              alt="Advanced laser treatment equipment" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-brand-gold">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4 font-serif">
              Why Choose Our Laser Treatments?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-dark-brown rounded-full flex items-center justify-center text-white text-2xl">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-dark-brown mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
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
              Our Laser Treatment Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive laser solutions for various skin and hair concerns
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
                      <span className="text-sm font-medium text-brand-dark-brown">Treatment Areas:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {treatment.areas.map((area, areaIndex) => (
                          <span key={areaIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {area}
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
                      <span className="text-sm text-gray-600">Sessions:</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{treatment.sessions}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Expected Results:</span>
                      <span className="bg-brand-dark-brown text-white px-2 py-1 rounded text-sm">{treatment.results}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 bg-brand-dark-brown text-white py-3 rounded-full font-bold text-center block hover:bg-brand-brown transition-colors"
                  >
                    Schedule Treatment
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Laser Types */}
          <div className="bg-brand-gold rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-dark-brown mb-6 text-center font-serif">
              Our Advanced Laser Systems
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {laserTypes.map((laser, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h4 className="text-lg font-bold text-brand-dark-brown mb-2">{laser.name}</h4>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm mb-2 inline-block">{laser.wavelength}</span>
                  <p className="text-gray-600 text-sm">{laser.use}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-dark-brown">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Experience the Power of Advanced Laser Technology
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation to determine the best laser treatment for your specific needs and skin type.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-dark-brown px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors inline-block"
          >
            Book Your Free Laser Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LaserTreatments;