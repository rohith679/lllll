// src/Pages/Public/ServicesPage/components/CustomizedCare.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaUsers, FaCalendarAlt, FaBook } from 'react-icons/fa';

const CustomizedCare = () => {
  const services = [
    {
      name: 'Teen Skincare Counseling',
      description: 'Specialized guidance for adolescent skin concerns and hormonal changes',
      features: ['Acne Management', 'Skin Education', 'Confidence Building', 'Lifestyle Tips'],
      duration: '45 min',
      frequency: 'Monthly',
      ageGroup: '13-19 years'
    },
    {
      name: 'Bridal Skin Packages',
      description: 'Complete pre-wedding skin preparation for your special day',
      features: ['Custom Treatment Plan', 'Regular Monitoring', 'Emergency Support', 'Final Touch-ups'],
      duration: '60-90 min',
      frequency: 'Bi-weekly',
      timeline: '3-6 months'
    },
    {
      name: 'Routine Skin & Hair Consultations',
      description: 'Regular check-ups and maintenance for ongoing skin and hair health',
      features: ['Progress Tracking', 'Treatment Adjustments', 'Product Updates', 'Preventive Care'],
      duration: '30-45 min',
      frequency: 'Quarterly',
      scope: 'Comprehensive'
    },
    {
      name: 'Diet & Lifestyle Counseling',
      description: 'Holistic approach to skin health through nutrition and lifestyle changes',
      features: ['Nutritional Assessment', 'Meal Planning', 'Supplement Guidance', 'Lifestyle Modifications'],
      duration: '60 min',
      frequency: 'Monthly',
      approach: 'Holistic'
    }
  ];

  const packages = [
    {
      name: 'Glow Getter Teen Package',
      description: 'Complete skincare program for teenagers',
      includes: ['Initial Consultation', '6 Monthly Sessions', 'Emergency Support', 'Educational Materials'],
      price: 'Starting from ₹15,000',
      duration: '6 months'
    },
    {
      name: 'Bridal Beauty Transformation',
      description: 'Comprehensive pre-wedding skin preparation',
      includes: ['Custom Treatment Plan', '12 Bi-weekly Sessions', 'Wedding Day Support', 'Touch-up Kit'],
      price: 'Starting from ₹45,000',
      duration: '6 months'
    },
    {
      name: 'Wellness Maintenance Program',
      description: 'Year-round skin and hair health monitoring',
      includes: ['Quarterly Consultations', 'Priority Booking', 'Discounted Treatments', 'Annual Reports'],
      price: 'Starting from ₹20,000',
      duration: '12 months'
    }
  ];

  const benefits = [
    {
      icon: <FaHeart />,
      title: 'Personalized Care',
      description: 'Treatment plans tailored to your unique needs'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Guidance',
      description: 'One-on-one consultation with specialists'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Ongoing Support',
      description: 'Continuous monitoring and plan adjustments'
    },
    {
      icon: <FaBook />,
      title: 'Education & Awareness',
      description: 'Learn about your skin and maintain results'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-dark-brown">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm inline-block mb-4">
              Customized Skin & Hair Care Plans
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Your Personalized Journey to Healthy Skin
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Tailored treatment plans, expert consultations, and ongoing support designed specifically for your unique skin and hair needs at every life stage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-brand-dark-brown px-8 py-3 rounded-full font-bold text-center hover:bg-brand-gold transition-colors"
              >
                Get Custom Plan
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
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
              alt="Customized skincare consultation" 
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
              Why Choose Customized Care?
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

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-brown mb-4 font-serif">
              Our Customized Care Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized programs designed for different life stages and skin concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-brand-dark-brown mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-brand-dark-brown">Key Features:</span>
                      <div className="grid grid-cols-2 gap-1 mt-1">
                        {service.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs text-gray-600">Duration</div>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{service.duration}</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Frequency</div>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{service.frequency}</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600">Scope</div>
                        <span className="bg-brand-dark-brown text-white px-2 py-1 rounded text-xs">
                          {service.ageGroup || service.timeline || service.scope || service.approach}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 bg-brand-dark-brown text-white py-3 rounded-full font-bold text-center block hover:bg-brand-brown transition-colors"
                  >
                    Start Custom Plan
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Package Options */}
          <div className="bg-brand-gold rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-dark-brown mb-6 text-center font-serif">
              Our Popular Care Packages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 relative">
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
                      className="w-full bg-brand-dark-brown text-white py-3 rounded-full font-bold text-center block hover:bg-brand-brown transition-colors"
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

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brand-dark-brown mb-4 font-serif">
              How Our Customized Care Process Works
            </h3>
            <p className="text-gray-600">
              A systematic approach to creating your perfect skincare journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assessment', desc: 'Comprehensive skin and lifestyle analysis' },
              { step: '02', title: 'Planning', desc: 'Custom treatment plan creation' },
              { step: '03', title: 'Treatment', desc: 'Personalized therapy sessions' },
              { step: '04', title: 'Monitoring', desc: 'Progress tracking and plan adjustments' }
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
            Start Your Personalized Skincare Journey Today
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book a consultation to receive a customized treatment plan designed specifically for your skin's unique needs and goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-dark-brown px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors inline-block"
          >
            Get Your Custom Care Plan
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomizedCare;