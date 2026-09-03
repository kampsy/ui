<script lang="ts">
	import { clickOutside } from "$lib/utils/event.js"
	import { getContext } from "svelte"
	import { cubicOut } from "svelte/easing"
	import { fly, scale } from "svelte/transition"
	import type { ModalContentProps, ModalContext } from "./types.js"
	import { modalMobileContent, modalMobileShell, resolveModalContentClass } from "./styles.js"

	let { class: klass, children }: ModalContentProps = $props()

	const rootState = getContext<ModalContext>("modal")
</script>

{#snippet mobileSnip()}
	{#if rootState.getIsActive()}
		<div
			in:fly|local={{ y: "50vh", duration: 500, opacity: 1 }}
			out:fly|local={{ y: "100vh", duration: 600, easing: cubicOut, opacity: 1 }}
			class={modalMobileShell}
		>
			<div
				use:clickOutside={() => rootState.getDismissible() && rootState.setIsActive(false)}
				class={modalMobileContent}
			>
				{@render children()}
			</div>
		</div>
	{/if}
{/snippet}

{#snippet desktopSnip()}
	{#if rootState.getIsActive()}
		<div
			in:scale|local={{ duration: 200 }}
			out:scale|local={{ duration: 300 }}
			use:clickOutside={() => rootState.getDismissible() && rootState.setIsActive(false)}
			class={resolveModalContentClass(klass)}
		>
			{@render children()}
		</div>
	{/if}
{/snippet}

{#if rootState.getIsMobile()}
	{@render mobileSnip()}
{:else}
	{@render desktopSnip()}
{/if}
