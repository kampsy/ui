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
	const {size, isActive, transY, contentPosition } = getContext<{
		size: 'tiny' | 'small' | 'medium' | 'large';
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

	const sizeObj = {
		tiny: 'h-[24px] text-xs leading-3',
		small: 'h-[32px] px-[6px] text-sm leading-4',
		medium: 'h-[40px] px-[10px] text-sm leading-[20px]',
		large: 'h-[48px] px-[14px] text-base leading-[24px]'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});
</script>

<button
	onclick={toogle}
	class="group {sizeClass} flex items-center justify-between rounded-[6px] border border-light-gray-200 dark:border-dark-gray-400 hover:border-light-gray-500 dark:hover:border-dark-gray-500 {klass} "
>
	{@render children()}
</button>
