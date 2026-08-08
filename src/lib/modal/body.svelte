<script lang="ts">
	import { getContext, type Snippet } from "svelte"

	interface Props {
		class?: string
		children: Snippet | undefined
	}

	let { class: klass = "", children }: Props = $props()

	const rootState = getContext<{
		sticky: boolean
	}>("modal")

	let bodyClass = $derived.by(() => {
		if (rootState.sticky) {
			return ""
		} else {
			return ""
		}
	})
</script>

{#if children}
	<div class="relative h-full {bodyClass} {klass}">
		{#if rootState.sticky}
			<div aria-hidden="true" class="h-18.25 w-full"></div>
		{/if}
		<div class="modal-body overflow-y-auto overscroll-contain scroll-smooth p-6">
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
