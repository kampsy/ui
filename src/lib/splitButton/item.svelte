<script lang="ts">
	import { getContext } from "svelte"

	interface Props {
		onClick?: () => void | undefined
		title?: string | undefined
		description?: string | undefined
		type?: "primary" | "secondary" | "tertiary" | "error" | "warning"
	}
	let {
		onClick = undefined,
		type = "primary",
		title = undefined,
		description = undefined,
	}: Props = $props()

	const rootState = getContext<{
		getIsActive: () => boolean
		setIsActive: (value: boolean) => void
	}>("split-button")

	const typeTitleObj = {
		primary: "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000",
		secondary: "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000",
		tertiary: "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000",
		error: "text-kui-light-red-800 dark:text-kui-dark-red-800",
		warning: "text-kui-light-amber-800 dark:text-kui-dark-amber-800",
	}
	let typeTitleClass = $derived.by(() => {
		return typeTitleObj[type]
	})

	const typeDescriptionObj = {
		primary: "text-kui-light-gray-900 dark:text-kui-dark-gray-900",
		secondary: "text-kui-light-gray-900 dark:text-kui-dark-gray-900",
		tertiary: "text-kui-light-gray-900 dark:text-kui-dark-gray-900",
		error: "text-kui-light-red-700 dark:text-kui-dark-red-700",
		warning: "text-kui-light-amber-700 dark:text-kui-dark-amber-700",
	}
	let typeDescriptionClass = $derived.by(() => {
		return typeDescriptionObj[type]
	})
</script>

<button
	onclick={() => {
		if (onClick) {
			onClick()
		}
		rootState.setIsActive(false)
	}}
	class="hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100 relative w-full cursor-pointer rounded-md bg-transparent px-2
	py-3.5 text-left text-sm transition-colors lg:py-2.5"
>
	<div>
		{#if title}
			<div class="text-sm {typeTitleClass} leading-5 font-medium">
				{title}
			</div>
		{/if}
		{#if description}
			<div class="text-sm {typeDescriptionClass} leading-5 font-normal">
				{description}
			</div>
		{/if}
	</div>
</button>
