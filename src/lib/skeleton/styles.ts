import type { ClassValue } from "svelte/elements"

export const skeletonBase =
	"pointer-events-none absolute bg-kui-light-gray-200 dark:bg-kui-dark-gray-200"

export const skeletonShape = {
	pill: "rounded-full",
	rounded: "rounded-full",
	squared: "rounded-none",
} as const

export function dimensionStyle(
	property: "width" | "height",
	value: number | string | undefined,
): string | undefined {
	if (value === undefined) return undefined
	return `${property}: ${typeof value === "number" ? `${value}px` : value};`
}

export function sizeStyle(
	width: number | string | undefined,
	height: number | string | undefined,
): string {
	const widthStyle = dimensionStyle("width", width)
	const heightStyle = dimensionStyle("height", height)
	return [widthStyle, heightStyle].filter(Boolean).join(" ")
}

export function shellInsetStyle(button: boolean): string {
	return `inset: ${button ? "-1px" : "0"};`
}

export function resolveSkeletonClass({
	animated,
	pill,
	rounded,
	squared,
}: {
	animated: boolean
	pill: boolean
	rounded: boolean
	squared: boolean
}): ClassValue {
	const shape = squared
		? skeletonShape.squared
		: pill
			? skeletonShape.pill
			: rounded
				? skeletonShape.rounded
				: "rounded-sm"
	return [skeletonBase, shape, animated && "skeleton-shimmer"]
}
