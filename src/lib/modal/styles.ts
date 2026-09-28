import type { ClassValue } from "svelte/elements"

export const modalBackdrop = `fixed top-0 left-0 z-1000 h-full w-full bg-kui-light-bg/70 dark:bg-kui-dark-bg/70`

export const modalDialog =
	"fixed inset-0 m-0 h-full w-full max-h-none max-w-none border-0 bg-transparent p-0"

export const modalViewport =
	"fixed top-0 left-0 flex h-full w-full items-center justify-center"

export const modalMobileShell =
	"bg-kui-light-bg/70 dark:bg-kui-dark-bg/70 fixed bottom-0 left-0 z-1001 w-full rounded-t-[10px] lg:bg-transparent"

export const modalMobileContent =
	"bg-kui-light-bg dark:bg-kui-dark-bg-secondary border-kui-light-gray-500 dark:border-kui-dark-gray-400! max-h-[80vh] w-full rounded-[10px] rounded-t-[10px] border-t"

export const modalDesktopContent = `bg-kui-light-bg dark:bg-kui-dark-bg-secondary border border-kui-light-gray-500 dark:border-kui-dark-gray-400! 
	relative max-h-156.5 w-135 rounded-xl`

export const modalBody = "modal-body overflow-y-auto overscroll-contain scroll-smooth p-6"

export const modalStickyHeader =
	"absolute inset-x-0 top-0 w-full rounded-t-[12px] border-b border-kui-light-gray-400 bg-kui-light-bg-secondary px-[24px] py-[20px] drop-shadow-xs dark:border-kui-dark-gray-400 dark:bg-kui-dark-bg"

export const modalDefaultHeader = "mb-6"

export const modalFooter =
	"border-kui-light-gray-400 dark:border-kui-dark-gray-400 bg-kui-light-bg-secondary dark:bg-kui-dark-bg sticky inset-x-0 bottom-0 box-border flex items-center justify-between rounded-b-xl border-t p-3 drop-shadow-xs lg:absolute"

export const modalTitle =
	"text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[20px] leading-[32px] font-semibold"

export const modalSubtitle =
	"text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 mb-1 leading-6"

export function resolveModalContentClass(klass?: ClassValue): ClassValue {
	return [modalDesktopContent, klass]
}

export function resolveModalHeaderClass(sticky: boolean): string {
	return sticky ? modalStickyHeader : modalDefaultHeader
}

export function resolveModalFooterClass(klass?: ClassValue): ClassValue {
	return [modalFooter, klass]
}
