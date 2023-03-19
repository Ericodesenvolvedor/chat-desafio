/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      'primary': {
        100: '#633BBC',
        200: '#282843',
        300: '#1A1924',
      },
      'gray': '#E1E1E6',
      'white': '#FFFFFF',
      'green': '#07847E',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      spacing: {
        'margin26': '1.625rem',
        'margin30': '1.875rem',
      },
    }
  },
  plugins: [],
}
