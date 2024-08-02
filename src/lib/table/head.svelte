<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children = undefined }: propsT = $props();
</script>

<th class="h-10 px-2  text-left text-sm align-middle font-medium last:text-right">
	{#if children}
		{@render children()}
	{/if}
</th>
