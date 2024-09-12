<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';

	type propsT = {
		value: string;
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { value, class: klass = '', children }: propsT = $props();

	setContext('collapseItem', {
		value: writable(value)
	});
</script>

<div class="w-full {klass}">
	{#if children}
		{@render children()}
	{/if}
</div>
