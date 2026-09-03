<script lang="ts">
	import { setContext, tick } from "svelte"
	import { createModalState } from "./root.svelte.js"
	import { preventScroll } from "$lib/utils/general.js"
	import { fade } from "svelte/transition"
	import type { ModalRootProps } from "./types.js"
	import { modalBackdrop, modalDialog, modalViewport } from "./styles.js"

	let {
		active = $bindable(false),
		sticky = false,
		dismissible = true,
		initialFocus,
		children,
	}: ModalRootProps = $props()

	let dialog: HTMLDialogElement
	let closeTimeout: ReturnType<typeof setTimeout> | undefined
	let restoreElement: HTMLElement | null = null
	const modalId = $props.id()

	const rootState = createModalState({
		isMobile: false,
		isActive: active,
		getSticky: () => sticky,
		titleId: `${modalId}-title`,
		descriptionId: `${modalId}-description`,
		getDismissible: () => dismissible,
		onActiveChange: value => (active = value),
	})

	setContext("modal", rootState)

	$effect(() => {
		clearTimeout(closeTimeout)

		if (active) {
			if (!restoreElement && document.activeElement instanceof HTMLElement) {
				restoreElement = document.activeElement
			}
			if (!dialog.open) dialog.showModal()
			rootState.setIsActive(true)
			preventScroll(active)
			tick().then(() => {
				if (!active) return
				const target = initialFocus ?? getFocusableElements()[0] ?? dialog
				target.focus()
			})
		} else {
			rootState.setIsActive(false)
			closeTimeout = setTimeout(() => {
				dialog.close()
				closeTimeout = undefined
				restoreElement?.focus()
				restoreElement = null
			}, 250)
			preventScroll(active)
		}

		return () => clearTimeout(closeTimeout)
	})

	function handleClose() {
		active = false
	}

	function handleCancel(event: Event) {
		if (!rootState.getDismissible()) {
			event.preventDefault()
			return
		}
		active = false
	}

	function getFocusableElements() {
		return Array.from(
			dialog.querySelectorAll<HTMLElement>(
				'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
			),
		)
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== "Tab") return

		const focusable = getFocusableElements()
		if (!focusable.length) {
			event.preventDefault()
			dialog.focus()
			return
		}

		const first = focusable[0]
		const last = focusable[focusable.length - 1]
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault()
			last.focus()
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault()
			first.focus()
		}
	}

	$effect(() => {
		const updateViewport = () => rootState.setIsMobile(window.innerWidth < 767)
		updateViewport()
		window.addEventListener("resize", updateViewport)

		return () => window.removeEventListener("resize", updateViewport)
	})
</script>

<!--Backgrop background-->
{#if active}
	<div
		in:fade|local={{ duration: 100 }}
		out:fade|local={{ duration: 100 }}
		class={modalBackdrop}
	></div>
{/if}

<dialog
	bind:this={dialog}
	class={modalDialog}
	aria-describedby={rootState.getHasDescription() ? rootState.getDescriptionId() : undefined}
	aria-label={rootState.getHasTitle() ? undefined : "Modal"}
	aria-labelledby={rootState.getHasTitle() ? rootState.getTitleId() : undefined}
	oncancel={handleCancel}
	onclose={handleClose}
	onkeydown={handleKeydown}
	tabindex="-1"
>
	<div in:fade out:fade class={modalViewport}>
		{@render children()}
	</div>
</dialog>
