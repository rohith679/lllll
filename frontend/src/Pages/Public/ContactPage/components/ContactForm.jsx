// src/Pages/Public/ContactPage/components/ContactForm.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import userService from '../../../../api/userService';

const FloatingLabelInput = ({ id, label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0;
  const isActive = isFocused || hasValue;
  return (
    <div className="relative">
      <motion.label htmlFor={id} className="absolute left-4 transition-all duration-300 text-gray-400 pointer-events-none" animate={{ y: isActive ? -10 : 20, scale: isActive ? 0.8 : 1, color: isFocused ? '#E83E8C' : '#9CA3AF' }}>{label}</motion.label>
      <props.as {...props} id={id} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="w-full h-14 bg-white/5 border-2 border-white/20 rounded-lg pt-6 px-4 text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-brand-pink transition" />
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState('idle');
  const handleInputChange = (e) => { const { name, value } = e.target; setFormData(prev => ({ ...prev, [name]: value })); };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic regex checks before submit
    const emailOk = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email);
    if (!emailOk) {
      toast.error('Please enter a valid email address');
      return;
    }
    setFormState('submitting');
    
    try {
      await userService.createContact(formData);
      setFormState('success');
      toast.success('Message sent successfully!');
    } catch (error) {
      setFormState('error');
      const errorMessage =
        error.response?.data?.result?.message ||
        error.response?.data?.message ||
        error.message ||
        'Failed to send message. Please try again.';
      toast.error(errorMessage);
    }
  };

  const cardVariants = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

  return (
    // CHANGE: Removed 3D tilt, replaced with a subtle scale/lift hover effect
    <motion.div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/20 shadow-2xl min-h-[500px] transition-all duration-300 hover:shadow-brand-pink/20" variants={cardVariants} whileHover={{ y: -5, scale: 1.02 }}>
      <AnimatePresence>
        {formState === 'success' ? (
          <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center py-10">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} className="w-24 h-24 bg-green-500/20 rounded-full mx-auto flex items-center justify-center"><FaCheck className="text-green-400 text-5xl" /></motion.div>
            <h3 className="font-serif text-2xl font-bold text-white mt-6">Thank You!</h3>
            <p className="text-gray-300 mt-2">Your message has been sent. We will get back to you shortly.</p>
          </motion.div>
        ) : formState === 'error' ? (
          <motion.div key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center py-10">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300, damping: 15 }} className="w-24 h-24 bg-red-500/20 rounded-full mx-auto flex items-center justify-center">
              <span className="text-red-400 text-5xl">!</span>
            </motion.div>
            <h3 className="font-serif text-2xl font-bold text-white mt-6">Error</h3>
            <p className="text-gray-300 mt-2">There was an error sending your message. Please try again.</p>
            <button 
              onClick={() => setFormState('idle')} 
              className="mt-4 bg-brand-pink text-white font-bold py-2 px-6 rounded-full hover:bg-white hover:text-brand-pink transition-all duration-300"
            >
              Try Again
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.h3 variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }} className="font-serif text-3xl font-bold text-white">Send us a Message</motion.h3>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}><FloatingLabelInput as="input" type="text" name="name" id="name" label="Full Name" required value={formData.name} onChange={handleInputChange} /></motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <FloatingLabelInput
                as="input"
                type="email"
                name="email"
                id="email"
                label="Email Address"
                required
                value={formData.email}
                onChange={handleInputChange}
                pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                title="Enter a valid email address"
              />
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}><FloatingLabelInput as="textarea" name="message" id="message" label="Message" rows="4" required value={formData.message} onChange={handleInputChange} /></motion.div>
            <motion.button 
              type="submit" 
              disabled={formState === 'submitting'} 
              className="relative w-full bg-brand-pink text-white font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all duration-300 hover:bg-white hover:text-brand-pink disabled:bg-gray-400 disabled:cursor-not-allowed overflow-hidden" 
              whileHover={formState !== 'submitting' ? { scale: 1.05 } : {}}
              whileTap={formState !== 'submitting' ? { scale: 0.95 } : {}}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%] animate-shimmer"></span>
              <span className="relative">{formState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default ContactForm;