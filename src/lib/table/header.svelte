<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children = undefined }: propsT = $props();
</script>

<thead class="border-b border-kui-light-gray-200 dark:border-kui-dark-gray-400">
	{#if children}
		{@render children()}
	{/if}
</thead>
