<script lang="ts">
	import { clickOutside } from '$lib/utils/event.js';
	import type { Snippet } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let { isOpen = $bindable(false), asideSlot }: { isOpen: boolean; asideSlot: Snippet } = $props();
</script>

<!--The backdrop color when the menu is open-->
<!--Todo: make this a component to be reused in other places eg select, menu, caalender etc-->
{#if isOpen}
	<div class="block lg:hidden">
		<div
			in:fade|local
			out:fade|local
			class="fixed top-0 left-0 w-full h-full bg-kui-black bg-opacity-[0.4] lg:hidden z-[1000]"
		></div>

		<div
			use:clickOutside={() => (isOpen = false)}
			in:fly|local={{ x: '-100vw', duration: 500, opacity: 1 }}
			out:fly|local={{ x: '-100vw', duration: 500, opacity: 1 }}
			class="fixed top-0 left-0 w-[75%] h-full bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary
border-r border-kui-light-gray-200 dark:border-kui-dark-gray-400 z-[1000]"
		>
			{@render asideSlot()}
		</div>
	</div>
{/if}
