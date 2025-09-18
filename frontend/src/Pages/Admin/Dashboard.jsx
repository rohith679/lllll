import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const cards = [
    { title: 'Contacts', desc: 'Manage and export contact submissions', href: '/admin/contacts' },
    { title: 'Reviews', desc: 'Approve, edit, delete and export reviews', href: '/admin/reviews' },
    { title: 'Services', desc: 'Manage quick service requests', href: '/admin/services' },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
      <h2 className="text-2xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c, idx) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}>
            <Link to={c.href} className="group block bg-white rounded-lg p-5 shadow hover:shadow-md transition">
              <div className="text-lg font-medium group-hover:text-pink-700">{c.title}</div>
              <div className="text-sm text-gray-600">{c.desc}</div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Dashboard;


