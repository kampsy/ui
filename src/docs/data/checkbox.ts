export const checkboxDefault = `
import { Checkbox } from 'kampsy-ui';
let value = $state(false);

<Checkbox bind:checked>option 1</Checkbox>`;

export const checkboxDisabled = `
import { Checkbox } from 'kampsy-ui';

<div class="w-full space-y-4">
    <Checkbox disabled>Disabled</Checkbox>
    <Checkbox checked disabled>Disabled Checked</Checkbox>
    <Checkbox disabled indeterminate>Disabled Indeterminate</Checkbox>
</div>`;


export const checkboxIndeterminate = `
import { Checkbox } from 'kampsy-ui';

<Checkbox indeterminate>option 1</Checkbox>`;

export const checkboxItems = `
import { Checkbox } from 'kampsy-ui';

let items = $state(['avatar', 'choicebox']);

<div class="w-full space-y-4">
    <Checkbox value="avatar" bind:items>avatar</Checkbox>
    <Checkbox value="button" bind:items>button</Checkbox>
    <Checkbox value="calendar" bind:items>calendar</Checkbox>
    <Checkbox value="choicebox" bind:items>choicebox</Checkbox>
</div>`;