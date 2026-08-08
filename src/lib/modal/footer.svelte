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

	let footerClass = $derived.by(() => {
		if (rootState.sticky) {
			return ``
		} else {
			return ""
		}
	})
</script>

{#if children}
	<footer
		aria-labelledby="modal-actions"
		class="border-kui-light-gray-200 dark:border-kui-dark-gray-200 bg-kui-light-bg-secondary dark:bg-kui-dark-bg sticky inset-x-0 bottom-0 box-border flex items-center
	justify-between rounded-b-xl border-t p-4 drop-shadow-xs lg:absolute {footerClass} {klass}"
	>
		{@render children()}
	</footer>
{/if}
