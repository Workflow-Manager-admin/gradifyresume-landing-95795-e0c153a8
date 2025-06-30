module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6',
        accent: '#38BDF8',
        secondary: '#000000',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 6px 30px -6px rgba(55,55,130,0.12), 0 1.5px 16px 0 rgba(0,0,0,0.09)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #3fd0fb 0%, #3e40a1 40%, #9046d5 60%, #050505 100%)',
      },
      animation: {
        'gradient-xy': 'gradient-move-xy 8s ease-in-out infinite',
        'fade-in-up': 'fadein-up 0.8s both',
        'float-xy': 'float-xy 7s ease-in-out infinite',
        'text-shine': 'text-shine 3.3s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(.36,1.4,.23,0.86) infinite',
        'bounce-float': 'bounce-float 4.4s cubic-bezier(.44,2,.18,-0.31) infinite'
      },
      keyframes: {
        'gradient-move-xy': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 40%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fadein-up': {
          from: { opacity: '0', transform: 'translateY(42px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'float-xy': {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-23px) translateX(15px)' },
        },
        'text-shine': {
          '0%': { backgroundPosition: '-200px 80px', color: 'inherit' },
          '40%': { backgroundPosition: '120px 80px' },
          '100%': { backgroundPosition: '-200px 80px' },
        },
        'pulse': {
          '0%,100%': { boxShadow: '0 0 0 0 #38BDF833' },
          '70%': { boxShadow: '0 0 0 12px rgba(56,189,248,0)' }
        },
        'bounce-float': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '48%': { transform: 'translateY(-25px) scale(0.99)' },
          '85%': { transform: 'translateY(-3px) scale(1)' }
        }
      }
    },
  },
  plugins: [],
};
