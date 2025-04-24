/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        indigo: {
          900: '#1a237e',
          800: '#283593',
        },
      },
    },
  },
  plugins: [],
};