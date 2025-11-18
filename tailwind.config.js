/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'rotate-vision': 'rotateVision 3s ease-in-out infinite',
        'pulse-tip': 'pulseTip 2s ease-in-out infinite', // NEW
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        glow: { '0%': { boxShadow: '0 0 20px rgba(239, 68, 68, 0.3)' }, '100%': { boxShadow: '0 0 30px rgba(239, 68, 68, 0.6)' } },
        rotateVision: { '0%': { transform: 'rotateY(0deg)' }, '50%': { transform: 'rotateY(180deg)' }, '100%': { transform: 'rotateY(360deg)' } },
        pulseTip: { 
          '0%': { boxShadow: '0 0 10px rgba(0,0,0,0.3)' }, 
          '50%': { boxShadow: '0 0 20px rgba(0,0,0,0.6)' }, 
          '100%': { boxShadow: '0 0 10px rgba(0,0,0,0.3)' } 
        }, // NEW
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};



