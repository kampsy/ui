export const inputDefault = `
<script lang="ts">
	import { Input } from 'kampsy-ui';
</script>

<div
  class="w-full flex flex-col md:flex-row items-start justify-between gap-4 flex-initial"
>
  <Input aria-labelledby="Demo input" placeholder="small" size="small" />
  <Input aria-labelledby="Demo input" placeholder="default" />
  <Input aria-labelledby="Demo input" placeholder="large" size="large" />
</div>`

export const inputPrefixAndSuffix = `
<script lang="ts">
	import { Input } from 'kampsy-ui';
	import { ArrowCircleUp } from 'kampsy-ui/icons';
</script>

<div class="flex flex-col items-start justify-start gap-6 flex-initial">
  <Input
    aria-labelledby="Demo"
    prefix={ArrowCircleUp}
    placeholder="default"
  />

  <Input
    aria-labelledby="Demo"
    suffix={ArrowCircleUp}
    placeholder="default"
  />
  <Input
    aria-labelledby="Demo"
    prefix="https://"
    suffix=".com"
    placeholder="default"
  />
  <Input
    aria-labelledby="Demo"
    prefix={ArrowCircleUp}
    prefixStyling={false}
    suffix={ArrowCircleUp}
    suffixStyling={false}
    placeholder="default"
  />
  <Input aria-labelledby="Demo" prefix="ui/" placeholder="default" />
</div>`

export const inputDisabled = `
<script lang="ts">
	import { Input } from 'kampsy-ui';
	import { ArrowCircleUp } from 'kampsy-ui/icons';
</script>

<div class="flex flex-col items-start justify-start gap-4 flex-initial">
  <Input
    aria-labelledby="Demo"
    placeholder="Disabled with placeholder"
    disabled
  />
  <Input aria-labelledby="Demo" value="Disabled with value" disabled />

  <Input
    aria-labelledby="Demo"
    prefix={ArrowCircleUp}
    placeholder="Disabled with prefix"
    disabled
  />

  <Input
    aria-labelledby="Demo"
    suffix={ArrowCircleUp}
    placeholder="Disabled with suffix"
    disabled
  />

  <Input
    aria-labelledby="Demo"
    prefix="https://"
    suffix=".com"
    placeholder="Disabled with prefix and suffix"
    disabled
  />

  <Input
    aria-labelledby="Demo"
    prefix={ArrowCircleUp}
    prefixStyling={false}
    suffix={ArrowCircleUp}
    suffixStyling={false}
    placeholder="Disabled with prefix and suffix"
    disabled
  />
</div>`

export const inputSearch = `
<script lang="ts">
	import { SearchInput } from 'kampsy-ui';
</script>

<div class="w-full">
  <SearchInput placeholder="Enter some text..." />
</div>`

export const inputError = `
<script lang="ts">
	import { Input } from 'kampsy-ui';
</script>

<div class="flex flex-initial flex-col items-start justify-start gap-8">
  <div class="grid w-full grid-cols-1 lg:grid-cols-3">
    <Input
      aria-labelledby="Demo input"
      error="An error message."
      placeholder="long-error@gmail.com"
      size="small"
    />
  </div>
  <div class="grid w-full grid-cols-1 lg:grid-cols-3">
    <Input
      aria-labelledby="Demo input"
      error="An error message."
      placeholder="long-error@gmail.com"
    />
  </div>
  <div class="grid w-full grid-cols-1 lg:grid-cols-3">
    <Input
      aria-labelledby="Demo input"
      error="An error message."
      placeholder="long-error@gmail.com"
      size="large"
    />
  </div>
</div>`

export const inputLabel = `
<script lang="ts">
	import { Input } from 'kampsy-ui';
</script>

<Input aria-labelledby="Demo input" label="Label" placeholder="Label" />`

export const inputRoundedPrefixAndSuffix = `
<script lang="ts">
	import { Input } from 'kampsy-ui';
</script>

<div class="w-full">
  <Input
    aria-labelledby="Demo"
    placeholder="Label example"
    prefix="www."
    rounded
    suffix=".com"
  />
</div>`

export const inputRoundedPrefixAndSuffixWithoutStyling = `
<script lang="ts">
	import { Input } from 'kampsy-ui';
</script>

<div class="w-full">
  <Input
    aria-labelledby="Demo"
    placeholder="Label example"
    prefix="www."
    prefixStyling={false}
    rounded
    suffix=".com"
    suffixStyling={false}
  />
</div>`
