<script lang="ts">
	import {
		avatarBase,
		avatarImageBase,
		letterBase,
		placeholderBase,
		sizeStyle,
		fontSizeStyle,
	} from "./styles.js"
	import { resolveAvatarSrc, normalizeLetter } from "./utils.js"
	import type { AvatarProps } from "./types.js"

	let {
		size = 32,
		src,
		username,
		letter,
		placeholder = false,
		title,
		class: klass,
		...rest
	}: AvatarProps = $props()

	let resolvedTitle = $derived(title || username)
	let resolvedSrc = $derived(resolveAvatarSrc({ src, username }, size))
	let resolvedLetter = $derived(normalizeLetter(letter))

	let img = $state<HTMLImageElement>()
	let errored = $state(false)

	function onError() {
		errored = true
	}

	let showImage = $derived(resolvedSrc && !errored)
	let showLetter = $derived(!showImage && resolvedLetter && !placeholder)
	let showPlaceholder = $derived(placeholder || (!showImage && !showLetter))
</script>

{#if showImage}
	<span {...rest} class={[avatarBase, klass]} style={sizeStyle(size)} title={resolvedTitle}>
		<img
			bind:this={img}
			src={resolvedSrc}
			alt={resolvedTitle ? `${resolvedTitle}'s avatar` : "Avatar"}
			class={avatarImageBase}
			width={size}
			height={size}
			loading="eager"
			decoding="async"
			onerror={onError}
		/>
	</span>
{:else if showLetter}
	<span
		{...rest}
		class={[letterBase, klass]}
		style="{sizeStyle(size)}{fontSizeStyle(size)}"
		title={resolvedTitle}
		aria-label={resolvedTitle
			? `Avatar with initials: ${resolvedLetter} for ${resolvedTitle}`
			: `Avatar with initials: ${resolvedLetter}`}
	>
		{resolvedLetter}
	</span>
{:else if showPlaceholder}
	<span
		{...rest}
		class={[placeholderBase, klass]}
		style={sizeStyle(size)}
		aria-label="Avatar placeholder"
	></span>
{/if}
