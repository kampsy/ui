/** @type {import('tailwindcss').Config} */
import {CustomColors} from './src/lib/customColors/index.js'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        ...CustomColors
      }
    },
  },
  plugins: [],
}