<script lang="ts">
	import ChevronLeft from '$lib/icons/chevron-left.svelte';
	import ChevronRight from '$lib/icons/chevron-right.svelte';

	type propsT = {
		previous?: {
			title: string;
			href: string;
		};
		next?: {
			title: string;
			href: string;
		};
	};

	let { previous, next }: propsT = $props();
</script>

{#snippet prevSnip()}
	{#if previous}
		<a href={previous.href} class="group" aria-label="go to previous page">
			<div class="flex items-center gap-x-2">
				<div class="w-[20px] h-[20px]"></div>
				<div
					class="w-full text-right mb-[2px] text-[13px] text-light-gray-900 group-hover:text-light-gray-1000 dark:text-dark-gray-900 group-hover:dark:text-dark-gray-1000 font-normal leading-[13px] capitalize"
				>
					previous
				</div>
			</div>
			<div class="flex items-center gap-x-2">
				<div
					class="w-[20px] h-[20px] flex items-center justify-center text-light-gray-900 group-hover:text-light-gray-1000 dark:text-dark-gray-900 group-hover:dark:text-dark-gray-1000"
				>
					<div class="w-[16px] h-[16px]">
						<ChevronLeft />
					</div>
				</div>
				<span
					class="text-[16px] text-light-gray-1000 dark:text-dark-gray-1000 font-medium leading-[24px] capitalize"
				>
					{previous.title}
				</span>
			</div>
		</a>
	{/if}
{/snippet}

{#snippet nextSnip()}
	{#if next}
		<a href="{next.href}" class="group" aria-label="go to next page">
			<div class="flex items-center gap-x-2">
				<div
					class="mb-[2px] text-[13px] text-light-gray-900 group-hover:text-light-gray-1000 dark:text-dark-gray-900 group-hover:dark:text-dark-gray-1000 font-normal leading-[13px] capitalize"
				>
					next
				</div>
				<div class="w-[20px] h-[20px]"></div>
			</div>
			<div class="flex items-center gap-x-2">
				<span
					class="text-[16px] text-light-gray-1000 dark:text-dark-gray-1000 font-medium leading-[24px] capitalize"
				>
                    {next.title}
				</span>
				<div
					class="w-[20px] h-[20px] flex items-center justify-center text-light-gray-900 group-hover:text-light-gray-1000 dark:text-dark-gray-900 group-hover:dark:text-dark-gray-1000"
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
	<nav class="w-full flex items-center justify-between gap-x-4" aria-label="pagination">
        {@render prevSnip()}
        {@render nextSnip()}
    </nav>
</section>
