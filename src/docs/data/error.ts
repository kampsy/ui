export const errorDefault = `
<script lang="ts">
	import { Error } from 'kampsy-ui';
</script>

<Error>
    This email address is already in use.
</Error>`;

export const errorCustomLabel = `
<script lang="ts">
	import { Error } from 'kampsy-ui';
</script>

<Error label="Email Error">
    This email address is already in use.
</Error>`;

export const errorSize = `
<script lang="ts">
	import { Error } from 'kampsy-ui';
</script>

<div class="w-full flex flex-wrap gap-4">
	<Error size="sm">This email is in use.</Error>
	<Error size="md">This email is in use.</Error>
	<Error size="lg">This email is in use.</Error>
</div>`;

export const errorWithProp = `
<script lang="ts">
	import { Error } from 'kampsy-ui';
</script>

<Error
	error={{
		message: 'The request failed.',
		action: 'Contact Us',
		link: 'https://ui.kampsy.xyz/error'
	}}
/>`;