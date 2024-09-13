<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';

	type propsT = {
		size: 'small' | 'large';
		value: string;
		defaultExpanded: boolean;
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let {
		size = 'large',
		value = '',
		class: klass = '',
		defaultExpanded = false,
		children
	}: propsT = $props();

	setContext('collapseItem', {
		size: writable<'small' | 'large'>(size),
		value: writable(value),
		defaultExpanded: writable(defaultExpanded)
	});
</script>

<div class="w-full {klass}">
	{#if children}
		{@render children()}
	{/if}
</div>
