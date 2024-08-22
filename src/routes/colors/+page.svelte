<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import Pagination from '$lib/pagination/pagination.svelte';
	import Tooltip from '$lib/tooltip/tooltip.svelte';

	import {
		gray,
		grayAlpha,
		blue,
		red,
		amber,
		green,
		teal,
		purple,
		pink
	} from '../../docs/data/colors.js';
</script>

<svelte:head>
	<title>Colors</title>
</svelte:head>

{#snippet error()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			colors
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Learn how to work with our color system. Right click to copy raw values.
		</p>
	</Row>
{/snippet}

{#snippet colSnip(title: string, colorList: string[])}
	<div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
		<div class="w-[100px] flex-shrink-0">
			<p
				class="text-sm text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium first-letter:capitalize"
			>
				{title}
			</p>
		</div>

		<ul class="flex w-full gap-1 md:gap-2">
			{#each colorList as item}
				<li class="w-full max-w-[68px]">
					<Tooltip position="top" text="#FFFFFF" class="w-full h-full">
						<div class="w-full h-full flex items-center">
							<button class="w-full h-[34px] lg:h-[40px] rounded {item}"></button>
						</div>
					</Tooltip>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

{#snippet scales()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			size
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			There are 10 color scales in the system. P3 colors are used on supported browsers and
			displays.
		</p>

		<div class="mt-5 xl:mt-10 space-y-6">
			<div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
				<div class="w-[100px] flex-shrink-0">
					<p
						class="text-sm text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium capitalize"
					>
						background
					</p>
				</div>
				<ul class="flex w-full gap-1 md:gap-2">
					<li class="flex items-center w-[72px] gap-1 md:w-[152px] md:gap-2">
						<ul class="flex items-center w-full gap-1 md:gap-2">
							<li class="w-full max-w-[68px]">
								<div class="w-full h-full flex items-center">
									<button
										class="w-full h-[34px] lg:h-[40px] border border-kui-light-gray-200 dark:border-kui-dark-gray-200 bg-kui-light-bg rounded dark:bg-kui-dark-bg"
									></button>
								</div>
							</li>
							<li class="w-full max-w-[68px]">
								<div class="w-full h-full flex items-center">
									<button
										class="w-full h-[34px] lg:h-[40px] border border-kui-light-gray-200 dark:border-kui-dark-gray-200 rounded bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
									></button>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			{@render colSnip('gray', gray)}
			{@render colSnip('gray alpha', grayAlpha)}
			{@render colSnip('blue', blue)}
			{@render colSnip('red', red)}
			{@render colSnip('amber', amber)}
			{@render colSnip('green', green)}
			{@render colSnip('teal', teal)}
			{@render colSnip('purple', purple)}
			{@render colSnip('pink', pink)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'introduction', href: '/introduction' }}
			next={{ title: 'avatar', href: '/avatar' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render error()}
	{@render scales()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
