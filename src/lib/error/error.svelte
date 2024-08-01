<script lang="ts">
	import Error from '$lib/icons/error.svelte';
	import LinkExternal from '$lib/icons/link-external.svelte';
	import type { Snippet } from 'svelte';

	type propsT = {
		label?: string;
		size?: 'sm' | 'md' | 'lg';
		error?: withErrorProp;
		children?: Snippet | undefined;
	};

	type withErrorProp = {
		message: string;
		action: string;
		link: string;
	};

	let { label, size = 'md', error = undefined, children }: propsT = $props();

	const sizeObj = {
		sm: 'text-[13px] leading-[20px]',
		md: 'text-[14px] leading-[20px]',
		lg: 'text-[16px] leading-[24px]'
	}

	let sizeClass = $derived.by(() => {
		return sizeObj[size]
	});
</script>

{#snippet childrenLabelSize()}
	<div class="space-x-1 {sizeClass}">
		{#if label}
			<span class="text-light-red-900 dark:text-dark-red-900 font-medium">
				{label}:
			</span>
		{/if}

		{#if children}
			<span class="text-light-red-900 dark:text-dark-red-900 font-normal">
				{@render children()}
			</span>	
		{/if}
	</div>
{/snippet}

{#snippet withErrorProp()}
	<div class="flex items-center gap-1 text-[14px] text-light-red-900 dark:text-dark-red-900">
		{error?.message || ''}
		<div
			class=" font-medium leading-[20px] capitalize border-b border-light-red-900 dark:border-dark-red-900 hover:text-light-red-600 hover:dark:text-dark-red-800 hover:border-light-red-600 hover:dark:border-dark-red-800"
		>
			<a href={error?.link || ''}>
				<div class="flex items-center gap-1">
					{error?.action || ''}
					<div class="w-[14px] h-[14px]">
						<LinkExternal />
					</div>
				</div>
			</a>
		</div>
	</div>
{/snippet}

{#snippet errorSnip()}
	{#if error}
		{@render withErrorProp()}
	{:else}
		{@render childrenLabelSize()}
	{/if}
{/snippet}

<div class="flex items-center gap-[8px]">
	<div class="w-[16px] h-[16px] text-light-red-900 dark:text-dark-red-900">
		<Error />
	</div>
	<div>
		{@render errorSnip()}
	</div>
</div>
