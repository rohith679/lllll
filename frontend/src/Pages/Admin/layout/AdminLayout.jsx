import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AdminLayout = ({ children }) => {
  const [loggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (loggingOut) return;
    setLoggingOut(true);
    setTimeout(() => {
      localStorage.removeItem('authtoken');
      navigate('/admin/login', { replace: true });
    }, 400);
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex">
        <motion.aside initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.25 }} className="w-64 bg-white shadow-lg h-screen sticky top-0 hidden md:block">
          <div className="px-6 py-5 border-b">
            <h1 className="text-xl font-semibold">Admin</h1>
            <p className="text-xs text-gray-500">Fathima Skin & Hair Clinic</p>
          </div>
          <nav className="p-3 space-y-1">
            {[
              // { to: "/admin", label: "Dashboard", end: true },
              { to: "/admin/contacts", label: "Contacts" },
              { to: "/admin/reviews", label: "Reviews" },
              { to: "/admin/services", label: "Services" }
            ].map((item, index) => (
              <motion.div 
                key={item.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink 
                  to={item.to} 
                  end={item.end}
                  className={({isActive}) => `flex items-center px-3 py-2 rounded-md text-sm transition-colors ${isActive ? 'bg-pink-100 text-pink-700' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {({ isActive }) => (
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </motion.aside>
        <main className="flex-1 min-w-0 relative">
          <header className="bg-white sticky top-0 z-10 shadow-sm">
            <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="font-semibold">Admin Panel</div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                animate={loggingOut ? { scale: [1, 1.08, 0.98, 1], rotate: [0, 2, -2, 0] } : {}}
                transition={{ duration: 0.35 }}
                onClick={handleLogout}
                className="text-sm text-white bg-pink-600 hover:bg-pink-700 rounded-md px-3 py-1"
              >
                {loggingOut ? 'Logging out…' : 'Logout'}
              </motion.button>
            </motion.div>
          </header>
          <div className="bg-brand-gold border-y border-brand-brown/20">
            <div className="max-w-7xl mx-auto px-4 py-3 text-center">
              <span className="font-serif text-lg md:text-xl font-bold text-brand-dark-brown">Fathima Skin & Hair Clinic</span>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={typeof window !== 'undefined' ? location.pathname : 'page'} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="max-w-7xl mx-auto p-4">
              {children}
            </motion.div>
          </AnimatePresence>
          {loggingOut && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="bg-white shadow rounded-md px-4 py-3 text-sm text-gray-700">
                Signing out…
              </motion.div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;


