import type { Snippet } from "svelte"
import type { ClassValue, HTMLButtonAttributes } from "svelte/elements"

export type ButtonSize = "tiny" | "small" | "medium" | "large"
export type ButtonVariant = "default" | "secondary" | "tertiary" | "error" | "warning"
export type ButtonShape = "square" | "circle" | "rounded"

/**
 * Trigger an action or event (Geist-aligned API).
 * Icon-only buttons should set `svgOnly`, a `shape`, and an accessible name.
 */
export interface ButtonProps extends Omit<HTMLButtonAttributes, "prefix"> {
	buttonElement?: HTMLButtonElement
	class?: ClassValue
	shape?: ButtonShape
	size?: ButtonSize
	variant?: ButtonVariant
	/** Leading icon content */
	prefix?: Snippet
	/** Trailing icon content */
	suffix?: Snippet
	/** Icon-only layout; requires aria-label or aria-labelledby */
	svgOnly?: boolean
	/** Soft elevation, often paired with shape="rounded" */
	shadow?: boolean
	loading?: boolean
	disabled?: boolean
	children?: Snippet
}
