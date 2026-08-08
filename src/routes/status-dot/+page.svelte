<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import StatusDot from "$lib/statusDot/statusDot.svelte"
	import { statusDotDefault, statusDotLabel } from "../../docs/data/status-dot.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
</script>

<svelte:head>
	<title>Status Dot</title>
</svelte:head>

{#snippet error()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-[32px] font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-[48px] lg:tracking-[-2.4px]"
		>
			Status Dot
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-[30px] lg:tracking-[-0.33px]"
		>
			Display an indicator of deployment status.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-hidden rounded-xl border"
	>
		<div class="w-full overflow-x-auto p-4 lg:p-6">
			<div class="flex w-full flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultErr()}
	<Row>
		<LinkH2 href="/status-dot#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="space-y-6">
					<StatusDot state="QUEUED" />
					<StatusDot state="BUILDING" />
					<StatusDot state="ERROR" />
					<StatusDot state="READY" />
					<StatusDot state="CANCELED" />
				</div>
			{/snippet}
			{@render demoAndCode(demo, statusDotDefault)}
		</div>
	</Row>
{/snippet}

{#snippet customLabel()}
	<Row>
		<LinkH2 href="/status-dot#label" aria-label="label">label</LinkH2>
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
			previous={{ title: "split button", href: "/split-button" }}
			next={{ title: "switch", href: "/switch" }}
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
