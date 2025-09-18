// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#8C6D6F',
        'brand-brown-dark': '#6F5758',
        'brand-pink': '#E83E8C',
        'brand-gold': '#F2EBE3',
        'brand-dark-brown': '#2E2A2B',
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
      },
      // FINALIZED ANIMATION SUITE
      keyframes: {
        // For the footer CTA banner and other glows
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        // For the continuous, non-intrusive scrolling of testimonials
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // For subtle shimmer effects on buttons
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        aurora: 'aurora 15s ease infinite',
        scroll: 'scroll 60s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}