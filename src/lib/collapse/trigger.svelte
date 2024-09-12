<script lang="ts">
	import { ChevronDownSmall } from '$lib/icons/index.js';
	import { getContext, type Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children }: propsT = $props();

	let {size, value } = getContext<{ size: Writable<'small' | 'large'>; value: Writable<string> }>(
		'collapseItem'
	);
	let { open } = getContext<{ open: Writable<string> }>('collapse');

	let rotate = $derived.by(() => {
		if ($value == $open) {
			return '-rotate-180';
		}
		return '';
	});

    const paddingObj = {
        small: `py-[12px]`,
        large: `py-4 lg:py-6`
    }
    let paddingClass = $derived.by(()=>{
        return paddingObj[$size] 
    })

    const textObj = {
        small: 'text-4',
        large: 'text-lg lg:text-[24px]'
    }
    let textClass = $derived.by(()=>{
        return textObj[$size] 
    })

	const onclick = () => {
		if ($open != '' && $value != '') {
			if ($open === $value) {
				$open = '';
			} else {
				$open = $value;
			}
		} else {
			$open = $value;
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
