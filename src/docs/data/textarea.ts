export const textareaDefault = `
import { Textarea } from 'kampsy-ui';

let value = $state('');

<Textarea
	bind:value
	placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`;

export const textareaDisabled = `
import { Textarea } from 'kampsy-ui';

let value = $state('');

<Textarea
	bind:value
	disabled
	placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`;

export const textareaWithLabel = `
import { Textarea } from 'kampsy-ui';

let value = $state('');

<Textarea
	bind:value
	label="Label"
	placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`;

export const textareError = `
import { Textarea } from 'kampsy-ui';

let value = $state('');

<div class="w-full space-y-6">
	<Textarea
		bind:value
		defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
		error="There has been an error."
		size="tiny"
	/>
	<Textarea
		bind:value
		defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
		error="There has been an error."
		size="small"
	/>
	<Textarea
		bind:value
		defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
		error="There has been an error."
		size="medium"
	/>
	<Textarea
		bind:value
		defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
		error="There has been an error."
		size="large"
	/>
</div>`;
