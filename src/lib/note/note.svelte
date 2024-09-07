<script lang="ts">
	import type { Snippet } from 'svelte';
	import Information from '$lib/icons/information.svelte';
	import CheckCircle from '$lib/icons/check-circle.svelte';
	import Error from '$lib/icons/error.svelte';
	import Warning from '$lib/icons/warning.svelte';

	type propsT = {
		class?: string;
		size?: 'small' | 'medium' | 'large';
		action?: Snippet | undefined;
		type?: 'success' | 'error' | 'warning' | 'secondary' | 'violet' | 'cyan' | 'default';
		fill?: boolean;
		children?: Snippet | undefined;
	};
	let {
		class: klass = '',
		size = 'medium',
		action = undefined,
		type = 'default',
		fill = false,
		children = undefined
	}: propsT = $props();

	const sizeObj = {
		small: 'px-[8px] py-[8px] text-xs leading-4',
		medium: 'px-[12px] py-[9px] text-sm leading-[21px]',
		large: 'px-[12px] py-[11px] text-base leading-[24px]'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});

	const iconAndTextGapObj = {
		small: 'gap-2',
		medium: 'gap-3',
		large: 'gap-3'
	};
	let iconAndTextGapClass = $derived.by(() => {
		return iconAndTextGapObj[size];
	});

	let radiusClass = $derived.by(() => {
		if (action) {
			return 'rounded-[10px]';
		}
		return 'rounded-md';
	});

	const typeBorderObj = {
		success: `border border-kui-light-blue-400 dark:border-kui-dark-blue-400`,
		error: `border border-kui-light-red-400 dark:border-kui-dark-red-400`,
		warning: 'border border-kui-light-amber-400 dark:border-kui-dark-amber-400',
		secondary: `border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400`,
		violet: `border border-kui-light-purple-400 dark:border-kui-dark-purple-400`,
		cyan: `border border-kui-light-teal-400 dark:border-kui-dark-teal-400`,
		default: `border border-kui-light-gray-400 dark:border-kui-dark-gray-400`
	};
	let typeBorderClass = $derived.by(() => {
		return typeBorderObj[type];
	});

	const fillObj = {
		success: `bg-kui-light-blue-200 dark:bg-kui-dark-blue-200 border border-kui-light-blue-200 
		dark:border-kui-dark-blue-200`,
		error: `bg-kui-light-red-200 dark:bg-kui-dark-red-200 border border-kui-light-red-200 
		dark:border-kui-dark-red-200`,
		warning: `bg-kui-light-amber-200 dark:bg-kui-dark-amber-200 border border-kui-light-amber-200 
		dark:border-kui-dark-amber-200`,
		secondary: `bg-kui-light-gray-alpha-200 dark:bg-kui-dark-gray-alpha-200 border border-kui-light-gray-alpha-200 
		dark:border-kui-dark-gray-alpha-200`,
		violet: `bg-kui-light-purple-200 dark:bg-kui-dark-purple-200 border border-kui-light-purple-200 
		dark:border-kui-dark-purple-200`,
		cyan: `bg-kui-light-teal-200 dark:bg-kui-dark-teal-200 border border-kui-light-teal-200 
		dark:border-kui-dark-teal-200`,
		default: `bg-kui-light-gray-200 dark:bg-kui-dark-gray-200 border border-kui-light-gray-200 
		dark:border-kui-dark-gray-200`
	};
	let fillClass = $derived.by(() => {
		return fillObj[type];
	});

	const typeObj = {
		success: `text-kui-light-blue-900 dark:text-kui-dark-blue-900 [&_a]:text-kui-light-blue-1000 
		dark:[&_a]:text-kui-dark-blue-1000`,
		error: `text-kui-light-red-900 dark:text-kui-dark-red-900 [&_a]:text-kui-light-red-1000 
		dark:[&_a]:text-kui-dark-red-1000`,
		warning: `text-kui-light-amber-900 dark:text-kui-dark-amber-900 [&_a]:text-kui-light-amber-1000 
		dark:[&_a]:text-kui-dark-amber-1000`,
		secondary: `text-kui-light-gray-alpha-900 dark:text-kui-dark-gray-alpha-900 [&_a]:text-kui-light-gray-alpha-1000 
		dark:[&_a]:text-kui-dark-gray-alpha-1000`,
		violet: `text-kui-light-purple-900 dark:text-kui-dark-purple-900 [&_a]:text-kui-light-purple-1000 
		dark:[&_a]:text-kui-dark-purple-1000`,
		cyan: `text-kui-light-teal-900 dark:text-kui-dark-teal-900 [&_a]:text-kui-light-teal-1000 
		dark:[&_a]:text-kui-dark-teal-1000`,
		default: `text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_a]:text-kui-light-gray-1000 
		dark:[&_a]:text-kui-dark-gray-1000`
	};
	let textClass = $derived.by(() => {
		return typeObj[type];
	});

	const contClass = $derived.by(() => {
		if (fill) {
			return `${fillClass}`;
		}
		return `${typeBorderClass}`;
	});
</script>

<!--Icon snippet based on the type-->
{#snippet icon()}
	{#if type === 'success'}
		<CheckCircle />
	{:else if type === 'error'}
		<Error />
	{:else if type === 'warning'}
		<Warning />
	{:else}
		<Information />
	{/if}
{/snippet}

<div class="w-full">
	<div
		class="w-full flex items-center justify-between gap-x-3 {contClass} {radiusClass} {sizeClass} {klass}"
	>
		<div class="flex items-center {iconAndTextGapClass} {textClass}">
			<div class="w-4 h-4">
				<div class="w-4 h-4">
					{@render icon()}
				</div>
			</div>
			<span>
				{#if children}
					{@render children()}
				{/if}
			</span>
		</div>

		{#if action}
			{@render action()}
		{/if}
	</div>
</div>
