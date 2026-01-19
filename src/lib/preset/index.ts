import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme.js';

export default {
  darkMode: 'selector',
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    './node_modules/kampsy-ui/dist/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
} satisfies Config;
