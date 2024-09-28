<script lang="ts">
	import { clickOutside, componentPosition } from '$lib/utils/event.js';
	import Calendar from '$lib/icons/calendar.svelte';
	import { ChevronLeft } from '$lib/icons/index.js';
	import { ChevronRight } from '$lib/icons/index.js';
	import { Button } from '$lib/index.js';
	import {
		formatDateRange,
		generateCalendar,
		getFirstAndLastDay,
		getMonthDateRange,
		getZeroDate,
		isZeroDate,
		nextMonth,
		prevMonth
	} from '$lib/utils/calendar.js';
	import { cubicInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import Weekday from './weekday.svelte';

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
		class=" bg-kui-light-bg dark:bg-kui-dark-bg p-6 lg:p-3 rounded-t-[15px] lg:rounded-[6px] border-y lg:border border-kui-light-gray-400 dark:border-kui-dark-gray-400 lg:shadow-sm scroll-smooth overflow-y-auto"
	>
		<div class="grid grid-cols-7 gap-y-[5px] items-center">
			<div>
				<div class="w-full flex items-center justify-center">
					<button
						onclick={() => {
							reset();
							currentMonth = prevMonth(currentMonth);
						}}
						class="w-[40px] h-[40px] lg:w-[34px] lg:h-[34px] flex items-center justify-center transition-colors text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000"
					>
						<span class="w-[16px] h-[16px]">
							<ChevronLeft />
						</span>
					</button>
				</div>
			</div>
			<div class="col-span-5">
				<div class="text-center">
					{#if monthAndYear}
						<h2
							in:fly|local={{ y: -10, duration: 300, easing: cubicInOut }}
							out:fly|local={{ y: -10, duration: 300, easing: cubicInOut }}
							class="text-sm font-normal capitalize"
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
						class="w-[40px] h-[40px] lg:w-[34px] lg:h-[34px] flex items-center justify-center transition-colors text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000"
					>
						<span class="w-[16px] h-[16px]">
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
					<div class="relative z-[0.01] w-[40px] h-[40px] lg:w-[34px] lg:h-[34px]">
						<div class="w-full h-full flex justify-center">
							<button class="relative w-full h-full rounded-sm flex items-center justify-center">
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
				<div
					in:fly|local={{ y: 10, duration: i * 50, easing: cubicInOut }}
					out:fly|local={{ y: -10, duration: i * 50, easing: cubicInOut }}
					class="relative flex items-center justify-center"
				>
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
			type="secondary"
			class="w-full">done</Button
		>
	</footer>
{/snippet}

{#snippet mobileSnip()}
	{#if isActive}
		<div
			in:fly|local={{ y: '100vh', duration: 500, opacity: 1 }}
			out:fly|local={{ y: '100vh', duration: 500, opacity: 1 }}
			class="fixed bottom-0 left-0 w-full rounded-t-[15px] bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary lg:bg-transparent z-[1001]"
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
			class="absolute {desktopPosition == 'top' ? 'top-[112%]' : 'bottom-[112%]'} z-[1001]"
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
		class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-[0.4] lg:hidden z-[1000]"
	></div>
{/if}

<div
	use:clickOutside={() => {
		isActive = false;
		console.log('clicked outside', '<-------');
	}}
	class="relative inline-block"
>
	<button
		onclick={toggle}
		class="w-[250px] h-[40px] box-border px-[10px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-sm capitalize font-normal flex items-center rounded-[6px] border border-kui-light-gray-400 dark:border-kui-dark-gray-400 transition-colors hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100"
	>
		<span class="w-[20px] h-[20px] flex items-center justify-center">
			<span class="w-[16px] h-[16px]">
				<Calendar />
			</span>
		</span>
		<span class="px-[6px]"> {strValue} </span>
	</button>

	{#if isMobile}
		{@render mobileSnip()}
	{:else}
		{@render desktopSnip()}
	{/if}
</div>
