<script lang="ts">
	import type { Snippet } from 'svelte';
	import { switchCont } from '$lib/switch/switch.svelte.js';

	type propT = {
		name: string;
		children?: Snippet | undefined;
	};
	let { name, children = undefined }: propT = $props();

	// set the value of switchObj.name
	switchCont.setName(name);
</script>

<div
	class="flex items-center p-1 rounded-[6px] border border-light-gray-200 dark:border-dark-gray-400"
>
	{#if children}
		{@render children()}
	{/if}
</div>
