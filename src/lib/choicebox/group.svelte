<script lang="ts">
	import { randomString } from '$lib/utils/random.js';
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';

	type propsT = {
		type?: 'radio' | 'checkbox' | undefined;
		label?: string | undefined;
		value?: string | undefined;
		children?: Snippet | undefined;
	};
	let { type = 'radio', label = undefined, value = $bindable(''), children = undefined }: propsT = $props();

	const switchProps = {
		name: randomString(8),
		type: type
	};

	setContext('props', switchProps);

	const selected = writable('');
	setContext('choicebox', {
		selected
	});

	$effect(() => {
		value = $selected;
	});
</script>

<div class="w-full">
	{#if label}
		<div class="text-[13px] first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000">
			{label}
		</div>
	{/if}
	<div class="w-full mt-[8px] flex items-center gap-x-4">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
