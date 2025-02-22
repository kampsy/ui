<script lang="ts">
	import type { AsideT } from './types.js';
	import { page } from '$app/stores';
	import { Badge } from '$lib/index.js';

	interface Props {
		asideDataList?: Array<AsideT>;
	};

	let { asideDataList = undefined }: Props = $props();

	const setActive = (url: string) => {
		if ($page.url.pathname.endsWith(url)) {
			return 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-gray-alpha-100 dark:bg-kui-dark-gray-alpha-100 ';
		}
		return 'text-kui-light-gray-900 dark:text-kui-dark-gray-900';
	};
</script>

<div class="ui-scrollbar w-full h-full px-4 pb-[14px] pt-4 scroll-smooth overflow-y-auto">
	{#if asideDataList}
		{#each asideDataList as asideData}
			<div>
				<p
					class="w-full h-[40px] flex items-center gap-2 mb-0.5 pl-3 py-1.5 text-[14px] font-medium leading-[20px] capitalize text-kui-black dark:text-kui-dark-gray-1000"
				>
					{asideData?.title?.name || ''}
					{#if asideData?.title?.badge}
						<Badge size="small" variant={asideData.title?.badge?.variant || 'green'}
							>{asideData.title?.badge?.name}</Badge
						>
					{/if}
				</p>
				<ul class="relative space-y-0.5">
					{#if asideData.ul}
						{#each asideData.ul as list}
							<li class="py-[2px]">
								<a class="group" href={list?.url || '/#'}>
									<span
										class="w-full flex items-center gap-x-3 h-[40px] {setActive(
											list?.url || ''
										)} capitalize group-hover:bg-kui-light-gray-alpha-100 dark:group-hover:bg-kui-dark-gray-alpha-100 flex items-center rounded-md px-3 py-1.5 text-[14px] font-normal leading-[20px] group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000"
										>{list?.name || ''}
										{#if list?.badge}
											<Badge size="small" variant={list?.badge?.variant || 'green'}
												>{list?.badge.name}</Badge
											>
										{/if}
									</span>
								</a>
							</li>
						{/each}
					{/if}
				</ul>
			</div>
		{/each}
	{/if}
</div>
