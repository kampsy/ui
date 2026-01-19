<script lang="ts">
	import { clickOutside, componentPosition } from '$lib/utils/event.js';
	import { cubicOut } from 'svelte/easing';
	import Calendar from '$lib/icons/calendar.svelte';
	import { ChevronLeft } from '$lib/icons/index.js';
	import { ChevronRight } from '$lib/icons/index.js';
	import { Button, type DateValue, type RangeValue } from '$lib/index.js';
	import {
		formatDateRange,
		generateCalendar,
		getFirstAndLastDay,
		getMonthDateRange,
		getZeroDate,
		isZeroDate,
		nextMonth,
		prevMonth,
		selectedValue
	} from '$lib/utils/calendar.js';
	import { fade, fly } from 'svelte/transition';
	import Weekday from './weekday.svelte';

	interface Props {
		value: DateValue | RangeValue<DateValue> | undefined;
	}
	let { value = $bindable() }: Props = $props();

	const days = [
		{
			short: 'Su',
			long: 'Sunday'
		},
		{
			short: 'Mo',
			long: 'Monday'
		},
		{
			short: 'Tu',
			long: 'Tuesday'
		},
		{
			short: 'We',
			long: 'Wednesday'
		},
		{
			short: 'Th',
			long: 'Thursday'
		},
		{
			short: 'Fr',
			long: 'Friday'
		},
		{
			short: 'Sa',
			long: 'Saturday'
		}
	];

	let isActive = $state(false);
	let isMobile = $state(false);
	let desktopPosition = $state('top');

	let currentMonth = $state(new Date());
	let calendarList: Array<{ day: number | string; dateObj: Date }> = $state([]);
	let monthAndYear = $state('');
	let strValue = $state('select date range');

	// Selection
	let startDate: Date = $state(getZeroDate());
	let endDate: Date = $state(getZeroDate());

	// Reset to trigger re-render on month change. Needed for transition to work
	const reset = () => {
		calendarList = [];
		monthAndYear = '';
	};

	$effect(() => {
		const [, monthEnd] = getFirstAndLastDay(currentMonth);
		const list = getMonthDateRange(currentMonth, monthEnd);
		calendarList = generateCalendar(list);
		monthAndYear = `${currentMonth.toLocaleString('default', { month: 'long' })}
						${currentMonth.getFullYear()}`;
	});

	$effect(() => {
		if (!isZeroDate(startDate) && !isZeroDate(endDate)) {
			strValue = formatDateRange(startDate, endDate);
			value = selectedValue(startDate, endDate);
		}
	});

	$effect(() => {
		if (window.innerWidth < 767) {
			isMobile = true;
		} else {
			isMobile = false;
		}
		// update when the user is resizing the window
		window.addEventListener('resize', () => {
			if (window.innerWidth < 767) {
				isMobile = true;
			} else {
				isMobile = false;
			}
		});
	});

	const toggle = (evt: Event) => {
		desktopPosition = componentPosition(evt);
		isActive = !isActive;
	};
</script>

<!--Calendar content -->
{#snippet calendarSnip()}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg p-6 lg:p-3 rounded-t-[10px] lg:rounded-md
		border-b border-b-kui-light-gray-200 dark:border-b-kui-dark-gray-200 border-t border-t-kui-light-gray-600
		dark:border-t-kui-dark-gray-500 lg:border lg:border-kui-light-gray-200 lg:dark:border-kui-dark-gray-200
		lg:shadow-xs scroll-smooth overflow-y-auto"
	>
		<div class="grid grid-cols-7 gap-y-1.25 items-center">
			<div>
				<div class="w-full flex items-center justify-center">
					<button
						onclick={() => {
							reset();
							currentMonth = prevMonth(currentMonth);
						}}
						class="w-10 h-10 lg:w-8.5 lg:h-8.5 flex items-center justify-center transition-colors text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000"
					>
						<span class="w-4 h-4">
							<ChevronLeft />
						</span>
					</button>
				</div>
			</div>
			<div class="col-span-5">
				<div class="text-center">
					{#if monthAndYear}
						<h2
							class="text-sm font-normal capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>
							{monthAndYear}
						</h2>
					{/if}
				</div>
			</div>
			<div>
				<div class="w-full flex items-center justify-center">
					<button
						onclick={() => {
							reset();
							currentMonth = nextMonth(currentMonth);
						}}
						class="w-10 h-10 lg:w-8.5 lg:h-8.5 flex items-center justify-center transition-colors text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000"
					>
						<span class="w-4 h-4">
							<ChevronRight />
						</span>
					</button>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-7 mt-3 gap-y-3 lg:gap-y-2">
			<!--Days of the week-->
			{#each days as day}
				<div class="relative flex items-center justify-center">
					<div class="relative z-[0.01] w-10 h-10 lg:w-8.5 lg:h-8.5">
						<div class="w-full h-full flex justify-center">
							<button class="relative w-full h-full rounded-xs flex items-center justify-center">
								<span
									class="text-xs text-kui-light-gray-900 dark:text-kui-dark-gray-900 font-normal tracking-[0.06px]"
								>
									{day.short}
								</span>
							</button>
						</div>
					</div>
				</div>
			{/each}

			{#each calendarList as row, i}
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
				isActive = false;
			}}
			variant="secondary"
			class="w-full">done</Button
		>
	</footer>
{/snippet}

{#snippet mobileSnip()}
	{#if isActive}
		<div
			in:fly|local={{ y: '50vh', duration: 500, opacity: 1 }}
			out:fly|local={{ y: '100vh', duration: 600, easing: cubicOut, opacity: 1 }}
			class="fixed bottom-0 left-0 w-full rounded-t-[10px] bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary lg:bg-transparent z-1001"
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
		class="fixed top-0 left-0 w-full h-full bg-black opacity-35 dark:opacity-45 lg:hidden z-1000"
	></div>
{/if}

<div
	use:clickOutside={() => {
		isActive = false;
	}}
	class="relative inline-block"
>
	<button
		onclick={toggle}
		class="w-62.5 h-10 box-border px-2.5 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-sm capitalize font-normal flex items-center rounded-md border border-kui-light-gray-400 dark:border-kui-dark-gray-400 transition-colors hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100"
	>
		<span class="w-5 h-5 flex items-center justify-center">
			<span class="w-4 h-4">
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
