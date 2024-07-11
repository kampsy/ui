<script lang="ts">
	import { ArrowLeft, ArrowRight } from '$lib/icons/index.js';
	import { Button } from '$lib/index.js';
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import {
	buttonDisabled,
	buttonLoading,
		buttonPrefixAndSuffix,
		buttonRounded,
		buttonSize,
		buttonTypes
	} from '../../docs/data/button.js';
	import type { Snippet } from 'svelte';
</script>

{#snippet button()}
	<Row>
		<h1
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			button
		</h1>
		<p
			class="first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Trigger an action or event, such as submitting a form or displaying a dialog.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-light-bg dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 rounded-lg overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="w-full flex flex-wrap gap-4 justify-between">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet size()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			size
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The default size is medium.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="sm">upload</Button>
				<Button>upload</Button>
				<Button size="lg">upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonSize)}
		</div>
	</Row>
{/snippet}

{#snippet types()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Types
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button type="secondary">upload</Button>
				<Button type="tertiary">upload</Button>
				<Button type="error">upload</Button>
				<Button type="warning">upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonTypes)}
		</div>
	</Row>
{/snippet}

{#snippet prefixAndSuffix()}
	<!--icons-->
	{#snippet arrowLeft()}
		<ArrowLeft />
	{/snippet}

	{#snippet arrowRight()}
		<ArrowRight />
	{/snippet}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Prefix and Suffix
		</h2>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button prefix={arrowLeft}>upload</Button>
				<Button suffix={arrowRight}>upload</Button>
				<Button prefix={arrowLeft} suffix={arrowRight}>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet rounded()}
	<!--Rounded content-->
	{#snippet roundedCode(rct)}
		<code
			class="px-2 py-[3.6px] rounded-[6px] text-xs text-light-gray-900 bg-light-gray-100 dark:bg-dark-gray-100 dark:text-dark-gray-900 border border-light-gray-200 dark:border-dark-gray-400"
		>
			{rct}
		</code>
	{/snippet}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			rounded
		</h2>

		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Combination of {@render roundedCode('shape="rounded"')} and the
			{@render roundedCode('shadow')} prop, often used on marketing pages.
		</p>

		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="sm" type="secondary" rounded>upload</Button>
				<Button type="secondary" rounded>upload</Button>
				<Button size="lg" type="secondary" rounded>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonRounded)}
		</div>
	</Row>
{/snippet}

{#snippet loading()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			loading
		</h2>

		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="sm" loading>upload</Button>
				<Button loading>upload</Button>
				<Button size="lg" loading>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonLoading)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			disabled
		</h2>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="sm" disabled>upload</Button>
				<Button disabled>upload</Button>
				<Button size="lg" disabled>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet cont()}
	{@render button()}
	{@render size()}
	{@render types()}
	{@render prefixAndSuffix()}
	{@render rounded()}
	{@render loading()}
	{@render disabled()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
