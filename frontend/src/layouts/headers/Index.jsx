// src/layouts/headers/Index.jsx

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaTimes, FaBolt, FaStar } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import userService from '../../api/userService';

const logoUrl = "https://dummy-testing123.s3.ap-south-1.amazonaws.com/1757594437503-screenshot-2025-07-01-at-9.14.27a-am-m6LbrGO8q8u17rjK.avif";

// CHANGE 1: Create a single, unified array for navigation links.
// This is now the single source of truth for both desktop and mobile views.
const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: 'Services', path: '/services' },
  { title: 'Contact Us', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isQuickOpen, setIsQuickOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const [quickForm, setQuickForm] = useState({ name: '', countryCode: '+91', phone: '', email: '', serviceType: '', message: '' });
  const [reviewForm, setReviewForm] = useState({ name: '', email: '', organization: '', rating: 1, category: 'Overall Experience', review: '', agree: true });
  const [submitting, setSubmitting] = useState(false);
  const [quickSuccess, setQuickSuccess] = useState(false);
  const [reviewSuccess, setReviewSuccess] = useState(false);

  useEffect(() => {
    // Throttle scroll handling and mark listener passive to improve scroll performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { 
    if (mobileOpen) {
      setMobileOpen(false); 
    }
  }, [location.pathname]);

  const DesktopNavLink = ({ to, children }) => (
    <NavLink to={to} className="relative group font-serif text-xl font-semibold text-brand-brown transition-colors duration-300 hover:text-brand-pink">
      <span className="relative z-10">{children}</span>
      <span className={`absolute bottom-[-4px] left-0 w-full h-[3px] bg-brand-pink transform origin-center transition-transform duration-300 ease-out group-hover:scale-x-100 ${location.pathname === to ? 'scale-x-100' : 'scale-x-0'}`}></span>
    </NavLink>
  );

  // Helper component to keep the mobile link styling consistent
  const MobileNavLink = ({ to, children }) => (
      <NavLink to={to} onClick={() => setMobileOpen(false)} className="block w-full text-left px-4 py-3 rounded-lg text-brand-brown font-bold hover:bg-brand-gold transition-colors duration-200">
          {children}
      </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== TOP TIER ===== */}
        <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-1' : 'py-4'}`}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/" className="flex items-center group">
              <motion.img 
                src={logoUrl} 
                alt="Fathima Clinic Logo" 
                className={`object-contain transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}
                whileHover={{ scale: 1.1, rotateZ: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <div className="ml-3">
                <h1 className="font-serif text-xl md:text-2xl font-bold text-brand-dark-brown">Fathima Skin & Hair Clinic</h1>
                <p className="text-sm text-gray-600">Expert Care • Trusted Results</p>
              </div>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{ scale: 1.05 }} className="text-right">
              <div className="text-sm text-gray-600">Call Us</div>
              <a href="tel:+911234567890" className="text-md font-semibold text-brand-brown hover:text-brand-pink">+91 12345 67890</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-right">
              <div className="text-sm text-gray-600">Email Us</div>
              <a href="mailto:contact@fathimaclinic.com" className="text-md font-semibold text-brand-brown hover:text-brand-pink">contact@fathimaclinic.com</a>
            </motion.div>
          </div>
          
          <div className="md:hidden">
            <button type="button" className="p-2 rounded-md text-brand-brown" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes className="text-2xl"/> : <span className="text-3xl">&#9776;</span>}
            </button>
          </div>
        </div>
        <hr className="hidden md:block"/>

        {/* ===== BOTTOM TIER ===== */}
        <div className="hidden md:flex justify-between items-center py-3">
          <nav className="flex items-center space-x-8">
            {/* CHANGE 2: The desktop navigation now maps over the single 'navLinks' array */}
            {navLinks.map(link => <DesktopNavLink key={link.path} to={link.path}>{link.title}</DesktopNavLink>)}
          </nav>
          
          <div className="flex items-center space-x-4">
            <motion.button
              type="button"
              onClick={() => setIsQuickOpen(true)}
              className="relative group flex justify-center items-center bg-blue-600 text-white w-40 h-12 rounded-full font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:w-48"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaBolt className="absolute left-4 text-yellow-300" />
              <span className="absolute transition-transform duration-500 ease-in-out group-hover:-translate-y-8">Quick Service</span>
              <span className="absolute transition-transform duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">Open Form</span>
            </motion.button>

            <motion.button
              type="button"
              onClick={() => setIsReviewOpen(true)}
              className="relative group flex justify-center items-center bg-green-600 text-white w-40 h-12 rounded-full font-semibold shadow-lg overflow-hidden transition-all duration-300 hover:bg-green-700 hover:shadow-xl hover:w-48"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <FaStar className="absolute left-4 text-yellow-300" />
              <span className="absolute transition-transform duration-500 ease-in-out group-hover:-translate-y-8">Add Review</span>
              <span className="absolute transition-transform duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">Write Now</span>
            </motion.button>

            <motion.a 
              href="tel:+910000000000"
              className="relative group flex justify-center items-center bg-brand-brown text-white w-36 h-12 rounded-full font-bold shadow-lg overflow-hidden transition-all duration-300 hover:bg-brand-brown-dark hover:shadow-xl hover:w-48"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="absolute transition-transform duration-500 ease-in-out group-hover:-translate-y-8">Call Now</span>
              <span className="absolute transition-transform duration-500 ease-in-out translate-y-8 group-hover:translate-y-0">+91 12345 67890</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: "auto", opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="md:hidden bg-white shadow-inner absolute w-full"
          >
            <div className="p-4 space-y-2">
              {/* CHANGE 3: The mobile navigation now maps over the SAME 'navLinks' array */}
              {navLinks.map(link => <MobileNavLink key={link.path} to={link.path}>{link.title}</MobileNavLink>)}
              <hr className="my-3"/>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => { setIsQuickOpen(true); setMobileOpen(false); }} className="flex items-center justify-center gap-2 h-12 rounded-full bg-blue-600 text-white font-semibold"><FaBolt className="text-yellow-300"/> Quick Service</button>
                <button onClick={() => { setIsReviewOpen(true); setMobileOpen(false); }} className="flex items-center justify-center gap-2 h-12 rounded-full bg-green-600 text-white font-semibold"><FaStar className="text-yellow-300"/> Add Review</button>
              </div>
              <div className="flex justify-around items-center mt-3">
                <a href="tel:+911234567890" className="text-brand-brown font-semibold">Call Us</a>
                <a href="mailto:contact@fathimaclinic.com" className="text-brand-brown font-semibold">Email Us</a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ===== QUICK SERVICE MODAL ===== */}
      <AnimatePresence>
        {isQuickOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-brand-dark-brown">Request Quick Service</h3>
                <button onClick={() => { setIsQuickOpen(false); setQuickSuccess(false); }} className="text-gray-500 hover:text-gray-700"><FaTimes/></button>
              </div>
              {!quickSuccess ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  try {
                    await userService.createQuickService({
                      name: quickForm.name,
                      phone: `${quickForm.countryCode}${quickForm.phone}`,
                      email: quickForm.email,
                      serviceType: quickForm.serviceType,
                      message: quickForm.message,
                    });
                    toast.success('Request submitted');
                    setQuickSuccess(true);
                    setQuickForm({ name: '', countryCode: '+91', phone: '', email: '', serviceType: '', message: '' });
                  } catch (err) {
                    const msg = err?.response?.data?.message || 'Failed to submit request';
                    toast.error(msg);
                  } finally { setSubmitting(false); }
                }}
                className="space-y-4"
              >
                <div>
                  <label className="text-sm font-medium text-gray-700">Full Name<span className="text-red-500">*</span></label>
                  <input required value={quickForm.name} onChange={(e)=>setQuickForm(v=>({ ...v, name: e.target.value }))} className="mt-1 w-full h-12 rounded-lg border border-gray-300 px-4 focus:border-brand-pink focus:outline-none" placeholder="Enter your full name"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Phone Number<span className="text-red-500">*</span></label>
                  <div className="mt-1 flex gap-2">
                    <input
                      value={quickForm.countryCode}
                      onChange={(e)=>setQuickForm(v=>({ ...v, countryCode: e.target.value }))}
                      className="w-24 h-12 rounded-lg border border-gray-300 px-3 focus:border-brand-pink focus:outline-none"
                      placeholder="+91"
                      pattern="^\+[0-9]{1,3}$"
                      title="Use international format, e.g., +91"
                    />
                    <input
                      required
                      value={quickForm.phone}
                      onChange={(e)=>setQuickForm(v=>({ ...v, phone: e.target.value.replace(/\D/g,'') }))}
                      className="flex-1 h-12 rounded-lg border border-gray-300 px-4 focus:border-brand-pink focus:outline-none"
                      placeholder="10-digit number"
                      pattern="^[0-9]{10}$"
                      title="Enter a valid 10-digit phone number"
                      inputMode="numeric"
                      maxLength={10}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
                  <input
                    required
                    type="email"
                    value={quickForm.email}
                    onChange={(e)=>setQuickForm(v=>({ ...v, email: e.target.value }))}
                    className="mt-1 w-full h-12 rounded-lg border border-gray-300 px-4 focus:border-brand-pink focus:outline-none"
                    placeholder="Enter your email"
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                    title="Enter a valid email address"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Service Type<span className="text-red-500">*</span></label>
                  <select required value={quickForm.serviceType} onChange={(e)=>setQuickForm(v=>({ ...v, serviceType: e.target.value }))} className="mt-1 w-full h-12 rounded-lg border border-gray-300 px-4 bg-white focus:border-brand-pink focus:outline-none">
                    <option value="" disabled>Choose service type</option>
                    <option>Skin</option>
                    <option>Hair</option>
                    <option>Laser</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <textarea value={quickForm.message} onChange={(e)=>setQuickForm(v=>({ ...v, message: e.target.value }))} className="mt-1 w-full min-h-28 rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-pink focus:outline-none" placeholder="Describe your issue (optional)"/>
                </div>
                <div className="pt-2">
                  <button disabled={submitting} className="w-full h-12 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">{submitting ? 'Submitting...' : 'Submit Request'}</button>
                </div>
              </form>
              ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center shadow">
                    <span className="text-green-600 text-3xl">✓</span>
                  </div>
                  <h4 className="text-xl font-semibold text-brand-dark-brown">Request Submitted</h4>
                  <p className="text-gray-600 mt-1">We will contact you shortly.</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button onClick={() => { setQuickSuccess(false); }} className="h-11 rounded-full bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100">New Request</button>
                    <button onClick={() => { setIsQuickOpen(false); setQuickSuccess(false); }} className="h-11 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700">Close</button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== REVIEW MODAL ===== */}
      <AnimatePresence>
        {isReviewOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-brand-dark-brown">Add Your Review</h3>
                <button onClick={() => { setIsReviewOpen(false); setReviewSuccess(false); }} className="text-gray-500 hover:text-gray-700"><FaTimes/></button>
              </div>
              {!reviewSuccess ? (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setSubmitting(true);
                  try {
                    await userService.createReview({
                      name: reviewForm.name,
                      email: reviewForm.email,
                      organization: reviewForm.organization,
                      rating: Number(reviewForm.rating),
                      category: reviewForm.category,
                      review: reviewForm.review,
                      agree: reviewForm.agree,
                    });
                    toast.success('Review submitted');
                    setReviewSuccess(true);
                    setReviewForm({ name: '', email: '', organization: '', rating: 1, category: 'Overall Experience', review: '', agree: true });
                  } catch (err) {
                    const msg = err?.response?.data?.message || 'Failed to submit review';
                    toast.error(msg);
                  } finally { setSubmitting(false); }
                }}
                className="grid grid-cols-1 gap-4"
              >
                <div>
                  <label className="text-sm font-medium text-gray-700">Name<span className="text-red-500">*</span></label>
                  <input required value={reviewForm.name} onChange={(e)=>setReviewForm(v=>({ ...v, name: e.target.value }))} className="mt-1 w-full h-12 rounded-lg border border-gray-300 px-4 focus:border-brand-pink focus:outline-none" placeholder="Enter your name"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
                  <input type="email" required value={reviewForm.email} onChange={(e)=>setReviewForm(v=>({ ...v, email: e.target.value }))} className="mt-1 w-full h-12 rounded-lg border border-gray-300 px-4 focus:border-brand-pink focus:outline-none" placeholder="Enter your email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" title="Enter a valid email address"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Organization</label>
                  <input value={reviewForm.organization} onChange={(e)=>setReviewForm(v=>({ ...v, organization: e.target.value }))} className="mt-1 w-full h-12 rounded-lg border border-gray-300 px-4 focus:border-brand-pink focus:outline-none" placeholder="Company or designation"/>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Rating<span className="text-red-500">*</span></label>
                  <div className="mt-1 flex gap-2">
                    {[1,2,3,4,5].map(n => (
                      <button key={n} type="button" onClick={()=>setReviewForm(v=>({ ...v, rating: n }))} className={`h-10 w-10 rounded-full flex items-center justify-center border ${reviewForm.rating >= n ? 'bg-yellow-400 text-white border-yellow-400' : 'bg-white text-gray-500 border-gray-300'}`}>★</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Review Category</label>
                  <select value={reviewForm.category} onChange={(e)=>setReviewForm(v=>({ ...v, category: e.target.value }))} className="mt-1 w-full h-12 rounded-lg border border-gray-300 px-4 bg-white focus:border-brand-pink focus:outline-none">
                    <option>Overall Experience</option>
                    <option>Skin Treatment</option>
                    <option>Hair Treatment</option>
                    <option>Laser Treatment</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Review<span className="text-red-500">*</span></label>
                  <textarea required value={reviewForm.review} onChange={(e)=>setReviewForm(v=>({ ...v, review: e.target.value }))} className="mt-1 w-full min-h-28 rounded-lg border border-gray-300 px-4 py-3 focus:border-brand-pink focus:outline-none" placeholder="Share your experience with us..."/>
                </div>
                <label className="inline-flex items-center gap-3">
                  <input type="checkbox" checked={reviewForm.agree} onChange={(e)=>setReviewForm(v=>({ ...v, agree: e.target.checked }))} className="h-4 w-4"/>
                  <span>I agree to publish this review on the website</span>
                </label>
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <button type="button" onClick={()=>setIsReviewOpen(false)} className="h-12 rounded-full bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200">Cancel</button>
                  <button disabled={submitting} className="h-12 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 disabled:opacity-60">{submitting ? 'Submitting...' : 'Submit Review'}</button>
                </div>
              </form>
              ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 flex items-center justify-center shadow">
                    <span className="text-green-600 text-3xl">✓</span>
                  </div>
                  <h4 className="text-xl font-semibold text-brand-dark-brown">Thank you for your review!</h4>
                  <p className="text-gray-600 mt-1">Once approved, it will appear on our website.</p>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button onClick={() => { setReviewSuccess(false); }} className="h-11 rounded-full bg-green-50 text-green-700 font-semibold hover:bg-green-100">Write Another</button>
                    <button onClick={() => { setIsReviewOpen(false); setReviewSuccess(false); }} className="h-11 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700">Close</button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}