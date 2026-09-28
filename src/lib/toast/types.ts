export type ToastType = "message" | "success" | "warning" | "error"
export type ToastPosition =
	| "top-left"
	| "top-center"
	| "top-right"
	| "bottom-left"
	| "bottom-center"
	| "bottom-right"

interface ToastBaseOptions {
	text: string
	preserve?: boolean
	duration?: number
	class?: string
}

type ToastAction =
	| {
			action: string
			onAction: () => void
			onUndoAction?: never
	  }
	| {
			action?: never
			onAction?: never
			onUndoAction: () => void
	  }
	| {
			action?: never
			onAction?: never
			onUndoAction?: never
	  }

export type ToastOptions = ToastBaseOptions & ToastAction
export type ToastInput = Omit<ToastOptions, "text">

export type ToastItem = ToastOptions & {
	id: string
	type: ToastType
}

export interface ToastApi {
	(text: string, options?: ToastInput): string
	success: (text: string, options?: ToastInput) => string
	warning: (text: string, options?: ToastInput) => string
	error: (text: string, options?: ToastInput) => string
	dismiss: (id: string) => void
}
