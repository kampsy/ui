<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet | undefined;
	};
	let { children = undefined }: Props = $props();
</script>

<tbody aria-hidden="true" class="table-row h-3"></tbody>
<tfoot class="w-full font-medium border-t border-kui-light-gray-200 dark:border-kui-dark-gray-400">
	{#if children}
		{@render children()}
	{/if}
</tfoot>
