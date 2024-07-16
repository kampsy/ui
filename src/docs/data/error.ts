export const errorDefault = `
import { Error } from 'kodo-ui';

<Error>
    This email address is already in use.
</Error>`;

export const errorCustomLabel = `
import { Error } from 'kodo-ui';

<Error label="Email Error">
    This email address is already in use.
</Error>`;

export const errorSize = `
import { Error } from 'kodo-ui';

<Error size="sm">This email is in use.</Error>
<Error size="md">This email is in use.</Error>
<Error size="lg">This email is in use.</Error>`;

export const errorWithProp = `
import { Error } from 'kodo-ui';

<Error
	error={{
		message: 'The request failed.',
		action: 'Contact Us',
		link: 'https://kodo.kampsy.xyz/error'
	}}
/>`;