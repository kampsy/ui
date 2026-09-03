<script lang="ts">
	import { getContext } from "svelte"
	import type { ModalSectionProps } from "./types.js"
	import { modalTitle } from "./styles.js"

	let { class: klass, children }: ModalSectionProps = $props()
	const rootState = getContext<{
		getTitleId: () => string
		setHasTitle: (value: boolean) => void
	}>("modal")

	$effect(() => rootState.setHasTitle(Boolean(children)))
</script>

{#if children}
	<h3 id={rootState.getTitleId()} class={[modalTitle, klass]}>
		{@render children()}
	</h3>
{/if}
