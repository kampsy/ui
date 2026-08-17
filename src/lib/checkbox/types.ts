import type { Snippet } from "svelte"
import type { ClassValue, HTMLInputAttributes } from "svelte/elements"

/**
 * A control that toggles between two options, checked or unchecked
 * (Geist-aligned API).
 */
export interface CheckboxProps extends Omit<HTMLInputAttributes, "type" | "children"> {
	class?: ClassValue
	checked?: boolean
	indeterminate?: boolean
	disabled?: boolean
	children?: Snippet
}
