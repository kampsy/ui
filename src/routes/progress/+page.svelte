<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import Progress from '$lib/progress/progress.svelte';
	import { progressDefault, progressDynamicColors, progressThemed } from '../../docs/data/progress.js';
	import Button from '$lib/button/button.svelte';

	let dynamic = $state(0);
</script>

<svelte:head>
	<title>Progess</title>
</svelte:head>

{#snippet progress()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			progress
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Display progress relative to a limit or related to a task.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-lg overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultProgess()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Progress value={80} />
			{/snippet}
			{@render demoAndCode(demo, progressDefault)}
		</div>
	</Row>
{/snippet}

{#snippet dynamicColors()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">Dynamic colors</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Progress value={dynamic} />
				<div class="flex items-center gap-4">
					<Button
						onclick={() => {
							if (dynamic < 100) {
								dynamic = dynamic + 10;
							}
						}}
						size="small"
						>Increase</Button
					>
					<Button
						onclick={() => {
							if (dynamic > 0) {
								dynamic = dynamic - 10;
							}
						}}
						size="small"
						type="secondary">Decrease</Button
					>
				</div>
			{/snippet}
			{@render demoAndCode(demo, progressDynamicColors)}
		</div>
	</Row>
{/snippet}

{#snippet themed()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">themed</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Progress type="success" value={100} />
					<Progress type="error" value={10} />
					<Progress type="warning" value={40} />
					<Progress type="secondary" value={70} />
				</div>
			{/snippet}
			{@render demoAndCode(demo, progressThemed)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'pagination', href: '/pagination' }}
			next={{ title: 'select', href: '/select' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render progress()}
	{@render defaultProgess()}
	{@render dynamicColors()}
	{@render themed()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
