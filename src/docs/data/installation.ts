export const installationSveltekit = `
pnpm create svelte@latest my-app
cd my-app
pnpm install`;

export const installationSvelte = `
pnpm create vite@latest my-app -- --template svelte
cd my-app
pnpm install`;

export const installationKampsy = `
pnpm i -D kampsy-ui`;

export const installationConfig = `
/** @type {import('tailwindcss').Config} */
import { CustomColors } from './node_modules/kampsy-ui/dist/customColors/index.js'

export default {
  darkMode: 'selector',
  content: ['./src/**/*.{html,js,svelte,ts}',
    './node_modules/kampsy-ui/dist/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ...CustomColors
      }
    },
  },
  plugins: [],
}`;
