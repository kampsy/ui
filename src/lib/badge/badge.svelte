<script lang="ts">
	import { resolveBadgeClass, iconSizeStyles, iconGapStyles } from "./styles.js"
	import type { BadgeProps } from "./types.js"

	let {
		href = undefined,
		target = undefined,
		rel = undefined,
		download = undefined,
		class: klass,
		variant = "gray",
		contrast = "high",
		size = "md",
		icon = undefined,
		children,
		...rest
	}: BadgeProps = $props()

	let badgeClass = $derived(resolveBadgeClass({ variant, contrast, size, class: klass }))
	let iconSizeClass = $derived(iconSizeStyles[size])
	let iconGap = $derived(iconGapStyles[size])
</script>

{#snippet iconSnip()}
	{#if icon}
		{@const Icon = icon}
		<span class={iconSizeClass}>
			<Icon />
		</span>
	{/if}
{/snippet}

{#if href}
	<a {href} {target} {rel} {download} class={badgeClass} {...rest}>
		<span class="flex items-center {iconGap}">
			{@render iconSnip()}
			{@render children?.()}
		</span>
	</a>
{:else}
	<span class={badgeClass} {...rest}>
		<span class="flex items-center {iconGap}">
			{@render iconSnip()}
			{@render children?.()}
		</span>
	</span>
{/if}
