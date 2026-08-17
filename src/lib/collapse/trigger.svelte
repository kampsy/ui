<script lang="ts">
	import { ChevronRight } from "$lib/icons/index.js"
	import { getContext, type Snippet } from "svelte"
	import type { HTMLButtonAttributes } from "svelte/elements"

	interface Props extends HTMLButtonAttributes {
		children: Snippet | undefined
	}
	let { children, ...rest }: Props = $props()

	let collapseItem = getContext<{
		getMultiple: () => boolean
		getItem: () => Array<string>
		setItem: (value: string) => void
		deleteItem: (value: string) => void
		clearItems: () => void
	}>("collapse")

	let { size, value, defaultExpanded } = getContext<{
		size: "small" | "large"
		value: string
		defaultExpanded: boolean
	}>("collapseItem")

	if (defaultExpanded) {
		collapseItem.setItem(value)
	}

	let rotate = $derived.by(() => {
		if (collapseItem.getItem().includes(value)) {
			return "rotate-90"
		}
		return ""
	})

	// accessibility if its true then set aria-expanded to true else false
	let button = $state<HTMLButtonElement>()
	$effect(() => {
		if (button) {
			if (collapseItem.getItem().includes(value)) {
				button.setAttribute("aria-expanded", "true")
			} else {
				button.setAttribute("aria-expanded", "false")
			}
		}
	})

	const paddingObj = {
		small: `py-[12px]`,
		large: `py-4 lg:py-6`,
	}
	let paddingClass = $derived.by(() => {
		return paddingObj[size]
	})

	const textObj = {
		small: "text-4",
		large: "text-lg lg:text-[24px]",
	}
	let textClass = $derived.by(() => {
		return textObj[size]
	})

	const onclick = (): void => {
		const items = collapseItem.getItem()
		const multiple = collapseItem.getMultiple()

		if (!value) return

		if (multiple) {
			if (items.includes(value)) {
				collapseItem.deleteItem(value)
			} else {
				collapseItem.setItem(value)
			}
			return
		}

		// single-select behaviour: toggle off if selected, otherwise clear and select the value
		if (items.includes(value)) {
			collapseItem.clearItems()
		} else {
			collapseItem.clearItems()
			collapseItem.setItem(value)
		}
	}
</script>

<button
	{onclick}
	bind:this={button}
	class="flex w-full items-center justify-between bg-transparent text-left {paddingClass}"
	{...rest}
>
	{#if children}
		<span
			class="{textClass} text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-semibold"
			>{@render children()}</span
		>
	{/if}
	<div class="">
		<div class="h-4 w-4 overflow-hidden">
			<div
				class="h-4 w-4 {rotate} text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 transform-gpu duration-200"
			>
				<ChevronRight />
			</div>
		</div>
	</div>
</button>
