import type { Component, Snippet } from "svelte"
import type { ClassValue, HTMLAttributes } from "svelte/elements"

/** Color/style intent of the badge (Geist-aligned). */
export type BadgeVariant =
	| "gray"
	| "blue"
	| "purple"
	| "amber"
	| "red"
	| "pink"
	| "green"
	| "teal"
	| "inverted"
	| "trial"
	| "turbo"
	| "pill"

/** Visual intensity of the badge. `low` maps to Geist's `-subtle` styling. */
export type BadgeContrast = "high" | "low"

/** Badge size. */
export type BadgeSize = "sm" | "md" | "lg"

/**
 * A label that emphasizes an element requiring attention or helps categorize
 * similar elements (Geist-aligned API). Renders a `<span>` by default and an
 * `<a>` when `href` is provided.
 */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	/** Root href; when present the badge renders as an anchor. */
	href?: string
	/** Anchor target; only applied when `href` is set. */
	target?: string
	/** Anchor rel; only applied when `href` is set. */
	rel?: string
	/** Anchor download; only applied when `href` is set. */
	download?: boolean | string
	class?: ClassValue
	/** Color/style intent. */
	variant?: BadgeVariant
	/** Visual intensity; `low` produces the subtle treatment. Default: "high" */
	contrast?: BadgeContrast
	/** Badge size. Default: "md" */
	size?: BadgeSize
	/** Optional leading icon component. */
	icon?: Component
	children?: Snippet
}
