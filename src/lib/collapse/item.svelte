<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';

	type propsT = {
        size: 'small' | 'large'
		value: string;
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { size = 'large', value, class: klass = '', children }: propsT = $props();

	setContext('collapseItem', {
        size: writable<'small' | 'large'>(size),
		value: writable(value)
	});
</script>

<div class="w-full {klass}">
	{#if children}
		{@render children()}
	{/if}
</div>
