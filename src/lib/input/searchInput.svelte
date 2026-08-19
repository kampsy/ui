<script lang="ts">
	import Cross from "$lib/icons/cross.svelte"
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

	function clearValue() {
		value = ""
	}
</script>

<div class="relative w-full" data-cmdk={cmdk ? "" : undefined}>
	<Input
		{...rest}
		bind:value
		prefix={activePrefix}
		prefixStyling={false}
		aria-busy={loading ? true : undefined}
		class={[klass, "[&>div>div>input]:pr-10"]}
		onkeydown={handleKeydown}
	/>

	{#if value && !loading}
		<button
			class="text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000 absolute top-1/2 right-2 flex size-7 -translate-y-1/2 items-center justify-center rounded-full transition-colors"
			type="button"
			aria-label="Clear search"
			disabled={rest.disabled}
			onclick={clearValue}
		>
			<span class="size-4" aria-hidden="true"><Cross /></span>
		</button>
	{/if}
</div>
