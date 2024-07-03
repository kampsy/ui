<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { scheme } from '$lib/utils/colorScheme.svelte.js';
	import { browser } from '$app/environment';

	let { children }: { children: Snippet } = $props();

	let currentTheme = $derived.by(() => {
		if (scheme.theme === 'system') {
			if (browser) {
				return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			}
		}
		return scheme.theme;
	});
</script>

<main
	class="{currentTheme} min-h-screen text-light-gray-1000 dark:text-dark-gray-1000 overflow-x-hidden md:overflow-x-visible bg-light-bg-secondary dark:bg-dark-bg-secondary"
>
	{@render children()}
</main>
