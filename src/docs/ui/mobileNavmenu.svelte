<script lang="ts">
	import { Cross } from '$lib/icons/index.js';
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
		<!--Close button-->
			<div class="absolute top-4 right-[22px] w-[40px] h-[40px] z-30">
				<div class="w-full h-full flex items-center justify-center">
					<button
						onclick={() => (isOpen = false)}
						class="w-4 h-4 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
					>
						<Cross />
					</button>
				</div>
			</div>

			{@render asideSlot()}
		</div>
	</div>
{/if}
