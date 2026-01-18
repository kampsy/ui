export const checkboxDefault = `
<script lang="ts">
	import { Checkbox } from 'kampsy-ui';
	let value = $state(false);
</script>

<Checkbox bind:checked aria-labelledby="checkbox">option 1</Checkbox>`;

export const checkboxDisabled = `
<script lang="ts">
	import { Checkbox } from 'kampsy-ui';
</script>

<div class="w-full space-y-4">
    <Checkbox disabled aria-labelledby="checkbox-2">Disabled</Checkbox>
    <Checkbox checked disabled aria-labelledby="checkbox-3">Disabled Checked</Checkbox>
    <Checkbox disabled indeterminate aria-labelledby="checkbox-4">Disabled Indeterminate</Checkbox>
</div>`;

export const checkboxIndeterminate = `
<script lang="ts">
	import { Checkbox } from 'kampsy-ui';
</script>

<Checkbox indeterminate aria-labelledby="checkbox-5">option 1</Checkbox>`;

export const checkboxItems = `
<script lang="ts">
	import { Checkbox } from 'kampsy-ui';

	let items = $state(['avatar', 'choicebox']);
</script>

<div class="w-full space-y-4">
    <Checkbox value="avatar" bind:items aria-labelledby="checkbox-6">avatar</Checkbox>
    <Checkbox value="button" bind:items aria-labelledby="checkbox-7">button</Checkbox>
    <Checkbox value="calendar" bind:items aria-labelledby="checkbox-8">calendar</Checkbox>
    <Checkbox value="choicebox" bind:items aria-labelledby="checkbox-9">choicebox</Checkbox>
</div>`;
