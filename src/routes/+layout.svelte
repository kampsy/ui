<script lang="ts">
	import { type Snippet } from 'svelte';
	import '../app.css';
	import { scheme } from '../docs/utils/colorScheme.svelte.js';
	import { browser } from '$app/environment';

	let { children }: { children: Snippet } = $props();

	let currentTheme = $derived.by(() => {
		if (browser) {
			if (scheme.theme === 'system') {
				const str = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
				document.body.className = ` ${str} bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary`;
				return str;
			}
			document.body.className = ` ${scheme.theme} bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary`;
			return scheme.theme;
		}
	});
</script>

<main
	class="ui-scrollbar font-inter {currentTheme} min-h-screen text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 overflow-x-hidden md:overflow-x-visible bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
>
	{@render children()}
</main>
