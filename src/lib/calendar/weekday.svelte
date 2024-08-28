<script lang="ts">
	type propsT = {
		dayAndDateObj: { day: number | string; dateObj: Date | null };
	};

	let { dayAndDateObj }: propsT = $props();

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

	const todayBg = (date: Date | null): string => {
		if (isToday(date)) {
			return `rounded-[4px] bg-kui-light-blue-900 dark:bg-kui-dark-blue-900`;
		}

		return '';
	};

	const todayText = (date: Date | null): string => {
		if (isToday(date)) {
			return `text-kui-light-bg dark:text-kui-dark-bg`;
		}
		return 'text-kui-light-gray-900 dark:text-kui-dark-gray-900';
	};
	
</script>

<div class="w-[40px] h-[40px] lg:w-[34px] lg:h-[34px] z-[0.01] {todayBg(dayAndDateObj.dateObj)}">
	<div class="w-full h-full flex justify-center">
		<button class="w-full h-full rounded-sm flex items-center justify-center">
			<span class="text-xs {todayText(dayAndDateObj.dateObj)} font-normal tracking-[0.06px]">
				{dayAndDateObj.day}
			</span>
		</button>
	</div>
</div>
