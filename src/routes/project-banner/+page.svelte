<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { ProjectBanner } from '$lib/index.js';
	import { projectBannerDefault } from '../../docs/data/project-banner.js';
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

{#snippet defaultProjectBanner()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<div class="w-full space-y-2">
						<ProjectBanner
							callToAction={{
								label: 'Undo Rollback',
								onClick: () => {
									alert('Button clicked');
								}
							}}
							label="This project was rolled back by @johnphamous"
							variant='gray'
						/>
						<ProjectBanner
							callToAction={{
								label: 'View Rollback',
								href: '/project-banner'
							}}
							label="This project was rolled back by @johnphamous"
							variant='gray'
						/>
					</div>

					<div class="w-full space-y-2">
						<ProjectBanner
							callToAction={{
								label: 'Undo Rollback',
								onClick: () => {
									alert('Button clicked');
								}
							}}
							label="This project was rolled back by @johnphamous"
							variant='warning'
						/>
						<ProjectBanner
							callToAction={{
								label: 'View Rollback',
								href: '/project-banner'
							}}
							label="This project was rolled back by @johnphamous"
							variant='warning'
						/>
					</div>

					<div class="w-full space-y-2">
						<ProjectBanner
							callToAction={{
								label: 'Undo Rollback',
								onClick: () => {
									alert('Button clicked');
								}
							}}
							label="This project was rolled back by @johnphamous"
							variant='error'
						/>
						<ProjectBanner
							callToAction={{
								label: 'View Rollback',
								href: '/project-banner'
							}}
							label="This project was rolled back by @johnphamous"
							variant='error'
						/>
					</div>

					<div class="w-full space-y-2">
						<ProjectBanner
							callToAction={{
								label: 'Undo Rollback',
								onClick: () => {
									alert('Button clicked');
								}
							}}
							label="This project was rolled back by @johnphamous"
							variant='success'
						/>
						<ProjectBanner
							callToAction={{
								label: 'View Rollback',
								href: '/project-banner'
							}}
							label="This project was rolled back by @johnphamous"
							variant='success'
						/>
					</div>
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
