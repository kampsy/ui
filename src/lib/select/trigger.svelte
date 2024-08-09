<script lang="ts">
	import ChevronDownSmall from '$lib/icons/chevron-down-small.svelte';
	import { getContext, type Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';

	type propsT = {
		class?: string;
		children: Snippet;
	};
	let { class: klass = '', children }: propsT = $props();

	// Get the select stores from the context
	const { isActive, transY, contentPosition } = getContext<{
		isActive: Writable<boolean>;
		transY: Writable<number>;
		contentPosition: Writable<string>;
	}>('select');

	const toogle = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement;
		const position = target.getBoundingClientRect();

		const viewportHeight = window.innerHeight;

		const positionFromTop = position.top;
		const positionFromBottom = viewportHeight - position.bottom;

		if (positionFromTop > positionFromBottom) {
			$contentPosition = `bottom-[112%]`;
			$transY = 10;
		} else {
			$contentPosition = `top-[112%]`;
			$transY = -10;
		}
		$isActive = !$isActive;
	};
</script>

<button
	onclick={toogle}
	class="group px-3 py-2 flex items-center justify-between rounded-[6px] border border-light-gray-200 dark:border-dark-gray-400 hover:border-light-gray-500 dark:hover:border-dark-gray-500 {klass} "
>
	{@render children()}
</button>
