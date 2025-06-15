<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Tabs } from '$lib/index.js';
	import {
		tabsDefault,
		tabsDisabled,
		tabsDisabledSpecific,
		tabsSecondary,
		tabsWithIcons
	} from '../../docs/data/tabs.js';
	import { LogoBitbucketColor, LogoGithub, LogoGitlab } from '$lib/icons/index.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';

	let selected = $state('apple');
	let tabDisabled = $state('apple');
	let tabDisabledSpecific = $state('apple');
	let tabWithIcons = $state('github');
	let tabSecondary = $state('github');
</script>

<svelte:head>
	<title>Tabs</title>
</svelte:head>

{#snippet tabs()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			tabs
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Display tab content.
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

{#snippet defaultTabs()}
	<Row>
		<LinkH2 href="/tabs#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Tabs
					bind:selected
					tabs={[
						{ title: 'Apple', value: 'apple' },
						{ title: 'Orange', value: 'orange' },
						{ title: 'Mango', value: 'mango' }
					]}
				/>
			{/snippet}
			{@render demoAndCode(demo, tabsDefault)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<LinkH2 href="/tabs#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Tabs
					disabled
					bind:selected={tabDisabled}
					tabs={[
						{ title: 'Apple', value: 'apple' },
						{ title: 'Orange', value: 'orange' },
						{ title: 'Mango', value: 'mango' }
					]}
				/>
			{/snippet}
			{@render demoAndCode(demo, tabsDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet disableSpecific()}
	<Row>
		<LinkH2 href="/tabs#disable-specific-tabs" aria-label="disable specific tabs"
			>disable specific tabs</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Tabs
					bind:selected={tabDisabledSpecific}
					tabs={[
						{ title: 'Apple', value: 'apple' },
						{ title: 'Orange', value: 'orange' },
						{ title: 'Mango', value: 'mango', disabled: true, tooltip: 'Mangos are not allowed' }
					]}
				/>
			{/snippet}
			{@render demoAndCode(demo, tabsDisabledSpecific)}
		</div>
	</Row>
{/snippet}

{#snippet withIcons()}
	<Row>
		<LinkH2 href="/tabs#with-icons" aria-label="with-icons">with icons</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Tabs
					bind:selected={tabWithIcons}
					tabs={[
						{ title: 'Github', value: 'github', icon: LogoGithub },
						{ title: 'Gitlab', value: 'gitlab', icon: LogoGitlab },
						{ title: 'Bitbucket', value: 'bitbucket', icon: LogoBitbucketColor }
					]}
				/>
			{/snippet}
			{@render demoAndCode(demo, tabsWithIcons)}
		</div>
	</Row>
{/snippet}

{#snippet secondary()}
	<Row>
		<LinkH2 href="/tabs#secondary" aria-label="secondary">secondary</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Tabs
					bind:selected={tabSecondary}
					tabs={[
						{ title: 'Github', value: 'github' },
						{ title: 'Gitlab', value: 'gitlab' },
						{
							title: 'Bitbucket',
							value: 'bitbucket'
						}
					]}
					type="secondary"
				/>
			{/snippet}
			{@render demoAndCode(demo, tabsSecondary)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'table', href: '/table' }}
			next={{ title: 'text', href: '/text' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render tabs()}
	{@render defaultTabs()}
	{@render disabled()}
	{@render disableSpecific()}
	{@render withIcons()}
	{@render secondary()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
