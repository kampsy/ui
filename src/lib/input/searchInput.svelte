<script lang="ts">
	import MagnifyingGlass from "$lib/icons/magnifying-glass.svelte"
	import SearchInputSpinner from "./search-input-spinner.svelte"
	import Input from "./input.svelte"
	import type { SearchInputProps } from "./types.js"

	let {
		class: klass,
		cmdk = false,
		loading = false,
		prefix,
		value = $bindable(""),
		onkeydown,
		...rest
	}: SearchInputProps = $props()

	let activePrefix = $derived(loading ? SearchInputSpinner : (prefix ?? MagnifyingGlass))

	function handleKeydown(event: KeyboardEvent & { currentTarget: HTMLInputElement }) {
		if (event.key === "Escape") value = ""
		onkeydown?.(event)
	}
</script>

<div class="relative w-full" data-cmdk={cmdk ? "" : undefined}>
	<Input
		{...rest}
		bind:value
		prefix={activePrefix}
		prefixStyling={false}
		aria-busy={loading ? true : undefined}
		class={klass}
		onkeydown={handleKeydown}
	/>
</div>
