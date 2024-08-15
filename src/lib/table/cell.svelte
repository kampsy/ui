<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		class?: string | undefined;
		children?: Snippet | undefined;
	};
	let { class: klass = '', children = undefined }: propsT = $props();
</script>

<td class="px-2 py-2.5 align-middle last:text-right [&:has([data-cell-link=true])]:p-0 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] {klass}">
	{#if children}
		{@render children()}
	{/if}
</td>
