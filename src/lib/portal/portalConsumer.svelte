<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children }: propsT = $props();
</script>

{#if children}
	{@render children()}
{/if}
