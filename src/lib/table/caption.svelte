<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { class: klass = '', children = undefined }: Props = $props();
</script>

<caption class="{klass}">
	{#if children}
		{@render children()}
	{/if}
</caption>