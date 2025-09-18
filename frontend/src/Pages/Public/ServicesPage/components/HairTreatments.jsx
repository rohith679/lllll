// src/Pages/Public/ServicesPage/components/HairTreatments.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCut, FaTint, FaLeaf, FaUsers } from 'react-icons/fa';

const HairTreatments = () => {
  const treatments = [
    {
      name: 'PRP Therapy for Hair Regrowth',
      description: 'Platelet-rich plasma therapy to stimulate natural hair growth and thickness',
      process: ['Blood Collection', 'Platelet Separation', 'Scalp Injection', 'Growth Stimulation'],
      sessions: '6-8 sessions',
      results: '3-6 months',
      effectiveness: '85% success rate'
    },
    {
      name: 'Hair Fall Control Treatments',
      description: 'Comprehensive therapy to stop hair loss and strengthen existing hair',
      process: ['Scalp Analysis', 'Root Strengthening', 'Nutrient Therapy', 'Growth Monitoring'],
      sessions: '8-12 sessions',
      results: '2-4 months',
      effectiveness: '90% reduction'
    },
    {
      name: 'Scalp Detox & Deep Nourishment',
      description: 'Intensive scalp cleansing and nourishment for optimal hair health',
      process: ['Deep Cleansing', 'Exfoliation', 'Nutrient Infusion', 'Scalp Massage'],
      sessions: '4-6 sessions',
      results: '1-2 months',
      effectiveness: '95% satisfaction'
    },
    {
      name: 'Dandruff & Itchy Scalp Care',
      description: 'Targeted treatment for scalp conditions causing dandruff and irritation',
      process: ['Condition Assessment', 'Antifungal Treatment', 'pH Balance', 'Maintenance Care'],
      sessions: '4-8 sessions',
      results: '2-6 weeks',
      effectiveness: '92% improvement'
    }
  ];

  const causes = [
    {
      title: 'Hormonal Changes',
      description: 'Androgenetic alopecia, pregnancy, menopause'
    },
    {
      title: 'Nutritional Deficiency',
      description: 'Iron, protein, vitamin deficiencies'
    },
    {
      title: 'Stress & Lifestyle',
      description: 'Physical and emotional stress factors'
    },
    {
      title: 'Medical Conditions',
      description: 'Thyroid disorders, autoimmune diseases'
    }
  ];

  const benefits = [
    {
      icon: <FaCut />,
      title: 'Hair Regrowth',
      description: 'Stimulate dormant follicles for new hair growth'
    },
    {
      icon: <FaTint />,
      title: 'Scalp Health',
      description: 'Improve scalp circulation and health'
    },
    {
      icon: <FaLeaf />,
      title: 'Natural Solutions',
      description: 'Safe, natural treatments without side effects'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Care',
      description: 'Specialized trichology and dermatology expertise'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-dark-brown">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm inline-block mb-4">
              Hair Treatments
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Restore Your Hair's Natural Beauty
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Advanced hair restoration and scalp treatments to combat hair loss, promote growth, and maintain healthy, beautiful hair using proven medical techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-brand-dark-brown px-8 py-3 rounded-full font-bold text-center hover:bg-brand-gold transition-colors"
              >
                Book Hair Analysis
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-full font-bold text-center hover:bg-white/10 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
              alt="Hair treatment and PRP therapy" 
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
              Why Choose Our Hair Treatments?
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
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-dark-brown rounded-full flex items-center justify-center text-white text-2xl">
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
              Our Hair Treatment Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for all hair and scalp concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {treatments.map((treatment, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark-brown mb-2">{treatment.name}</h3>
                  <p className="text-gray-600 mb-4">{treatment.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-brand-dark-brown">Treatment Process:</span>
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        {treatment.process.map((step, stepIndex) => (
                          <span key={stepIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs text-gray-600">Sessions</div>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{treatment.sessions}</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Results</div>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{treatment.results}</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Success Rate</div>
                        <span className="bg-brand-dark-brown text-white px-2 py-1 rounded text-xs">{treatment.effectiveness}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 bg-brand-dark-brown text-white py-3 rounded-full font-bold text-center block hover:bg-brand-brown transition-colors"
                  >
                    Start Treatment
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hair Loss Causes */}
          <div className="bg-brand-gold rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-dark-brown mb-6 text-center font-serif">
              Common Causes of Hair Loss We Treat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {causes.map((cause, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                  <h4 className="text-lg font-bold text-brand-dark-brown mb-2">{cause.title}</h4>
                  <p className="text-gray-600 text-sm">{cause.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRP Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brand-dark-brown mb-4 font-serif">
              How PRP Therapy Works
            </h3>
            <p className="text-gray-600">
              Understanding the science behind our most effective hair regrowth treatment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Blood Draw', desc: 'Small blood sample collected from patient' },
              { step: '02', title: 'Centrifuge', desc: 'Blood processed to separate platelet-rich plasma' },
              { step: '03', title: 'Injection', desc: 'PRP injected into scalp at hair follicle level' },
              { step: '04', title: 'Growth', desc: 'Growth factors stimulate dormant hair follicles' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-brand-dark-brown rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <h4 className="font-semibold text-brand-dark-brown mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-dark-brown">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Take the First Step Towards Healthier Hair
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a comprehensive hair and scalp analysis to determine the best treatment plan for your specific needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-dark-brown px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors inline-block"
          >
            Book Your Hair Analysis Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HairTreatments;