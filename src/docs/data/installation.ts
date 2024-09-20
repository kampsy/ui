export const installationSveltekit = `
npm create svelte@latest my-app
cd my-app
pnpm install`;

export const installationSvelte = `
npm create vite@latest myapp -- --template svelte
cd myapp
pnpm install`;

export const installationKampsy = `
pnpm i -D kampsy-ui`;

export const installationConfig = `
/** @type {import('tailwindcss').Config} */
import { CustomColors } from 'kampsy-ui'

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
