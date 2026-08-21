import type { ClassValue, HTMLAttributes } from "svelte/elements"
import type { Snippet } from "svelte"

export type SkeletonDimension = number | string

export interface SkeletonProps extends Omit<HTMLAttributes<HTMLSpanElement>, "class"> {
	/** Width of the skeleton. Numbers are interpreted as pixels. */
	width?: SkeletonDimension
	/** Height of the skeleton bar. Numbers are interpreted as pixels. */
	height?: SkeletonDimension
	/** Height of the wrapper container. Numbers are interpreted as pixels. */
	boxHeight?: SkeletonDimension
	/** Whether the loading shell is visible. Default: true. */
	show?: boolean
	/** Enables the shimmer animation. Default: true. */
	animated?: boolean
	/** Use a fully rounded pill shape. */
	pill?: boolean
	/** Use a medium rounded shape. */
	rounded?: boolean
	/** Use square corners. */
	squared?: boolean
	/** Extends the shell by 1px on all sides to cover button borders. */
	button?: boolean
	class?: ClassValue
	children?: Snippet
}
