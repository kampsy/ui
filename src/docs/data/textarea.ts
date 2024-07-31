export const textareaDefault = `
import { Error } from 'kodo-ui';

<Error>
    This email address is already in use.
</Error>`;

export const textareaDisabled = `
import { Error } from 'kodo-ui';

<Error label="Email Error">
    This email address is already in use.
</Error>`;

export const textareError = `
import { Textarea } from 'kodo-ui';

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
