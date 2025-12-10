<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import CodeSnippet from '$lib/snippet/snippet.svelte';
	import {
		snippetCallback,
		snippetDefault,
		snippetInverted,
		snippetMultiline,
		snippetNoPrompt,
		snippetVariants
	} from '$lib/../docs/data/snippet.js';
	import Pagination from '$lib/pagination/pagination.svelte';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';
</script>

<svelte:head>
	<title>Snippet</title>
</svelte:head>

{#snippet error()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Snippet
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Display a snippet of copyable code for the command line.
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
		<LinkH2 href="/error#custome-label" aria-label="custom-label">multiline</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<CodeSnippet text={['cd project', 'now']} class="w-full" />
			{/snippet}
			{@render demoAndCode(demo, snippetMultiline)}
		</div>
	</Row>
{/snippet}

{#snippet noPrompt()}
	<Row>
		<LinkH2 href="/error#custome-label" aria-label="custom-label">no prompt</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<CodeSnippet
					prompt={false}
					text="npm init next-app"
					class="w-full lg:w-[300px]"
				/>
			{/snippet}
			{@render demoAndCode(demo, snippetNoPrompt)}
		</div>
	</Row>
{/snippet}

{#snippet callback()}
	<Row>
		<LinkH2 href="/error#custome-label" aria-label="custom-label">callback</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<CodeSnippet
					onCopy={() => alert('You copied the text!')}
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
		<LinkH2 href="/error#size" aria-label="size">varinats</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full flex flex-col gap-3 flex-wrap">
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
			previous={{ title: 'show more', href: '/show-more' }}
			next={{ title: 'spinner', href: '/spinner' }}
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
