<script lang="ts">
	import { getZeroDate, isInDateRange, isWeekend, isZeroDate } from '$lib/utils/calendar.js';

	type propsT = {
		dayAndDateObj: { day: number | string; dateObj: Date };
		startDate: Date;
		endDate: Date;
	};

	let {
		dayAndDateObj,
		startDate = $bindable(getZeroDate()),
		endDate = $bindable(getZeroDate())
	}: propsT = $props();

	const isToday = (date: Date | null): boolean => {
		if (date) {
			const today = new Date();
			return (
				date.getDate() === today.getDate() &&
				date.getMonth() === today.getMonth() &&
				date.getFullYear() === today.getFullYear()
			);
		}

		return false;
	};

	const isHighlighteble = (date: Date): boolean => {
		if (!isZeroDate(date)) {
			if (!isZeroDate(startDate) || !isZeroDate(endDate)) {
				if (
					(date.getDate() === startDate.getDate() &&
						date.getMonth() === startDate.getMonth() &&
						date.getFullYear() === startDate.getFullYear()) ||
					(date.getDate() === endDate.getDate() &&
						date.getMonth() === endDate.getMonth() &&
						date.getFullYear() === endDate.getFullYear())
				) {
					return true;
				}
			}
		}
		return false;
	};

	const isRangeHighlighteble = (date: Date): boolean => {
		if (!isZeroDate(dayAndDateObj.dateObj) && !isZeroDate(startDate) && !isZeroDate(endDate)) {
			if (isInDateRange(dayAndDateObj.dateObj, startDate, endDate)) {
				return true;
			}
		}
		return false
	}


	const dayBg = $derived.by(() => {
		if (isHighlighteble(dayAndDateObj.dateObj)) {
			return `rounded-[4px] bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000`;
		}
		if (isToday(dayAndDateObj.dateObj)) {
			return `rounded-[4px] bg-kui-light-blue-900 dark:bg-kui-dark-blue-900`;
		}
		return '';
	});

	const dayText = $derived.by(() => {
		if (isHighlighteble(dayAndDateObj.dateObj)) {
			return `text-kui-light-bg dark:text-kui-dark-bg`;
		}
		if (isToday(dayAndDateObj.dateObj)) {
			return `text-kui-light-bg dark:text-kui-dark-bg`;
		}
		if (isRangeHighlighteble(dayAndDateObj.dateObj) && !isWeekend(dayAndDateObj.dateObj)) {
			return 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000';
		}
		if (isWeekend(dayAndDateObj.dateObj)) {
			return 'text-kui-light-gray-900 dark:text-kui-dark-gray-900';
		}

		return 'text-kui-light-gray-1000 dark:text-kui-dark-gray-1000';
	});

	const rangeBg = $derived.by(() => {
		if (isRangeHighlighteble(dayAndDateObj.dateObj)) {
			return 'bg-kui-light-gray-alpha-100 dark:bg-kui-dark-gray-alpha-100';
		}
		return ''
	});

	const onclick = () => {
		if (isZeroDate(startDate) && isZeroDate(endDate)) {
			if (!isZeroDate(dayAndDateObj.dateObj)) {
				startDate = dayAndDateObj.dateObj;
				console.log(dayAndDateObj.dateObj, 'start date');
			}
		} else if (!isZeroDate(startDate) && isZeroDate(endDate)) {
			if (!isZeroDate(dayAndDateObj.dateObj)) {
				endDate = dayAndDateObj.dateObj;
				console.log(dayAndDateObj.dateObj, 'end date');
			}
		} else if (!isZeroDate(startDate) && !isZeroDate(endDate)) {
			if (!isZeroDate(dayAndDateObj.dateObj)) {
				startDate = dayAndDateObj.dateObj;
				endDate = getZeroDate();
				console.log(dayAndDateObj.dateObj, 'start date');
			}
		}
	};
</script>

<div class="absolute top-0 left-0 w-full h-full z-[0.1] {rangeBg}">
</div>
<div class="w-[40px] h-[40px] lg:w-[34px] lg:h-[34px] z-[1] transition-colors {dayBg}">
	<div class="w-full h-full flex justify-center">
		<button {onclick} class="w-full h-full rounded-sm flex items-center justify-center">
			<span class="text-xs transition-colors {dayText} font-normal tracking-[0.06px]">
				{dayAndDateObj.day}
			</span>
		</button>
	</div>
</div>
