import type { Snippet } from "svelte"
import type { HTMLAttributes } from "svelte/elements"

export interface BannerProps extends HTMLAttributes<HTMLElement> {
	class?: string
	button: {
		href: string
		content: string
	}
	children?: Snippet | undefined
}
