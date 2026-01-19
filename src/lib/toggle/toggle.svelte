<script lang="ts">
	import { randomString } from '$lib/utils/random.js';
	import type { Component, Snippet } from 'svelte';

	type propT = {
		'aria-label'?: string | undefined;
		size?: 'small' | 'large' | undefined;
		color?: 'blue' | 'purple' | 'amber' | 'red' | 'pink' | 'green' | 'teal';
		checked?: boolean | undefined;
		disabled?: boolean | undefined;
		direction?: 'switch-last' | 'switch-first';
		icon?:
			| {
					checked: Component;
					unchecked: Component;
			  }
			| undefined;
		children?: Snippet | undefined;
	};
	let {
		'aria-label': ariaLabel,
		size = 'small',
		color = 'blue',
		checked = $bindable(false),
		disabled = undefined,
		direction = 'switch-last',
		icon = undefined,
		children = undefined
	}: propT = $props();

	const onchange = () => {
		checked = !checked;
	};

	// random string for unique id
	const unique = `${randomString(4)}`;

	const sizeContObj = {
		small: 'w-[28px] h-[14px]',
		large: 'w-[48px] h-[24px]'
	};
	let sizeContClass = $derived.by(() => {
		return sizeContObj[size];
	});

	const sizeThumbObj = {
		small: 'w-[12px] h-[12px]',
		large: 'w-[22px] h-[22px]'
	};
	let sizeThumbClass = $derived.by(() => {
		return sizeThumbObj[size];
	});

	const iconSizeObj = {
		small: 'w-[10px] h-[10px]',
		large: 'w-[16px] h-[16px]'
	};
	let iconSizeClass = $derived.by(() => {
		return iconSizeObj[size];
	});

	let childLableClass = $derived.by(() => {
		if (direction === 'switch-first') {
			return `order-last`;
		}
		return ``;
	});

	const colorObj = {
		blue: 'bg-kui-light-blue-700 dark:bg-kui-dark-blue-700 border-kui-light-blue-800 dark:border-kui-dark-blue-800',
		purple:
			'bg-kui-light-purple-700 dark:bg-kui-dark-purple-700 border-kui-light-purple-800 dark:border-kui-dark-purple-800',
		amber:
			'bg-kui-light-amber-700 dark:bg-kui-dark-amber-700 border-kui-light-amber-800 dark:border-kui-dark-amber-800',
		red: 'bg-kui-light-red-700 dark:bg-kui-dark-red-700 border-kui-light-red-800 dark:border-kui-dark-red-800',
		pink: 'bg-kui-light-pink-700  dark:bg-kui-dark-pink-700 border-kui-light-pink-800 dark:border-kui-dark-pink-800',
		green:
			'bg-kui-light-green-700 dark:bg-kui-dark-green-700 border-kui-light-green-800 dark:border-kui-dark-green-800',
		teal: 'bg-kui-light-teal-700 dark:bg-kui-dark-teal-700 border-kui-light-teal-800 dark:border-kui-dark-teal-800'
	};

	let toogleContClass = $derived.by(() => {
		if (checked) {
			return `${colorObj[color]}`;
		}
		return `bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 border-black/8
		 dark:border-kui-dark-gray-400`;
	});

	let thumbClass = $derived.by(() => {
		if (checked) {
			return `bg-white border-white dark:text-kui-light-gray-1000 dark:text-kui-dark-gray-1000
			translate-x-full`;
		}
		return `bg-kui-light-bg-secondary border-kui-light-gray-200 dark:bg-white dark:text-kui-light-gray-1000`;
	});
</script>

<!--Checked and uncheked icons-->
{#snippet icons()}
	{#if icon}
		<div class="relative w-full h-full rounded-full flex items-center justify-center">
			{#if checked}
				{@const CheckedIcon = icon.checked}
				<div class="absolute {iconSizeClass}">
					<CheckedIcon />
				</div>
			{:else}
				{@const UncheckedIcon = icon.unchecked}
				<div class="absolute {iconSizeClass}">
					<UncheckedIcon />
				</div>
			{/if}
		</div>
	{/if}
{/snippet}

<label for={unique} class="inline-flex items-center gap-3 cursor-pointer">
	{#if children}
		<span
			class="{childLableClass} select-none text-xs text-kui-light-gray-800 dark:text-kui-dark-gray-900"
		>
			{@render children()}
		</span>
	{/if}
	<input
		{onchange}
		{checked}
		aria-label={ariaLabel}
		type="checkbox"
		id={unique}
		{disabled}
		class="hidden"
	/>
	<div>
		<div class="relative {sizeContClass} flex items-center rounded-full border {toogleContClass}">
			<div
				class="absolute {sizeThumbClass} rounded-full start-[1.5px] transition-all border {thumbClass}"
			>
				{@render icons()}
			</div>
		</div>
	</div>
</label>
