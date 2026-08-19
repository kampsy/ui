<script lang="ts">
	import Error from "$lib/icons/error.svelte"
	import {
		errorTextBase,
		errorTextStyles,
		inputTextBase,
		resolveAdornmentClass,
		resolveInputClass,
		resolveInputPadding,
	} from "./styles.js"
	import type { InputAdornment, InputProps } from "./types.js"

	let {
		id: idProp,
		class: klass,
		value = $bindable(""),
		label,
		error,
		size = "medium",
		prefix,
		suffix,
		prefixStyling = true,
		suffixStyling = true,
		rounded = false,
		disabled = false,
		onfocus,
		onblur,
		...rest
	}: InputProps = $props()

	const fallbackId = $props.id()
	let id = $derived(idProp ?? fallbackId)
	let errorId = $derived(`${id}-error`)
	let hasRing = $state(false)

	let inputClass = $derived(
		resolveInputClass({
			size,
			rounded: rounded ?? false,
			disabled: disabled ?? false,
			error,
			focused: hasRing,
			class: klass,
		}),
	)
	let inputPadding = $derived(resolveInputPadding(prefixStyling, suffixStyling))
	let errorTextClass = $derived(`${errorTextBase} ${errorTextStyles[size]}`)

	function handleFocus(event: FocusEvent & { currentTarget: HTMLInputElement }) {
		hasRing = true
		onfocus?.(event)
	}

	function handleBlur(event: FocusEvent & { currentTarget: HTMLInputElement }) {
		hasRing = false
		onblur?.(event)
	}
</script>

{#snippet adornment(content: InputAdornment, styled: boolean, side: "prefix" | "suffix")}
	<span class={resolveAdornmentClass(styled, side)} aria-hidden={typeof content !== "string"}>
		{#if typeof content === "string"}
			{content}
		{:else}
			{@const Adornment = content}
			<div class="size-4">
				<Adornment />
			</div>
		{/if}
	</span>
{/snippet}

<div>
	{#if label}
		<label
			for={id}
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-2 inline-block text-sm"
		>
			{label}
		</label>
	{/if}

	<div class={inputClass}>
		{#if prefix}
			{@render adornment(prefix, prefixStyling, "prefix")}
		{/if}

		<div class="h-full w-full {inputPadding}">
			<input
				{...rest}
				{id}
				bind:value
				{disabled}
				aria-invalid={error ? "true" : undefined}
				aria-describedby={error ? errorId : rest["aria-describedby"]}
				class={`${inputTextBase} ${disabled ? "text-kui-light-gray-600 dark:text-kui-dark-gray-600 cursor-not-allowed" : "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"}`}
				onfocus={handleFocus}
				onblur={handleBlur}
			/>
		</div>

		{#if suffix}
			{@render adornment(suffix, suffixStyling, "suffix")}
		{/if}
	</div>

	{#if error}
		<div id={errorId} class="mt-2 flex items-center gap-2">
			<div class="text-kui-light-red-900 dark:text-kui-dark-red-900 size-4" aria-hidden="true">
				<Error />
			</div>
			<div class={errorTextClass}>{error}</div>
		</div>
	{/if}
</div>
