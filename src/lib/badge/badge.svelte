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

	const variantObj = {
		gray: 'bg-light-gray-700 text-light-bg dark:bg-dark-gray-700 dark:text-light-bg',
		'gray-subtle':
			'bg-light-gray-200 text-light-gray-1000 dark:bg-dark-gray-200 dark:text-dark-gray-1000',
		blue: 'bg-light-blue-700 text-light-bg dark:bg-dark-blue-700 dark:text-light-bg',
		'blue-subtle':
			' text-light-blue-900 dark:text-dark-blue-900 bg-light-blue-200 dark:bg-dark-blue-200 ',
		purple: 'bg-light-purple-700 text-light-bg dark:bg-dark-purple-700 dark:text-light-bg',
		'purple-subtle':
			'bg-light-purple-200 text-light-purple-900 dark:bg-dark-purple-200 dark:text-dark-purple-900',
		amber: 'bg-light-amber-700 text-light-bg dark:bg-dark-amber-700 dark:text-black',
		'amber-subtle':
			'bg-light-amber-200 text-light-amber-900 dark:bg-dark-amber-200 dark:text-dark-amber-900',
		red: 'bg-light-red-700 text-light-bg dark:bg-dark-red-700 dark:text-light-bg',
		'red-subtle': 'bg-light-red-200 text-light-red-900 dark:bg-dark-red-200 dark:text-dark-red-900',
		pink: 'bg-light-pink-700 text-light-bg dark:bg-dark-pink-700 dark:text-light-bg',
		'pink-subtle':
			'bg-light-pink-200 text-light-pink-900 dark:bg-dark-pink-200 dark:text-dark-pink-900',
		green: 'bg-light-green-700 text-light-bg dark:bg-dark-green-700 dark:text-light-bg',
		'green-subtle':
			'bg-light-green-200 text-light-green-900 dark:bg-dark-green-200 dark:text-dark-green-900',
		teal: 'bg-light-teal-700 text-light-bg dark:bg-dark-teal-700 dark:text-light-bg',
		'teal-subtle':
			'bg-light-teal-200 text-light-teal-900 dark:bg-dark-teal-200 dark:text-dark-teal-900',
		inverted:
			'bg-light-gray-1000 text-light-gray-100 dark:bg-dark-gray-1000 dark:text-dark-gray-100'
	};
	let variantClass = $derived.by(() => {
		return variantObj[variant];
	});

	const sizeObj = {
		sm: 'h-[20px] px-[6px] py-0 text-[11px] text-wrap font-medium',
		md: 'h-[24px] px-[10px] py-0 text-[12px] text-wrap font-medium',
		lg: 'h-[32px] px-[12px] py-0 text-[14px] text-wrap font-medium'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});

	const iconSizeObj = {
		sm: 'w-[11px] h-[11px]',
		md: 'w-[14px] h-[14px]',
		lg: 'w-[16px] h-[16px]'
	};
	let iconSizeClass = $derived.by(() => {
		return iconSizeObj[size];
	});

	const iconXGapObj = {
		sm: 'first:gap-x-[3px]',
		md: 'first:gap-x-[4px]',
		lg: 'first:gap-x-[6px]'
	};
	let iconXGap = $derived.by(() => {
		return iconXGapObj[size];
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
