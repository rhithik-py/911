/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0D',
        accent1: '#C0C0C0',
        accent2: '#D72638',
        hoverBlue: '#007BFF'
      },
      boxShadow: {
        'neon-red': '0 4px 18px rgba(215,38,56,0.16), 0 0 14px rgba(215,38,56,0.08)',
        'neon-blue': '0 6px 34px rgba(0,123,255,0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
