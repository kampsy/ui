export const checkboxDefault = `
<script lang="ts">
	import { Checkbox } from 'kampsy-ui';
	let checked = $state(false);
</script>

<Checkbox bind:checked>Option 1</Checkbox>`

export const checkboxDisabled = `
<script lang="ts">
	import { Checkbox } from 'kampsy-ui';
</script>

<div class="w-full space-y-4">
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox checked disabled>Disabled Checked</Checkbox>
    <Checkbox disabled indeterminate>Disabled Indeterminate</Checkbox>
</div>`

export const checkboxIndeterminate = `
<script lang="ts">
	import { Checkbox } from 'kampsy-ui';
</script>

<Checkbox indeterminate>Option 1</Checkbox>`
