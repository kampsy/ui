<script lang="ts">
	import { fly } from "svelte/transition"
	import Cross from "$lib/icons/cross.svelte"
	import Undo from "$lib/icons/undo.svelte"
	import Button from "$lib/button/button.svelte"
	import { toast as toastApi, toastState } from "./toast.svelte.js"
	import { portalToTopLayer } from "./portal.js"
	import type { ToastItem, ToastPosition } from "./types.js"

	interface Props {
		maxToasts?: number
		position?: ToastPosition
	}

	let { maxToasts = 3, position = "bottom-right" }: Props = $props()
	$effect(() => {
		toastState.maxToasts = maxToasts
	})

	const positionClasses: Record<ToastPosition, string> = {
		"top-left": "top-4 left-4 flex-col sm:top-6 sm:left-6",
		"top-center": "top-4 left-1/2 flex-col -translate-x-1/2 sm:top-6",
		"top-right": "top-4 right-4 flex-col sm:top-6 sm:right-6",
		"bottom-left": "bottom-4 left-4 flex-col-reverse sm:bottom-6 sm:left-6",
		"bottom-center": "bottom-4 left-1/2 flex-col-reverse -translate-x-1/2 sm:bottom-6",
		"bottom-right": "right-4 bottom-4 flex-col-reverse sm:right-6 sm:bottom-6",
	}

	const typeClass = {
		message: `border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400
			bg-kui-light-bg dark:bg-kui-dark-bg text-kui-light-gray-1000 dark:text-kui-dark-gray-1000`,
		success:
			"border-kui-light-blue-700 dark:border-kui-dark-blue-700 bg-kui-light-blue-700 dark:bg-kui-dark-blue-700 text-white",
		warning:
			"border-kui-light-amber-700 dark:border-kui-dark-amber-700 bg-kui-light-amber-700 dark:bg-kui-dark-amber-700 text-black",
		error:
			"border-kui-light-red-700 dark:border-kui-dark-red-700 bg-kui-light-red-700 dark:bg-kui-dark-red-700 text-white",
	}

	const closeClass = {
		message: "text-kui-light-gray-700! dark:text-kui-dark-gray-700!",
		success: "text-white! hover:bg-white/15! active:bg-white/20!",
		warning: "text-black! hover:bg-black/10! active:bg-black/15!",
		error: "text-white! hover:bg-white/15! active:bg-white/20!",
	}

	function handleAction(toast: ToastItem) {
		try {
			toast.onAction?.()
		} finally {
			toastApi.dismiss(toast.id)
		}
	}

	function handleUndo(toast: ToastItem) {
		try {
			toast.onUndoAction?.()
		} finally {
			toastApi.dismiss(toast.id)
		}
	}
</script>

<div
	{@attach portalToTopLayer}
	data-toast-host
	class="pointer-events-none fixed z-1000 flex w-[calc(100%-32px)] max-w-105 gap-3 {positionClasses[
		position
	]}"
	aria-live="polite"
	aria-atomic="false"
>
	{#each toastState.toasts as toast (toast.id)}
		<div
			in:fly={{ y: 16, duration: 180 }}
			out:fly={{ y: 8, duration: 120 }}
			role="status"
			class="pointer-events-auto flex min-h-16 gap-3 rounded-xl border px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-none {toast.action
				? 'flex-col items-stretch'
				: 'items-center'} {typeClass[toast.type]} {toast.class ?? ''}"
		>
			<p class="min-w-0 flex-1 text-sm leading-5 text-pretty">{toast.text}</p>
			{#if toast.action}
				<div class="flex justify-end gap-2">
					<Button variant="tertiary" size="small" onclick={() => toastApi.dismiss(toast.id)}>
						Dismiss
					</Button>
					<Button size="small" onclick={() => handleAction(toast)}>
						{toast.action}
					</Button>
				</div>
			{:else}
				{#if toast.onUndoAction}
					<Button
						variant="tertiary"
						size="small"
						shape="square"
						svgOnly
						aria-label="Undo"
						onclick={() => handleUndo(toast)}
						class="{closeClass[toast.type]} shrink-0"
					>
						<Undo />
					</Button>
				{/if}
				<Button
					variant="tertiary"
					size="small"
					shape="square"
					svgOnly
					aria-label="Dismiss notification"
					onclick={() => toastApi.dismiss(toast.id)}
					class="{closeClass[toast.type]} shrink-0"
				>
					<Cross />
				</Button>
			{/if}
		</div>
	{/each}
</div>
