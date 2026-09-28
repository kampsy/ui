<script lang="ts">
	import { getContext } from "svelte"
	import type { ModalContext, ModalSectionProps } from "./types.js"
	import { resolveModalHeaderClass } from "./styles.js"

	let { class: klass, children }: ModalSectionProps = $props()

	const rootState = getContext<ModalContext>("modal")
</script>

{#if children}
	<header class={[resolveModalHeaderClass(rootState.getSticky()), klass]}>
		{@render children()}
	</header>
{/if}
