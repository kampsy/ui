<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	type propsT = {
		class?: string;
		children: Snippet;
	};
	let { class: klass = '', children }: propsT = $props();

	// Get the select stores from the context
	const { isActive, transY, contentPosition } = getContext<{
		isActive: Writable<boolean>;
		transY: Writable<number>;
		contentPosition: Writable<string>;
	}>('select');
</script>

{#if $isActive}
	<div
		in:fly={{ y: $transY }}
		out:fly={{ y: $transY }}
		class="absolute w-full {$contentPosition} z-[1000] {klass}"
	>
		<div
			class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg p-1 rounded-[6px] border border-kui-light-gray-200 dark:border-kui-dark-gray-400 shadow-sm scroll-smooth overflow-y-auto  {klass}"
		>
			{@render children()}
		</div>
	</div>
{/if}
