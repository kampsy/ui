export const installationSveltekit = `
npx sv create my-app`;

export const installationKampsy = `
pnpm i -D kampsy-ui@latest`;

export const installationConfig = `
import kampsyUI from 'kampsy-ui/preset';

export default {
  presets: [kampsyUI]
}`;

export const installationConfigLong = `
import kampsyUI from 'kampsy-ui/preset';

export default {
  content: kampsyUI.content,
  presets: [kampsyUI]
}`;
