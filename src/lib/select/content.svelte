<script lang="ts">
	import { Button } from "$lib/index.js"
	import { getContext, type Snippet } from "svelte"
	import { fly } from "svelte/transition"
	import { cubicOut } from "svelte/easing"

	interface Props {
		class?: string
		children: Snippet
	}
	let { class: klass = "", children }: Props = $props()

	// Get the state of the select from the context
	const rootState = getContext<{
		size: "tiny" | "small" | "medium" | "large"
		getIsMobile: () => boolean
		getIsActive: () => boolean
		setIsActive: (value: boolean) => void
		getContentPosition: () => string
		getTransY: () => number
	}>("select")
</script>

{#snippet mobileSnip()}
	{#if rootState.getIsActive()}
		<div
			in:fly|local={{ y: "50vh", duration: 500, opacity: 1 }}
			out:fly|local={{ y: "100vh", duration: 600, easing: cubicOut, opacity: 1 }}
			class="bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary fixed bottom-0 left-0 z-1001 w-full rounded-t-[10px] lg:bg-transparent"
		>
			<div
				class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg border-b-kui-light-gray-200 dark:border-b-kui-dark-gray-200 border-t-kui-light-gray-600 dark:border-t-kui-dark-gray-500
				overflow-y-auto scroll-smooth rounded-t-[10px] border-t
				border-b px-3 py-3"
			>
				{@render children()}
			</div>
			<footer class="p-4">
				<Button
					onclick={() => {
						rootState.setIsActive(false)
					}}
					variant="secondary"
					class="w-full">done</Button
				>
			</footer>
		</div>
	{/if}
{/snippet}

{#snippet desktopSnip()}
	{#if rootState.getIsActive()}
		<div
			in:fly={{ y: rootState.getTransY() }}
			out:fly={{ y: rootState.getTransY() }}
			class="absolute w-full {rootState.getContentPosition()} z-1000 {klass}"
		>
			<div
				class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-y-auto scroll-smooth rounded-md border p-1 shadow-xs {klass}"
			>
				{@render children()}
			</div>
		</div>
	{/if}
{/snippet}

{#if rootState.getIsMobile()}
	{@render mobileSnip()}
{:else}
	{@render desktopSnip()}
{/if}
