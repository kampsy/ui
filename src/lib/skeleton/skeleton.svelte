<script lang="ts">
	import { resolveSkeletonClass, shellInsetStyle, sizeStyle } from "./styles.js"
	import type { SkeletonProps } from "./types.js"

	let {
		width,
		height,
		boxHeight,
		show = true,
		animated = true,
		pill = false,
		rounded = false,
		squared = false,
		button = false,
		class: klass,
		style: styleProp,
		children,
		...rest
	}: SkeletonProps = $props()

	let contentElement = $state<HTMLSpanElement>()
	let measuredWidth = $state(0)
	let measuredHeight = $state(0)

	let hasChildren = $derived(children !== undefined)
	let hasFixedSize = $derived(
		width !== undefined || height !== undefined || boxHeight !== undefined,
	)
	let needsMeasure = $derived(
		width === undefined || (height === undefined && boxHeight === undefined),
	)

	let wrapperWidth = $derived(width ?? (measuredWidth || undefined))
	let wrapperHeight = $derived(boxHeight ?? height ?? (measuredHeight || 16))

	let wrapperStyle = $derived(sizeStyle(wrapperWidth, wrapperHeight))
	let shellClass = $derived(resolveSkeletonClass({ animated, pill, rounded, squared }))
	let shellStyle = $derived(shellInsetStyle(button))
	let contentStyle = $derived(`${wrapperStyle}${styleProp ? ` ${styleProp}` : ""}`)

	$effect(() => {
		if (!contentElement || !needsMeasure) return

		const update = () => {
			if (!contentElement) return
			measuredWidth = contentElement.offsetWidth
			measuredHeight = contentElement.offsetHeight
		}

		update()
		const observer = new ResizeObserver(update)
		observer.observe(contentElement)
		return () => observer.disconnect()
	})
</script>

<span {...rest} class={["relative inline-block", klass]} style={contentStyle}>
	{#if hasChildren}
		<span
			bind:this={contentElement}
			class={hasFixedSize ? "block h-full w-full" : "inline-block"}
			class:invisible={show}
			aria-hidden={show ? true : undefined}
		>
			{@render children?.()}
		</span>
	{/if}
	{#if show}
		<span class={shellClass} style={shellStyle} aria-hidden="true"></span>
	{/if}
</span>

<style>
	:global(.skeleton-shimmer) {
		background-image: linear-gradient(
			90deg,
			transparent 0%,
			color-mix(in srgb, white 45%, transparent) 50%,
			transparent 100%
		);
		background-size: 200% 100%;
		animation: skeleton-shimmer 1.5s ease-in-out infinite;
	}

	@keyframes skeleton-shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(.skeleton-shimmer) {
			animation: none;
		}
	}
</style>
