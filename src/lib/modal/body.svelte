<script lang="ts">
	import { getContext } from "svelte"
	import type { ModalContext, ModalSectionProps } from "./types.js"
	import { modalBody } from "./styles.js"

	let { class: klass, children }: ModalSectionProps = $props()

	const rootState = getContext<ModalContext>("modal")
</script>

{#if children}
	<div class={["relative h-full", klass]}>
		{#if rootState.getSticky()}
			<div aria-hidden="true" class="h-18.25 w-full"></div>
		{/if}
		<div class={modalBody}>
			{@render children()}
		</div>
		<div aria-hidden="true" class="w-full lg:h-18.25"></div>
	</div>
{/if}

<style>
	@media (max-width: 768px) {
		.modal-body {
			max-height: calc(80vh - 146px) !important;
		}
	}

	@media (min-width: 1024px) {
		.modal-body {
			max-height: calc(626px - 146px) !important;
		}
	}
</style>
