<script lang="ts">
	import ChevronLeft from "$lib/icons/chevron-left.svelte"
	import ChevronRight from "$lib/icons/chevron-right.svelte"

	interface Props {
		previous?:
			| {
					title: string
					href: string
			  }
			| undefined
		next?:
			| {
					title: string
					href: string
			  }
			| undefined
	}

	let { previous = undefined, next = undefined }: Props = $props()

	let paginationStyle = $derived.by(() => {
		if (previous && next) {
			return "justify-between"
		} else if (previous) {
			return "justify-start"
		} else if (next) {
			return "justify-end"
		} else {
			return ""
		}
	})
</script>

{#snippet prevSnip()}
	{#if previous}
		<a aria-label="go to previous page: {previous.title}" href={previous.href} class="group">
			<div class="flex items-center gap-x-2">
				<div class="h-[20px] w-[20px]"></div>
				<div
					class="text-kui-light-gray-900 group-hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:group-hover:text-kui-dark-gray-1000 mb-[2px] text-[13px] leading-[13px] font-normal capitalize transition-colors"
				>
					previous
				</div>
			</div>
			<div class="flex items-center gap-x-2">
				<div
					class="text-kui-light-gray-900 group-hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:group-hover:text-kui-dark-gray-1000 flex h-[20px] w-[20px] items-center justify-center transition-colors"
				>
					<div class="h-4 w-4">
						<ChevronLeft />
					</div>
				</div>
				<span
					class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[16px] leading-6 font-medium capitalize"
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
					class="text-kui-light-gray-900 group-hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:group-hover:text-kui-dark-gray-1000 mb-[2px] text-[13px] leading-[13px] font-normal capitalize transition-colors"
				>
					next
				</div>
				<div class="h-[20px] w-[20px]"></div>
			</div>
			<div class="flex items-center gap-x-2">
				<span
					class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[16px] leading-6 font-medium capitalize"
				>
					{next.title}
				</span>
				<div
					class="text-kui-light-gray-900 group-hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:group-hover:text-kui-dark-gray-1000 flex h-[20px] w-[20px] items-center justify-center transition-colors"
				>
					<div class="h-4 w-4">
						<ChevronRight />
					</div>
				</div>
			</div>
		</a>
	{/if}
{/snippet}

<section class="w-full">
	<nav class="flex w-full items-center {paginationStyle} gap-x-4" aria-label="pagination">
		{@render prevSnip()}
		{@render nextSnip()}
	</nav>
</section>
