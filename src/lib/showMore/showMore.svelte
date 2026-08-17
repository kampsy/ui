<script lang="ts">
	import { ChevronDownSmall } from "$lib/icons/index.js"

	interface Props {
		isActive: boolean
	}

	let { isActive = $bindable(false) }: Props = $props()

	const onclick = () => {
		isActive = !isActive
	}

	let rotate = $derived.by(() => {
		if (isActive) {
			return "rotate-180"
		}
		return ""
	})

	let ariaLabel = $derived.by(() => {
		if (isActive) {
			return "Show less content"
		}
		return "Show more content"
	})

	let buttonText = $derived.by(() => {
		if (isActive) {
			return "show less"
		}
		return "Show more"
	})
</script>

{#snippet suffixSnip()}
	<div class="h-4 w-4">
		<div
			class="h-4 w-4 rounded-full {rotate} flex transform-gpu items-center justify-center duration-200"
		>
			<ChevronDownSmall />
		</div>
	</div>
{/snippet}

<div class="w-full">
	<div class="box-border flex items-center">
		<div class="border-kui-light-gray-400 dark:border-kui-dark-gray-400 grow border-t">
			<!--line-->
		</div>
		<div class="grow-0">
			<button
				{onclick}
				aria-label={ariaLabel}
				type="button"
				class="border-kui-light-gray-400 dark:border-kui-dark-gray-400 hover:border-kui-light-gray-500 dark:hover:border-kui-dark-gray-500 hover:bg-kui-light-gray-200
                dark:hover:bg-kui-dark-gray-200 rounded-full border
                p-1.5 transition duration-300"
			>
				<div class="flex w-full items-center justify-center gap-1 px-1.5">
					<div class="text-sm font-medium capitalize">{buttonText}</div>
					{@render suffixSnip()}
				</div>
			</button>
		</div>
		<div class="border-kui-light-gray-400 dark:border-kui-dark-gray-400 grow border-t">
			<!--second line-->
		</div>
	</div>
</div>
