export const selectDefault = `
import { Select } from 'kampsy-ui';

let value = $state('');

<Select.Root bind:value class="w-full lg:w-auto" >
	<Select.Trigger class="w-full lg:w-[200px]">
		<Select.Value placeholder="select a friuit" />
	</Select.Trigger>
	<Select.Content>
		<Select.Item value="apple">apple</Select.Item>
		<Select.Item value="banana">banana</Select.Item>
		<Select.Item value="orange">orange</Select.Item>
		<Select.Item value="pineapple">pineapple</Select.Item>
	</Select.Content>
</Select.Root>`;

export const selectSize = `
import { Select } from 'kampsy-ui';

let value = $state('');

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Select.Root size="small" bind:value class="w-full lg:w-auto">
		<Select.Trigger class="w-full lg:w-[200px]">
			<Select.Value placeholder="select a fruit" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="apple">apple</Select.Item>
			<Select.Item value="banana">banana</Select.Item>
			<Select.Item value="orange">orange</Select.Item>
			<Select.Item value="pineapple">pineapple</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root bind:value class="w-full lg:w-auto" >
		<Select.Trigger class="w-full lg:w-[200px]">
			<Select.Value placeholder="select a friuit" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="apple">apple</Select.Item>
			<Select.Item value="banana">banana</Select.Item>
			<Select.Item value="orange">orange</Select.Item>
			<Select.Item value="pineapple">pineapple</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root size="large" bind:value class="w-full lg:w-auto" >
		<Select.Trigger class="w-full lg:w-[200px]">
			<Select.Value placeholder="select a friuit" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="apple">apple</Select.Item>
			<Select.Item value="banana">banana</Select.Item>
			<Select.Item value="orange">orange</Select.Item>
			<Select.Item value="pineapple">pineapple</Select.Item>
		</Select.Content>
	</Select.Root>
</div>`;

export const selectError = `
import { Select } from 'kampsy-ui';

let value = $state('');
let error = $state('Please select a value.');

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Select.Root bind:error size="small" bind:value class="w-full lg:w-auto">
		<Select.Trigger class="w-full lg:w-[200px]">
			<Select.Value placeholder="select a friuit" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="apple">apple</Select.Item>
			<Select.Item value="banana">banana</Select.Item>
			<Select.Item value="orange">orange</Select.Item>
			<Select.Item value="pineapple">pineapple</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root bind:error bind:value class="w-full lg:w-auto" >
		<Select.Trigger class="w-full lg:w-[200px]">
			<Select.Value placeholder="select a friuit" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="apple">apple</Select.Item>
			<Select.Item value="banana">banana</Select.Item>
			<Select.Item value="orange">orange</Select.Item>
			<Select.Item value="pineapple">pineapple</Select.Item>
		</Select.Content>
	</Select.Root>

	<Select.Root bind:error size="large" bind:value class="w-full lg:w-auto" >
		<Select.Trigger class="w-full lg:w-[200px]">
			<Select.Value placeholder="select a friuit" />
		</Select.Trigger>
		<Select.Content>
			<Select.Item value="apple">apple</Select.Item>
			<Select.Item value="banana">banana</Select.Item>
			<Select.Item value="orange">orange</Select.Item>
			<Select.Item value="pineapple">pineapple</Select.Item>
		</Select.Content>
	</Select.Root>
</div>`;
