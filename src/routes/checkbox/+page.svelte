<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Checkbox } from '$lib/index.js';
	import {
		checkboxDefault,
		checkboxDisabled,
		checkboxIndeterminate,

		checkboxItems

	} from '../../docs/data/checkbox.js';

	let checked = $state(false);

	let items = $state(['avatar', 'choicebox']);
</script>

<svelte:head>
	<title>Checkbox</title>
</svelte:head>

{#snippet checkbox()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Checkbox
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A control that toggles between two options, checked or unchecked.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="w-full flex flex-nowrap gap-4 items-center justify-between">
				{@render demo()}
			</div>
		</div>
		<div class="overflow-hidden rounded-b-xl">
			<CollapseCode {code} />
		</div>
	</div>
{/snippet}

{#snippet defaultCheckbox()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Checkbox bind:checked>option 1</Checkbox>
				</div>
			{/snippet}
			{@render demoAndCode(demo, checkboxDefault)}
		</div>
	</Row>
{/snippet}

{#snippet disabledCheckbox()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Disabled</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-4">
					<Checkbox disabled>Disabled</Checkbox>
					<Checkbox checked disabled>Disabled Checked</Checkbox>
					<Checkbox disabled indeterminate>Disabled Indeterminate</Checkbox>
				</div>
			{/snippet}
			{@render demoAndCode(demo, checkboxDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet indeterminate()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Indeterminate</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Checkbox indeterminate>option 1</Checkbox>
				</div>
			{/snippet}
			{@render demoAndCode(demo, checkboxIndeterminate)}
		</div>
	</Row>
{/snippet}

{#snippet itemsSnip()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Selected items</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-4">
					<Checkbox value="avatar" bind:items>avatar</Checkbox>
					<Checkbox value="button" bind:items>button</Checkbox>
					<Checkbox value="calendar" bind:items>calendar</Checkbox>
					<Checkbox value="choicebox" bind:items>choicebox</Checkbox>
				</div>
			{/snippet}
			{@render demoAndCode(demo, checkboxItems)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'collapse', href: '/collapse' }}
			next={{ title: 'error', href: '/error' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render checkbox()}
	{@render defaultCheckbox()}
	{@render disabledCheckbox()}
	{@render indeterminate()}
	{@render itemsSnip()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
