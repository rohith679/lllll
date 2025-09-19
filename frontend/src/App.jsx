// src/App.jsx

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Import the main layout components
import Header from './layouts/headers/Index.jsx';
import Footer from './layouts/footer/Index.jsx';

// CHANGE 1: Import your existing ScrollToTop component
// Note the capitalization of the "Component" folder from your screenshot
import ScrollToTop from './Component/ScrollToTop.jsx';

// Import all of our public pages from the central export file
import { 
  LandingPage, 
  AboutPage, 
  ContactPage, 
  ServicesPage, 
  SkincarePage 
} from './Pages/Public/Index.jsx';

// Import service subpages
import MedicalDermatology from './Pages/Public/ServicesPage/components/MedicalDermatology.jsx';
import AestheticDermatology from './Pages/Public/ServicesPage/components/AestheticDermatology.jsx';
import LaserTreatments from './Pages/Public/ServicesPage/components/LaserTreatments.jsx';
import HairTreatments from './Pages/Public/ServicesPage/components/HairTreatments.jsx';
import CustomizedCare from './Pages/Public/ServicesPage/components/CustomizedCare.jsx';
import SkinBrightening from './Pages/Public/ServicesPage/components/SkinBrightening.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import ContactsPage from './Pages/Admin/ContactsPage.jsx';
import ReviewsPage from './Pages/Admin/ReviewsPage.jsx';
import AdminServicesPage from './Pages/Admin/ServicesPage.jsx';
import Login from './Pages/Admin/Login.jsx';
import AdminLayout from './Pages/Admin/layout/AdminLayout.jsx';
import Dashboard from './Pages/Admin/Dashboard.jsx';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <>
      {/* CHANGE 2: Place the ScrollToTop component here */}
      {/* It will now automatically handle scrolling for every page change */}
      <ScrollToTop />
      
      {!isAdminRoute && <Header />}

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/medical-dermatology" element={<MedicalDermatology />} />
          <Route path="/services/aesthetic-dermatology" element={<AestheticDermatology />} />
          <Route path="/services/laser-treatments" element={<LaserTreatments />} />
          <Route path="/services/hair-treatments" element={<HairTreatments />} />
          <Route path="/services/customized-care" element={<CustomizedCare />} />
          <Route path="/services/skin-brightening" element={<SkinBrightening />} />
          <Route path="/skincare" element={<SkincarePage />} />
          <Route path="/admin/login" element={<Login />} />
          {/* <Route path="/admin" element={<PrivateRoute><AdminLayout><Dashboard /></AdminLayout></PrivateRoute>} /> */}
          <Route path="/admin/contacts" element={<PrivateRoute><AdminLayout><ContactsPage /></AdminLayout></PrivateRoute>} />
          <Route path="/admin/reviews" element={<PrivateRoute><AdminLayout><ReviewsPage /></AdminLayout></PrivateRoute>} />
          <Route path="/admin/services" element={<PrivateRoute><AdminLayout><AdminServicesPage /></AdminLayout></PrivateRoute>} />
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;