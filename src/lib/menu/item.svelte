<script lang="ts">
	import { getContext, type Component, type Snippet } from 'svelte';

	type propsT = {
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
	}: propsT = $props();

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
		<div class="w-[16px] h-[16px] flex items-center justify-center">
			<Prefix />
		</div>
	{/if}
{/snippet}

{#snippet suffixSnip()}
	{#if suffix}
		{@const Suffix = suffix}
		<div class="w-[16px] h-[16px] flex items-center justify-center">
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
	class="relative w-full cursor-pointer transition-colors text-sm flex items-center gap-2 {isSuffixClass} rounded-md 
	py-3.5 lg:py-2.5 px-2 hover:bg-kui-light-gray-100 hover:dark:bg-kui-dark-gray-100 {typeClass}"
>
	{@render prefixSnip()}
	<span class="first-letter:capitalize ">
		{@render children()}
	</span>
	{@render suffixSnip()}
</button>
