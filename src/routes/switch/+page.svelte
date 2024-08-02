<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Switch, Tooltip } from '$lib/index.js';
	import {
		switchDefault,
		switchDisabled,
		switchFullWidth,
		switchIcon,
		switchSize
	} from '../../docs/data/switch.js';
	import { GridSquare, ListUnordered } from '$lib/icons/index.js';

	let value = $state('');
</script>

<svelte:head>
	<title>Switch</title>
</svelte:head>

{#snippet error()}
	<Row>
		<h1
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Switch
		</h1>
		<p
			class="first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Choose between a set of options.
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

{#snippet defaultSwitch()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Ensure the width of each item is wide enough to prevent jumping when active.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Switch.Root bind:value name="default">
					<Switch.Control defaultChecked label="Source" value="source" />
					<Switch.Control label="Output" value="output" />
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchDefault)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">disabled</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Switch.Root bind:value>
					<Switch.Control defaultChecked label="Source" value="source" />
					<Switch.Control label="Output" value="output" />
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">size</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Switch.Root bind:value name="size-small" size="small">
					<Switch.Control defaultChecked label="Source" value="source" />
					<Switch.Control label="Output" value="output" />
				</Switch.Root>

				<Switch.Root bind:value name="size-default">
					<Switch.Control defaultChecked label="Source" value="source" />
					<Switch.Control label="Output" value="output" />
				</Switch.Root>

				<Switch.Root bind:value name="size-large" size="large">
					<Switch.Control defaultChecked label="Source" value="source" />
					<Switch.Control label="Output" value="output" />
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchSize)}
		</div>
	</Row>
{/snippet}

{#snippet fullWidth()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">full width</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Switch.Root bind:value name="size-small" size="large" fullWidth>
					<Switch.Control defaultChecked label="Source" value="source" />
					<Switch.Control label="Output" value="output" />
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchFullWidth)}
		</div>
	</Row>
{/snippet}

{#snippet tooltip()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">tooltip</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Switch.Root bind:value>
					<Tooltip text="View Source and the rest of the ">
						<Switch.Control defaultChecked label="Source" value="source" />
					</Tooltip>
					<Tooltip text="View Output">
						<Switch.Control label="Output" value="output" />
					</Tooltip>
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet icon()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">icon</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Switch.Root bind:value name="size-small" size="small">
					<Switch.Control defaultChecked icon={GridSquare} value="source" />
					<Switch.Control icon={ListUnordered} value="output" />
				</Switch.Root>

				<Switch.Root bind:value name="size-default">
					<Switch.Control defaultChecked icon={GridSquare} value="source" />
					<Switch.Control icon={ListUnordered} value="output" />
				</Switch.Root>

				<Switch.Root bind:value name="size-large" size="large">
					<Switch.Control defaultChecked icon={GridSquare} value="source" />
					<Switch.Control icon={ListUnordered} value="output" />
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchIcon)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'button', href: '/button' }}
			next={{ title: 'pagination', href: '/pagination' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render error()}
	{@render defaultSwitch()}
	{@render disabled()}
	{@render size()}
	{@render fullWidth()}
	{@render tooltip()}
	{@render icon()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
