<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';

	interface Props {
		previous?:
			| {
					title: string;
					href: string;
			  }
			| undefined;
		next?:
			| {
					title: string;
					href: string;
			  }
			| undefined;
	};

	let { previous = undefined, next = undefined }: Props = $props();

	let paginationStyle = $derived.by(() => {
		if (previous && next) {
			return 'justify-between';
		} else if (previous) {
			return 'justify-start';
		} else if (next) {
			return 'justify-end';
		} else {
			return '';
		}
	});
</script>

{#snippet prevSnip()}
	{#if previous}
		<a aria-label="go to previous page: {previous.title}" href={previous.href} class="group">
			<div class="flex items-center gap-x-2">
				<div class="w-[20px] h-[20px]"></div>
				<div
					class="mb-[2px] text-[13px] transition-colors text-kui-light-gray-900 group-hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:group-hover:text-kui-dark-gray-1000 font-normal leading-[13px] capitalize"
				>
					previous
				</div>
			</div>
			<div class="flex items-center gap-x-2">
				<div
					class="w-[20px] h-[20px] transition-colors flex items-center justify-center text-kui-light-gray-900 group-hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:group-hover:text-kui-dark-gray-1000"
				>
					<div class="w-[16px] h-[16px]">
						<ChevronLeft />
					</div>
				</div>
				<span
					class="text-[16px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium leading-[24px] capitalize"
				>
					{previous.title}
				</span>
			</div>
		</a>
	{/if}
{/snippet}

{#snippet nextSnip()}
	{#if next}
		<a aria-label="go to next page: {next.title}" href={next.href} class="group">
			<div class="flex items-center gap-x-2">
				<div
					class="mb-[2px] text-[13px] transition-colors text-kui-light-gray-900 group-hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:group-hover:text-kui-dark-gray-1000 font-normal leading-[13px] capitalize"
				>
					next
				</div>
				<div class="w-[20px] h-[20px]"></div>
			</div>
			<div class="flex items-center gap-x-2">
				<span
					class="text-[16px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium leading-[24px] capitalize"
				>
					{next.title}
				</span>
				<div
					class="w-[20px] h-[20px] transition-colors flex items-center justify-center text-kui-light-gray-900 group-hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:group-hover:text-kui-dark-gray-1000"
				>
					<div class="w-[16px] h-[16px]">
						<ChevronRight />
					</div>
				</div>
			</div>
		</a>
	{/if}
{/snippet}

<section class="w-full">
	<nav class="w-full flex items-center {paginationStyle} gap-x-4" aria-label="pagination">
		{@render prevSnip()}
		{@render nextSnip()}
	</nav>
</section>
