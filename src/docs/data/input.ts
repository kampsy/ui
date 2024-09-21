export const inputDefault = `
import { Input } from 'kampsy-ui';

<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-4">
	<Input aria-labelledby="Demo input" placeholder="small" size="small" />
	<Input aria-labelledby="Demo input" placeholder="default" />
	<Input aria-labelledby="Demo input" placeholder="large" size="large" />
</div>`;


export const inputPrefixAndSuffix = `
import { Input } from 'kampsy-ui';
import { ArrowCircleUp } from 'kampsy-ui/icons'

<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input aria-labelledby="Demo" prefix={ArrowCircleUp} placeholder="default" />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input aria-labelledby="Demo" suffix={ArrowCircleUp} placeholder="default" />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input aria-labelledby="Demo" prefix="https://" suffix=".com" placeholder="default" />
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
        aria-labelledby="Demo"
        prefix={ArrowCircleUp}
        prefixStyling={false}
        suffix={ArrowCircleUp}
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
		prefix={ArrowCircleUp}
		placeholder="Disabled with prefix"
		disabled
	/>
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
		aria-labelledby="Demo"
		suffix={ArrowCircleUp}
		placeholder="Disabled with suffix"
		disabled
	/>
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
		aria-labelledby="Demo"
		prefix="https://"
		suffix=".com"
		placeholder="Disabled with prefix and suffix"
		disabled
	/>
</div>
<div class="w-full grid grid-cols-1 lg:grid-cols-3">
	<Input
		aria-labelledby="Demo"
		prefix={ArrowCircleUp}
		prefixStyling={false}
		suffix={ArrowCircleUp}
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

<Input aria-labelledby="Demo input" label="Label" placeholder="Label" />`;