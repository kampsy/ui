export const calendarDefault = `
import { Calendar } from 'kampsy-ui';
import type { DateValue, RangeValue } from 'kampsy-ui';

let value = $state<DateValue | RangeValue<DateValue>>();

<div class="w-full flex justify-center">
	<Calendar bind:value/>
</div>`;