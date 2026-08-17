<script lang="ts">
	import type { Snippet } from "svelte"

	interface Props {
		children: Snippet | undefined
	}
	let { children = undefined }: Props = $props()
</script>

<div class=" text-kui-light-gray-900 dark:text-kui-dark-gray-900 w-full overflow-auto text-sm">
	<table class="w-full">
		{#if children}
			{@render children()}
		{/if}
	</table>
</div>
