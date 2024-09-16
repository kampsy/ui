<script lang="ts">
	import ChevronDownSmall from '$lib/icons/chevron-down-small.svelte';
	import { getContext } from 'svelte';

	type propsT = {
		placeholder?: string;
	};
	let { placeholder = 'placeholder' }: propsT = $props();

	const rootState = getContext<{
		getSelected: () => string;
		getIsActive: () => boolean;
	}>('select');

	// We are going to rotate the chevron icon when the select is active
	let rotate = $derived(rootState.getIsActive() ? 'rotate-180' : '');
</script>

<span class="text-sm first-letter:capitalize"
	>{rootState.getSelected() === '' ? placeholder : rootState.getSelected()}</span
>
<div class="w-[16px] h-[16px] flex items-center justify-center">
	<div
		class="w-[16px] h-[16px] text-kui-light-gray-900 hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 hover:dark:text-kui-dark-gray-1000 transform duration-300 {rotate}"
	>
		<ChevronDownSmall />
	</div>
</div>
