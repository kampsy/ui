<script lang="ts">
	import type { AsideT } from "./types.js"
	import { page } from "$app/state"
	import { Badge } from "$lib/index.js"

	interface Props {
		asideDataList?: Array<AsideT>
	}

	let { asideDataList = undefined }: Props = $props()

	const setActive = (url: string) => {
		if (page.url.pathname.endsWith(url)) {
			return "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-gray-alpha-100 dark:bg-kui-dark-gray-alpha-100 "
		}
		return "text-kui-light-gray-900 dark:text-kui-dark-gray-900"
	}
</script>

<div class="ui-scrollbar h-full w-full overflow-y-auto scroll-smooth px-4 pt-4 pb-3.5">
	{#if asideDataList}
		{#each asideDataList as asideData, index (index)}
			<div>
				<p
					class="text-kui-black dark:text-kui-dark-gray-1000 mb-0.5 flex h-10 w-full items-center gap-2 py-1.5 pl-3 text-[14px] leading-5 font-medium capitalize"
				>
					{asideData?.title?.name || ""}
					{#if asideData?.title?.badge}
						<Badge size="sm" variant={asideData.title?.badge?.variant || "green"}
							>{asideData.title?.badge?.name}</Badge
						>
					{/if}
				</p>
				<ul class="relative space-y-0.5">
					{#if asideData.ul}
						{#each asideData.ul as list, index (index)}
							<li class="py-0.5">
								<a class="group" href={list?.url || "/#"}>
									<span
										class="flex h-10 w-full items-center gap-x-3 {setActive(
											list?.url || '',
										)} group-hover:bg-kui-light-gray-alpha-100 dark:group-hover:bg-kui-dark-gray-alpha-100 group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 flex items-center rounded-md px-3 py-1.5 text-[14px] leading-5 font-normal capitalize"
										>{list?.name || ""}
										{#if list?.badge}
											<Badge size="sm" variant={list?.badge?.variant || "green"}
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
