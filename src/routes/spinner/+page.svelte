<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import Spinner from '$lib/spinner/spinner.svelte';
	import { spinnerCustom, spinnerDefault } from '../../docs/data/spinner.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';
</script>

<svelte:head>
	<title>Spinner</title>
</svelte:head>

{#snippet spinner()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			spinner
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Indicate an action running in the background. Unlike the loading dots, this should generally
			be used to indicate loading feedback in response to a user action, like for buttons,
			pagination, etc.
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
				<Spinner size={30} />
			{/snippet}
			{@render demoAndCode(demo, spinnerCustom)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'show more', href: '/show-more' }}
			next={{ title: 'split button', href: '/split-button' }}
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
