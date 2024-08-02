<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children = undefined }: propsT = $props();
</script>

<colgroup>
	{#if children}
		{@render children()}
	{/if}
</colgroup>
