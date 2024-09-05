<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { ProjectBanner, Tooltip } from '$lib/index.js';
	import { projectBannerDefault } from '../../docs/data/project-banner.js';

	const ProjectBannerVariants: Array<'gray' | 'warning' | 'error' | 'success'> = [
		'gray',
		'warning',
		'error',
		'success'
	];
</script>

<svelte:head>
	<title>Project Banner</title>
</svelte:head>

{#snippet projectBanner()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Project Banner
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Project-level banner shown on all project pages.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

<!--Rounded content-->
{#snippet roundedCode(rct: string)}
	<code
		class="px-2 py-[3.6px] rounded-[6px] text-xs text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		{rct}
	</code>
{/snippet}

{#snippet defaultProjectBanner()}
	{#snippet labelSnip()}
		This project was rolled back by
		<Tooltip
			class="underline decoration-dashed underline-offset-[5px]"
			text="Yesterday for project marketing-website"
		>
			@johnphamous
		</Tooltip>
	{/snippet}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The {@render roundedCode('label')} prop accepts either a {@render roundedCode('string')} or a
			{@render roundedCode('Snippet')}.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					{#each ProjectBannerVariants as variant}
						<div class="w-full space-y-2">
							<ProjectBanner
								callToAction={{
									label: 'Undo Rollback',
									onClick: () => {
										alert('Button clicked');
									}
								}}
								label="This project was rolled back by @johnphamous"
								{variant}
							/>
							<ProjectBanner
								callToAction={{
									label: 'View Rollback',
									href: '/project-banner'
								}}
								label={labelSnip}
								{variant}
							/>
						</div>
					{/each}
				</div>
			{/snippet}
			{@render demoAndCode(demo, projectBannerDefault)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'progress', href: '/progress' }}
			next={{ title: 'select', href: '/select' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render projectBanner()}
	{@render defaultProjectBanner()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
