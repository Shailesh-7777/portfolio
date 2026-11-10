/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brandDark: '#030712',
        brandSpace: '#050816',
        brandSurface: '#0B0F1E',
        brandCard: '#0F162B',
        brandCardBorder: 'rgba(34, 211, 238, 0.15)',
        brandSlate: '#D7E2EA',
        brandMuted: '#94A3B8',
        accentCyan: '#00F5FF',
        accentElectric: '#38BDF8',
        accentPurple: '#A855F7',
        accentMagenta: '#EC4899',
        accentBlue: '#3B82F6',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 245, 255, 0.4), inset 0 0 15px rgba(0, 245, 255, 0.2)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.2)',
        'neon-combo': '0 0 25px rgba(0, 245, 255, 0.35), 0 0 50px rgba(168, 85, 247, 0.25)',
        '3d-float': '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 245, 255, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
        'spin-slow': 'spin 16s linear infinite',
        'orbit': 'orbit 20s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0, 245, 255, 0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.7))' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, rgba(0, 245, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 245, 255, 0.05) 1px, transparent 1px)',
        'space-glow': 'radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.15), rgba(0, 245, 255, 0.1) 40%, transparent 75%)',
      },
    },
  },
  plugins: [],
}
