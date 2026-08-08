<script lang="ts">
	import { clickOutside } from "$lib/utils/event.js"
	import { getContext, type Snippet } from "svelte"
	import { cubicOut } from "svelte/easing"
	import { fly, scale } from "svelte/transition"

	interface Props {
		class?: string
		children: Snippet
	}
	let { class: klass = "", children }: Props = $props()

	// Get the state of the select from the context
	const rootState = getContext<{
		getIsMobile: () => boolean
		getIsActive: () => boolean
		setIsActive: (value: boolean) => void
	}>("modal")
</script>

{#snippet mobileSnip()}
	{#if rootState.getIsActive()}
		<div
			in:fly|local={{ y: "50vh", duration: 500, opacity: 1 }}
			out:fly|local={{ y: "100vh", duration: 600, easing: cubicOut, opacity: 1 }}
			role="dialog"
			class="bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary fixed bottom-0 left-0 z-1001 w-full rounded-t-[10px] lg:bg-transparent"
		>
			<div
				use:clickOutside={() => {
					rootState.setIsActive(false)
				}}
				class="bg-kui-light-bg dark:bg-kui-dark-bg-secondary border-kui-light-gray-600 dark:border-kui-dark-gray-500 max-h-[80vh] w-full
				rounded-[10px] rounded-t-[10px] border-t"
			>
				{@render children()}
			</div>
		</div>
	{/if}
{/snippet}

{#snippet desktopSnip()}
	{#if rootState.getIsActive()}
		<div
			in:scale|local={{ duration: 200 }}
			out:scale|local={{ duration: 300 }}
			use:clickOutside={() => {
				rootState.setIsActive(false)
			}}
			role="dialog"
			class="bg-kui-light-bg dark:bg-kui-dark-bg-secondary border-kui-light-gray-600 dark:border-kui-dark-gray-200 relative max-h-156.5 w-135
                rounded-xl border {klass}"
		>
			{@render children()}
		</div>
	{/if}
{/snippet}

{#if rootState.getIsMobile()}
	{@render mobileSnip()}
{:else}
	{@render desktopSnip()}
{/if}
