<script lang="ts">
	import { clickOutside } from '$lib/utils/event.js';
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';

	type propsT = {
		value?: string;
		size?: 'tiny' | 'small' | 'medium' | 'large' | undefined;
        class?: string;
		children: Snippet;
	};
	let { value = $bindable(''), size = 'medium', class: klass = '', children }: propsT = $props();

	const selected = writable('');
	const isActive = writable(false);
	const transY = writable(-10);
	const contentPosition = writable('top-[112%]');
	setContext('select', {
		selected,
		size: size,
		isActive,
		transY,
		contentPosition
	});

	// Assign the selected value to the parent component value prop when changed.
	$effect(() => {
		value = $selected;
	});
</script>

<div use:clickOutside={() => ($isActive = false)} class="relative inline-block {klass}">
	{@render children()}
</div>
