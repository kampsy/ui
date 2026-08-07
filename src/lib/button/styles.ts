import type { ClassValue } from "svelte/elements"
import type { ButtonShape, ButtonSize, ButtonVariant } from "./types.js"

export const buttonBase = `inline-flex items-center justify-center font-medium transition-colors duration-200 
	outline-none select-none focus-visible:ring-2 focus-visible:ring-kui-light-gray-500 focus-visible:ring-offset-2
	focus-visible:ring-offset-kui-light-bg dark:focus-visible:ring-kui-dark-gray-500
	dark:focus-visible:ring-offset-kui-dark-bg`

export const interactiveCursorStyles = "cursor-pointer hover:cursor-pointer"
export const disabledCursorStyles = "cursor-not-allowed"

export const sizeStyles: Record<ButtonSize, string> = {
	tiny: "h-6 gap-1 px-1.5 text-xs leading-3",
	small: "h-8 gap-1.5 px-1.5 text-sm leading-4",
	medium: "h-10 gap-2 px-2.5 text-sm leading-5",
	large: "h-12 gap-2 px-3.5 text-base leading-6",
}

export const shapeSizeStyles: Record<ButtonSize, string> = {
	tiny: "size-6",
	small: "size-8",
	medium: "size-10",
	large: "size-12",
}

export const iconSizeStyles: Record<ButtonSize, string> = {
	tiny: "size-3.5 shrink-0",
	small: "size-4 shrink-0",
	medium: "size-4 shrink-0",
	large: "size-6 shrink-0",
}

export const radiusStyles: Record<ButtonSize, string> = {
	tiny: "rounded-sm",
	small: "rounded-md",
	medium: "rounded-md",
	large: "rounded-lg",
}

export const variantStyles: Record<ButtonVariant, string> = {
	default: `text-white dark:text-kui-dark-bg bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000
		hover:bg-kui-light-gray-900 dark:hover:bg-kui-dark-gray-900
		active:bg-kui-light-gray-800 dark:active:bg-kui-dark-gray-800`,
	secondary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg
		border border-kui-light-gray-200 dark:border-kui-dark-gray-400
		hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100
		active:bg-kui-light-gray-200 dark:active:bg-kui-dark-gray-200`,
	tertiary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000
		hover:bg-kui-light-gray-200 dark:hover:bg-kui-dark-gray-200
		active:bg-kui-light-gray-300 dark:active:bg-kui-dark-gray-300`,
	error: `text-white bg-kui-light-red-800 dark:bg-kui-dark-red-800
		hover:bg-kui-light-red-900 dark:hover:bg-kui-dark-red-900
		active:bg-kui-light-red-1000 dark:active:bg-kui-dark-red-1000`,
	warning: `text-kui-light-gray-1000 dark:text-kui-dark-gray-100 bg-kui-light-amber-700 dark:bg-kui-dark-amber-700
		hover:bg-kui-light-amber-800 dark:hover:bg-kui-dark-amber-800
		active:bg-kui-light-amber-900 dark:active:bg-kui-dark-amber-900`,
}

/** Muted, still variant-tinted disabled appearance */
export const disabledVariantStyles: Record<ButtonVariant, string> = {
	default: `text-kui-light-gray-700 dark:text-kui-dark-gray-700 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100
		border border-kui-light-gray-400/40 dark:border-kui-dark-gray-400/40`,
	secondary: `text-kui-light-gray-700 dark:text-kui-dark-gray-700 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100
		border border-kui-light-gray-400 dark:border-kui-dark-gray-400`,
	tertiary: `text-kui-light-gray-1000/40 dark:text-kui-dark-gray-1000/40 bg-kui-light-gray-100/50 dark:bg-kui-dark-gray-100/50`,
	error: `text-kui-light-gray-700 dark:text-kui-dark-gray-700 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100`,
	warning: `text-kui-light-gray-700 dark:text-kui-dark-gray-700 bg-kui-light-gray-100
	 dark:bg-kui-dark-gray-100`,
}

export const loadingStyles = "opacity-70 cursor-wait"
export const shadowStyles = "shadow-sm"

export function resolveRadius(size: ButtonSize, shape?: ButtonShape): string {
	if (shape === "circle" || shape === "rounded") return "rounded-full"
	return radiusStyles[size]
}

export interface ResolveButtonClassInput {
	size?: ButtonSize
	variant?: ButtonVariant
	shape?: ButtonShape
	svgOnly?: boolean
	shadow?: boolean
	disabled?: boolean
	loading?: boolean
	class?: ClassValue
}

export function resolveButtonClass({
	size = "medium",
	variant = "default",
	shape,
	svgOnly = false,
	shadow = false,
	disabled = false,
	loading = false,
	class: klass,
}: ResolveButtonClassInput): ClassValue {
	const sizeClass = svgOnly ? shapeSizeStyles[size] : sizeStyles[size]
	const toneClass = disabled ? disabledVariantStyles[variant] : variantStyles[variant]
	const cursorClass = disabled
		? disabledCursorStyles
		: loading
			? undefined
			: interactiveCursorStyles

	return [
		buttonBase,
		sizeClass,
		toneClass,
		resolveRadius(size, shape),
		cursorClass,
		loading && loadingStyles,
		shadow && shadowStyles,
		klass,
	]
}
