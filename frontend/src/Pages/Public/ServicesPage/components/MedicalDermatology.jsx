// src/Pages/Public/ServicesPage/components/MedicalDermatology.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaClock, FaUsers, FaAward } from 'react-icons/fa';

const MedicalDermatology = () => {
  const treatments = [
    {
      name: 'Acne & Scar Treatment',
      description: 'Comprehensive acne management and advanced scar reduction therapies using the latest medical protocols',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop',
      duration: '30-60 min',
      sessions: '4-8 sessions',
      details: 'Our advanced acne treatment program combines topical retinoids, oral antibiotics, and professional extraction techniques. For scar reduction, we offer chemical peels, microneedling, and laser resurfacing to improve skin texture and appearance.',
      benefits: ['Reduced active acne', 'Minimized scarring', 'Improved skin texture', 'Long-term results']
    },
    {
      name: 'Psoriasis & Eczema Management',
      description: 'Specialized treatment plans for chronic inflammatory skin conditions with personalized care',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',
      duration: '45 min',
      sessions: 'Ongoing care',
      details: 'We provide comprehensive management for chronic inflammatory conditions through topical corticosteroids, immunomodulators, and biologic therapies. Our approach includes lifestyle modifications and trigger identification.',
      benefits: ['Symptom control', 'Reduced inflammation', 'Improved quality of life', 'Long-term management']
    },
    {
      name: 'Vitiligo Treatment',
      description: 'Advanced phototherapy and topical treatments for pigmentation restoration',
      imageUrl: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2070&auto=format&fit=crop',
      duration: '20-30 min',
      sessions: '12-24 sessions',
      details: 'Our vitiligo treatment combines narrowband UVB phototherapy, topical calcineurin inhibitors, and JAK inhibitors to stimulate melanocyte function and restore pigmentation in affected areas.',
      benefits: ['Pigment restoration', 'Halted progression', 'Improved confidence', 'Natural-looking results']
    },
    {
      name: 'Skin Allergies & Rashes',
      description: 'Diagnostic evaluation and targeted treatment for allergic reactions and contact dermatitis',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
      duration: '30 min',
      sessions: '1-3 sessions',
      details: 'We perform comprehensive allergy testing including patch tests and provide targeted treatment with antihistamines, topical corticosteroids, and allergen avoidance strategies.',
      benefits: ['Accurate diagnosis', 'Symptom relief', 'Allergen identification', 'Prevention strategies']
    },
    {
      name: 'Fungal & Bacterial Infections',
      description: 'Expert diagnosis and treatment of various skin infections with rapid recovery protocols',
      imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2070&auto=format&fit=crop',
      duration: '20-30 min',
      sessions: '2-4 weeks',
      details: 'Our infection management includes microscopic examination, culture testing, and targeted antimicrobial therapy using topical and systemic medications for complete eradication.',
      benefits: ['Rapid healing', 'Infection clearance', 'Recurrence prevention', 'Minimal side effects']
    },
    {
      name: 'Hair Loss & Dandruff Solutions',
      description: 'Comprehensive scalp analysis and targeted hair restoration treatments',
      imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop',
      duration: '45 min',
      sessions: '6-12 sessions',
      details: 'We offer trichoscopy analysis, hormonal evaluation, and treatments including minoxidil, finasteride, PRP therapy, and medicated shampoos for scalp health optimization.',
      benefits: ['Hair regrowth', 'Scalp health', 'Reduced hair fall', 'Dandruff control']
    },
    {
      name: 'Nail Disorders',
      description: 'Treatment for fungal infections, ingrown nails, and nail diseases',
      imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop',
      duration: '20-40 min',
      sessions: '4-8 weeks',
      details: 'Our nail care includes antifungal treatments, surgical nail procedures, and management of conditions like psoriatic nails, ingrown toenails, and nail dystrophies.',
      benefits: ['Healthy nail growth', 'Infection clearance', 'Pain relief', 'Aesthetic improvement']
    },
    {
      name: 'Skin Tag / Wart / Mole Removal',
      description: 'Safe surgical and non-surgical removal of benign skin lesions',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2070&auto=format&fit=crop',
      duration: '10-30 min',
      sessions: '1-2 sessions',
      details: 'We provide professional removal using electrocautery, cryotherapy, laser ablation, and surgical excision with histopathological examination when necessary for complete peace of mind.',
      benefits: ['Safe removal', 'Minimal scarring', 'Quick procedure', 'Cosmetic improvement']
    }
  ];

  const features = [
    {
      icon: <FaAward />,
      title: 'Expert Dermatologists',
      description: 'Board-certified specialists with years of experience'
    },
    {
      icon: <FaUsers />,
      title: '10,000+ Patients Treated',
      description: 'Trusted by thousands for effective medical treatments'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Evidence-Based Care',
      description: 'Latest medical protocols and proven treatment methods'
    },
    {
      icon: <FaClock />,
      title: 'Comprehensive Evaluation',
      description: 'Thorough diagnosis and personalized treatment plans'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-brand-dark-brown">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="bg-white/20 text-white border border-white/30 px-3 py-1 rounded-full text-sm inline-block mb-4">
              Medical Dermatology
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Advanced Medical Skin Treatment
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Comprehensive dermatological care for all skin conditions using the latest medical protocols and advanced treatment technologies.
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
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop"
              alt="Medical dermatology treatment" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-brand-gold">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-dark-brown rounded-full flex items-center justify-center text-white text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-brand-dark-brown mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
              Our Medical Dermatology Treatments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive care for all skin, hair, and nail conditions with proven medical treatments
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
                      <span className="text-sm text-gray-600">Sessions:</span>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">{treatment.sessions}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="w-full mt-4 bg-brand-dark-brown text-white py-3 rounded-full font-bold text-center block hover:bg-brand-brown transition-colors"
                  >
                    Book Appointment
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-dark-brown">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Expert Medical Care for Your Skin
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Our experienced dermatologists provide comprehensive medical care using evidence-based treatments for all skin conditions.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brand-dark-brown px-8 py-3 rounded-full font-bold hover:bg-brand-gold transition-colors inline-block"
          >
            Schedule Your Consultation Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MedicalDermatology;