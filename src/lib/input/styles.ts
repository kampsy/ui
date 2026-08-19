import type { ClassValue } from "svelte/elements"
import type { InputSize } from "./types.js"

export const inputBase =
	"flex max-w-full items-center overflow-hidden bg-kui-light-bg dark:bg-kui-dark-bg font-normal transition-all duration-150 outline-none"

export const sizeStyles: Record<InputSize, string> = {
	small: "h-8 text-sm",
	medium: "h-10 text-sm",
	large: "h-12 text-base",
}

export const radiusStyles: Record<InputSize, string> = {
	small: "rounded-md",
	medium: "rounded-md",
	large: "rounded-lg",
}

export const errorTextStyles: Record<InputSize, string> = {
	small: "text-xs leading-4",
	medium: "text-sm leading-5",
	large: "text-base leading-6",
}

export const inputTextBase =
	"h-full w-full bg-transparent outline-hidden placeholder:text-kui-light-gray-600 dark:placeholder:text-kui-dark-gray-600"

export const adornmentBase =
	"text-kui-light-gray-700 dark:text-kui-dark-gray-700 flex h-full shrink-0 items-center px-3"

export const adornmentStyled =
	"bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary border-kui-light-gray-200 dark:border-kui-dark-gray-400"

export const errorTextBase = "text-kui-light-red-900 dark:text-kui-dark-red-900"

const inputStateStyles = {
	disabled: `cursor-not-allowed bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 
		shadow-[0_0_0_1px_var(--color-kui-light-gray-alpha-400)] dark:shadow-[0_0_0_1px_var(--color-kui-dark-gray-alpha-400)]
		has-focus:shadow-[0_0_0_1px_var(--color-kui-light-gray-alpha-600),0_0_0_4px_var(--color-kui-light-gray-alpha-500)]!
		dark:has-focus:shadow-[0_0_0_1px_var(--color-kui-dark-gray-alpha-600),0_0_0_4px_var(--color-kui-dark-gray-alpha-500)]! 
		hover:shadow-[0_0_0_1px_var(--color-kui-light-gray-alpha-500)] 
		dark:hover:shadow-[0_0_0_1px_var(--color-kui-dark-gray-alpha-500)] 
		hover:[&:has(input:disabled)]:shadow-[0_0_0_1px_var(--color-kui-light-gray-alpha-400)] 
		dark:hover:[&:has(input:disabled)]:shadow-[0_0_0_1px_var(--color-kui-dark-gray-alpha-400)]`,
	error: `shadow-[0_0_0_1px_var(--color-kui-light-red-900),0_0_0_4px_var(--color-kui-light-red-300)] 
		dark:shadow-[0_0_0_1px_var(--color-kui-dark-red-900),0_0_0_4px_var(--color-kui-dark-red-300)] 
		hover:shadow-[0_0_0_1px_var(--color-kui-light-red-900),0_0_0_4px_var(--color-kui-light-red-500)] 
		dark:hover:shadow-[0_0_0_1px_var(--color-kui-dark-red-900),0_0_0_4px_var(--color-kui-dark-red-500)]
		has-focus:shadow-[0_0_0_1px_var(--color-kui-light-red-900),0_0_0_4px_var(--color-kui-light-red-300)]
		dark:has-focus:shadow-[0_0_0_1px_var(--color-kui-dark-red-900),0_0_0_4px_var(--color-kui-dark-red-300)]`,
	focused: `shadow-[0_0_0_1px_var(--color-kui-light-gray-alpha-600),0_0_0_4px_var(--color-kui-light-gray-alpha-500)] 
		dark:shadow-[0_0_0_1px_var(--color-kui-dark-gray-alpha-600),0_0_0_4px_var(--color-kui-dark-gray-alpha-500)]`,
	default: `shadow-[0_0_0_1px_var(--color-kui-light-gray-alpha-400)] dark:shadow-[0_0_0_1px_var(--color-kui-dark-gray-alpha-400)] 
		hover:shadow-[0_0_0_1px_var(--color-kui-light-gray-alpha-500)] dark:hover:shadow-[0_0_0_1px_var(--color-kui-dark-gray-alpha-500)]`,
} as const

export interface ResolveInputClassInput {
	size?: InputSize
	rounded?: boolean
	disabled?: boolean
	error?: string
	focused?: boolean
	class?: ClassValue
}

function resolveInputStateClass({
	disabled,
	error,
	focused,
}: Pick<ResolveInputClassInput, "disabled" | "error" | "focused">): string {
	if (disabled) return inputStateStyles.disabled
	if (error) return inputStateStyles.error
	if (focused) return inputStateStyles.focused
	return inputStateStyles.default
}

export function resolveInputClass({
	size = "medium",
	rounded = false,
	disabled = false,
	error,
	focused = false,
	class: klass,
}: ResolveInputClassInput): ClassValue {
	return [
		inputBase,
		sizeStyles[size],
		rounded ? "rounded-full" : radiusStyles[size],
		resolveInputStateClass({ disabled, error, focused }),
		klass,
	]
}

export function resolveInputPadding(prefixStyling = true, suffixStyling = true): string {
	if (prefixStyling && suffixStyling) return "px-3"
	if (prefixStyling) return "pl-3"
	if (suffixStyling) return "pr-3"
	return ""
}

export function resolveAdornmentClass(styled: boolean, side: "prefix" | "suffix"): string {
	if (!styled) return adornmentBase
	const border = side === "prefix" ? "border-r" : "border-l"
	return `${adornmentBase} ${border} ${adornmentStyled}`
}
