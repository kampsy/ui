<script lang="ts">
	import Calendar from '$lib/icons/calendar.svelte';
	import { ChevronLeft } from '$lib/icons/index.js';
	import { ChevronRight } from '$lib/icons/index.js';
	import { Button } from '$lib/index.js';
	import {
		generateCalendar,
		getFirstAndLastDay,
		getMonthDateRange,
		nextMonth,
		prevMonth
	} from '$lib/utils/calendar.js';
	import { cubicInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	const days = [
		{
			short: 'S',
			long: 'Sunday'
		},
		{
			short: 'M',
			long: 'Monday'
		},
		{
			short: 'T',
			long: 'Tuesday'
		},
		{
			short: 'W',
			long: 'Wednesday'
		},
		{
			short: 'T',
			long: 'Thursday'
		},
		{
			short: 'F',
			long: 'Friday'
		},
		{
			short: 'S',
			long: 'Saturday'
		}
	];

	let currentMonth = $state(new Date());
	let calendarList: Array<{ day: number | string; dateObj: Date | null }> = $state([]);
	let monthAndYear = $state('');

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
</script>

<div class="relative w-full inline-block">
	<button
		class="w-[250px] h-[40px] box-border px-[10px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-sm capitalize font-normal flex items-center rounded-[6px] border border-kui-light-gray-400 dark:border-kui-dark-gray-400 transition-colors hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100"
	>
		<span class="w-[20px] h-[20px] flex items-center justify-center">
			<span class="w-[16px] h-[16px]">
				<Calendar />
			</span>
		</span>
		<span class="px-[6px]"> select date range </span>
	</button>

	<div
		in:fly|local={{ y: '100vh', duration: 500, opacity: 1 }}
		out:fly|local={{ y: '100vh', duration: 500, opacity: 1 }}
		class="bg-black bg-opacity-[0.4] lg:bg-transparent fixed top-0 left-0 w-full h-full lg:absolute lg:top-[112%] lg:w-auto lg:h-[252px] z-[1000]"
	>
		<!--Is used on mobile-->
		<div
			class="w-full lg:w-auto fixed lg:relative bottom-0 left-0 rounded-t-[10px] bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary lg:bg-transparent"
		>
			<div
				class=" bg-kui-light-bg dark:bg-kui-dark-bg p-6 lg:p-3 rounded-t-[10px] lg:rounded-[6px] border-b lg:border border-kui-light-gray-200 dark:border-kui-dark-gray-400 lg:shadow-sm scroll-smooth overflow-y-auto"
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
									in:fly|global={{ y: -10, duration: 300, easing: cubicInOut }}
									out:fly|global={{ y: -10, duration: 300, easing: cubicInOut }}
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
									<button
										class="relative w-full h-full rounded-sm flex items-center justify-center"
									>
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
							in:fly|global={{ y: 10, duration: i * 50, easing: cubicInOut }}
							out:fly|global={{ y: -10, duration: i * 50, easing: cubicInOut }}
							class="flex items-center justify-center"
						>
							<div class="w-[40px] h-[40px] lg:w-[34px] lg:h-[34px] z-[0.01]">
								<div class="w-full h-full flex justify-center">
									<button class="w-full h-full rounded-sm flex items-center justify-center">
										<span
											class="text-xs text-kui-light-gray-900 dark:text-kui-dark-gray-900 font-normal tracking-[0.06px]"
										>
											{row.day}
										</span>
									</button>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<!--The days of the week cont-->
			</div>
			<footer class="p-4 lg:hidden">
				<Button type="secondary" class="w-full">done</Button>
			</footer>
		</div>
		<!--On mobile cont-->
	</div>
</div>
