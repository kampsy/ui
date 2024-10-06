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
import kampsyUI from 'kampsy-ui/preset';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [kampsyUI]
}`;

export const installationConfigLong = `
import kampsyUI from 'kampsy-ui/preset';

/** @type {import('tailwindcss').Config} */
export default {
  content: kampsyUI.content,
  presets: [kampsyUI],
  theme: {
    extend: {}
  },
  plugins: [],
}`;
