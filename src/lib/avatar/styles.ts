import type { ClassValue } from "svelte/elements"

export const avatarBase =
	"inline-flex items-center justify-center rounded-full overflow-hidden border border-kui-light-gray-200 dark:border-kui-dark-gray-200 shrink-0"

export const avatarImageBase = "h-full w-full object-cover"

export const letterBase =
	"flex items-center justify-center rounded-full bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-semibold select-none uppercase"

export const placeholderBase =
	"rounded-full bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 border border-kui-light-gray-200 dark:border-kui-dark-gray-200 animate-pulse"

export const overflowBase =
	"flex items-center justify-center rounded-full bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-semibold border border-kui-light-gray-200 dark:border-kui-dark-gray-400"

export const avatarIconBase =
	"flex items-center justify-center rounded-full bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 text-kui-light-gray-900 dark:text-kui-dark-gray-900"

export function sizeStyle(size: number): string {
	return `width: ${size}px; height: ${size}px;`
}

export function fontSizeStyle(size: number): string {
	return `font-size: ${Math.max(10, Math.round(size / 2.5))}px;`
}

export interface ResolveAvatarClassInput {
	size: number
	class?: ClassValue
}

export function resolveAvatarClass({
	size,
	class: klass,
}: ResolveAvatarClassInput): ClassValue {
	return [avatarBase, sizeStyle(size), klass]
}
