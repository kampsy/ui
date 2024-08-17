<script lang="ts">
	import { type Snippet } from 'svelte';
	import '../app.css';
	import { scheme } from '../docs/utils/colorScheme.svelte.js';
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

<div class="w-full h-full fixed top-0 overflow-y-auto">
	<main
		class="ui-scrollbar font-inter {currentTheme} min-h-screen text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 overflow-x-hidden md:overflow-x-visible bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
	>
		{@render children()}
	</main>
</div>
