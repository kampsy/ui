<script lang="ts">
	import LoaderCircle from '$lib/icons/loader-circle.svelte';
	import type { Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type propsT = {
		onclick?: () => void;
		class?: string;
		size?: 'sm' | 'md' | 'lg';
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		prefix?: Snippet | undefined;
		suffix?: Snippet | undefined;
		rounded?: boolean;
		loading?: boolean;
		disabled?: boolean;
		children: Snippet;
	};

	let {
		onclick = undefined,
		class: klass = '',
		size = 'md',
		type = 'primary',
		prefix = undefined,
		suffix = undefined,
		rounded = false,
		loading = false,
		disabled = false,
		children
	}: propsT = $props();

	let sizeClass = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'px-[6px] h-[32px] text-sm leading-4';
			case 'md':
				return 'px-[10px] h-[40px] text-sm leading-[20px]';
			case 'lg':
				return 'px-[14px] h-[48px] text-base leading-[24px]';
		}
	});

	// The size of the spinner
	let spinnerSize = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'w-[16px] h-[16px]';
			case 'md':
				return 'w-[16px] h-[16px]';
			case 'lg':
				return 'w-[24px] h-[24px]';
		}
	});

	let typeClass = $derived.by(() => {
		switch (type) {
			case 'primary':
				return 'text-white dark:text-dark-bg bg-light-gray-1000 dark:bg-dark-gray-1000 hover:bg-[#383838] hover:dark:bg-[#CCCCCC]';
			case 'secondary':
				return 'text-light-gray-1000 dark:text-dark-gray-1000 dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 hover:bg-light-gray-100 hover:dark:bg-dark-gray-100';
			case 'tertiary':
				return 'text-light-gray-1000 dark:text-dark-gray-1000 hover:bg-light-gray-200 hover:dark:bg-[#202020]';
			case 'error':
				return 'text-[#F5F5F5] bg-light-red-800 dark:bg-dark-red-800 hover:bg-light-red-900 hover:dark:bg-dark-red-900 ';
			case 'warning':
				return 'text-light-gray-1000 bg-light-amber-700 dark:bg-dark-amber-700 hover:bg-light-amber-800 hover:dark:bg-dark-amber-800';
		}
	});

	let roundedClass = $derived.by(() => {
		if (rounded) {
			return 'rounded-full';
		}
		return 'rounded-[6px]';
	});

	let loadingDisabledClass = $derived.by(() => {
		if (disabled || loading) {
			return 'cursor-not-allowed text-light-gray-700 dark:text-dark-gray-700  bg-light-gray-100 dark:bg-dark-gray-100 border border-light-gray-200 dark:border-dark-gray-400';
		}
		return '';
	});

	// The final styles for the button
	let buttonClass = $derived.by(() => {
		if (disabled || loading) {
			return `${sizeClass} ${roundedClass} ${loadingDisabledClass} ${klass}`;
		}
		return `${sizeClass} ${typeClass} ${roundedClass} ${klass}`;
	});
</script>

{#snippet spinner()}
	{#if loading}
		<div class="relative {spinnerSize} animate-spin flex items-center justify-center">
			<div transition:fade class="absolute w-full h-full">
				<LoaderCircle />
			</div>
		</div>
	{/if}
{/snippet}

{#snippet prefixSnip()}
	{#if prefix}
		{@render prefix()}
	{:else if loading}
		{@render spinner()}
	{/if}
{/snippet}

{#snippet suffixSnip()}
	{#if suffix}
		{@render suffix()}
	{/if}
{/snippet}

<button {onclick} type="button" {disabled} class="{buttonClass} ">
	<div class="w-full h-full px-[6px] flex items-center gap-[8px]">
		{@render prefixSnip()}
		<span class="font-medium first-letter:capitalize">
			{@render children()}
		</span>
		{@render suffixSnip()}
	</div>
</button>
