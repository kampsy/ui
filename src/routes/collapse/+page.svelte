<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { collapseDefault, collapseExpanded, collapseSize } from '../../docs/data/collapse.js';
	import { Collapse, Pagination, Tabs, Text } from '$lib/index.js';
	import { fade } from 'svelte/transition';
	import { Webhook, Accessibility } from '$lib/icons/index.js';

	let selected = $state('implementation');
</script>

<svelte:head>
	<title>Collapse</title>
</svelte:head>

{#snippet collapse()}
	<Row bottomLine={false}>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			collapse
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A set of headings, vertically stacked, that each reveal an related section of content.
			Commonly referred to as an accordion.
		</p>
	</Row>
{/snippet}

{#snippet tabSnip()}
	<Row bottomLine={false} class="!py-1">
		<Tabs
			bind:selected
			tabs={[
				{ title: 'Implementation', value: 'implementation', icon: Webhook },
				{ title: 'Accessibility', value: 'accessibility', icon: Accessibility }
			]}
		/>
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

{#snippet defaultCollapse()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Collapse.Root>
					<Collapse.Item value="tab1">
						<Collapse.Trigger
							role="heading"
							aria-level={3}
							type="button"
							aria-controls="tab1-section"
							aria-expanded="false">Question A</Collapse.Trigger
						>
						<Collapse.Content id="tab1-section" aria-hidden="true" aria-labelledby="tab1">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
					<Collapse.Item value="tab2">
						<Collapse.Trigger
							role="heading"
							aria-level={3}
							type="button"
							aria-controls="tab2-section"
							aria-expanded="false">Question B</Collapse.Trigger
						>
						<Collapse.Content id="tab2-section" aria-hidden="true" aria-labelledby="tab2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
				</Collapse.Root>
			{/snippet}
			{@render demoAndCode(demo, collapseDefault)}
		</div>
	</Row>
{/snippet}

{#snippet expanded()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">expanded</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Collapse.Root>
					<Collapse.Item value="tab1">
						<Collapse.Trigger
							role="heading"
							aria-level={3}
							type="button"
							aria-controls="tab1-section"
							aria-expanded="false">Question A</Collapse.Trigger
						>
						<Collapse.Content id="tab2-section" aria-hidden="true" aria-labelledby="tab2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
					<Collapse.Item defaultExpanded value="tab2">
						<Collapse.Trigger
							role="heading"
							aria-level={3}
							type="button"
							aria-controls="tab2-section"
							aria-expanded="true">Question B</Collapse.Trigger
						>
						<Collapse.Content id="tab2-section" aria-hidden="false" aria-labelledby="tab2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
				</Collapse.Root>
			{/snippet}
			{@render demoAndCode(demo, collapseExpanded)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customlabel" id="default">small</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Collapse.Root>
					<Collapse.Item size="small" value="tab1">
						<Collapse.Trigger
							role="heading"
							aria-level={3}
							type="button"
							aria-controls="tab1-section"
							aria-expanded="false">Question A</Collapse.Trigger
						>
						<Collapse.Content id="tab1-section" aria-hidden="true" aria-labelledby="tab1">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</Collapse.Content>
					</Collapse.Item>
				</Collapse.Root>
			{/snippet}
			{@render demoAndCode(demo, collapseSize)}
		</div>
	</Row>
{/snippet}

{#snippet roundedCode(rct: string)}
	<code
		class="px-2 py-[3.6px] rounded-[6px] text-xs text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		{rct}
	</code>
{/snippet}

{#snippet accessibility()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Accessibility
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			This component must adhere to
			<a
				href="https://www.w3.org/TR/WCAG22/"
				class="text-kui-light-blue-900 underline dark:text-kui-dark-blue-900">WCAG 2.2 (level AA)</a
			> guidelines. Ensure this compliance is maintained when the component is integrated into other
			projects.
		</p>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			Accordion headings should clearly and accurately describe the content within each
			corresponding section.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			Do not use an accordion if it conceals essential information the user needs to complete
			actions on the page.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			Ensure that the Collapse.Trigger has a {@render roundedCode('role="heading"')}
			attribute. This heading should have an appropriate {@render roundedCode('aria-level')} designation,
			based on its position in the page hierarchy.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			If the accordion panel linked to the heading is visible, then the Collapse.Trigger must have {@render roundedCode(
				'aria-expanded="true"'
			)} .
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			The Collapse.Trigger must have an {@render roundedCode('aria-controls')} attribute that points
			to the ID of the associated accordion panel.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			Add the {@render roundedCode('aria-labelledby')} attribute to Collapse.Content and set its ID value
			to the aria-controls of Collapse.Trigger.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			Avoid keyboard traps when adding components to the accordion panel. For instance, users can
			expand an accordion but may not be able to tab to the next focusable element.
		</Text>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'choicebox', href: '/choicebox' }}
			next={{ title: 'description', href: '/description' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render collapse()}
	{@render tabSnip()}

	{#if selected == 'implementation'}
		<section transition:fade>
			{@render defaultCollapse()}
			{@render expanded()}
			{@render size()}
		</section>
	{/if}

	{#if selected == 'accessibility'}
		<section transition:fade>
			{@render accessibility()}
		</section>
	{/if}

	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
