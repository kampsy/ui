<script lang="ts">
	import LoaderCircle from '$lib/icons/loader-circle.svelte';
	import type { Component, Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type propsT = {
		onclick?: () => void;
		class?: string;
		'aria-label'?: string;
		shape?: 'circle' | 'square' | undefined;
		size?: 'tiny' | 'small' | 'medium' | 'large';
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		prefix?: Component | undefined;
		suffix?: Component | undefined;
		rounded?: boolean;
		loading?: boolean;
		disabled?: boolean;
		children: Snippet;
	};

	let {
		onclick = undefined,
		class: klass = '',
		'aria-label': ariaLabel = undefined,
		shape = undefined,
		size = 'medium',
		type = 'primary',
		prefix = undefined,
		suffix = undefined,
		rounded = false,
		loading = false,
		disabled = false,
		children
	}: propsT = $props();

	const sizeObj = {
		tiny: 'h-[24px] text-xs leading-3',
		small: 'h-[32px] px-[6px] text-sm leading-4',
		medium: 'h-[40px] px-[10px] text-sm leading-[20px]',
		large: 'h-[48px] px-[14px] text-base leading-[24px]'
	};
	const shapeSizeObj = {
		tiny: `w-[24px] ${sizeObj.tiny} `,
		small: `w-[32px] ${sizeObj.small} `,
		medium: `w-[40px] ${sizeObj.medium} `,
		large: `w-[48px] ${sizeObj.large} `
	};
	let sizeClass = $derived.by(() => {
		if (shape) {
			return shapeSizeObj[size];
		} else {
			return sizeObj[size];
		}
	});

	// The size of the prefix, suffix and spinner
	const prefixSuffixSpinnerObj = {
		tiny: 'w-[14px] h-[14px]',
		small: 'w-[16px] h-[16px]',
		medium: 'w-[16px] h-[16px]',
		large: 'w-[24px] h-[24px]'
	};
	let iconSize = $derived.by(() => {
		return prefixSuffixSpinnerObj[size];
	});

	const typeObj = {
		primary: `text-white dark:text-dark-bg bg-light-gray-1000 dark:bg-dark-gray-1000 
		hover:bg-[#383838] hover:dark:bg-[#CCCCCC]`,
		secondary: `text-light-gray-1000 dark:text-dark-gray-1000 dark:bg-dark-bg border 
		border-light-gray-200 dark:border-dark-gray-400 hover:bg-light-gray-100 hover:dark:bg-dark-gray-100`,
		tertiary: `text-light-gray-1000 dark:text-dark-gray-1000 hover:bg-light-gray-200 
		hover:dark:bg-[#202020]`,
		error: `text-[#F5F5F5] bg-light-red-800 dark:bg-dark-red-800 hover:bg-light-red-900 
		hover:dark:bg-dark-red-900 `,
		warning: `text-light-gray-1000 bg-light-amber-700 dark:bg-dark-amber-700 
		hover:bg-light-amber-800 hover:dark:bg-dark-amber-800`
	};
	let typeClass = $derived.by(() => {
		return typeObj[type];
	});

	let roundedStyle = $derived.by(() => {
		if (rounded) {
			return 'rounded-full';
		}
		return 'rounded-[6px]';
	});

	const radiusObj = {
		tiny: 'rounded-[4px]',
		small: 'rounded-[6px]',
		medium: 'rounded-[6px]',
		large: 'rounded-[8px]'
	};
	let roundedWithShapeStyle = $derived.by(() => {
		if (shape == 'circle') {
			return 'rounded-full';
		}
		return radiusObj[size];
	});

	let radiusStyle = $derived.by(() => {
		if (shape) {
			return roundedWithShapeStyle;
		}
		return roundedStyle;
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
			return `${sizeClass} ${radiusStyle} ${loadingDisabledClass} ${klass}`;
		}
		return `${sizeClass} ${typeClass} ${radiusStyle} ${klass}`;
	});
</script>

{#snippet spinner()}
	{#if loading}
		<div class="relative {iconSize} animate-spin flex items-center justify-center">
			<div transition:fade class="absolute w-full h-full">
				<LoaderCircle />
			</div>
		</div>
	{/if}
{/snippet}

{#snippet prefixSnip()}
	{#if prefix}
		<div class="{iconSize} flex items-center justify-center">
			<svelte:component this={prefix} />
		</div>
	{:else if loading}
		{@render spinner()}
	{/if}
{/snippet}

{#snippet suffixSnip()}
	{#if suffix}
		<div class="{iconSize} flex items-center justify-center">
			<svelte:component this={suffix} />
		</div>
	{/if}
{/snippet}

{#snippet mainButton()}
	<button aria-label={ariaLabel} {onclick} type="button" {disabled} class="{buttonClass} ">
		<div class="w-full h-full px-[6px] flex items-center gap-[8px]">
			{@render prefixSnip()}
			<span class="font-medium first-letter:capitalize">
				{@render children()}
			</span>
			{@render suffixSnip()}
		</div>
	</button>
{/snippet}

{#snippet withShape()}
	<button aria-label={ariaLabel} {onclick} type="button" {disabled} class="{buttonClass} ">
		<div class="w-full h-full flex items-center justify-center">
			<span class="font-medium first-letter:capitalize">
				{@render children()}
			</span>
		</div>
	</button>
{/snippet}

{#if shape}
	{@render withShape()}
{:else}
	{@render mainButton()}
{/if}
