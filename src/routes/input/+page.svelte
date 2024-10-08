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

	} from '../../docs/data/input.js';
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
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
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
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
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
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">prefix and suffix</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
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
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet inputDisabledSnip()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">disabled</a>
		</h2>
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
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet searchSnip()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">search</a>
		</h2>
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
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">error</a>
		</h2>
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
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">label</a>
		</h2>
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
			next={{ title: 'menu', href: '/menu' }}
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
