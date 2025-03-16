<script lang="ts">
	import { ChevronDownSmall } from '$lib/icons/index.js';
	import { getContext, type Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		children: Snippet | undefined;
	}
	let { children, ...rest }: Props = $props();

	let collapseItem = getContext<{ get: () => string; set: (value: string) => void }>('collapse');

	let { size, value, defaultExpanded } = getContext<{
		size: 'small' | 'large';
		value: string;
		defaultExpanded: boolean;
	}>('collapseItem');

	$effect(() => {
		// If default expanded is true, then set the collapseItem to the value
		if (defaultExpanded) {
			collapseItem.set(value);
		}
	});

	let rotate = $derived.by(() => {
		if (value == collapseItem.get()) {
			return '-rotate-180';
		}
		return '';
	});

	// accessibility if its true then set aria-expanded to true else false
	let button: HTMLButtonElement = $state<any>();
	$effect(() => {
		if (value == collapseItem.get()) {
			button.setAttribute('aria-expanded', 'true');
		} else {
			button.setAttribute('aria-expanded', 'false');
		}
	});

	const paddingObj = {
		small: `py-[12px]`,
		large: `py-4 lg:py-6`
	};
	let paddingClass = $derived.by(() => {
		return paddingObj[size];
	});

	const textObj = {
		small: 'text-4',
		large: 'text-lg lg:text-[24px]'
	};
	let textClass = $derived.by(() => {
		return textObj[size];
	});

	const onclick = () => {
		if (collapseItem.get() != '' && value != '') {
			if (collapseItem.get() === value) {
				collapseItem.set('');
			} else {
				collapseItem.set(value);
			}
		} else {
			collapseItem.set(value);
		}
	};
</script>

<button
	{onclick}
	bind:this={button}
	class="w-full flex items-center justify-between text-left bg-transparent {paddingClass}"
	{...rest}
>
	{#if children}
		<span class="{textClass} text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-semibold"
			>{@render children()}</span
		>
	{/if}
	<div class="">
		<div class="w-[16px] h-[16px] overflow-hidden">
			<div
				class="w-[16px] h-[16px] {rotate} transform-gpu duration-200 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
			>
				<ChevronDownSmall />
			</div>
		</div>
	</div>
</button>
