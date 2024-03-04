/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        'light-pink': 'hsl(321, 100%, 78%)',
        'light-red': 'hsl(0, 100%, 63%)',
        'very-Dark-Cyan': 'hsl(192, 100%, 9%)',
        'very-pale-blue': 'hsl(207, 100%, 98%)',
      },
      fontFamily: {
        sans: 'Open Sans',
        Poppins: 'Poppins',
      },
    },
  },
  plugins: [],
};
