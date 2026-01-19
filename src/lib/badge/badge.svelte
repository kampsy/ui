<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props extends HTMLAnchorAttributes {
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
			| 'inverted'
			| 'pill';
		size?: 'small' | 'medium' | 'large';
		icon?: Component | undefined;
		children: Snippet;
	}

	let {
		class: klass = '',
		variant = 'gray',
		size = 'medium',
		icon = undefined,
		children,
		...rest
	}: Props = $props();

	const variantObj = {
		gray: 'bg-kui-light-gray-700 text-kui-light-bg dark:bg-kui-dark-gray-700 dark:text-kui-light-bg',
		'gray-subtle':
			'bg-kui-light-gray-200 text-kui-light-gray-1000 dark:bg-kui-dark-gray-200 dark:text-kui-dark-gray-1000',
		blue: 'bg-kui-light-blue-700 text-kui-light-bg dark:bg-kui-dark-blue-700 dark:text-kui-light-bg',
		'blue-subtle':
			' text-kui-light-blue-900 dark:text-kui-dark-blue-900 bg-kui-light-blue-200 dark:bg-kui-dark-blue-200 ',
		purple:
			'bg-kui-light-purple-700 text-kui-light-bg dark:bg-kui-dark-purple-700 dark:text-kui-light-bg',
		'purple-subtle':
			'bg-kui-light-purple-200 text-kui-light-purple-900 dark:bg-kui-dark-purple-200 dark:text-kui-dark-purple-900',
		amber: 'bg-kui-light-amber-700 text-black dark:bg-kui-dark-amber-700',
		'amber-subtle':
			'bg-kui-light-amber-200 text-kui-light-amber-900 dark:bg-kui-dark-amber-200 dark:text-kui-dark-amber-900',
		red: 'bg-kui-light-red-700 text-kui-light-bg dark:bg-kui-dark-red-700 dark:text-kui-light-bg',
		'red-subtle':
			'bg-kui-light-red-200 text-kui-light-red-900 dark:bg-kui-dark-red-200 dark:text-kui-dark-red-900',
		pink: 'bg-kui-light-pink-700 text-kui-light-bg dark:bg-kui-dark-pink-700 dark:text-kui-light-bg',
		'pink-subtle':
			'bg-kui-light-pink-200 text-kui-light-pink-900 dark:bg-kui-dark-pink-200 dark:text-kui-dark-pink-900',
		green:
			'bg-kui-light-green-700 text-kui-light-bg dark:bg-kui-dark-green-700 dark:text-kui-light-bg',
		'green-subtle':
			'bg-kui-light-green-200 text-kui-light-green-900 dark:bg-kui-dark-green-200 dark:text-kui-dark-green-900',
		teal: 'bg-kui-light-teal-700 text-kui-light-bg dark:bg-kui-dark-teal-700 dark:text-kui-light-bg',
		'teal-subtle':
			'bg-kui-light-teal-300 text-kui-light-teal-900 dark:bg-kui-dark-teal-300 dark:text-kui-dark-teal-900',
		inverted:
			'bg-kui-light-gray-1000 text-kui-light-gray-100 dark:bg-kui-dark-gray-1000 dark:text-kui-dark-gray-100',
		pill: 'cursor-pointer border border-kui-light-gray-200 dark:border-kui-dark-gray-400 hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100 '
	};
	let variantClass = $derived.by(() => {
		return variantObj[variant];
	});

	const sizeObj = {
		small: 'h-[20px] px-[6px] py-0 text-[11px] text-wrap font-medium',
		medium: 'h-[24px] px-[10px] py-0 text-[12px] text-wrap font-medium',
		large: 'h-[32px] px-[12px] py-0 text-[14px] text-wrap font-medium'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});

	const iconSizeObj = {
		small: 'w-[11px] h-[11px]',
		medium: 'w-[14px] h-[14px]',
		large: 'w-[16px] h-[16px]'
	};
	let iconSizeClass = $derived.by(() => {
		return iconSizeObj[size];
	});

	const iconXGapObj = {
		small: 'first:gap-x-[3px]',
		medium: 'first:gap-x-[4px]',
		large: 'first:gap-x-[6px]'
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
		{@const Icon = icon}
		<span class={iconSizeClass}>
			<Icon />
		</span>
	{/if}
{/snippet}

<a class="flex items-center justify-center rounded-full {badgeClass} {klass}" {...rest}>
	<span class="flex items-center {iconXGap}">
		{@render iconSnip()}
		{@render children()}
	</span>
</a>
