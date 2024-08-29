<script lang="ts">
	import { getZeroDate, isZeroDate } from '$lib/utils/calendar.js';

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

	let dayBg = $derived.by(() => {
		if (isHighlighteble(dayAndDateObj.dateObj)) {
			return `rounded-[4px] bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000`;
		}
		if (isToday(dayAndDateObj.dateObj)) {
			return `rounded-[4px] bg-kui-light-blue-900 dark:bg-kui-dark-blue-900`;
		}
		return '';
	});

	let dayText = $derived.by(() => {
		if (isHighlighteble(dayAndDateObj.dateObj)) {
			return `text-kui-light-bg dark:text-kui-dark-bg`;
		}
		if (isToday(dayAndDateObj.dateObj)) {
			return `text-kui-light-bg dark:text-kui-dark-bg`;
		}
		return 'text-kui-light-gray-900 dark:text-kui-dark-gray-900';
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

<div class="w-[40px] h-[40px] lg:w-[34px] lg:h-[34px] z-[0.01] transition-colors {dayBg}">
	<div class="w-full h-full flex justify-center">
		<button {onclick} class="w-full h-full rounded-sm flex items-center justify-center">
			<span class="text-xs transition-colors {dayText} font-normal tracking-[0.06px]">
				{dayAndDateObj.day}
			</span>
		</button>
	</div>
</div>
