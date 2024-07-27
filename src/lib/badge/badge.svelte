<script lang="ts">
	import type { Component, Snippet } from 'svelte';

	type propsT = {
		class?: string;
		variant?:
			| 'gray'
			| 'gray-subtle'
			| 'blue'
			| 'blue-subtle'
			| 'purple'
			| 'purple-subtle'
			| 'amber'
			| 'amber-subtle'
			| 'red'
			| 'red-subtle'
			| 'pink'
			| 'pink-subtle'
			| 'green'
			| 'green-subtle'
			| 'teal'
			| 'teal-subtle'
			| 'inverted';
		size?: 'sm' | 'md' | 'lg';
		icon?: Component | undefined;
		children: Snippet;
	};

	let {
		class: klass = '',
		variant = 'gray',
		size = 'md',
		icon = undefined,
		children
	}: propsT = $props();

	let variantClass = $derived.by(() => {
		switch (variant) {
			case 'gray':
				return 'bg-light-gray-700 text-light-bg dark:bg-dark-gray-700 dark:text-light-bg';
			case 'gray-subtle':
				return 'bg-light-gray-200 text-light-gray-1000 dark:bg-dark-gray-200 dark:text-dark-gray-1000';
			case 'blue':
				return 'bg-light-blue-700 text-light-bg dark:bg-dark-blue-700 dark:text-light-bg';
			case 'blue-subtle':
				return 'bg-light-blue-200 text-light-blue-900 dark:bg-dark-blue-200 dark:text-dark-blue-900';
			case 'purple':
				return 'bg-light-purple-700 text-light-bg dark:bg-dark-purple-700 dark:text-light-bg';
			case 'purple-subtle':
				return 'bg-light-purple-200 text-light-purple-900 dark:bg-dark-purple-200 dark:text-dark-purple-900';
			case 'amber':
				return 'bg-light-amber-700 text-light-bg dark:bg-dark-amber-700 dark:text-black';
			case 'amber-subtle':
				return 'bg-light-amber-200 text-light-amber-900 dark:bg-dark-amber-200 dark:text-dark-amber-900';
			case 'red':
				return 'bg-light-red-700 text-light-bg dark:bg-dark-red-700 dark:text-light-bg';
			case 'red-subtle':
				return 'bg-light-red-200 text-light-red-900 dark:bg-dark-red-200 dark:text-dark-red-900';
			case 'pink':
				return 'bg-light-pink-700 text-light-bg dark:bg-dark-pink-700 dark:text-light-bg';
			case 'pink-subtle':
				return 'bg-light-pink-200 text-light-pink-900 dark:bg-dark-pink-200 dark:text-dark-pink-900';
			case 'green':
				return 'bg-light-green-700 text-light-bg dark:bg-dark-green-700 dark:text-light-bg';
			case 'green-subtle':
				return 'bg-light-green-200 text-light-green-900 dark:bg-dark-green-200 dark:text-dark-green-900';
			case 'teal':
				return 'bg-light-teal-700 text-light-bg dark:bg-dark-teal-700 dark:text-light-bg';
			case 'teal-subtle':
				return 'bg-light-teal-200 text-light-teal-900 dark:bg-dark-teal-200 dark:text-dark-teal-900';
			case 'inverted':
				return 'bg-light-gray-1000 text-light-gray-100 dark:bg-dark-gray-1000 dark:text-dark-gray-100';
		}
	});

	let sizeClass = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'h-[20px] px-[6px] py-0 text-[11px] text-wrap font-medium';
			case 'md':
				return 'h-[24px] px-[10px] py-0 text-[12px] text-wrap font-medium';
			case 'lg':
				return 'h-[32px] px-[12px] py-0 text-[14px] text-wrap font-medium';
		}
	});

	let iconSizeClass = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'w-[11px] h-[11px]';
			case 'md':
				return 'w-[14px] h-[14px]';
			case 'lg':
				return 'w-[16px] h-[16px]';
		}
	});

	let iconXGap = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'first:gap-x-[3px]';
			case 'md':
				return 'first:gap-x-[4px]';
			case 'lg':
				return 'first:gap-x-[6px]';
		}
	});

	let badgeClass = $derived.by(() => {
		if (size) {
			return `${variantClass} ${sizeClass}`;
		}

		return `${variantClass}`;
	});
</script>

{#snippet iconSnip()}
	{#if icon}
		<span class={iconSizeClass}>
			<svelte:component this={icon} />
		</span>
	{/if}
{/snippet}

<span class="flex items-center justify-center rounded-full {badgeClass} {klass}">
	<span class="flex items-center {iconXGap} capitalize">
		{@render iconSnip()}
		{@render children()}
	</span>
</span>
