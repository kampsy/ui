<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import Tooltip from '$lib/tooltip/tooltip.svelte';
	import {
		tooltipComponents,
		toolTipCustomeType,
		toolTipDefault
	} from '../../docs/data/tooltip.js';
	import Button from '$lib/button/button.svelte';
	import { Badge } from '$lib/index.js';
	import Spinner from '$lib/spinner/spinner.svelte';
</script>

<svelte:head>
	<title>Tooltip</title>
</svelte:head>

{#snippet tooltip()}
	<Row>
		<h1
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Tooltip
		</h1>
		<p
			class="first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A set of headings, vertically stacked, that each reveal an related section of content.
			Commonly referred to as an accordion.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-light-bg dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 rounded-lg"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="w-full flex flex-nowrap gap-4 items-center justify-between">
				{@render demo()}
			</div>
		</div>
		<div class="overflow-hidden rounded-b-lg">
			<CollapseCode {code} />
		</div>
	</div>
{/snippet}

{#snippet defaultTooltip()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Tooltip text="The Evil Rabbit Jumped over the Fence" position="top">
						<span>Top</span>
					</Tooltip>
				</div>
				<div>
					<Tooltip text="The Evil Rabbit Jumped over the Fence" position="bottom">
						<span>Bottom</span>
					</Tooltip>
				</div>

				<div>
					<Tooltip text="The Evil Rabbit Jumped over the Fence" position="right">
						<span>Right</span>
					</Tooltip>
				</div>
				<div>
					<Tooltip text="The Evil Rabbit Jumped over the Fence" position="left">
						<span>Left</span>
					</Tooltip>
				</div>
			{/snippet}
			{@render demoAndCode(demo, toolTipDefault)}
		</div>
	</Row>
{/snippet}

{#snippet customeType()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">custom type</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Tooltip text="The Evil Rabbit Jumped over the Fence" position="top" type="success">
						<span>Top</span>
					</Tooltip>
				</div>
				<div>
					<Tooltip text="The Evil Rabbit Jumped over the Fence" position="bottom" type="error">
						<span>Bottom</span>
					</Tooltip>
				</div>

				<div>
					<Tooltip text="The Evil Rabbit Jumped over the Fence" position="right" type="warning">
						<span>Right</span>
					</Tooltip>
				</div>
				<div>
					<Tooltip text="The Evil Rabbit Jumped over the Fence" position="left" type="violet">
						<span>Left</span>
					</Tooltip>
				</div>
			{/snippet}
			{@render demoAndCode(demo, toolTipCustomeType)}
		</div>
	</Row>
{/snippet}

{#snippet components()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">components</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Tooltip position="bottom" text="The Evil Rabbit Jumped over the Fence">
						<Button size="small">Bottom</Button>
					</Tooltip>
				</div>

				<div>
					<Tooltip position="right" text="The Evil Rabbit Jumped over the Fence">
						<Spinner />
					</Tooltip>
				</div>

				<div>
					<Tooltip position="left" text="The Evil Rabbit Jumped over the Fence">
						<Badge size="sm">LEFT</Badge>
					</Tooltip>
				</div>
			{/snippet}
			{@render demoAndCode(demo, tooltipComponents)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'spinner', href: '/spinner' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render tooltip()}
	{@render defaultTooltip()}
	{@render customeType()}
	{@render components()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
