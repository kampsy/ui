<script lang="ts">
	import { randomString } from '$lib/utils/random.js';
	import type { Snippet } from 'svelte';
	import { setContext } from 'svelte';
	import { createRootState } from './root.svelte.js';

	type propT = {
		value: string;
		name?: string | undefined;
		size?: 'small' | 'medium' | 'large' | undefined;
		fullWidth?: boolean | undefined;
		children?: Snippet | undefined;
	};
	let {
		value = $bindable(''),
		name = undefined,
		size = 'medium',
		fullWidth = false,
		children = undefined
	}: propT = $props();

	const switchProps = {
		name: '',
		size: size,
		fullWidth: fullWidth
	};

	if (name) {
		switchProps.name = name;
	} else {
		switchProps.name = randomString(8);
	}

	const rootState = createRootState({ selected: '', ...switchProps });

	setContext('switch', rootState);

	let width = $derived.by(() => {
		if (fullWidth) {
			return 'w-full';
		}
		return '';
	});

	// Large size has a different border radius than other sizes
	let borderRadius = $derived.by(() => {
		if (size === 'large') {
			return 'rounded-[8px]';
		}
		return 'rounded-[6px]';
	});

	$effect(() => {
		value = rootState.getSelected();
	});
</script>

<div class={width}>
	<div
		class="flex items-center p-1 {borderRadius} border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
