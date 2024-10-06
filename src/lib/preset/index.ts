import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme.js';
import { CustomColors } from '$lib/customColors/index.js';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    './node_modules/kampsy-ui/dist/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        ...CustomColors
      }
    },
  },
  plugins: [],
} satisfies Config;
