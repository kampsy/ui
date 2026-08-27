import type { ToastApi, ToastInput, ToastItem, ToastOptions, ToastType } from "./types.js"

export const toastState = $state({
	toasts: [] as ToastItem[],
	maxToasts: 3,
})

let sequence = 0
const timers = new Map<string, ReturnType<typeof setTimeout>>()

function dismiss(id: string) {
	const timer = timers.get(id)
	if (timer) clearTimeout(timer)
	timers.delete(id)
	toastState.toasts = toastState.toasts.filter(toast => toast.id !== id)
}

function addToast(text: string, options: ToastInput = {}, type: ToastType = "message") {
	const id = `toast-${++sequence}`
	const toast = { ...options, id, text, type } as ToastItem
	const nextToasts = [...toastState.toasts, toast]
	const removedToasts = nextToasts.splice(
		0,
		Math.max(0, nextToasts.length - toastState.maxToasts),
	)

	for (const removedToast of removedToasts) dismiss(removedToast.id)

	toastState.toasts = nextToasts
	if (!toast.preserve) {
		timers.set(
			id,
			setTimeout(() => dismiss(id), toast.duration ?? 5000),
		)
	}

	return id
}

const api = ((text: string, options?: ToastInput) => addToast(text, options)) as ToastApi

api.success = (text, options = {}) => addToast(text, options, "success")
api.warning = (text, options = {}) => addToast(text, options, "warning")
api.error = (text, options = {}) => addToast(text, options, "error")
api.dismiss = dismiss

export const toast = api
