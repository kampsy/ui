export const installationSveltekit = `
npx sv create my-app`;

export const installationKampsy = `
pnpm i -D kampsy-ui@latest`;

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
