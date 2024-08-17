<script lang="ts">
	import ChevronDownSmall from '$lib/icons/chevron-down-small.svelte';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	type propsT = {
		placeholder?: string;
	};
	let { placeholder = 'placeholder' }: propsT = $props();

	// Get the select context variable
	const { selected } = getContext<{ selected: Writable<string> }>('select');
</script>

<span class="text-sm first-letter:capitalize">{$selected === '' ? placeholder : $selected}</span>
<div class="w-[16px] h-[16px] flex items-center justify-center">
	<div
		class="w-[16px] h-[16px] text-kui-light-gray-900 hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 hover:dark:text-kui-dark-gray-1000"
	>
		<ChevronDownSmall />
	</div>
</div>
