<script lang="ts">
	import { ChevronDownSmall } from '$lib/icons/index.js';
	import { getContext, type Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children }: propsT = $props();

	let { value } = getContext<{ isActive: Writable<boolean>; value: Writable<string> }>(
		'collapseItem'
	);
	let { open } = getContext<{ open: Writable<string> }>('collapse');

	let rotate = $derived.by(() => {
		if ($value == $open) {
			return '-rotate-180';
		}
		return '';
	});

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

<button {onclick} class="w-full flex items-center justify-between py-6">
	{#if children}
		<span class="text-[24px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
			>{@render children()}</span
		>
	{/if}
	<div class="">
		<div class="w-[16px] h-[16px] {rotate} transform-gpu duration-200">
			<ChevronDownSmall />
		</div>
	</div>
</button>
