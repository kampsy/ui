<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { EmptyState } from '$lib/index.js';
	import {
		emptyStateDefault,
		blankStateDocs,
		informationalDocs
	} from '$lib/../docs/data/emptyState.js';
	import Pagination from '$lib/pagination/pagination.svelte';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';
	import Text from '$lib/text/text.svelte';
	import { ChartBarPeak } from '$lib/icons/index.js';
	import Button from '$lib/button/button.svelte';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

{#snippet emptyState()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Empty State
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Fill spaces when no content has been added yet, or is temporarily empty due to the nature of
			the feature and should be designed to prevent confusion.
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

{#snippet defaultEmptyState()}
	<Row>
		<LinkH2 href="/error#default" aria-label="default">Empty state Design framework</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			When designed thoughtfully, empty states become an essential part of a smooth user experience,
			providing enough context to keep users working in a productive way. There are several
			approaches to explore that will match the needs a developer in different situations:
		</p>

		<Text size={16} class="mt-2 xl:mt-4">
			- Blank Slate <span class="text-kui-light-gray-900 dark:text-kui-dark-gray-900">
				- Basic empty state for first run experience</span
			></Text
		>
		<Text size={16} class="mt-2 xl:mt-4">
			- Informationa <span class="text-kui-light-gray-900 dark:text-kui-dark-gray-900">
				- Alternative for first use empty state, including in-line CTAs and supplemental
				documentation links</span
			></Text
		>
		<Text size={16} class="mt-2 xl:mt-4">
			- Educational <span class="text-kui-light-gray-900 dark:text-kui-dark-gray-900">
				- Launch a contextual onboarding flow to gain deeper understanding about that area of the
				app</span
			></Text
		>
		<Text size={16} class="mt-2 xl:mt-4">
			- Guide <span class="text-kui-light-gray-900 dark:text-kui-dark-gray-900">
				- Starter content that allows users to interact with data and learn the system by tinkering
				or setting up their environment</span
			></Text
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<EmptyState.Root
					description="A message conveying the state of the product."
					icon={ChartBarPeak}
					title="Title"
				/>
			{/snippet}
			{@render demoAndCode(demo, emptyStateDefault)}
		</div>
	</Row>
{/snippet}

{#snippet blank()}
	<Row>
		<LinkH2 href="/error#default" aria-label="default">blabk state</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The most basic empty state should convey the state of the view.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<EmptyState.Root
					description="A message conveying the state of the product."
					icon={ChartBarPeak}
					title="Title"
				/>
			{/snippet}
			{@render demoAndCode(demo, blankStateDocs)}
		</div>
	</Row>
{/snippet}

{#snippet informational()}
	<Row>
		<LinkH2 href="/error#default" aria-label="default">Informational</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Help users by clearly explaining the benefit and utility of a product or feature, with a call
			to action and link to more information to help users progress.
		</p>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Default to showing rather than telling the value of a feature. Certain entry points to a
			product may call for a unique empty state and a call to upgrade. Informational empty states
			will include a call to action.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<EmptyState.Root
					description="This should detail the actions you can take on this screen, as well as why it’s valuable."
					icon={ChartBarPeak}
					title="Title"
				>
					<Button variant="secondary">Primary Action</Button>
				</EmptyState.Root>
			{/snippet}
			{@render demoAndCode(demo, informationalDocs)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'description', href: '/description' }}
			next={{ title: 'error', href: '/error' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render emptyState()}
	{@render defaultEmptyState()}
	{@render blank()}
	{@render informational()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
