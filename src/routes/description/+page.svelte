<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Description } from '$lib/index.js';
	import { descriptionDefault } from '../../docs/data/description.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';
</script>

<svelte:head>
	<title>Description</title>
</svelte:head>

{#snippet description()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Description
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-6 lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Displays a brief heading and subheading to communicate any additional information or context a
			user needs to continue.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="w-full flex flex-nowrap gap-4 items-center justify-between">
				{@render demo()}
			</div>
		</div>
		<div class="overflow-hidden rounded-b-xl">
			<CollapseCode {code} />
		</div>
	</div>
{/snippet}

{#snippet defaultDescription()}
	<Row>
		<LinkH2 href="/description#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Description
						content="Data about this section."
						title="Section Title"
						tooltip="Additional context about what this section refers to."
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, descriptionDefault)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'collapse', href: '/collapse' }}
			next={{ title: 'empty state', href: '/empty-state' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render description()}
	{@render defaultDescription()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
