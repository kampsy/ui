<script lang="ts">
	import { ChevronDownSmall } from '$lib/icons/index.js';
	import { getContext, type Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children }: propsT = $props();

	let { size, value, defaultExpanded } = getContext<{
		size: 'small' | 'large';
		value: string;
		defaultExpanded: boolean;
	}>('collapseItem');

	let collapseItem = getContext<{ get: () => string; set: (value: string) => void }>('collapse');

	let rotate = $derived.by(() => {
		if (value == collapseItem.get()) {
			return '-rotate-180';
		}
		return '';
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

	$effect(() => {
		if (defaultExpanded) {
			collapseItem.set(value);
		}
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

<button {onclick} class="w-full flex items-center justify-between {paddingClass} ">
	{#if children}
		<span class="{textClass} text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
			>{@render children()}</span
		>
	{/if}
	<div class="">
		<div class="w-[16px] h-[16px] {rotate} transform-gpu duration-200">
			<ChevronDownSmall />
		</div>
	</div>
</button>
