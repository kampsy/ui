<script lang="ts">
	import type { Snippet } from "svelte"

	interface Props {
		children: Snippet | undefined
	}
	let { children = undefined }: Props = $props()
</script>

<th class="h-10 px-2 text-left align-middle text-sm font-medium last:text-right">
	{#if children}
		{@render children()}
	{/if}
</th>
