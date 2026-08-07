<script lang="ts">
	import Button from "$lib/button/button.svelte"
	import type { ButtonProps } from "$lib/button/types.js"
	import { getContext } from "svelte"

	let { children, ...rest }: ButtonProps = $props()

	const rootState = getContext<{
		getIsActive: () => boolean
		setIsActive: (value: boolean) => void
		setContentPosition: (value: string) => void
		setTransY: (value: number) => void
	}>("menu")

	let buttonElement = $state<HTMLButtonElement>()

	$effect(() => {
		if (buttonElement) {
			if (rootState.getIsActive()) {
				buttonElement.setAttribute("aria-expanded", "true")
			} else {
				buttonElement.setAttribute("aria-expanded", "false")
			}
		}
	})

	const toogle = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement
		const position = target.getBoundingClientRect()

		const viewportHeight = window.innerHeight

		const positionFromTop = position.top
		const positionFromBottom = viewportHeight - position.bottom

		if (positionFromTop > positionFromBottom) {
			rootState.setContentPosition(`bottom-[112%]`)
			rootState.setTransY(10)
		} else {
			rootState.setContentPosition(`top-[112%]`)
			rootState.setTransY(-10)
		}
		rootState.setIsActive(!rootState.getIsActive())
	}
</script>

{#if children}
	<Button bind:buttonElement {...rest} onclick={toogle}>
		{@render children()}
	</Button>
{/if}
