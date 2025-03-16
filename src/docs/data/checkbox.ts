export const checkboxDefault = `
import { Checkbox } from 'kampsy-ui';
let value = $state(false);

<Checkbox bind:checked aria-labelledby="checkbox">option 1</Checkbox>`;

export const checkboxDisabled = `
import { Checkbox } from 'kampsy-ui';

<div class="w-full space-y-4">
    <Checkbox disabled aria-labelledby="checkbox-2">Disabled</Checkbox>
    <Checkbox checked disabled aria-labelledby="checkbox-3">Disabled Checked</Checkbox>
    <Checkbox disabled indeterminate aria-labelledby="checkbox-4">Disabled Indeterminate</Checkbox>
</div>`;

export const checkboxIndeterminate = `
import { Checkbox } from 'kampsy-ui';

<Checkbox indeterminate aria-labelledby="checkbox-5">option 1</Checkbox>`;

export const checkboxItems = `
import { Checkbox } from 'kampsy-ui';

let items = $state(['avatar', 'choicebox']);

<div class="w-full space-y-4">
    <Checkbox value="avatar" bind:items aria-labelledby="checkbox-6">avatar</Checkbox>
    <Checkbox value="button" bind:items aria-labelledby="checkbox-7">button</Checkbox>
    <Checkbox value="calendar" bind:items aria-labelledby="checkbox-8">calendar</Checkbox>
    <Checkbox value="choicebox" bind:items aria-labelledby="checkbox-9">choicebox</Checkbox>
</div>`;
