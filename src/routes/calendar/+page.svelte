<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { errorCustomLabel, errorDefault, errorSize } from '../../docs/data/error.js';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Error, Calendar } from '$lib/index.js';
</script>

<svelte:head>
	<title>Calendar</title>
</svelte:head>

{#snippet calendar()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			calendar
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Displays a calendar from which users can select a date or range of dates.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="w-full flex flex-wrap gap-4 justify-between">
				{@render demo()}
			</div>
		</div>
		<div class="overflow-hidden rounded-b-xl">
			<CollapseCode {code} />
		</div>
	</div>
{/snippet}

{#snippet defaultCalendar()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full flex justify-center">
					<Calendar />
				</div>
			{/snippet}
			{@render demoAndCode(demo, errorDefault)}
		</div>
	</Row>
{/snippet}

{#snippet customLabel()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">custome label</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Error label="Email Error">This email address is already in use.</Error>
				</div>
			{/snippet}
			{@render demoAndCode(demo, errorCustomLabel)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">size</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Error size="sm">This email is in use.</Error>
				<Error size="md">This email is in use.</Error>
				<Error size="lg">This email is in use.</Error>
			{/snippet}
			{@render demoAndCode(demo, errorSize)}
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
	{@render calendar()}
	{@render defaultCalendar()}
	{@render customLabel()}
	{@render size()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
