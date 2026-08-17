<script lang="ts">
	import { LoaderCircle } from "$lib/icons/index.js"
	import { fade } from "svelte/transition"

	interface Props {
		size?: number
	}

	let { size = 20 }: Props = $props()

	let sizeStyle = $derived.by(() => {
		return `width: ${size}px; height: ${size}px;`
	})
</script>

<div>
	<div style={sizeStyle} class="relative flex animate-spin items-center justify-center">
		<div
			transition:fade
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 absolute h-full w-full"
		>
			<LoaderCircle />
		</div>
	</div>
</div>
