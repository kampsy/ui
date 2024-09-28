<script lang="ts">
	import { clickOutside } from '$lib/utils/event.js';
    import { createRootState } from './root.svelte.js';
	import { setContext, type Snippet } from 'svelte';

	type propsT = {
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { class: klass = '', children = undefined }: propsT = $props();

    const rootState = createRootState({
		isMobile: false,
		isActive: false,
		contentPosition: 'top-[112%',
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
	});
</script>

<div use:clickOutside={() => rootState.setIsActive(false)} class="relative inline-block {klass}">
	{#if children}
		{@render children()}
	{/if}
</div>
