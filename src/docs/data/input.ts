export const inputDefault = `
import { Input } from 'kampsy-ui';

let small = $state('');
let defaultInput = $state('');
let large = $state('');

<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-4">
	<Input aria-labelledby="Demo input" bind:value={small} placeholder="small" size="small" />
	<Input aria-labelledby="Demo input" bind:value={defaultInput} placeholder="default" />
	<Input aria-labelledby="Demo input" bind:value={large} placeholder="large" size="large" />
</div>`;


export const inputPrefixAndSuffix = `
import { Input } from 'kampsy-ui';
import { ArrowCircleUp } from 'kampsy-ui/icons'

let value = $state('');

<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input aria-labelledby="Demo" contPrefix={ArrowCircleUp} bind:value placeholder="default" />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input aria-labelledby="Demo" contSuffix={ArrowCircleUp} bind:value placeholder="default" />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input aria-labelledby="Demo" contPrefix="https://" contSuffix=".com" bind:value placeholder="default" />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
        aria-labelledby="Demo"
        contPrefix={ArrowCircleUp}
        prefixStyling={false}
        contSuffix={ArrowCircleUp}
        suffixStyling={false}
        placeholder="default"
	/>
</div>`;

export const inputDisabled = `
import { Input } from 'kampsy-ui';
import { ArrowCircleUp } from 'kampsy-ui/icons'

<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input aria-labelledby="Demo" placeholder="Disabled with placeholder" disabled />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input aria-labelledby="Demo" value="Disabled with placeholder" disabled />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
		aria-labelledby="Demo"
		contPrefix={ArrowCircleUp}
		placeholder="Disabled with prefix"
		disabled
	/>
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
		aria-labelledby="Demo"
		contSuffix={ArrowCircleUp}
		placeholder="Disabled with suffix"
		disabled
	/>
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
		aria-labelledby="Demo"
		contPrefix="https://"
		contSuffix=".com"
		placeholder="Disabled with prefix and suffix"
		disabled
	/>
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
		aria-labelledby="Demo"
		contPrefix={ArrowCircleUp}
		prefixStyling={false}
		contSuffix={ArrowCircleUp}
		suffixStyling={false}
		placeholder="Disabled with prefix and suffix"
		disabled
	/>
</div>`;

export const inputSearch = `
import { SearchInput } from 'kampsy-ui';

<SearchInput placeholder="Enter some text..." />`;

export const inputError = `
import { Input } from 'kampsy-ui';

<div class="w-full grid grid-cols-1 lg:grid-cols-3">
    <Input
	    aria-labelledby="Demo input"
	    error="An error message."
	    placeholder="long-error@gmail.com"
	    size="small"
    />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
    <Input
	    aria-labelledby="Demo input"
	    error="An error message."
	    placeholder="long-error@gmail.com"
	/>
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
    <Input
	    aria-labelledby="Demo input"
	    error="An error message."
	    placeholder="long-error@gmail.com"
	    size="large"
	    />
</div>`;


export const inputLabel = `
import { Input } from 'kampsy-ui';

let value = $state('');

<Input aria-labelledby="Demo input" label="Label" bind:value placeholder="Label" />`;