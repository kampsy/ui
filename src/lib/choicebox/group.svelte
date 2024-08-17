<script lang="ts">
	import { randomString } from '$lib/utils/random.js';
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';

	type propsT = {
		type?: 'radio' | 'checkbox' | undefined;
		label?: string | undefined;
		value?: string | Array<string> | undefined;
		disabled?: boolean | undefined;
		children?: Snippet | undefined;
	};
	let {
		type = 'radio',
		label = undefined,
		value = $bindable(''),
		disabled = undefined,
		children = undefined
	}: propsT = $props();

	const switchProps = {
		name: randomString(8),
		disabledParent: disabled,
		type: type
	};

	setContext('props', switchProps);

	const selected = writable<string | Array<string>>('');
	setContext('choicebox', {
		selected
	});

	let labelClass = $derived.by(() => {
		if (disabled) {
			return 'text-kui-light-gray-900 dark:text-kui-dark-gray-900';
		}
		return 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000';
	});

	$effect(() => {
		value = $selected;
	});
</script>

<div class="w-full">
	{#if label}
		<div class="text-[13px] mb-[8px] first-letter:capitalize {labelClass} ">
			{label}
		</div>
	{/if}
	<div class="w-full flex items-center gap-x-4">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
