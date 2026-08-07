import type { ClassValue } from "svelte/elements"
import type { BadgeContrast, BadgeSize, BadgeVariant } from "./types.js"

export const badgeBase =
	"inline-flex items-center justify-center rounded-full font-medium text-wrap"

/** High/low contrast classes per variant. `low` is Geist's `-subtle`. */
export const variantStyles: Record<BadgeVariant, Record<BadgeContrast, string>> = {
	gray: {
		high: "bg-kui-light-gray-900 text-kui-light-bg dark:bg-kui-dark-gray-500 dark:text-kui-light-bg",
		low: "bg-kui-light-gray-200 text-kui-light-gray-1000 dark:bg-kui-dark-gray-200 dark:text-kui-dark-gray-1000",
	},
	blue: {
		high: "bg-kui-light-blue-800 text-kui-light-bg dark:bg-kui-dark-blue-800 dark:text-kui-light-bg",
		low: "bg-kui-light-blue-200 text-kui-light-blue-900 dark:bg-kui-dark-blue-200 dark:text-kui-dark-blue-900",
	},
	purple: {
		high: "bg-kui-light-purple-900 text-kui-light-bg dark:bg-kui-dark-purple-500 dark:text-kui-light-bg",
		low: "bg-kui-light-purple-200 text-kui-light-purple-900 dark:bg-kui-dark-purple-200 dark:text-kui-dark-purple-900",
	},
	amber: {
		high: "bg-kui-light-amber-700 text-black dark:bg-kui-dark-amber-700",
		low: "bg-kui-light-amber-200 text-kui-light-amber-900 dark:bg-kui-dark-amber-200 dark:text-kui-dark-amber-900",
	},
	red: {
		high: "bg-kui-light-red-900 text-kui-light-bg dark:bg-kui-dark-red-800 dark:text-kui-light-bg",
		low: "bg-kui-light-red-200 text-kui-light-red-900 dark:bg-kui-dark-red-200 dark:text-kui-dark-red-900",
	},
	pink: {
		high: "bg-kui-light-pink-900 text-kui-light-bg dark:bg-kui-dark-pink-600 dark:text-kui-light-bg",
		low: "bg-kui-light-pink-200 text-kui-light-pink-900 dark:bg-kui-dark-pink-200 dark:text-kui-dark-pink-900",
	},
	green: {
		high: "bg-kui-light-green-900 text-kui-light-bg dark:bg-kui-dark-green-600 dark:text-kui-light-bg",
		low: "bg-kui-light-green-200 text-kui-light-green-900 dark:bg-kui-dark-green-200 dark:text-kui-dark-green-900",
	},
	teal: {
		high: "bg-kui-light-teal-900 text-kui-light-bg dark:bg-kui-dark-teal-600 dark:text-kui-light-bg",
		low: "bg-kui-light-teal-300 text-kui-light-teal-900 dark:bg-kui-dark-teal-300 dark:text-kui-dark-teal-900",
	},
	inverted: {
		high: "bg-kui-light-gray-1000 text-kui-light-gray-100 dark:bg-kui-dark-gray-1000 dark:text-kui-dark-gray-100",
		low: "bg-kui-light-gray-1000 text-kui-light-gray-100 dark:bg-kui-dark-gray-1000 dark:text-kui-dark-gray-100",
	},
	trial: {
		high: "bg-kui-light-purple-700 text-kui-light-bg dark:bg-kui-dark-purple-700 dark:text-kui-light-bg",
		low: "bg-kui-light-purple-200 text-kui-light-purple-900 dark:bg-kui-dark-purple-200 dark:text-kui-dark-purple-900",
	},
	turbo: {
		high: "bg-linear-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] text-white",
		low: "bg-linear-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] text-white",
	},
	pill: {
		high: "cursor-pointer border border-kui-light-gray-200 dark:border-kui-dark-gray-400 hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100",
		low: "cursor-pointer border border-kui-light-gray-200 dark:border-kui-dark-gray-400 hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100",
	},
}

export const sizeStyles: Record<BadgeSize, string> = {
	sm: "h-5 px-1.5 py-0 text-[11px] font-medium",
	md: "h-6 px-2.5 py-0 text-[12px] font-medium",
	lg: "h-8 px-3 py-0 text-[14px] font-medium",
}

export const iconSizeStyles: Record<BadgeSize, string> = {
	sm: "w-2.75 h-2.75",
	md: "w-3.5 h-3.5",
	lg: "w-4 h-4",
}

export const iconGapStyles: Record<BadgeSize, string> = {
	sm: "first:gap-x-0.75",
	md: "first:gap-x-1",
	lg: "first:gap-x-1.5",
}

export interface ResolveBadgeClassInput {
	variant?: BadgeVariant
	contrast?: BadgeContrast
	size?: BadgeSize
	class?: ClassValue
}

export function resolveBadgeClass({
	variant = "gray",
	contrast = "high",
	size = "md",
	class: klass,
}: ResolveBadgeClassInput): ClassValue {
	return [badgeBase, variantStyles[variant][contrast], sizeStyles[size], klass]
}

/** Class resolver for applying badge styling to external elements (e.g. links). */
export interface BadgeVariantsInput {
	variant?: BadgeVariant
	contrast?: BadgeContrast
	size?: BadgeSize
}

export function badgeVariants({
	variant = "gray",
	contrast = "high",
	size = "md",
}: BadgeVariantsInput): string {
	return [badgeBase, variantStyles[variant][contrast], sizeStyles[size]].join(" ")
}
