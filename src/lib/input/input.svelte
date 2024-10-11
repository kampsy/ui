<script lang="ts">
	import type { Component } from 'svelte';
	import Error from '$lib/icons/error.svelte';

	type propsT = {
		type?: 'text' | 'number' | 'email' | 'password' | undefined;
		value?: string | undefined;
		label?: string | undefined;
		error?: string | undefined;
		'aria-labelledby'?: string | undefined;
		size?: 'small' | 'medium' | 'large';
		prefix?: string | Component | undefined;
		prefixStyling?: boolean | undefined;
		suffix?: string | Component | undefined;
		suffixStyling?: boolean | undefined;
		spellcheck?: boolean | undefined;
		placeholder?: string | undefined;
		disabled?: boolean | undefined;
	};
	let {
		type = "text",
		value = $bindable(''),
		label = undefined,
		error = undefined,
		'aria-labelledby': araiLabelledBy = undefined,
		size = 'medium',
		prefix = undefined,
		prefixStyling = true,
		suffix = undefined,
		suffixStyling = true,
		spellcheck = false,
		placeholder = undefined,
		disabled = false
	}: propsT = $props();

	// The focus and blur state of the input
	let hasRing = $state(false);

	const sizeObj = {
		small: 'h-[32px] text-sm',
		medium: 'h-[40px] text-sm',
		large: 'h-[48px] text-base'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});

	// Show the ring when the input is focused
	let ringClass = $derived.by(() => {
		if (disabled) {
			return `cursor-not-allowed border-kui-light-gray-200 dark:border-kui-dark-gray-400 
			bg-kui-light-gray-100 dark:bg-kui-dark-gray-100`;
		}
		if (error) {
			return `border-kui-light-red-700 dark:border-kui-dark-red-700 hover:border-kui-light-red-700 
			dark:hover:border-kui-dark-red-700 ring-4 ring-kui-light-red-400 dark:ring-kui-dark-red-400 
			hover:ring-kui-light-red-500 dark:hover:ring-kui-dark-red-500 `;
		}
		if (hasRing) {
			return `border-kui-light-blue-700 dark:border-kui-dark-blue-700 ring-4 ring-kui-light-blue-400 
            dark:ring-kui-dark-blue-400 hover:border-kui-light-blue-700 dark:hover:border-kui-dark-blue-700`;
		}
		return `border-kui-light-gray-200 dark:border-kui-dark-gray-400 hover:border-kui-light-blue-700 dark:hover:border-kui-dark-blue-700`;
	});

	let inputClass = $derived.by(() => {
		if (disabled) {
			return `cursor-not-allowed text-kui-light-gray-600 dark:text-kui-dark-gray-600`;
		}
		return `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000`;
	});

	let inputContClass = $derived.by(() => {
		if (prefixStyling && suffixStyling) {
			return `px-3`;
		}
		if (prefixStyling) {
			return 'pl-3';
		}
		if (suffixStyling) {
			return 'pr-3';
		}
		return ``;
	});

	// will the prefix have a bg and a border?
	let prefixClass = $derived.by(() => {
		if (prefixStyling) {
			return `bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary border-r border-kui-light-gray-200
     dark:border-kui-dark-gray-400`;
		}
		return ``;
	});

	// will the prefix have a bg and a border?
	let suffixClass = $derived.by(() => {
		if (suffixStyling) {
			return `bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary border-l border-kui-light-gray-200
     dark:border-kui-dark-gray-400`;
		}
		return ``;
	});

	const errorTextObj = {
		tiny: 'text-[12px] leading-[16px]',
		small: 'text-[13px] leading-[20px]',
		medium: 'text-[14px] leading-[20px]',
		large: 'text-[16px] leading-[24px]'
	};
	let errorText = $derived.by(() => {
		return errorTextObj[size];
	});
</script>

<!--Prefix snippet-->
{#snippet prefixSnip()}
	{#if prefix}
		<span
			class="h-full flex items-center px-3 text-kui-light-gray-700 dark:text-kui-dark-gray-700 {prefixClass}"
		>
			{#if typeof prefix === 'string'}
				{prefix}
			{:else if typeof prefix === 'function'}
				{@const PrefixIcon = prefix}
				<div class="w-[16px] h-[16px]">
					<PrefixIcon />
				</div>
			{/if}
		</span>
	{/if}
{/snippet}

<!--Suffix snippet-->
{#snippet suffixSnip()}
	{#if suffix}
		<span
			class="h-full flex items-center px-3 text-kui-light-gray-700 dark:text-kui-dark-gray-700 {suffixClass}"
		>
			{#if typeof suffix === 'string'}
				{suffix}
			{:else if typeof suffix === 'function'}
				{@const SuffixIcon = suffix}
				<div class="w-[16px] h-[16px]">
					<SuffixIcon />
				</div>
			{/if}
		</span>
	{/if}
{/snippet}

{#snippet inputSnip()}
	<div>
		<div
			class="flex items-center {sizeClass} overflow-hidden transition-all border {ringClass} rounded-[6px]
	"
		>
			{@render prefixSnip()}

			<div class="w-full h-full {inputContClass}">
				<input
					{type}
					bind:value
					aria-labelledby={araiLabelledBy}
					{spellcheck}
					{placeholder}
					{disabled}
					onfocus={() => {
						hasRing = true;
					}}
					onblur={() => {
						hasRing = false;
					}}
					class="{inputClass} w-full h-full outline-none bg-transparent capitalize placeholder:text-kui-light-gray-600
		 dark:placeholder:text-kui-dark-gray-600"
				/>
			</div>

			{@render suffixSnip()}
		</div>
		{#if error}
			<div class="mt-[8px]">
				<div class="flex items-center gap-[8px]">
					<div class="w-[16px] h-[16px] text-kui-light-red-900 dark:text-kui-dark-red-900">
						<Error />
					</div>
					<div class="{errorText} text-kui-light-red-900 dark:text-kui-dark-red-900">
						{error}
					</div>
				</div>
			</div>
		{/if}
	</div>
{/snippet}

<!--With a label-->
{#snippet inputLabel()}
	<label for="">
		<div class="text-sm text-kui-light-gray-900 dark:text-kui-light-gray-900 mb-2">
			{label}
		</div>
		{@render inputSnip()}
	</label>
{/snippet}

{#if label}
	{@render inputLabel()}
{:else}
	{@render inputSnip()}
{/if}
