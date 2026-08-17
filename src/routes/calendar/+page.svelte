<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { Calendar } from "$lib/index.js"
	import type { DateValue, RangeValue } from "$lib/index.js"
	import { calendarDefault } from "$lib/../docs/data/calendar.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	let value = $state<DateValue | RangeValue<DateValue>>()
</script>

<svelte:head>
	<title>Calendar</title>
</svelte:head>

{#snippet calendar()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-[32px] font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-[48px] lg:tracking-[-2.4px]"
		>
			calendar
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-[30px] lg:tracking-[-0.33px]"
		>
			Displays a calendar from which users can select a date or range of dates.
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

{#snippet defaultCalendar()}
	<Row>
		<LinkH2 href="/calender#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex w-full justify-center">
					<Calendar bind:value />
				</div>
			{/snippet}
			{@render demoAndCode(demo, calendarDefault)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "button", href: "/button" }}
			next={{ title: "checkbox", href: "/checkbox" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render calendar()}
	{@render defaultCalendar()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
