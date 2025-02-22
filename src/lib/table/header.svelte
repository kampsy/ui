<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet | undefined;
	};
	let { children = undefined }: Props = $props();
</script>

<thead class="border-b border-kui-light-gray-200 dark:border-kui-dark-gray-400">
	{#if children}
		{@render children()}
	{/if}
</thead>
