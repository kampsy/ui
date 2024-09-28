<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import CodeSnip from '$lib/code/codeSnip.svelte';
	import type { Snippet } from 'svelte';
	import Error from '$lib/error/error.svelte';
	import {
		errorCustomLabel,
		errorDefault,
		errorSize,
		errorWithProp
	} from '../../docs/data/error.js';
	import Pagination from '$lib/pagination/pagination.svelte';
	import {
		installationConfig,
		installationKampsy,
		installationSvelte,
		installationSveltekit
	} from '../../docs/data/installation.js';
</script>

<svelte:head>
	<title>Installation</title>
</svelte:head>

{#snippet gettingStarted()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Getting started
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Get started with Kampsy-ui by following the quickstart guide and unlock the power of
			interactive Svelte 5 components integrated with Tailwind CSS.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCodeSnip(code: string)}
	<div
		class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<CodeSnip {code} />
	</div>
{/snippet}

{#snippet sveltekit()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Using SvelteKit</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			You can install SvelteKit by running the following command. Remember to choose svelte 5.
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationSveltekit)}
		</div>
	</Row>
{/snippet}

{#snippet svelte()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Using Svelte</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			If you want to get started with Svelte:
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationSvelte)}
		</div>
	</Row>
{/snippet}

{#snippet tailwindcss()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Install Tailwind CSS</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The easiest and fastest way to start using Tailwind CSS from scratch is to <a
				href="https://tailwindcss.com/docs/installation"
				class="underline">visit their website</a
			>
			and follow the framework-specific installation guide.
		</p>
	</Row>
{/snippet}

{#snippet kampsyui()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">install kampsy-ui</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Run the following command to install kmapsy-ui:
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationKampsy)}
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

{#snippet config()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Configuration</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Update the {@render roundedCode('tailwind.config.cjs')} file in your project’s root folder to inform
			the Tailwind CSS compiler where to locate the utility classes and configure Kampsy-ui's custom
			color palette.
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationConfig)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'introduction', href: '/' }}
			next={{ title: 'colors', href: '/colors' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render gettingStarted()}
	{@render sveltekit()}
	{@render svelte()}
	{@render tailwindcss()}
	{@render kampsyui()}
	{@render config()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
