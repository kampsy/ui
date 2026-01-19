<script lang="ts">
	import { clickOutside } from '$lib/utils/event.js';
	import { setContext, type Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import { createRootState } from './root.svelte.js';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLSelectElement> {
		value?: string;
		error?: string;
		loading?: boolean;
		size?: 'tiny' | 'small' | 'medium' | 'large' | undefined;
		class?: string;
		children: Snippet;
	}
	let {
		value = $bindable(''),
		error = $bindable(''),
		loading = $bindable(false),
		size = 'medium',
		class: klass = '',
		children
	}: Props = $props();

	const rootState = createRootState({
		isMobile: false,
		error,
		loading,
		selected: '',
		isActive: false,
		size,
		contentPosition: 'top-[112%]',
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

		// when the esc key is pressed
		window.addEventListener('keydown', (event: KeyboardEvent) => {
			if (event.code == 'Escape') {
				rootState.setIsActive(false);
				event.stopPropagation();
			}
		});

		// When error is changed
		rootState.setError(error);

		// When loading is changed
		rootState.setLoading(loading);
	});
</script>

<!--Backgrop background on mobile only-->
{#if rootState.getIsActive()}
	<div
		in:fade|local
		out:fade|local
		class="fixed top-0 left-0 w-full h-full bg-kui-black opacity-[0.4] lg:hidden z-1000"
	></div>
{/if}

<div>
	<div use:clickOutside={() => rootState.setIsActive(false)} class="relative inline-block {klass}">
		{@render children()}
	</div>
</div>
