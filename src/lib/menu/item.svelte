<script lang="ts">
	import { getContext, type Component, type Snippet } from 'svelte';

	interface Props {
		onClick?: () => void | undefined;
		prefix?: Component | undefined;
		suffix?: Component | undefined;
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		children: Snippet;
	};
	let {
		onClick = undefined,
		type = 'tertiary',
		prefix = undefined,
		suffix = undefined,
		children
	}: Props = $props();

	const rootState = getContext<{
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
	}>('menu');

	const typeObj = {
		primary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 
		hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`,
		secondary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 
		hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`,
		tertiary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 
		hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`,
		error: `text-kui-light-red-800 dark:text-kui-dark-red-800 
		hover:bg-kui-light-red-100 dark:hover:bg-kui-dark-red-100`,
		warning: `text-kui-light-amber-800 dark:text-kui-dark-amber-800 
		hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`
	};
	let typeClass = $derived.by(() => {
		return typeObj[type];
	});

	let isSuffixClass = $derived.by(() => {
		if (suffix) {
			return 'justify-between';
		}
		return ''
	})
</script>

{#snippet prefixSnip()}
	{#if prefix}
		{@const Prefix = prefix}
		<div class="w-4 h-4 flex items-center justify-center">
			<Prefix />
		</div>
	{/if}
{/snippet}

{#snippet suffixSnip()}
	{#if suffix}
		{@const Suffix = suffix}
		<div class="w-4 h-4 flex items-center justify-center">
			<Suffix />
		</div>
	{/if}
{/snippet}

<button
	onclick={() => {
		if (onClick) {
			onClick();
		}
		rootState.setIsActive(false);
	}}
	class="relative w-full cursor-pointer bg-transparent transition-colors text-sm flex items-center gap-2 {isSuffixClass} rounded-md 
	py-3.5 lg:py-2.5 px-2  {typeClass}"
>
	{@render prefixSnip()}
	<span class="first-letter:capitalize ">
		{@render children()}
	</span>
	{@render suffixSnip()}
</button>
