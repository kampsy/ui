<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { SearchInput } from "$lib/index.js"
	import { Sparkles } from "@lucide/svelte"
	import {
		searchInputCmdk,
		searchInputCustomPrefix,
		searchInputDefault,
		searchInputDisabled,
		searchInputLoading,
	} from "$lib/../docs/data/search-input.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	let defaultValue = $state("")
	let cmdkValue = $state("")
	let disabledValue = $state("")
	let loadingValue = $state("Project A")
	let customPrefixValue = $state("")
</script>

<svelte:head>
	<title>Search Input</title>
</svelte:head>

{#snippet searchInput()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			search input
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Pre-configured search input with a magnifying glass icon and clear button.
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

{#snippet defaultSearchInput()}
	<Row>
		<LinkH2 href="/search-input#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<SearchInput
						aria-label="Search"
						bind:value={defaultValue}
						placeholder="Enter some text..."
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, searchInputDefault)}
		</div>
	</Row>
{/snippet}

{#snippet withCmdk()}
	<Row>
		<LinkH2 href="/search-input#with-cmdk" aria-label="with cmdk">with cmdk</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<SearchInput
						aria-label="Search"
						bind:value={cmdkValue}
						cmdk
						placeholder="Enter some text..."
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, searchInputCmdk)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<LinkH2 href="/search-input#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<SearchInput
						aria-label="Search"
						bind:value={disabledValue}
						cmdk
						disabled
						placeholder="Enter some text..."
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, searchInputDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet loading()}
	<Row>
		<LinkH2 href="/search-input#loading" aria-label="loading">loading</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<SearchInput
						aria-label="Search"
						bind:value={loadingValue}
						loading
						placeholder="Enter some text..."
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, searchInputLoading)}
		</div>
	</Row>
{/snippet}

{#snippet customPrefix()}
	<Row>
		<LinkH2 href="/search-input#custom-prefix" aria-label="custom prefix">custom prefix</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<SearchInput
						aria-label="Search"
						bind:value={customPrefixValue}
						prefix={Sparkles}
						placeholder="Enter some text..."
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, searchInputCustomPrefix)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "project banner", href: "/project-banner" }}
			next={{ title: "select", href: "/select" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render searchInput()}
	{@render defaultSearchInput()}
	{@render withCmdk()}
	{@render disabled()}
	{@render loading()}
	{@render customPrefix()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
