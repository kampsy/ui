<script lang="ts">
	import ChevronDownSmall from '$lib/icons/chevron-down-small.svelte';
	import { getContext } from 'svelte';
	import { Spinner,Text } from '$lib/index.js';

	interface Props {
		placeholder?: string;
	}
	let { placeholder = 'placeholder' }: Props = $props();

	const rootState = getContext<{
		size: 'tiny' | 'small' | 'medium' | 'large';
		getSelected: () => string;
		getIsActive: () => boolean;
		getLoading: () => boolean;
	}>('select');

	let spinnerSize = $derived.by(() => {
		if (rootState.size === 'tiny') return 14;
		if (rootState.size === 'small') return 16;
		if (rootState.size === 'medium') return 16;
		return 24;
	});

	// We are going to rotate the chevron icon when the select is active
	let rotate = $derived(rootState.getIsActive() ? 'rotate-180' : '');
</script>

<div class="flex items-center justify-between">

	{#if !rootState.getLoading()}
		<span
			class="text-sm first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
			>{rootState.getSelected() === '' ? placeholder : rootState.getSelected()}</span
		>
		<div class="w-[16px] h-[16px] flex items-center justify-center">
			<div
				class="w-[16px] h-[16px] text-kui-light-gray-900 hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 hover:dark:text-kui-dark-gray-1000 transform duration-300 {rotate}"
			>
				<ChevronDownSmall />
			</div>
		</div>
	{/if}
	{#if rootState.getLoading()}
		<div class="flex items-center gap-2">
			<Spinner size={spinnerSize} />
			<Text>Loading...</Text>
		</div>
	{/if}
	
</div>
