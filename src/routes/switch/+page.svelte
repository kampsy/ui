<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { Switch, Tooltip } from "$lib/index.js"
	import {
		switchDefault,
		switchDisabled,
		switchFullWidth,
		switchIcon,
		switchSize,
		switchTooltip,
	} from "../../docs/data/switch.js"
	import { GridSquare, ListUnordered } from "$lib/icons/index.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	let value = $state("")
</script>

<svelte:head>
	<title>Switch</title>
</svelte:head>

{#snippet error()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-[32px] font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-[48px] lg:tracking-[-2.4px]"
		>
			Switch
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-[30px] lg:tracking-[-0.33px]"
		>
			Choose between a set of options.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl border"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="flex w-full flex-wrap justify-between gap-4">
				{@render demo()}
			</div>
		</div>
		<div class="overflow-hidden rounded-b-xl">
			<CollapseCode {code} />
		</div>
	</div>
{/snippet}

{#snippet defaultSwitch()}
	<Row>
		<LinkH2 href="/switch#default" aria-label="default">default</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
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
		<LinkH2 href="/switch#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Switch.Root bind:value>
					<Switch.Control defaultChecked disabled label="Source" value="source" />
					<Switch.Control label="Output" disabled value="output" />
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet sizes()}
	<Row>
		<LinkH2 href="/switch#sizes" aria-label="sizes">sizes</LinkH2>
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
		<LinkH2 href="/switch#full-width" aria-label="full-width">full width</LinkH2>
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
		<LinkH2 href="/switch#tooltip" aria-label="tooltip">tooltip</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Switch.Root bind:value>
					<Tooltip text="View Source">
						<Switch.Control defaultChecked label="Source" value="source" />
					</Tooltip>
					<Tooltip text="View Output">
						<Switch.Control label="Output" value="output" />
					</Tooltip>
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchTooltip)}
		</div>
	</Row>
{/snippet}

{#snippet icon()}
	<Row>
		<LinkH2 href="/switch#icon" aria-label="icon">icon</LinkH2>
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
			previous={{ title: "status dot", href: "/status-dot" }}
			next={{ title: "table", href: "/table" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render error()}
	{@render defaultSwitch()}
	{@render disabled()}
	{@render sizes()}
	{@render fullWidth()}
	{@render tooltip()}
	{@render icon()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
