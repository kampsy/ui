<script lang="ts">
	import { ArrowLeft, ArrowRight } from '$lib/icons/index.js';
	import { Button } from '$lib/index.js';
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';
	import {
		buttonDisabled,
		buttonLoading,
		buttonPrefixAndSuffix,
		buttonRounded,
		buttonShapes,
		buttonSize,
		buttonVariants
	} from '../../docs/data/button.js';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import ArrowUp from '$lib/icons/arrow-up.svelte';
	import { Tabs, Text } from '$lib/index.js';
	import { fade } from 'svelte/transition';
	import { Webhook, Accessibility } from '$lib/icons/index.js';

	let selected = $state('implementation');
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>

{#snippet button()}
	<Row bottomLine={false}>
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
		<LinkH2 href="/button#size">size</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The default size is medium.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny" aria-label="tiny">upload</Button>
				<Button size="small" aria-label="small">upload</Button>
				<Button aria-label="medium">upload</Button>
				<Button size="large" aria-label="large">upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonSize)}
		</div>
	</Row>
{/snippet}

{#snippet types()}
	<Row>
		<LinkH2 href="/button#variants">variants</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button variant="secondary" aria-label="secondary">upload</Button>
				<Button variant="tertiary" aria-label="tertiary">upload</Button>
				<Button variant="error" aria-label="error">upload</Button>
				<Button variant="warning" aria-label="warning">upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonVariants)}
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
		<LinkH2 href="/button#shapes">shapes</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Icon-only buttons should include the {@render roundedCode('shape')} prop and an
			{@render roundedCode('aria-label')}.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button aria-label="square tiny" shape="square" size="tiny">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="square small" shape="square" size="small">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="square medium" shape="square">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="square large" shape="square" size="large">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="circle tiny" shape="circle" size="tiny">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="circle small" shape="circle" size="small">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="circle medium" shape="circle">
					<div class="w-[16px] h-[16px]">
						<ArrowUp />
					</div>
				</Button>

				<Button aria-label="circle large" shape="circle" size="large">
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
		<LinkH2 href="/button#prefix-and-suffix">Prefix and Suffix</LinkH2>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button iconPrefix={ArrowLeft} aria-label="icon prefix">upload</Button>
				<Button iconSuffix={ArrowRight} aria-label="icon suffix">upload</Button>
				<Button iconPrefix={ArrowLeft} iconSuffix={ArrowRight} aria-label="icon prefix and suffix"
					>upload</Button
				>
			{/snippet}
			{@render demoAndCode(demo, buttonPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet rounded()}
	<Row>
		<LinkH2 href="/button#rounded">rounded</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Combination of {@render roundedCode('rounded')} and the
			{@render roundedCode('shadow')} prop, often used on marketing pages.
		</p>

		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny" variant="secondary" rounded aria-label="tiny rounded">upload</Button>
				<Button size="small" variant="secondary" rounded aria-label="small rounded">upload</Button>
				<Button variant="secondary" rounded aria-label="medium rounded">upload</Button>
				<Button size="large" variant="secondary" rounded aria-label="large rounded">upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonRounded)}
		</div>
	</Row>
{/snippet}

{#snippet loading()}
	<Row>
		<LinkH2 href="/button#loading" aria-label="loading">loading</LinkH2>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny" loading aria-label="tiny loading">upload</Button>
				<Button size="small" loading aria-label="small loading">upload</Button>
				<Button loading aria-label="medium loading">upload</Button>
				<Button size="large" loading aria-label="large loading">upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonLoading)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<LinkH2 href="/button#disabled" aria-label="disabled">disabled</LinkH2>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny" disabled aria-label="tiny disabled">upload</Button>
				<Button size="small" disabled aria-label="small disabled">upload</Button>
				<Button disabled aria-label="tiny disabled">upload</Button>
				<Button size="large" disabled>upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonDisabled)}
		</div>
	</Row>
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
			This component aims to adhere to {@render roundedCode('WCAG 2.2 (level AA)')} guidelines, and it
			is important to maintain this commitment when implementing the component across other projects.
			This section provides guidance to support that effort.
		</p>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			A button that is focused should be activated using the {@render roundedCode('Space')} or {@render roundedCode(
				'Enter'
			)} keys.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			It is important for the button to have a clear description, which can be provided either as
			text on the button itself or by using the {@render roundedCode('aria-label')} or {@render roundedCode(
				'aria-labelledby'
			)} attributes.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			If the button includes a description, it should also have an {@render roundedCode(
				'aria-labelledby'
			)} attribute that matches the ID of the description.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			After the button is activated, ensure that focus is set appropriately based on the type of
			action that the button performs. For guidance, refer to the <a
				href="https://www.w3.org/WAI/ARIA/apg/patterns/button/"
				class="text-kui-light-blue-900 underline dark:text-kui-dark-blue-900"
				>W3C WAI-ARIA Authoring Practices Button Design Pattern</a
			> for examples.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			In some situations, it may be important to inform the user that a button is in a pressed
			state—such as when a button opens a contextual menu. This can be achieved by adding {@render roundedCode(
				'aria-pressed="true"'
			)} to the button using JavaScript when it is clicked, and removing it when necessary.
		</Text>
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
	{@render tabSnip()}

	{#if selected == 'implementation'}
		<section transition:fade>
			{@render size()}
			{@render types()}
			{@render shapes()}
			{@render prefixAndSuffix()}
			{@render rounded()}
			{@render loading()}
			{@render disabled()}
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
