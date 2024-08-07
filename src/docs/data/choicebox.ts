export const choiceboxDefault = `
import { Choicebox } from 'kampsy-ui';

let value = $state('');

<div class="w-full">
	<Choicebox.Group label="select a plan" type="radio" bind:value>
		<Choicebox.Item defaultChecked description="Free for two weeks" title="Pro Trial" value="trial" />
		<Choicebox.Item description="Get started now" title="Pro" value="pro" />
	</Choicebox.Group>
</div>`;

export const choiceboxMultiselect = `
import { Choicebox } from 'kampsy-ui';

let value = $state([]);

<div class="w-full">
	<Choicebox.Group label="select a plan" type="checkbox" bind:value>
		<Choicebox.Item defaultChecked description="Free for two weeks" title="Pro Trial" value="trial" />
		<Choicebox.Item description="Get started now" title="Pro" value="pro" />
	</Choicebox.Group>
</div>`;

export const choiceboxDisabled = `
import { Choicebox } from 'kampsy-ui';

let value = $state('');
let valueList = $state([]);

<div class="w-full space-y-4">
	<Choicebox.Group label="select a plan" disabled type="radio" bind:value>
		<Choicebox.Item description="Free for two weeks" title="Pro Trial" value="trial" />
		<Choicebox.Item description="Get started now" title="Pro" value="pro" />
	</Choicebox.Group>
	<Choicebox.Group label="select a plan" type="radio" bind:value={valueList}>
		<Choicebox.Item description="Free for two weeks" disabled title="Pro Trial" value="trial" />
		<Choicebox.Item description="Get started now" title="Pro" value="pro" />
	</Choicebox.Group>
</div>`;