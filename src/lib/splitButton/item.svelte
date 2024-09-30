<script lang="ts">
	import { getContext } from 'svelte';

	type propsT = {
		onClick?: () => void | undefined;
		title?: string | undefined;
		description?: string | undefined;
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
	};
	let {
		onClick = undefined,
		type = 'primary',
		title = undefined,
		description = undefined
	}: propsT = $props();

	const rootState = getContext<{
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
	}>('split-button');

	const typeTitleObj = {
		primary: 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000',
		secondary: 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000',
		tertiary: 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000',
		error: 'text-kui-light-red-800 dark:text-kui-dark-red-800',
		warning: 'text-kui-light-amber-800 dark:text-kui-dark-amber-800'
	};
	let typeTitleClass = $derived.by(() => {
		return typeTitleObj[type];
	});

	const typeDescriptionObj = {
		primary: 'text-kui-light-gray-900 dark:text-kui-dark-gray-900',
		secondary: 'text-kui-light-gray-900 dark:text-kui-dark-gray-900',
		tertiary: 'text-kui-light-gray-900 dark:text-kui-dark-gray-900',
		error: 'text-kui-light-red-700 dark:text-kui-dark-red-700',
		warning: 'text-kui-light-amber-700 dark:text-kui-dark-amber-700'
	};
	let typeDescriptionClass = $derived.by(() => {
		return typeDescriptionObj[type];
	});
</script>

<button
	onclick={() => {
		if (onClick) {
			onClick();
		}
		rootState.setIsActive(false);
	}}
	class="relative w-full cursor-pointer bg-transparent transition-colors text-sm rounded-md text-left
	py-3.5 lg:py-2.5 px-2 hover:bg-kui-light-gray-100 hover:dark:bg-kui-dark-gray-100"
>
	<div>
		{#if title}
			<div class="text-sm {typeTitleClass} font-medium leading-[20px]">
				{title}
			</div>
		{/if}
		{#if description}
			<div class="text-sm {typeDescriptionClass} font-normal leading-[20px]">
				{description}
			</div>
		{/if}
	</div>
</button>
