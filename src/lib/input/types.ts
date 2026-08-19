import type { Component } from "svelte"
import type { ClassValue, HTMLInputAttributes } from "svelte/elements"

export type InputSize = "small" | "medium" | "large"
export type InputAdornment = string | Component

export interface InputProps extends Omit<
	HTMLInputAttributes,
	"class" | "value" | "prefix" | "size"
> {
	class?: ClassValue
	value?: string
	label?: string
	error?: string
	size?: InputSize
	prefix?: InputAdornment
	suffix?: InputAdornment
	prefixStyling?: boolean
	suffixStyling?: boolean
	rounded?: boolean
}

export interface SearchInputProps extends Omit<
	InputProps,
	"prefix" | "suffix" | "type" | "value"
> {
	value?: string
	prefix?: InputAdornment
	cmdk?: boolean
	loading?: boolean
}
