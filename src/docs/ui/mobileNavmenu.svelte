<script lang="ts">
	import { Cross } from "$lib/icons/index.js"
	import { clickOutside } from "$lib/utils/event.js"
	import type { Snippet } from "svelte"
	import { fade, fly } from "svelte/transition"

	let { isOpen = $bindable(false), asideSlot }: { isOpen: boolean; asideSlot: Snippet } =
		$props()
</script>

<!--The backdrop color when the menu is open-->
<!--Todo: make this a component to be reused in other places eg select, menu, caalender etc-->
{#if isOpen}
	<div class="block lg:hidden">
		<div
			in:fade|local
			out:fade|local
			class="bg-kui-black fixed top-0 left-0 z-1000 h-full w-full opacity-[0.4] lg:hidden"
		></div>

		<div
			use:clickOutside={() => (isOpen = false)}
			in:fly|local={{ x: "-100vw", duration: 500, opacity: 1 }}
			out:fly|local={{ x: "-100vw", duration: 500, opacity: 1 }}
			class="bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary border-kui-light-gray-200 dark:border-kui-dark-gray-400 fixed top-0 left-0
z-1000 h-full w-[75%] border-r"
		>
			<!--Close button-->
			<div class="absolute top-4 right-5.5 z-30 h-10 w-10">
				<div class="flex h-full w-full items-center justify-center">
					<button
						onclick={() => (isOpen = false)}
						class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 h-4 w-4"
					>
						<Cross />
					</button>
				</div>
			</div>

			{@render asideSlot()}
		</div>
	</div>
{/if}
