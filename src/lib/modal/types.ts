import type { Snippet } from "svelte"
import type { ClassValue } from "svelte/elements"

export interface ModalRootProps {
	active: boolean
	sticky?: boolean
	dismissible?: boolean
	initialFocus?: HTMLElement
	children: Snippet
}

export interface ModalContentProps {
	class?: ClassValue
	children: Snippet
}

export interface ModalSectionProps {
	class?: ClassValue
	children?: Snippet
}

export interface ModalContext {
	getIsMobile: () => boolean
	getIsActive: () => boolean
	setIsActive: (value: boolean) => void
	getSticky: () => boolean
	getTitleId: () => string
	getHasTitle: () => boolean
	setHasTitle: (value: boolean) => void
	getDescriptionId: () => string
	getHasDescription: () => boolean
	setHasDescription: (value: boolean) => void
	getDismissible: () => boolean
}
