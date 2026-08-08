<script lang="ts">
	import ChevronDownSmall from "$lib/icons/chevron-down-small.svelte"
	import { getContext } from "svelte"
	import { Spinner, Text } from "$lib/index.js"

	interface Props {
		placeholder?: string
	}
	let { placeholder = "placeholder" }: Props = $props()

	const rootState = getContext<{
		size: "tiny" | "small" | "medium" | "large"
		getSelected: () => string
		getIsActive: () => boolean
		getLoading: () => boolean
	}>("select")

	let spinnerSize = $derived.by(() => {
		if (rootState.size === "tiny") return 14
		if (rootState.size === "small") return 16
		if (rootState.size === "medium") return 16
		return 24
	})

	// We are going to rotate the chevron icon when the select is active
	let rotate = $derived(rootState.getIsActive() ? "rotate-180" : "")
</script>

<div class="flex items-center justify-between">
	{#if !rootState.getLoading()}
		<span
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-sm first-letter:capitalize"
			>{rootState.getSelected() === "" ? placeholder : rootState.getSelected()}</span
		>
		<div class="flex h-4 w-4 items-center justify-center">
			<div
				class="text-kui-light-gray-900 hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:hover:text-kui-dark-gray-1000 h-4 w-4 transform duration-300 {rotate}"
			>
				<ChevronDownSmall />
			</div>
		</div>
	{/if}
	{#if rootState.getLoading()}
		<div class="flex items-center gap-2">
			<Spinner size={spinnerSize} />
			<Text>Loading...</Text>
		</div>
	{/if}
</div>
