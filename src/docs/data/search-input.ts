export const searchInputDefault = `
<script lang="ts">
	import { SearchInput } from 'kampsy-ui';

	let value = $state('');
</script>

<SearchInput aria-label="Search" bind:value placeholder="Enter some text..." />`

export const searchInputCmdk = `
<script lang="ts">
	import { SearchInput } from 'kampsy-ui';

	let value = $state('');
</script>

<SearchInput aria-label="Search" bind:value cmdk placeholder="Enter some text..." />`

export const searchInputDisabled = `
<script lang="ts">
	import { SearchInput } from 'kampsy-ui';

	let value = $state('');
</script>

<SearchInput
	aria-label="Search"
	bind:value
	cmdk
	disabled
	placeholder="Enter some text..."
/>`

export const searchInputLoading = `
<script lang="ts">
	import { SearchInput } from 'kampsy-ui';

	let value = $state('Project A');
</script>

<SearchInput aria-label="Search" bind:value loading placeholder="Enter some text..." />`

export const searchInputCustomPrefix = `
<script lang="ts">
	import { SearchInput } from 'kampsy-ui';
	import { Sparkles } from '@lucide/svelte';

	let value = $state('');
</script>

<SearchInput
	aria-label="Search"
	bind:value
	prefix={Sparkles}
	placeholder="Enter some text..."
/>`
