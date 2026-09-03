<script lang="ts">
	import { getContext } from "svelte"
	import type { ModalSectionProps } from "./types.js"
	import { modalSubtitle } from "./styles.js"

	let { class: klass, children }: ModalSectionProps = $props()
	const rootState = getContext<{
		getDescriptionId: () => string
		setHasDescription: (value: boolean) => void
	}>("modal")

	$effect(() => rootState.setHasDescription(Boolean(children)))
</script>

{#if children}
	<p id={rootState.getDescriptionId()} class={[modalSubtitle, klass]}>
		{@render children()}
	</p>
{/if}
