import type { ClassValue } from "svelte/elements"

// Group
export const groupRootBase = "w-full border-0 m-0 p-0 min-w-0"

export const legendBase = "mb-2 text-[13px] first-letter:capitalize"
export const legendDisabled = "text-kui-light-gray-900 dark:text-kui-dark-gray-900"
export const legendDefault = "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"

export const listBase = "flex w-full gap-x-4"

// Item label (tile)
export const itemLabelBase = "group flex w-full rounded-md border transition-colors ease-in"
export const itemLabelDisabled =
	"cursor-not-allowed border-kui-light-gray-200 dark:border-kui-dark-gray-400"
export const itemLabelSelected = `cursor-pointer bg-kui-light-blue-200 dark:bg-kui-dark-blue-200
	border-kui-light-blue-600 dark:border-kui-dark-blue-600
	hover:border-kui-light-blue-700 dark:hover:border-kui-dark-blue-700`
export const itemLabelDefault = `cursor-pointer hover:bg-kui-light-gray-200 dark:hover:bg-kui-dark-gray-200
	border-kui-light-gray-200 dark:border-kui-dark-gray-400
	hover:border-kui-light-gray-500 dark:hover:border-kui-dark-gray-500`

export const focusStyles = `peer-focus-visible:ring-2 peer-focus-visible:ring-kui-light-gray-500
	peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-kui-light-bg
	dark:peer-focus-visible:ring-kui-dark-gray-500 dark:peer-focus-visible:ring-offset-kui-dark-bg`

// Title
export const titleBase =
	"transition-colors text-sm ease-in first-letter:capitalize leading-6 font-medium"
export const titleDisabled = "text-kui-light-gray-500 dark:text-kui-dark-gray-500"
export const titleSelected = "text-kui-light-blue-900 dark:text-kui-dark-blue-900"
export const titleDefault = "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"

// Description
export const descriptionBase =
	"transition-colors text-sm ease-in first-letter:capitalize leading-6 font-normal"
export const descriptionDisabled = "text-kui-light-gray-500 dark:text-kui-dark-gray-500"
export const descriptionSelected = "text-kui-light-blue-900 dark:text-kui-dark-blue-900"
export const descriptionDefault = "text-kui-light-gray-900 dark:text-kui-dark-gray-900"

// Radio
export const radioContBase =
	"flex h-4 w-4 items-center justify-center rounded-full border p-px transition-colors ease-in"
export const radioContDisabled = "border-kui-light-gray-200 dark:border-kui-dark-gray-400"
export const radioContSelected = "border-kui-light-blue-900 dark:border-kui-dark-blue-900"
export const radioContDefault = `border-kui-light-gray-200 dark:border-kui-dark-gray-200
	group-hover:border-kui-light-gray-500 dark:group-hover:border-kui-dark-gray-500
	group-hover:bg-kui-light-bg dark:group-hover:bg-kui-dark-bg`

export const radioDotBase = "h-2 w-2 rounded-full transition-colors ease-in"
export const radioDotSelected = "bg-kui-light-blue-900 dark:bg-kui-dark-blue-900"
export const radioDotDefault = "bg-transparent"

// Checkbox
export const checkboxContBase =
	"flex h-4 w-4 items-center justify-center rounded-sm border p-px transition-colors ease-in"
export const checkboxContDisabled = "border-kui-light-gray-200 dark:border-kui-dark-gray-400"
export const checkboxContSelected =
	"border-kui-light-blue-900 dark:border-kui-dark-blue-900 bg-kui-light-blue-900 dark:bg-kui-dark-blue-900"
export const checkboxContDefault = `border-kui-light-gray-200 dark:border-kui-dark-gray-200
	group-hover:border-kui-light-gray-500 dark:group-hover:border-kui-dark-gray-500
	group-hover:bg-kui-light-bg dark:group-hover:bg-kui-dark-bg`

export const checkboxCheckBase = "h-2.5 w-2.5 transition-colors ease-in"
export const checkboxCheckSelected = "text-white dark:text-black font-bold"
export const checkboxCheckDefault = "text-transparent font-bold"

export interface ResolveItemLabelInput {
	disabled?: boolean
	selected?: boolean
}

export function resolveItemLabelClass({
	disabled = false,
	selected = false,
}: ResolveItemLabelInput): ClassValue {
	if (disabled) return [itemLabelBase, itemLabelDisabled, focusStyles]
	if (selected) return [itemLabelBase, itemLabelSelected, focusStyles]
	return [itemLabelBase, itemLabelDefault, focusStyles]
}

export interface ResolveTitleInput {
	disabled?: boolean
	selected?: boolean
}

export function resolveTitleClass({
	disabled = false,
	selected = false,
}: ResolveTitleInput): ClassValue {
	if (disabled) return [titleBase, titleDisabled]
	if (selected) return [titleBase, titleSelected]
	return [titleBase, titleDefault]
}

export interface ResolveDescriptionInput {
	disabled?: boolean
	selected?: boolean
}

export function resolveDescriptionClass({
	disabled = false,
	selected = false,
}: ResolveDescriptionInput): ClassValue {
	if (disabled) return [descriptionBase, descriptionDisabled]
	if (selected) return [descriptionBase, descriptionSelected]
	return [descriptionBase, descriptionDefault]
}

export interface ResolveRadioContInput {
	disabled?: boolean
	selected?: boolean
}

export function resolveRadioContClass({
	disabled = false,
	selected = false,
}: ResolveRadioContInput): ClassValue {
	if (disabled) return [radioContBase, radioContDisabled]
	if (selected) return [radioContBase, radioContSelected]
	return [radioContBase, radioContDefault]
}

export interface ResolveRadioDotInput {
	selected?: boolean
}

export function resolveRadioDotClass({ selected = false }: ResolveRadioDotInput): ClassValue {
	return [radioDotBase, selected ? radioDotSelected : radioDotDefault]
}

export interface ResolveCheckboxContInput {
	disabled?: boolean
	selected?: boolean
}

export function resolveCheckboxContClass({
	disabled = false,
	selected = false,
}: ResolveCheckboxContInput): ClassValue {
	if (disabled) return [checkboxContBase, checkboxContDisabled]
	if (selected) return [checkboxContBase, checkboxContSelected]
	return [checkboxContBase, checkboxContDefault]
}

export interface ResolveCheckboxCheckInput {
	selected?: boolean
}

export function resolveCheckboxCheckClass({
	selected = false,
}: ResolveCheckboxCheckInput): ClassValue {
	return [checkboxCheckBase, selected ? checkboxCheckSelected : checkboxCheckDefault]
}

export interface ResolveGroupLabelInput {
	disabled?: boolean
}

export function resolveGroupLabelClass({
	disabled = false,
}: ResolveGroupLabelInput): ClassValue {
	return [legendBase, disabled ? legendDisabled : legendDefault]
}
