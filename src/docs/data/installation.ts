export const installationSveltekit = `npx sv create my-app`;

export const installationKampsy = `pnpm i -D kampsy-ui@latest`;

export const installationConfig = `
<script lang="ts">
	import kampsyUI from 'kampsy-ui/preset';

	/** @type {import('tailwindcss').Config} */
	export default {
	  presets: [kampsyUI]
	}
</script>

`;

export const installationConfigLong = `
<script lang="ts">
	import kampsyUI from 'kampsy-ui/preset';

	/** @type {import('tailwindcss').Config} */
	export default {
	  content: kampsyUI.content,
	  presets: [kampsyUI],
	  theme: {
	    extend: {}
	  },
	  plugins: [],
	}
</script>

`;
