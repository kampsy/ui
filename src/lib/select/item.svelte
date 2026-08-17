<script lang="ts">
	import { Check } from "$lib/icons/index.js"
	import { getContext, type Snippet } from "svelte"
	import { fade } from "svelte/transition"

	interface Props {
		value: string
		children: Snippet
	}
	let { value, children }: Props = $props()

	const rootState = getContext<{
		getSelected: () => string
		setSelected: (value: string) => void
		getIsActive: () => boolean
		setIsActive: (value: boolean) => void
	}>("select")
</script>

<button
	onclick={() => {
		rootState.setSelected(value)
		rootState.setIsActive(false)
	}}
	class="hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100 relative flex w-full cursor-pointer items-center rounded-xs bg-transparent px-2 py-1.5 text-sm transition-colors"
>
	{#if rootState.getSelected() === value}
		<!--Icon-->
		<div transition:fade class="absolute right-2">
			<div class="flex h-full w-full items-center justify-center">
				<div class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 h-3.5 w-3.5">
					<Check />
				</div>
			</div>
		</div>
	{/if}
	<span class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 first-letter:capitalize">
		{@render children()}
	</span>
</button>
