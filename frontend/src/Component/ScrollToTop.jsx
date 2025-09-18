// src/Component/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Keep this effect minimal and use requestAnimationFrame to batch DOM writes
    const scrollToTop = () => {
      try {
        // Some browsers may not support behavior: 'auto' in scroll(); fallback below
        window.scrollTo(0, 0);
      } catch (e) {
        window.scrollTo(0, 0);
      }
    };
    window.requestAnimationFrame(scrollToTop);
  }, [pathname]);

  return null;
};

export default ScrollToTop;