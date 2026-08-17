<script lang="ts">
	import type { Snippet } from "svelte"

	interface Props {
		class?: string
		children: Snippet | undefined
	}

	let { class: klass = "", children }: Props = $props()
</script>

{#if children}
	<p
		aria-labelledby="modal-subtitle"
		class="text-md text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 leading-6 {klass}"
	>
		{@render children()}
	</p>
{/if}
