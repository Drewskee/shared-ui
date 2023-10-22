/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/stories/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        black: '#171717',
        white: '#eef1f4',
        brand: {
          default: '#e3e3e3', // => .bg-brand-default
          primary: "#4672FE", // blue 500 // => .bg-brand-primary 
          primaryHover : "#2a4498", // blue 700
          primaryDisabled : "#5e5e5e", // gray 600

          secondary: "#f55560", // peach 500 // => .bg-brand-secondary
          secondaryHover: "#f77780", // peach 400 // => .bg-brand-secondaryHover
          secondaryDisabled: "#5e5e5e", // gray 600 // => .bg-brand-secondaryDisabled

          tertiary: "#be5ec8", // purple 500 // => .bg-brand-tertiary
          tertiaryHover: "#723878", // purple 700 // => .bg-brand-tertiary
          tertiaryDisabled: "#5e5e5e", // gray 600 // => .bg-brand-tertiary

          ghost: "#6b8efe", // blue 400 // => .bg-brand-tertiary
          ghostHover: "#4672FE", // blue 700 // => .bg-brand-tertiary
          ghostDisabled: "#5e5e5e", // gray 600 // => .bg-brand-tertiary
        },
        peach: {
          50: '#feeeef',
          100: '#fddddf',
          200: '#fbbbbf',
          300: '#f999a0',
          400: '#f77780',
          500: '#f55560',
          600: '#c4444d',
          700: '#93333a',
          800: '#622226',
          900: '#311113',
        },
        blue: {
          50: '#edf1ff',
          100: '#dae3ff',
          200: '#b5c7ff',
          300: '#90aafe',
          400: '#6b8efe',
          500: '#4672fe',
          600: '#385bcb',
          700: '#2a4498',
          800: '#1c2e66',
          900: '#0e1733',
        },
        purple: {
          50: '#f9effa',
          100: '#f2dff4',
          200: '#e5bfe9',
          300: '#d89ede',
          400: '#cb7ed3',
          500: '#be5ec8',
          600: '#984ba0',
          700: '#723878',
          800: '#4c2650',
          900: '#261328',
        },
        green: {
          50: '#e6f7e6',
          100: '#ccefcc',
          200: '#99de99',
          300: '#66ce66',
          400: '#33bd33',
          500: '#00ad00',
          600: '#008a00',
          700: '#006800',
          800: '#004500',
          900: '#002300',
        },
        red: {
          50: '#ffe6e6',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000',
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        gray: {
          50: '#f1f1f1',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#acacac',
          400: '#919191',
          500: '#757575',
          600: '#5e5e5e',
          700: '#464646',
          800: '#2f2f2f',
          900: '#242424',
        },
        social: {
          facebook: '#35518d',
          twitter: '#1da1f2',
          google: '#4284f4',
          dribbble: '#ea4c89',
          github: '#1b1f23',
        },
      },
      spacing: {
        '0': '0px',
        '0.25': '0625rem', // 1px
        '0.5': '.125rem', // 2px
        '1': '.25rem', // 4px
        '1.5': '.375rem', // 6px
        '2': '0.5rem', // 8px
        '2.5': '.625rem', // 10px
        '3': '.75rem', // 12
        '3.5': '.875rem', // 14
        '4': '1rem', // 16
        '5': '1.25rem', // 20
        '6': '1.5rem', // 24
        '7': '1.75rem', // 28
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
        '11': '2.75rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '64': '16rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(247.96% 225.93% at 179.59% 120.78%, #EF303D 0%, #073EEC 100%)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss-children'),
  ],
  safelist: [
    {
      pattern: /([a-zA-Z]+)-./
    }
  ],
};