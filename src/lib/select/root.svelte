<script lang="ts">
	import { clickOutside } from '$lib/utils/event.js';
	import { setContext, type Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import { createRootState } from './root.svelte.js';

	interface Props {
		value?: string;
		size?: 'tiny' | 'small' | 'medium' | 'large' | undefined;
		class?: string;
		children: Snippet;
	};
	let { value = $bindable(''), size = 'medium', class: klass = '', children }: Props = $props();


	const rootState = createRootState({
		isMobile: false,
		selected: '',
		isActive: false,
		size,
		contentPosition: 'top-[112%',
		transY: -10
	});

	setContext('select', rootState);

	// Assign the selected value to the parent component value prop when changed.
	$effect(() => {
		value = rootState.getSelected();
	});

	$effect(() => {
		if (window.innerWidth < 767) {
			rootState.setIsMobile(true);
		} else {
			rootState.setIsMobile(false);
		}
		// update when the user is resizing the window
		window.addEventListener('resize', () => {
			if (window.innerWidth < 767) {
				rootState.setIsMobile(true);
			} else {
				rootState.setIsMobile(false);
			}
		});
	});
</script>

<!--Backgrop background on mobile only-->
{#if rootState.getIsActive()}
	<div
		in:fade|local
		out:fade|local
		class="fixed top-0 left-0 w-full h-full bg-kui-black bg-opacity-[0.4] lg:hidden z-[1000]"
	></div>
{/if}

<div use:clickOutside={() => rootState.setIsActive(false)} class="relative inline-block {klass}">
	{@render children()}
</div>
