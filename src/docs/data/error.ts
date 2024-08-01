export const errorDefault = `
import { Error } from 'kampsy-ui';

<Error>
    This email address is already in use.
</Error>`;

export const errorCustomLabel = `
import { Error } from 'kampsy-ui';

<Error label="Email Error">
    This email address is already in use.
</Error>`;

export const errorSize = `
import { Error } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4">
	<Error size="sm">This email is in use.</Error>
	<Error size="md">This email is in use.</Error>
	<Error size="lg">This email is in use.</Error>
</div>`;

export const errorWithProp = `
import { Error } from 'kampsy-ui';

<Error
	error={{
		message: 'The request failed.',
		action: 'Contact Us',
		link: 'https://kampsy.kampsy.xyz/error'
	}}
/>`;