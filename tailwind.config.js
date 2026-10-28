/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:      '#2b3433',   // forest / resort-dark
        paper:    '#f5f1e8',   // warm neutral background
        laterite: '#a4452c',   // primary accent — cottage-roof red
        sal:      '#3f5b3a',   // secondary green, use sparingly
        muted:    '#5b6361',   // body / secondary text
        hairline: '#d9d3c5',   // borders
        gold:     '#b8923a',   // tiny detail only
      },
      fontFamily: {
        garamond: ['"EB Garamond"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      fontSize: {
        body: ['18px', { lineHeight: '1.7' }],
      },
    },
  },
  plugins: [],
}
