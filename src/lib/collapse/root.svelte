<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { createCollapseState } from './root.svelte.js';

	interface Props {
		children: Snippet | undefined;
	};
	let { children }: Props = $props();

	const collapseState = createCollapseState({ item: '' });

	setContext('collapse', collapseState);
</script>

<div
	class="w-full *:border-t *:border-kui-light-gray-200 *:dark:border-kui-dark-gray-400
 last:border-b last:border-kui-light-gray-200 last:dark:border-kui-dark-gray-400"
>
	{#if children}
		{@render children()}
	{/if}
</div>
