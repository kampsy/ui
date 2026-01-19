<script lang="ts">
	import LoaderCircle from '$lib/icons/loader-circle.svelte';
	import type { Component, Snippet } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		buttonElement?: HTMLButtonElement;
		onclick?: (evt: Event) => void;
		class?: string;
		shape?: 'circle' | 'square' | undefined;
		size?: 'tiny' | 'small' | 'medium' | 'large';
		variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		iconPrefix?: Component | undefined;
		iconSuffix?: Component | undefined;
		rounded?: boolean;
		loading?: boolean;
		disabled?: boolean;
		children: Snippet;
	}

	let {
		buttonElement = $bindable(),
		onclick = undefined,
		class: klass = '',
		shape = undefined,
		size = 'medium',
		variant = 'primary',
		iconPrefix = undefined,
		iconSuffix = undefined,
		rounded = false,
		loading = false,
		disabled = false,
		children,
		...rest
	}: Props = $props();

	const sizeObj = {
		tiny: 'h-[24px] text-xs leading-3',
		small: 'h-[32px] px-[6px] text-sm leading-4',
		medium: 'h-[40px] px-[10px] text-sm leading-5',
		large: 'h-[48px] px-[14px] text-base leading-6'
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

	const variantObj = {
		primary: `text-white dark:text-kui-dark-bg bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000
		hover:opacity-85 hover:dark:opacity-90`,
		secondary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg border
		border-kui-light-gray-200 dark:border-kui-dark-gray-400 hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`,
		tertiary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 hover:bg-kui-light-gray-200
		dark:hover:bg-kui-dark-gray-200`,
		error: `text-[#F5F5F5] bg-kui-light-red-800 dark:bg-kui-dark-red-800 hover:bg-kui-light-red-900
		dark:hover:bg-kui-dark-red-900 `,
		warning: `text-kui-light-gray-1000 bg-kui-light-amber-700 dark:bg-kui-dark-amber-700
		hover:bg-kui-light-amber-800 dark:hover:bg-kui-dark-amber-800`
	};
	let typeClass = $derived.by(() => {
		return variantObj[variant];
	});

	let roundedStyle = $derived.by(() => {
		if (rounded) {
			return 'rounded-full';
		}
		return 'rounded-md';
	});

	const radiusObj = {
		tiny: 'rounded-sm',
		small: 'rounded-md',
		medium: 'rounded-md',
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
			return 'cursor-not-allowed text-kui-light-gray-700 dark:text-kui-dark-gray-700 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 border border-kui-light-gray-200 dark:border-kui-dark-gray-400';
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
	{#if iconPrefix}
		{@const Prefix = iconPrefix}
		<div class="{iconSize} flex items-center justify-center">
			<Prefix />
		</div>
	{:else if loading}
		{@render spinner()}
	{/if}
{/snippet}

{#snippet suffixSnip()}
	{#if iconSuffix}
		{@const Suffix = iconSuffix}
		<div class="{iconSize} flex items-center justify-center">
			<Suffix />
		</div>
	{/if}
{/snippet}

{#snippet mainButton()}
	<button
		bind:this={buttonElement}
		{onclick}
		type="button"
		{disabled}
		class="{buttonClass} transition duration-300"
		{...rest}
	>
		<div class="w-full h-full px-1.5 flex items-center justify-center gap-2">
			{@render prefixSnip()}
			<span class="font-medium first-letter:capitalize">
				{@render children()}
			</span>
			{@render suffixSnip()}
		</div>
	</button>
{/snippet}

{#snippet withShape()}
	<button
		bind:this={buttonElement}
		{onclick}
		type="button"
		{disabled}
		class={buttonClass}
		{...rest}
	>
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
