<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Input, SearchInput } from '$lib/index.js';
	import ArrowCircleUp from '$lib/icons/arrow-circle-up.svelte';
	import {
		inputDefault,
		inputPrefixAndSuffix,
		inputDisabled,
		inputLabel,
		inputError,
		inputSearch
	} from '$lib/../docs/data/input.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';
</script>

<svelte:head>
	<title>Input</title>
</svelte:head>

{#snippet input()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			input
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-6 lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Retrieve text input from a user.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultInput()}
	<Row>
		<LinkH2 href="/input#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full grid grid-cols-1 gap-4 lg:grid-cols-3">
					<Input aria-labelledby="Demo input" placeholder="small" size="small" />
					<Input aria-labelledby="Demo input" placeholder="default" />
					<Input aria-labelledby="Demo input" placeholder="large" size="large" />
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputDefault)}
		</div>
	</Row>
{/snippet}

{#snippet prefixAndSuffix()}
	<Row>
		<LinkH2 href="/input#prefix-and-suffix" aria-label="prefix and suffix">prefix and suffix</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full grid grid-cols-1 lg:grid-cols-3">
					<Input aria-labelledby="Demo" contPrefix={ArrowCircleUp} placeholder="default" />
				</div>
				<div class="w-full grid grid-cols-1 lg:grid-cols-3">
					<Input aria-labelledby="Demo" contSuffix={ArrowCircleUp} placeholder="default" />
				</div>
				<div class="w-full grid grid-cols-1 lg:grid-cols-3">
					<Input
						aria-labelledby="Demo"
						contPrefix="https://"
						contSuffix=".com"
						placeholder="default"
					/>
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
				</div>
				<div class="w-full grid grid-cols-1 lg:grid-cols-3">
					<Input aria-labelledby="Demo" contPrefix="ui" placeholder="default" />
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet inputDisabledSnip()}
	<Row>
		<LinkH2 href="/input#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
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
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet searchSnip()}
	<Row>
		<LinkH2 href="/input#search" aria-label="search">search</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Automatically clears the input if escape is pressed.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<SearchInput placeholder="Enter some text..." />
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputSearch)}
		</div>
	</Row>
{/snippet}

{#snippet errorSnip()}
	<Row>
		<LinkH2 href="/input#error" aria-label="error">error</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
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
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputError)}
		</div>
	</Row>
{/snippet}

{#snippet inputLabelSnip()}
	<Row>
		<LinkH2 href="/input#label" aria-label="label">label</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Input aria-labelledby="Demo input" label="Label" placeholder="Label" />
			{/snippet}
			{@render demoAndCode(demo, inputLabel)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'error', href: '/error' }}
			next={{ title: 'keyboard input', href: '/keyboard-input' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render input()}
	{@render defaultInput()}
	{@render prefixAndSuffix()}
	{@render inputDisabledSnip()}
	{@render searchSnip()}
	{@render errorSnip()}
	{@render inputLabelSnip()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
