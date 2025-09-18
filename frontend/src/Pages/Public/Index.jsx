// src/Pages/Public/Index.jsx

import React from 'react';

// --- Real, Completed Pages ---
// This section imports the final, multi-component pages we have built.
import LandingPage from './LandingPage/Index.jsx'; 
import AboutPage from './AboutPage/Index.jsx';       // CHANGE: Now importing the real About Page
import ContactPage from './ContactPage/Index.jsx';     // CHANGE: Now importing the real Contact Page
import ServicesPage from './ServicesPage/Index.jsx'; // NEW: Real Services Page

// --- Placeholder Pages (for pages not yet built) ---
// This section is for pages your teammate is working on, so the links work without errors.
const placeholderStyle = "h-screen pt-40 flex items-start justify-center text-center font-serif text-4xl text-brand-dark-brown bg-brand-gold px-4";

const SkincarePage = () => <div className={placeholderStyle}>Main Skincare Page - Coming Soon</div>;


// This is the central export point for all public pages.
// Your main App.jsx file will import all pages from here.
export {
  LandingPage,
  AboutPage,
  ContactPage,
  ServicesPage,
  SkincarePage
};