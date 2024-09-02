<script lang="ts">
	import { clickOutside } from '$lib/utils/event.js';
	import { setContext, type Snippet } from 'svelte';
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	type propsT = {
		value?: string;
		size?: 'tiny' | 'small' | 'medium' | 'large' | undefined;
        class?: string;
		children: Snippet;
	};
	let { value = $bindable(''), size = 'medium', class: klass = '', children }: propsT = $props();


	const isMobile = writable(false);
	const selected = writable('');
	const isActive = writable(false);
	const transY = writable(-10);
	const contentPosition = writable('top-[112%]');
	
	setContext('select', {
		isMobile,
		selected,
		size: size,
		isActive,
		transY,
		contentPosition,
	});

	// Assign the selected value to the parent component value prop when changed.
	$effect(() => {
		value = $selected;
	});

	$effect(() => {
		if (window.innerWidth < 767) {
			$isMobile = true;
		} else {
			$isMobile = false;
		}
		// update when the user is resizing the window
		window.addEventListener('resize', () => {
			if (window.innerWidth < 767) {
				$isMobile = true;
			} else {
				$isMobile = false;
			}
		});
	});

</script>

<!--Backgrop background on mobile only-->
{#if $isActive}
	<div
		in:fade|local
		out:fade|local
		class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-[0.4] lg:hidden z-[1000]"
	></div>
{/if}

<div use:clickOutside={() => ($isActive = false)} class="relative inline-block {klass}">
	{@render children()}
</div>
