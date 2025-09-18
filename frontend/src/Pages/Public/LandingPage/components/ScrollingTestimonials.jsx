// src/Pages/Public/LandingPage/components/ScrollingTestimonials.jsx

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import userService from '../../../../api/userService';

const fallbackTestimonials = [
  { name: "Priya S.", quote: "The laser hair removal was painless and so effective. The staff made me feel incredibly comfortable throughout the process." },
  { name: "Ankit R.", quote: "I struggled with acne for years. After visiting Fathima Clinic, my skin has cleared up completely. Their expertise is truly remarkable." },
  { name: "Sunita M.", quote: "The anti-aging treatments have taken years off my face. I feel confident and rejuvenated every single day. Highly recommend!" },
  { name: "Rajesh K.", quote: "PRP therapy for my hair loss worked wonders. I couldn't be happier with the visible results and the professionalism of the clinic." },
  { name: "Deepa V.", quote: "The bridal package was fantastic. My skin was glowing on my wedding day, all thanks to their customized care plan." },
];

const ScrollingTestimonials = () => {
  const [items, setItems] = useState(fallbackTestimonials);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await userService.listReviewsAgree();
        const reviews = res?.data?.result?.reviews || res?.data?.data?.reviews || res?.data?.reviews;
        if (mounted && Array.isArray(reviews) && reviews.length) {
          // Deduplicate by _id to avoid any backend duplicates
          const seen = new Set();
          const unique = [];
          for (const r of reviews) {
            const id = r?._id || `${r?.name}|${r?.email}|${r?.review}`;
            if (seen.has(id)) continue;
            seen.add(id);
            unique.push(r);
          }
          const mapped = unique.map(r => ({ name: r.name || 'Guest', quote: r.review || '' }));
          setItems(mapped);
        }
      } catch {
        // ignore and keep fallbacks
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Render exactly once per testimonial

  return (
    <section className="py-24 bg-brand-gold overflow-hidden">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark-brown">What Our Patients Say</h2>
      </motion.div>

      {/* This container creates the fade-out effect on the left and right edges */}
  <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* Scrolling container */}
  <div className="flex animate-scroll hover:[animation-play-state:paused]" style={{ willChange: 'transform' }}>
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 md:w-96 mx-4 p-8 bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <blockquote className="italic text-gray-700 mb-4 leading-relaxed">
                "{item.quote}"
              </blockquote>
              <cite className="font-bold not-italic text-brand-dark-brown">
                - {item.name}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ScrollingTestimonials);