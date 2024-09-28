<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	type propsT = {
		onClick: () => void;
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		children: Snippet;
	};
	let { onClick, type = 'tertiary', children }: propsT = $props();

	const rootState = getContext<{
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
	}>('menu');

	const typeObj = {
		primary: 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000',
		secondary: 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000',
		tertiary: 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000',
		error: 'text-kui-light-red-800 dark:text-kui-dark-red-800',
		warning: 'text-kui-light-amber-800 dark:text-kui-dark-amber-800'
	};
	let typeClass = $derived.by(() => {
		return typeObj[type];
	});
</script>

<button
	onclick={() => {
		onClick();
		rootState.setIsActive(false);
	}}
	class="relative w-full cursor-pointer transition-colors text-sm flex items-center rounded-md py-3.5 lg:py-2 px-2 hover:bg-kui-light-gray-100 hover:dark:bg-kui-dark-gray-100"
>
	<span class="first-letter:capitalize {typeClass}">
		{@render children()}
	</span>
</button>
