<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children = undefined }: propsT = $props();
</script>

<div class=" w-full text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900 overflow-auto">
	<table class="w-full">
		{#if children}
			{@render children()}
		{/if}
	</table>
</div>
