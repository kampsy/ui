<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import Spinner from "$lib/spinner/spinner.svelte"
	import { spinnerCustom, spinnerDefault } from "../../docs/data/spinner.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
</script>

<svelte:head>
	<title>Spinner</title>
</svelte:head>

{#snippet spinner()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			spinner
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Indicate an action running in the background. Unlike the loading dots, this should
			generally be used to indicate loading feedback in response to a user action, like for
			buttons, pagination, etc.
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

{#snippet defaultSize()}
	<Row>
		<LinkH2 href="/spinner#default-size" aria-label="default-size">default size</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Spinner />
			{/snippet}
			{@render demoAndCode(demo, spinnerDefault)}
		</div>
	</Row>
{/snippet}

{#snippet custom()}
	<Row>
		<LinkH2 href="/spinner#custom-size" aria-label="custom-size">custom size</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-8">
					<Spinner size={12} />
					<Spinner size={32} />
					<Spinner size={40} />
				</div>
			{/snippet}
			{@render demoAndCode(demo, spinnerCustom)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "show more", href: "/show-more" }}
			next={{ title: "snippet", href: "/snippet" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render spinner()}
	{@render defaultSize()}
	{@render custom()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
