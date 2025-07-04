<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Choicebox } from '$lib/index.js';
	import {
		choiceboxDefault,
		choiceboxDisabled,
		choiceboxMultiselect
	} from '$lib/../docs/data/choicebox.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';

	let value: string | string[] = $state('');
	let value2: string | string[] = $state([]);
</script>

<svelte:head>
	<title>Choicebox</title>
</svelte:head>

{#snippet choicebox()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			choicebox
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A larger form of Radio or Checkbox, where the user has a larger tap target and more details.
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

{#snippet defaultChoicebox()}
	<Row>
		<LinkH2 href="/choicebox#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Choicebox.Group label="select a plan" type="radio" bind:value>
						<Choicebox.Item
							defaultChecked
							description="Free for two weeks"
							title="Pro Trial"
							value="trial"
						/>
						<Choicebox.Item description="Get started now" title="Pro" value="pro" />
					</Choicebox.Group>
				</div>
			{/snippet}
			{@render demoAndCode(demo, choiceboxDefault)}
		</div>
	</Row>
{/snippet}

{#snippet multiselect()}
	<Row>
		<LinkH2 href="/choicebox#multiselect" aria-label="multiselect">multiselect</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Choicebox.Group label="select a plan" type="checkbox" bind:value>
						<Choicebox.Item description="Free for two weeks" title="Pro Trial" value="trial" />
						<Choicebox.Item description="Get started now" title="Pro" value="pro" />
					</Choicebox.Group>
				</div>
			{/snippet}
			{@render demoAndCode(demo, choiceboxMultiselect)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<LinkH2 href="/choicebox#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-4">
					<Choicebox.Group label="Choicebox group disabled" disabled type="radio" bind:value>
						<Choicebox.Item description="Free for two weeks" title="Pro Trial" value="trial" />
						<Choicebox.Item description="Get started now" title="Pro" value="pro" />
					</Choicebox.Group>
					<Choicebox.Group label="Single input disabled" type="checkbox" bind:value={value2}>
						<Choicebox.Item
							description="Free for two weeks"
							disabled
							title="Pro Trial"
							value="trial"
						/>
						<Choicebox.Item description="Get started now" title="Pro" value="pro" />
					</Choicebox.Group>
				</div>
			{/snippet}
			{@render demoAndCode(demo, choiceboxDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'calendar', href: '/calendar' }}
			next={{ title: 'collapse', href: '/collapse' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render choicebox()}
	{@render defaultChoicebox()}
	{@render multiselect()}
	{@render disabled()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
