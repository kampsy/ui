<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { createModalState } from './root.svelte.js';
	import { preventScroll } from '$lib/utils/general.js';

	interface Props {
		active: boolean;
		sticky?: boolean;
		children: Snippet;
	};
	let { active = $bindable(false), sticky = false, children }: Props = $props();

	let dialog: HTMLDialogElement;

	const rootState = createModalState({
		isMobile: false,
		isActive: active,
		sticky: sticky
	});

	setContext('modal', rootState);

	$effect(() => {
		active = rootState.getIsActive();
	});

	$effect(() => {
		if (active) {
			dialog.showModal();
			rootState.setIsActive(true);
			preventScroll(active);
		} else {
			rootState.setIsActive(false);
			const id = setTimeout(() => {
				dialog.close();
				clearTimeout(id);
			}, 250);
			preventScroll(active);
		}
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

<dialog bind:this={dialog} tabindex="-1">
	<div
		class="fixed top-0 left-0 w-full h-full flex items-center justify-center transition-colors bg-kui-black bg-opacity-[0.25] dark:bg-opacity-[0.75]"
	>
		{@render children()}
	</div>
</dialog>
