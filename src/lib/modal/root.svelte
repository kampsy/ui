<script lang="ts">
	import { setContext, type Snippet } from "svelte"
	import { createModalState } from "./root.svelte.js"
	import { preventScroll } from "$lib/utils/general.js"
	import { fade } from "svelte/transition"

	interface Props {
		active: boolean
		sticky?: boolean
		children: Snippet
	}
	let { active = $bindable(false), sticky = false, children }: Props = $props()

	let dialog: HTMLDialogElement

	const rootState = createModalState({
		isMobile: false,
		isActive: active,
		sticky: sticky,
	})

	setContext("modal", rootState)

	$effect(() => {
		active = rootState.getIsActive()
	})

	$effect(() => {
		if (active) {
			dialog.showModal()
			rootState.setIsActive(true)
			preventScroll(active)
		} else {
			rootState.setIsActive(false)
			const id = setTimeout(() => {
				dialog.close()
				clearTimeout(id)
			}, 250)
			preventScroll(active)
		}
	})

	$effect(() => {
		if (window.innerWidth < 767) {
			rootState.setIsMobile(true)
		} else {
			rootState.setIsMobile(false)
		}
		// update when the user is resizing the window
		window.addEventListener("resize", () => {
			if (window.innerWidth < 767) {
				rootState.setIsMobile(true)
			} else {
				rootState.setIsMobile(false)
			}
		})
	})
</script>

<!--Backgrop background-->
{#if active}
	<div
		in:fade|local={{ duration: 100 }}
		out:fade|local={{ duration: 100 }}
		class="bg-kui-black fixed top-0 left-0 z-1000 h-full w-full opacity-40"
	></div>
{/if}

<dialog bind:this={dialog}>
	<div
		in:fade
		out:fade
		class="fixed top-0 left-0 flex h-full w-full items-center justify-center"
	>
		{@render children()}
	</div>
</dialog>
