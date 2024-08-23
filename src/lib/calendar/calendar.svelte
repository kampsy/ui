<script lang="ts">
	import Calendar from '$lib/icons/calendar.svelte';
	import { ChevronLeft } from '$lib/icons/index.js';
	import { ChevronRight } from '$lib/icons/index.js';
	import { generateCalendar, getFirstAndLastDay, getMonthDateRange } from '$lib/utils/calendar.js';
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

	// todays date
	const today = new Date();
	// function returns the next month
	

	const [_, monthEnd] = getFirstAndLastDay(today);

	let list = getMonthDateRange(today, monthEnd);

	

	console.log(generateCalendar(list), '<-----------');
</script>

<div class="relative w-full inline-block">
	<button
		class="w-[250px] h-[40px] box-border px-[10px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-sm capitalize font-normal flex items-center rounded-[6px] border border-kui-light-gray-400 dark:border-kui-dark-gray-400 transition-colors hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100"
	>
		<span class="w-[20px] h-[20px] flex items-center justify-center">
			<div class="w-[16px] h-[16px]">
				<Calendar />
			</div>
		</span>
		<span class="px-[6px]"> select date range </span>
	</button>

	<div in:fly={{ y: 10 }} out:fly={{ y: -10 }} class="fixed top-0 left-0 w-full h-full lg:absolute lg:top-[112%] lg:w-auto lg:h-[252px] z-[1000]">
		<div
			class=" bg-kui-light-bg dark:bg-kui-dark-bg p-3 rounded-[6px] border border-kui-light-gray-200 dark:border-kui-dark-gray-400 shadow-sm scroll-smooth overflow-y-auto"
		>
			<div class="w-full h-[24px] flex items-center justify-between">
				<div class="">
					<h2 class="text-sm font-normal capitalize">August 2024</h2>
				</div>
				<div class="flex items-center justify-center h-full">
					<button
						class="w-[24px] h-[24px] flex items-center transition-colors text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000"
					>
						<div class="w-[16px] h-[16px]">
							<ChevronLeft />
						</div>
					</button>
					<button
						class="w-[24px] h-[24px] flex items-center justify-end transition-colors text-kui-light-gray-700 dark:text-kui-dark-gray-700 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000"
					>
						<div class="w-[16px] h-[16px]">
							<ChevronRight />
						</div>
					</button>
				</div>
			</div>

			<!--The days of the week cont-->
			<div class="mt-[11px]">
				<table class="w-full">
					<thead>
						<tr>
							{#each days as day}
								<th abbr={day.long} class="w-[32px] h-[32px]">
									<div class="w-[32px] h-[32px] flex items-center justify-center">
										<span
											class="text-xs text-kui-light-gray-900 dark:text-kui-dark-gray-900 font-normal tracking-[0.06px]"
										>
											{day.short}
										</span>
									</div>
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each generateCalendar(list) as row}
							<tr>
								{#each row as rowItem}
									<td class="w-[32px] h-[32px]">
										<div class="my-1 w-[32px] h-[32px] flex items-center justify-center">
											<span
												class="text-xs text-kui-light-gray-900 dark:text-kui-dark-gray-900 font-normal tracking-[0.06px]"
											>
												{rowItem}
											</span>
										</div>
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
