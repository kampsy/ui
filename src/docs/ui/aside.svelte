<script lang="ts">
	import type { AsideT } from './types.js';
	import { page } from '$app/stores';

	type propsT = {
		asideDataList?: Array<AsideT>;
	};

	let { asideDataList = undefined }: propsT = $props();

	const setActive = (url: string) => {
		if ($page.url.pathname.endsWith(url)) {
			return 'text-light-gray-1000 dark:text-dark-gray-1000 bg-light-gray-alpha-100 dark:bg-dark-gray-alpha-100 ';
		}
		return 'text-light-gray-900 dark:text-dark-gray-900';
	};
</script>

<div class="ui-scrollbar w-full h-full px-4 pb-[14px] pt-4 scroll-smooth overflow-y-auto">
	{#if asideDataList}
		{#each asideDataList as aisdeData}
			<div>
				<p
					class="w-full h-[40px] flex items-center gap-2 mb-0.5 pl-3 py-1.5 text-[14px] font-medium leading-[20px] capitalize text-light-gray-1000 dark:text-dark-gray-1000"
				>
					{aisdeData?.title || ''}
				</p>
				<ul class="relative space-y-0.5">
					{#if aisdeData.ul}
						{#each aisdeData.ul as list}
							<li class="py-[2px]">
								<a class="group" href={list?.url || '/#'}
									><span
										class="w-full h-[40px] {setActive(
											list?.url || ''
										)} capitalize group-hover:bg-light-gray-alpha-100 dark:group-hover:bg-dark-gray-alpha-100 flex items-center rounded-md px-3 py-1.5 text-[14px] font-normal leading-[20px] group-hover:text-light-gray-1000 dark:group-hover:text-dark-gray-1000"
										>{list?.name || ''}</span
									></a
								>
							</li>
						{/each}
					{/if}
				</ul>
			</div>
		{/each}
	{/if}
</div>
