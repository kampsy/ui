<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import StatusDot from '$lib/statusDot/statusDot.svelte';
	import { statusDotDefault, statusDotLabel } from '../../docs/data/status-dot.js';
	import { Switch } from '$lib/index.js';
	import { switchDefault } from '../../docs/data/switch.js';
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
		class="bg-light-bg dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 rounded-lg overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultErr()}
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
				<Switch.Root name="default">
					<Switch.Control defaultChecked label="Source" value="source" />
					<Switch.Control label="Output" value="output" />
				</Switch.Root>
			{/snippet}
			{@render demoAndCode(demo, switchDefault)}
		</div>
	</Row>
{/snippet}

{#snippet customLabel()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">label</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="space-y-6">
					<StatusDot label state="QUEUED" />
					<StatusDot label state="BUILDING" />
					<StatusDot label state="ERROR" />
					<StatusDot label state="READY" />
					<StatusDot label state="CANCELED" />
				</div>
			{/snippet}
			{@render demoAndCode(demo, statusDotLabel)}
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
	{@render defaultErr()}
	{@render customLabel()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
