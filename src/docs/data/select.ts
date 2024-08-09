export const selectDefault = `
import { Select } from 'kampsy-ui';

let value = $state('');

<Select.Root bind:value={value}>
	<Select.Trigger class="w-[200px]">
		<Select.Value placeholder="select a friuit" />
	</Select.Trigger>
	<Select.Content>
		<Select.Item value="apple">apple</Select.Item>
		<Select.Item value="banana">banana</Select.Item>
		<Select.Item value="orange">orange</Select.Item>
		<Select.Item value="pineapple">pineapple</Select.Item>
	</Select.Content>
</Select.Root>`;