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
		buttonShapes,
		buttonSize,
		buttonTypes
	} from '../../docs/data/button.js';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import ArrowUp from '$lib/icons/arrow-up.svelte';
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>

{#snippet button()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			button
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Trigger an action or event, such as submitting a form or displaying a dialog.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
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
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			size
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The default size is medium.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny">upload</Button>
				<Button size="small">upload</Button>
				<Button size="medium">upload</Button>
				<Button size="large">upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonSize)}
		</div>
	</Row>
{/snippet}

{#snippet types()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
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

<!--Rounded content-->
{#snippet roundedCode(rct: string)}
	<code
		class="px-2 py-[3.6px] rounded-[6px] text-xs text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		{rct}
	</code>
{/snippet}

{#snippet shapes()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			shapes
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
		Icon-only buttons should include the {@render roundedCode('shape')} prop and an
			{@render roundedCode('aria-label')}.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button aria-label="Upload" shape="square" size="tiny">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="Upload" shape="square" size="small">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="Upload" shape="square" size="medium">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="Upload" shape="square" size="large">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="Upload" shape="circle" size="tiny">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="Upload" shape="circle" size="small">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="Upload" shape="circle" size="medium">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="Upload" shape="circle" size="large">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonShapes)}
		</div>
	</Row>
{/snippet}

{#snippet prefixAndSuffix()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Prefix and Suffix
		</h2>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button prefix={ArrowLeft}>upload</Button>
				<Button suffix={ArrowRight}>upload</Button>
				<Button prefix={ArrowLeft} suffix={ArrowRight}>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet rounded()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			rounded
		</h2>

		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Combination of {@render roundedCode('rounded')} and the
			{@render roundedCode('shadow')} prop, often used on marketing pages.
		</p>

		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny" type="secondary" rounded>upload</Button>
				<Button size="small" type="secondary" rounded>upload</Button>
				<Button size="medium" type="secondary" rounded>upload</Button>
				<Button size="large" type="secondary" rounded>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonRounded)}
		</div>
	</Row>
{/snippet}

{#snippet loading()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			loading
		</h2>

		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny" loading>upload</Button>
				<Button size="small" loading>upload</Button>
				<Button size="medium" loading>upload</Button>
				<Button size="large" loading>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonLoading)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			disabled
		</h2>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny" disabled>upload</Button>
				<Button size="small" disabled>upload</Button>
				<Button size="medium" disabled>upload</Button>
				<Button size="large" disabled>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'badge', href: '/badge' }}
			next={{ title: 'calendar', href: '/calendar' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render button()}
	{@render size()}
	{@render types()}
	{@render shapes()}
	{@render prefixAndSuffix()}
	{@render rounded()}
	{@render loading()}
	{@render disabled()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
