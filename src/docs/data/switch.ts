export const switchDefault = `
import { Switch } from 'kampsy-ui';

let value = $state('');

<Switch.Root bind:value name="default">
	<Switch.Control defaultChecked label="Source" value="source" />
	<Switch.Control label="Output" value="output" />
</Switch.Root>`;

export const switchDisabled = `
import { Switch } from 'kampsy-ui';

let value = $state('');

<Switch.Root bind:value name="default">
	<Switch.Control defaultChecked disabled label="Source" value="source" />
	<Switch.Control disabled label="Output" value="output" />
</Switch.Root>`;

export const switchSize = `
import { Switch } from 'kampsy-ui';

let value = $state('');

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Switch.Root bind:value name="size-small" size="small">
		<Switch.Control defaultChecked disabled label="Source" value="source" />
		<Switch.Control disabled label="Output" value="output" />
	</Switch.Root>

	<Switch.Root bind:value name="default">
		<Switch.Control defaultChecked disabled label="Source" value="source" />
		<Switch.Control disabled label="Output" value="output" />
	</Switch.Root>

	<Switch.Root bind:value name="size-large" size="large">
		<Switch.Control defaultChecked disabled label="Source" value="source" />
		<Switch.Control disabled label="Output" value="output" />
	</Switch.Root>
</div>`;

export const switchFullWidth = `
import { Switch } from 'kampsy-ui';

let value = $state('');

<Switch.Root bind:value name="size-large" size="large" fullWidth>
	<Switch.Control defaultChecked disabled label="Source" value="source" />
	<Switch.Control disabled label="Output" value="output" />
</Switch.Root>`;

export const switchTootip = `
import { Switch } from 'kampsy-ui';

let value = $state('');

<Switch.Root bind:value name="default">
	<Switch.Control defaultChecked disabled label="Source" value="source" />
	<Switch.Control disabled label="Output" value="output" />
</Switch.Root>`;

export const switchIcon = `
import { Switch } from 'kampsy-ui';
import { GridSquare, ListUnordered } from 'kampsy-ui/icons';

let value = $state('');

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Switch.Root bind:value name="size-small" size="small">
		<Switch.Control defaultChecked icon={GridSquare} value="source" />
		<Switch.Control icon={ListUnordered} value="output" />
	</Switch.Root>

	<Switch.Root bind:value name="size-default">
		<Switch.Control defaultChecked icon={GridSquare} value="source" />
		<Switch.Control icon={ListUnordered} value="output" />
	</Switch.Root>

	<Switch.Root bind:value name="size-large" size="large">
		<Switch.Control defaultChecked icon={GridSquare} value="source" />
		<Switch.Control icon={ListUnordered} value="output" />
	</Switch.Root>
</div>`;