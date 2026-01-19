<script lang="ts">
	import { clickOutside } from '$lib/utils/event.js';
	import { fade } from 'svelte/transition';
	import { createRootState } from './root.svelte.js';
	import { setContext, type Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		alignment?: 'left' | 'right' | undefined;
		children: Snippet | undefined;
	}
	let { class: klass = '', alignment = 'left', children = undefined }: Props = $props();

	const rootState = createRootState({
		isMobile: false,
		isActive: false,
		alignment: alignment,
		contentPosition: 'top-[112%]',
		transY: -10
	});

	setContext('menu', rootState);

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
	});
</script>

<!--Backgrop background on mobile only-->
{#if rootState.getIsActive()}
	<div
		in:fade|local
		out:fade|local
		class="fixed top-0 left-0 w-full h-full bg-kui-black opacity-40 lg:hidden z-1000"
	></div>
{/if}

<div use:clickOutside={() => rootState.setIsActive(false)} class="relative inline-block {klass}">
	{#if children}
		{@render children()}
	{/if}
</div>
