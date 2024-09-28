export const textareaDefault = `
import { Textarea } from 'kampsy-ui';

<Textarea
	placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`;

export const textareaDisabled = `
import { Textarea } from 'kampsy-ui';

<Textarea
	disabled
	placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`;

export const textareError = `
import { Textarea } from 'kampsy-ui';

<div class="w-full space-y-6">
	<Textarea
		defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
		error="There has been an error."
		size="tiny"
	/>
	<Textarea
		defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
		error="There has been an error."
		size="small"
	/>
	<Textarea
		defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
		error="There has been an error."
		size="medium"
	/>
	<Textarea
		defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
		error="There has been an error."
		size="large"
	/>
</div>`;
