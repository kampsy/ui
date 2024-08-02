<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children = undefined }: propsT = $props();
</script>

<tbody aria-hidden="true" class="table-row h-3"></tbody>
<tfoot class="w-full font-medium border-t border-light-gray-200 dark:border-dark-gray-400">
	{#if children}
		{@render children()}
	{/if}
</tfoot>
