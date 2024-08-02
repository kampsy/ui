<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children = undefined }: propsT = $props();
</script>

<thead class="border-b border-light-gray-200 dark:border-dark-gray-400">
	{#if children}
		{@render children()}
	{/if}
</thead>
