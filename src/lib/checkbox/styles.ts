import type { ClassValue } from "svelte/elements"

export const boxBase =
	"w-4 h-4 rounded-sm box-border flex items-center justify-center gap-1 border transition-colors duration-200"

export const iconBase = "w-2 h-2 transition-colors duration-200"

export const labelBase = "text-sm select-none first-letter:capitalize"

export const rootBase = "inline-flex items-center gap-2"

export const focusStyles = `peer-focus-visible:ring-2 peer-focus-visible:ring-kui-light-gray-500
	peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-kui-light-bg
	dark:peer-focus-visible:ring-kui-dark-gray-500 dark:peer-focus-visible:ring-offset-kui-dark-bg`

export const boxUnchecked = `border-kui-light-gray-500 dark:border-kui-dark-gray-500 
hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`

export const boxChecked =
	"border-kui-dark-bg-secondary dark:border-kui-light-bg bg-kui-dark-bg-secondary dark:bg-kui-light-bg"

export const boxIndeterminate = "border-kui-light-gray-900 dark:border-kui-dark-gray-900"

export const boxDisabledUnchecked =
	"border-kui-light-gray-500 dark:border-kui-dark-gray-500 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 cursor-not-allowed"

export const boxDisabledChecked =
	"border-kui-light-gray-600 dark:border-kui-dark-gray-600 bg-kui-light-gray-600 dark:bg-kui-dark-gray-600 cursor-not-allowed"

export const boxDisabledIndeterminate =
	"border-kui-light-gray-600 dark:border-kui-dark-gray-600 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 cursor-not-allowed"

export const iconChecked = "text-kui-light-bg dark:text-kui-black"

export const iconIndeterminate = "text-kui-light-gray-900 dark:text-kui-dark-gray-900"

export const iconDisabledIndeterminate = "text-kui-light-gray-600 dark:text-kui-dark-gray-600"

export const iconUnchecked = "text-transparent"

export const labelDisabled = "text-kui-light-gray-500 dark:text-kui-dark-gray-500"

export const labelDefault = "text-kui-light-gray-900 dark:text-kui-dark-gray-900"

export interface ResolveCheckboxClassInput {
	checked?: boolean
	indeterminate?: boolean
	disabled?: boolean
}

export function resolveBoxClass({
	checked = false,
	indeterminate = false,
	disabled = false,
}: ResolveCheckboxClassInput): ClassValue {
	if (disabled) {
		if (indeterminate) return [boxBase, boxDisabledIndeterminate, focusStyles]
		if (checked) return [boxBase, boxDisabledChecked, focusStyles]
		return [boxBase, boxDisabledUnchecked, focusStyles]
	}

	if (indeterminate) return [boxBase, boxIndeterminate, focusStyles]
	if (checked) return [boxBase, boxChecked, focusStyles]
	return [boxBase, boxUnchecked, focusStyles]
}

export function resolveIconClass({
	checked = false,
	indeterminate = false,
	disabled = false,
}: ResolveCheckboxClassInput): ClassValue {
	if (disabled && indeterminate) return [iconBase, iconDisabledIndeterminate]
	if (indeterminate) return [iconBase, iconIndeterminate]
	if (checked) return [iconBase, iconChecked]
	return [iconBase, iconUnchecked]
}

export function resolveLabelClass({ disabled = false }: { disabled?: boolean }): ClassValue {
	return [labelBase, disabled ? labelDisabled : labelDefault]
}

export function resolveRootClass({ disabled = false }: { disabled?: boolean }): ClassValue {
	return [rootBase, disabled ? "cursor-not-allowed" : "cursor-pointer"]
}
