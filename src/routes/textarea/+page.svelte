<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import Textarea from '$lib/textarea/textarea.svelte';
	import {
		textareaDefault,
		textareaDisabled,
		textareaWithLabel,
		textareError
	} from '../../docs/data/textarea.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';
</script>

<svelte:head>
	<title>Textarea</title>
</svelte:head>

{#snippet textarea()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Textarea
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Retrieve multi-line user input.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<div class="p-4 lg:p-6">
			<div class="flex flex-nowrap gap-4 justify-between">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultTextarea()}
	<Row>
		<LinkH2 href="/textarea#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Textarea
					placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
			{/snippet}
			{@render demoAndCode(demo, textareaDefault)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<LinkH2 href="/textarea#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Textarea
					disabled
					placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				/>
			{/snippet}
			{@render demoAndCode(demo, textareaDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet withLabel()}
	<Row>
		<LinkH2 href="/textarea#label" aria-label="label">label</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Textarea
						label="Label"
						placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, textareaWithLabel)}
		</div>
	</Row>
{/snippet}

{#snippet withError()}
	<Row>
		<LinkH2 href="/textarea#error" aria-label="error">error</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Textarea
						defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
						error="There has been an error."
						size="tiny"
					/>
					<Textarea
						defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
						error="There has been an error."
						size="small"
					/>
					<Textarea
						defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
						error="There has been an error."
						size="medium"
					/>
					<Textarea
						defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa"
						error="There has been an error."
						size="large"
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, textareError)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'text', href: '/text' }}
			next={{ title: 'theme switcher', href: '/theme-switcher' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render textarea()}
	{@render defaultTextarea()}
	{@render disabled()}
	{@render withLabel()}
	{@render withError()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
