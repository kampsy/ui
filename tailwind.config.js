/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        light: {
          bg: {
            DEFAULT: '#FFFFFF',
            secondary: '#FAFAFA',
            high_ctr: '#F8F8F8',
            hover_high_ctr: '#7D7D7D',
          },
          bor: {
            DEFAULT: '#F2F2F2',
            hover: '#EBEBEB',
            active: '#E6E6E6',
          },
          txt: {
            primary: '#171717',
            secondary: '#666666',
          },
          gray: {
            100: '#1A1A1A',
            200: '#1F1F1F',
            300: '#292929',
            400: '#2E2E2E',
            500: '#454545',
            600: '#878787',
            700: '#8F8F8F',
            800: '#7D7D7D',
            900: '#A1A1A1',
            1000: '#EDEDED',
          }
        },
        dark: {
          bg: {
            DEFAULT: '#0A0A0A',
            secondary: '#000000',
          },
          bor: {
            DEFAULT: '#2E2E2E',
            hover: '#454545',
            active: '#878787',
          },
          txt: {
            primary: '#EDEDED',
            secondary: '#A1A1A1',
          },
          gray: {
            alpha: {
              100: '#FFFFF0F',
              200: '#FFFFFF17',
              300: '#FFFFFF21',
              400: '#FFFFFF24',
              500: '#FFFFFF3D',
              600: '#FFFFFF82',
              700: '#FFFFFF8A',
              800: '#FFFFFF78',
              900: '#FFFFFF9C',
              1000: '#FFFFFFEB',
            }
          }
        }
      }
    },
  },
  plugins: [],
}

