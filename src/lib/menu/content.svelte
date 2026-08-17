<script lang="ts">
	import { getContext, type Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"
	import { fly } from "svelte/transition"
	import { cubicOut } from "svelte/easing"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: string
		children: Snippet
	}
	let { class: klass = "", children, ...rest }: Props = $props()

	// Get the state of the menu from the context
	const rootState = getContext<{
		alignment: "left" | "right"
		getIsMobile: () => boolean
		getIsActive: () => boolean
		setIsActive: (value: boolean) => void
		getContentPosition: () => string
		getTransY: () => number
	}>("menu")

	let alightmentClass = $derived.by(() => {
		if (rootState.alignment === "left") {
			return "left-0"
		} else {
			return "right-0"
		}
	})

	let content = $state<HTMLDivElement>()
	$effect(() => {
		if (content) {
			if (rootState.getIsActive()) {
				content.setAttribute("aria-hidden", "false")
			} else {
				content.setAttribute("aria-hidden", "true")
			}
		}
	})
</script>

{#snippet mobileSnip()}
	{#if rootState.getIsActive()}
		<div
			bind:this={content}
			in:fly|local={{ y: "50vh", duration: 500, opacity: 1 }}
			out:fly|local={{ y: "100vh", duration: 600, easing: cubicOut, opacity: 1 }}
			class="bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary fixed bottom-0 left-0 z-1001 w-full rounded-t-[10px] lg:bg-transparent"
			{...rest}
		>
			<div
				class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-600 dark:border-kui-dark-gray-500 overflow-y-auto
				scroll-smooth rounded-t-[10px] border-t px-3"
			>
				{@render children()}
			</div>
		</div>
	{/if}
{/snippet}

{#snippet desktopSnip()}
	{#if rootState.getIsActive()}
		<div
			bind:this={content}
			in:fly={{ y: rootState.getTransY() }}
			out:fly={{ y: rootState.getTransY() }}
			class="absolute {rootState.getContentPosition()} {alightmentClass} z-1000 {klass}"
			{...rest}
		>
			<div
				class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-y-auto scroll-smooth rounded-xl border p-2 shadow-xs {klass}"
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
