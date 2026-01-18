export const calendarDefault = `
<script lang="ts">
	import { Calendar } from 'kampsy-ui';
	import type { DateValue, RangeValue } from 'kampsy-ui';

	let value = $state<DateValue | RangeValue<DateValue>>();
</script>

<div class="w-full flex justify-center">
	<Calendar bind:value/>
</div>`;