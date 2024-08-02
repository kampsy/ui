<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { class: klass = '', children = undefined }: propsT = $props();
</script>

<caption class="{klass}">
	{#if children}
		{@render children()}
	{/if}
</caption>