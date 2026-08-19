<script lang="ts">
	import MagnifyingGlass from "$lib/icons/magnifying-glass.svelte"
	import Input from "./input.svelte"
	import type { SearchInputProps } from "./types.js"

	let { value = $bindable(""), onkeydown, ...rest }: SearchInputProps = $props()

	function handleKeydown(event: KeyboardEvent & { currentTarget: HTMLInputElement }) {
		if (event.key === "Escape") value = ""
		onkeydown?.(event)
	}
</script>

<div class="relative w-full">
	<Input
		{...rest}
		bind:value
		prefix={MagnifyingGlass}
		prefixStyling={false}
		onkeydown={handleKeydown}
	/>
</div>
