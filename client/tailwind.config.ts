/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        accent: {
          '50': '#f6fbfe',
          '100': '#e8f4fd',
          '200': '#c2e7fa',
          '300': '#89d3f5',
          '400': '#48bdef',
          '500': '#2bade9',
          '600': '#0f83bd',
          '700': '#0d6a9c',
          '800': '#0e5981',
          '900': '#0f4d70',
          '950': '#0a324c',
        },
        primary: {
          '50': '#b9c3c6',
          '100': '#a8b4b8',
          '200': '#94a4a8',
          '300': '#73888c',
          '400': '#536165',
          '500': '#434d51',
          '600': '#434a51',
          '700': '#434951',
          '800': '#373c43',
          '900': '#202327',
          '950': '#000000',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
