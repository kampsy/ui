export const textareaDefault = `
<script lang="ts">
	import { Textarea } from 'kampsy-ui';

	let value = $state('');
</script>

<Textarea
	bind:value
	placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`;

export const textareaDisabled = `
<script lang="ts">
	import { Textarea } from 'kampsy-ui';

	let value = $state('');
</script>

<Textarea
	bind:value
	disabled
	placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`;

export const textareaWithLabel = `
<script lang="ts">
	import { Textarea } from 'kampsy-ui';

	let value = $state('');
</script>

<Textarea
	bind:value
	label="Label"
	placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
/>`;

export const textareError = `
<script lang="ts">
	import { Textarea } from 'kampsy-ui';

	let value = $state('');
</script>

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
