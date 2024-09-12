<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children }: propsT = $props();

	setContext('collapse', {
		open: writable('')
	});
</script>

<div class="w-full *:border-t *:border-kui-light-gray-200 *:dark:border-kui-dark-gray-400 
 last:border-b last:border-kui-light-gray-200 last:dark:border-kui-dark-gray-400">
	{#if children}
		{@render children()}
	{/if}
</div>
