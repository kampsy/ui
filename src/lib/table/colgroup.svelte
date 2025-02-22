<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet | undefined;
	};
	let { children = undefined }: Props = $props();
</script>

<colgroup>
	{#if children}
		{@render children()}
	{/if}
</colgroup>
