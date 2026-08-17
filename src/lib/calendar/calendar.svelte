<script lang="ts">
	import { clickOutside, componentPosition } from "$lib/utils/event.js"
	import { cubicOut } from "svelte/easing"
	import Calendar from "$lib/icons/calendar.svelte"
	import { ChevronLeft } from "$lib/icons/index.js"
	import { ChevronRight } from "$lib/icons/index.js"
	import { Button, type DateValue, type RangeValue } from "$lib/index.js"
	import {
		formatDateRange,
		generateCalendar,
		getFirstAndLastDay,
		getMonthDateRange,
		getZeroDate,
		isZeroDate,
		nextMonth,
		prevMonth,
		selectedValue,
	} from "$lib/utils/calendar.js"
	import { fade, fly } from "svelte/transition"
	import Weekday from "./weekday.svelte"

	interface Props {
		value: DateValue | RangeValue<DateValue> | undefined
	}
	let { value = $bindable() }: Props = $props()

	const days = [
		{
			short: "Su",
			long: "Sunday",
		},
		{
			short: "Mo",
			long: "Monday",
		},
		{
			short: "Tu",
			long: "Tuesday",
		},
		{
			short: "We",
			long: "Wednesday",
		},
		{
			short: "Th",
			long: "Thursday",
		},
		{
			short: "Fr",
			long: "Friday",
		},
		{
			short: "Sa",
			long: "Saturday",
		},
	]

	let isActive = $state(false)
	let isMobile = $state(false)
	let desktopPosition = $state("top")

	let currentMonth = $state(new Date())
	let calendarList: Array<{ day: number | string; dateObj: Date }> = $state([])
	let monthAndYear = $state("")
	let strValue = $state("select date range")

	// Selection
	let startDate: Date = $state(getZeroDate())
	let endDate: Date = $state(getZeroDate())

	// Reset to trigger re-render on month change. Needed for transition to work
	const reset = () => {
		calendarList = []
		monthAndYear = ""
	}

	$effect(() => {
		const [, monthEnd] = getFirstAndLastDay(currentMonth)
		const list = getMonthDateRange(currentMonth, monthEnd)
		calendarList = generateCalendar(list)
		monthAndYear = `${currentMonth.toLocaleString("default", { month: "long" })}
						${currentMonth.getFullYear()}`
	})

	$effect(() => {
		if (!isZeroDate(startDate) && !isZeroDate(endDate)) {
			strValue = formatDateRange(startDate, endDate)
			value = selectedValue(startDate, endDate)
		}
	})

	$effect(() => {
		if (window.innerWidth < 767) {
			isMobile = true
		} else {
			isMobile = false
		}
		// update when the user is resizing the window
		window.addEventListener("resize", () => {
			if (window.innerWidth < 767) {
				isMobile = true
			} else {
				isMobile = false
			}
		})
	})

	const toggle = (evt: Event) => {
		desktopPosition = componentPosition(evt)
		isActive = !isActive
	}
</script>

<!--Calendar content -->
{#snippet calendarSnip()}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-b-kui-light-gray-200 dark:border-b-kui-dark-gray-200 border-t-kui-light-gray-600 dark:border-t-kui-dark-gray-500
		lg:border-kui-light-gray-200 lg:dark:border-kui-dark-gray-200 overflow-y-auto scroll-smooth rounded-t-[10px]
		border-t border-b p-6 lg:rounded-md
		lg:border lg:p-3 lg:shadow-xs"
	>
		<div class="grid grid-cols-7 items-center gap-y-1.25">
			<div>
				<div class="flex w-full items-center justify-center">
					<button
						onclick={() => {
							reset()
							currentMonth = prevMonth(currentMonth)
						}}
						class="text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000 flex h-10 w-10 items-center justify-center transition-colors lg:h-8.5 lg:w-8.5"
					>
						<span class="h-4 w-4">
							<ChevronLeft />
						</span>
					</button>
				</div>
			</div>
			<div class="col-span-5">
				<div class="text-center">
					{#if monthAndYear}
						<h2
							class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-sm font-normal capitalize"
						>
							{monthAndYear}
						</h2>
					{/if}
				</div>
			</div>
			<div>
				<div class="flex w-full items-center justify-center">
					<button
						onclick={() => {
							reset()
							currentMonth = nextMonth(currentMonth)
						}}
						class="text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000 flex h-10 w-10 items-center justify-center transition-colors lg:h-8.5 lg:w-8.5"
					>
						<span class="h-4 w-4">
							<ChevronRight />
						</span>
					</button>
				</div>
			</div>
		</div>

		<div class="mt-3 grid grid-cols-7 gap-y-3 lg:gap-y-2">
			<!--Days of the week-->
			{#each days as day, index (index)}
				<div class="relative flex items-center justify-center">
					<div class="relative z-[0.01] h-10 w-10 lg:h-8.5 lg:w-8.5">
						<div class="flex h-full w-full justify-center">
							<button
								class="relative flex h-full w-full items-center justify-center rounded-xs"
							>
								<span
									class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-xs font-normal tracking-[0.06px]"
								>
									{day.short}
								</span>
							</button>
						</div>
					</div>
				</div>
			{/each}

			{#each calendarList as row, index (index)}
				<div class="relative flex items-center justify-center">
					<Weekday dayAndDateObj={row} bind:startDate bind:endDate />
				</div>
			{/each}
		</div>

		<!--The days of the week cont-->
	</div>
	<footer class="p-4 lg:hidden">
		<Button
			onclick={() => {
				isActive = false
			}}
			variant="secondary"
			class="w-full">done</Button
		>
	</footer>
{/snippet}

{#snippet mobileSnip()}
	{#if isActive}
		<div
			in:fly|local={{ y: "50vh", duration: 500, opacity: 1 }}
			out:fly|local={{ y: "100vh", duration: 600, easing: cubicOut, opacity: 1 }}
			class="bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary fixed bottom-0 left-0 z-1001 w-full rounded-t-[10px] lg:bg-transparent"
		>
			{@render calendarSnip()}
		</div>
	{/if}
{/snippet}

{#snippet desktopSnip()}
	{#if isActive}
		<div
			in:fly|local={{ y: -10 }}
			out:fly|local={{ y: -10 }}
			class="absolute {desktopPosition == 'top' ? 'top-[112%]' : 'bottom-[112%]'} z-1001"
		>
			{@render calendarSnip()}
		</div>
	{/if}
{/snippet}

<!--Backgrop background on mobile only-->
{#if isActive}
	<div
		in:fade|local
		out:fade|local
		class="fixed top-0 left-0 z-1000 h-full w-full bg-black opacity-35 lg:hidden dark:opacity-45"
	></div>
{/if}

<div
	use:clickOutside={() => {
		isActive = false
	}}
	class="relative inline-block"
>
	<button
		onclick={toggle}
		class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 border-kui-light-gray-400 dark:border-kui-dark-gray-400 hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100 box-border flex h-10 w-62.5 items-center rounded-md border px-2.5 text-sm font-normal capitalize transition-colors"
	>
		<span class="flex h-5 w-5 items-center justify-center">
			<span class="h-4 w-4">
				<Calendar />
			</span>
		</span>
		<span class="px-1.5"> {strValue} </span>
	</button>

	{#if isMobile}
		{@render mobileSnip()}
	{:else}
		{@render desktopSnip()}
	{/if}
</div>
