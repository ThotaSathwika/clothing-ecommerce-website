/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#111111', bone: '#f4f1ec', stone: '#e7e2d9', clay: '#b4643c' },
      fontFamily: { display: ['Syne', 'sans-serif'], sans: ['Inter', 'sans-serif'] },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'none' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        slideIn: { '0%': { opacity: 0, transform: 'translateY(16px)' }, '100%': { opacity: 1, transform: 'none' } },
      },
      animation: { fadeUp: 'fadeUp .9s cubic-bezier(.2,.7,.2,1) both', marquee: 'marquee 25s linear infinite', slideIn: 'slideIn .3s ease both' },
    },
  },
  plugins: [],
}
