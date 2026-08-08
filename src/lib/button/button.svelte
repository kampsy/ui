<script lang="ts">
	import LoaderCircle from "$lib/icons/loader-circle.svelte"
	import { resolveButtonClass, iconSizeStyles } from "./styles.js"
	import type { ButtonProps } from "./types.js"

	let {
		buttonElement = $bindable(),
		class: klass,
		shape = undefined,
		size = "medium",
		variant = "default",
		prefix = undefined,
		suffix = undefined,
		svgOnly = false,
		shadow = false,
		loading = false,
		disabled = false,
		type = "button",
		onclick,
		children,
		...rest
	}: ButtonProps = $props()

	let iconSize = $derived(iconSizeStyles[size])
	let buttonClass = $derived(
		resolveButtonClass({
			size,
			variant,
			shape,
			svgOnly,
			shadow,
			disabled,
			loading,
			class: klass,
		}),
	)
	let isInactive = $derived(disabled || loading)

	$effect(() => {
		if (!import.meta.env.DEV || !svgOnly) return
		const labelled = rest["aria-label"] != null || rest["aria-labelledby"] != null
		if (!labelled) {
			console.warn("Button: svgOnly requires aria-label or aria-labelledby")
		}
	})

	function handleClick(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement },
	) {
		if (isInactive) {
			event.preventDefault()
			event.stopImmediatePropagation()
			return
		}
		onclick?.(event)
	}
</script>

<button
	bind:this={buttonElement}
	{...rest}
	{type}
	disabled={disabled || undefined}
	aria-disabled={isInactive ? true : undefined}
	aria-busy={loading ? true : undefined}
	class={buttonClass}
	onclick={handleClick}
>
	{#if svgOnly}
		{#if loading}
			<span
				class="{iconSize} flex animate-spin items-center justify-center"
				aria-hidden="true"
			>
				<LoaderCircle />
			</span>
		{:else if children}
			<span class="{iconSize} flex items-center justify-center">
				{@render children()}
			</span>
		{/if}
	{:else}
		{#if loading}
			<span
				class="{iconSize} flex animate-spin items-center justify-center"
				aria-hidden="true"
			>
				<LoaderCircle />
			</span>
		{:else if prefix}
			<span class="{iconSize} flex items-center justify-center">
				{@render prefix()}
			</span>
		{/if}

		{#if children}
			<span class="inline-flex items-center px-1.5">
				{@render children()}
			</span>
		{/if}

		{#if !loading && suffix}
			<span class="{iconSize} flex items-center justify-center">
				{@render suffix()}
			</span>
		{/if}
	{/if}
</button>
