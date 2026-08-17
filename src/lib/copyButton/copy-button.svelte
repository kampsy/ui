<script lang="ts">
	import { scale } from "svelte/transition"
	import Copy from "$lib/icons/copy.svelte"
	import Check from "$lib/icons/check.svelte"
	import Button from "$lib/button/button.svelte"
	import type { ButtonProps } from "$lib/button/types.js"

	interface Props extends Omit<
		ButtonProps,
		"aria-label" | "children" | "onclick" | "svgOnly"
	> {
		label?: string
		textToCopy: string
	}

	let {
		label = "Copy to clipboard",
		textToCopy = "",
		disabled = false,
		size = "medium",
		variant = "secondary",
		shape = "square",
		...rest
	}: Props = $props()

	let isCopied = $state(false)
	let timeoutId: ReturnType<typeof setTimeout> | undefined

	async function copyToClipboard() {
		if (disabled || !navigator.clipboard) {
			if (!navigator.clipboard) console.error("Clipboard API not supported")
			return
		}

		try {
			await navigator.clipboard.writeText(textToCopy)
			isCopied = true
			if (timeoutId) clearTimeout(timeoutId)
			timeoutId = setTimeout(() => {
				isCopied = false
				timeoutId = undefined
			}, 1000)
		} catch (error) {
			console.error("Failed to copy text:", error)
		}
	}
</script>

<Button
	{...rest}
	{disabled}
	{size}
	{variant}
	{shape}
	svgOnly
	aria-label={isCopied ? "Copied" : label}
	onclick={copyToClipboard}
>
	<span class="relative size-4">
		{#if isCopied}
			<span
				in:scale|local={{ duration: 200 }}
				out:scale|local={{ duration: 300 }}
				class="absolute inset-0"
			>
				<Check />
			</span>
		{:else}
			<span
				in:scale|local={{ duration: 200 }}
				out:scale|local={{ duration: 300 }}
				class="absolute inset-0"
			>
				<Copy />
			</span>
		{/if}
	</span>
</Button>
