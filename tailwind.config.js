/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FDF8F4',
          100: '#FBF0E6',
          200: '#F7DEC9',
          300: '#ECC4A6',
          400: '#DF9F76',
          500: '#D27848',
          600: '#B95C2E',
          700: '#964521',
          800: '#74351B',
          900: '#451E10',
          950: '#271007',
        },
        apricot: {
          50: '#FFF7F2',
          100: '#FDEEE4',
          200: '#FBDAC8',
          300: '#F6BEA0',
          400: '#ED976C',
          500: '#E0713B',
          600: '#C75323',
          700: '#A43D17',
          800: '#843114',
          900: '#521D0A',
          950: '#2E0E04',
        },
        beige: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#ECE2D2',
          300: '#DFCFBA',
          400: '#C8B49B',
          500: '#AA957A',
          600: '#8B785F',
          700: '#6D5D49',
          800: '#4F4335',
          900: '#2E271F',
          950: '#1A1612',
        },
        brand: {
          50: '#FDF8F4',
          100: '#FBF0E6',
          200: '#F7DEC9',
          300: '#ECC4A6',
          400: '#DF9F76',
          500: '#D27848',
          600: '#B95C2E',
          700: '#964521',
          800: '#74351B',
          900: '#451E10',
          950: '#271007',
        },
        dark: {
          900: '#241A15',
          950: '#17100D',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(116, 53, 27, 0.05), 0 1px 2px 0 rgba(116, 53, 27, 0.03)',
        'card': '0 4px 20px -2px rgba(116, 53, 27, 0.06), 0 2px 6px -1px rgba(116, 53, 27, 0.03)',
        'hover': '0 20px 30px -10px rgba(116, 53, 27, 0.12), 0 8px 12px -4px rgba(116, 53, 27, 0.04)',
        'glow': '0 0 25px -3px rgba(210, 120, 72, 0.25)',
      }
    },
  },
  plugins: [],
}

