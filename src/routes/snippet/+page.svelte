<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import CodeSnippet from "$lib/snippet/snippet.svelte"
	import {
		snippetCallback,
		snippetDefault,
		snippetInverted,
		snippetMultiline,
		snippetNoPrompt,
		snippetVariants,
	} from "$lib/../docs/data/snippet.js"
	import Pagination from "$lib/pagination/pagination.svelte"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
</script>

<svelte:head>
	<title>Snippet</title>
</svelte:head>

{#snippet error()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-[32px] font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-[48px] lg:tracking-[-2.4px]"
		>
			Snippet
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-[30px] lg:tracking-[-0.33px]"
		>
			Display a snippet of copyable code for the command line.
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
		<LinkH2 href="/snippet#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<CodeSnippet text="npm init next-app" class="w-full lg:w-[300px]" />
			{/snippet}
			{@render demoAndCode(demo, snippetDefault)}
		</div>
	</Row>
{/snippet}

{#snippet inverted()}
	<Row>
		<LinkH2 href="/error#custome-label" aria-label="custom-label">inverted</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<CodeSnippet type="inverted" text="npm init next-app" class="w-full lg:w-[300px]" />
			{/snippet}
			{@render demoAndCode(demo, snippetInverted)}
		</div>
	</Row>
{/snippet}

{#snippet multiline()}
	<Row>
		<LinkH2 href="/snippet#multiline" aria-label="multiline">multiline</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<CodeSnippet text={["cd project", "now"]} class="w-full" />
			{/snippet}
			{@render demoAndCode(demo, snippetMultiline)}
		</div>
	</Row>
{/snippet}

{#snippet noPrompt()}
	<Row>
		<LinkH2 href="/snippet#no-prompt" aria-label="no-prompt">no prompt</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<CodeSnippet prompt={false} text="npm init next-app" class="w-full lg:w-[300px]" />
			{/snippet}
			{@render demoAndCode(demo, snippetNoPrompt)}
		</div>
	</Row>
{/snippet}

{#snippet callback()}
	<Row>
		<LinkH2 href="/snippet#callback" aria-label="callback">callback</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<CodeSnippet
					onCopy={() => alert("You copied the text!")}
					text="npm init next-app"
					class="w-full lg:w-[300px]"
				/>
			{/snippet}
			{@render demoAndCode(demo, snippetCallback)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<LinkH2 href="/snippet#variants" aria-label="variants">variants</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex w-full flex-col flex-wrap gap-3">
					<CodeSnippet type="success" text="npm init next-app" class="w-full lg:w-[300px]" />
					<CodeSnippet type="error" text="npm init next-app" class="w-full lg:w-[300px]" />
					<CodeSnippet type="warning" text="npm init next-app" class="w-full lg:w-[300px]" />
				</div>
			{/snippet}
			{@render demoAndCode(demo, snippetVariants)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "spinner", href: "/spinner" }}
			next={{ title: "split button", href: "/split-button" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render error()}
	{@render defaultErr()}
	{@render inverted()}
	{@render multiline()}
	{@render noPrompt()}
	{@render callback()}
	{@render size()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
