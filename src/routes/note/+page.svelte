<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Button, Note } from '$lib/index.js';
	import {
		noteAction,
		noteDefault,
		noteSuccess,
		noteError,
		noteWarning,
		noteViolet,
		noteCyan,
		noteSecondary
	} from '../../docs/data/note.js';
</script>

<svelte:head>
	<title>Note</title>
</svelte:head>

{#snippet note()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			note
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Display text that requires attention or provides additional information.
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

{#snippet defaultNote()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6 md:space-y-0 md:flex md:gap-6">
					<Note size="small">A small note</Note>
					<Note>A default note</Note>
					<Note size="large">A large note</Note>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteDefault)}
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

{#snippet actionSnip()}
	<Button size="small">Upgrade</Button>
{/snippet}

{#snippet action()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#customelabel" id="default">action</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The {@render roundedCode('action')} prop accepts a {@render roundedCode('Snippet')}.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Note action={actionSnip}>This note details some information.</Note>
					<Note action={actionSnip}>
						This note details a large amount information that could potentially wrap into two or
						more lines, forcing the height of the Note to be larger.
					</Note>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteAction)}
		</div>
	</Row>
{/snippet}

{#snippet success()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">success</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Note type="success">This note details some success information.</Note>
					<Note type="success" action={actionSnip}>
						This note details some success information.
					</Note>
					<Note type="success" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
					<Note fill type="success">This note details some success information.</Note>
					<Note fill type="success" action={actionSnip}>
						This note details some success information.
					</Note>
					<Note fill type="success" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteSuccess)}
		</div>
	</Row>
{/snippet}

{#snippet error()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">error</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Note type="error">This note details some error information.</Note>
					<Note type="error" action={actionSnip}>This note details some error information.</Note>
					<Note type="error" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
					<Note fill type="error">This note details some error information.</Note>
					<Note fill type="error" action={actionSnip}
						>This note details some error information.</Note
					>
					<Note fill type="error" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteError)}
		</div>
	</Row>
{/snippet}

{#snippet warning()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">warning</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Note type="warning">This note details some warning information.</Note>
					<Note type="warning" action={actionSnip}>
						This note details some warning information.
					</Note>
					<Note type="warning" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
					<Note fill type="warning">This note details some warning information.</Note>
					<Note fill type="warning" action={actionSnip}>
						This note details some warning information.
					</Note>
					<Note fill type="warning" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteWarning)}
		</div>
	</Row>
{/snippet}

{#snippet secondary()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">secondary</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Note type="secondary">This note details some secondary information.</Note>
					<Note type="secondary" action={actionSnip}>
						This note details some secondary information.
					</Note>
					<Note type="secondary" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
					<Note fill type="secondary">This note details some secondary information.</Note>
					<Note fill type="secondary" action={actionSnip}>
						This note details some secondary information.
					</Note>
					<Note fill type="secondary" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteSecondary)}
		</div>
	</Row>
{/snippet}

{#snippet violet()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">violet</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Note type="violet">This note details some violet information.</Note>
					<Note type="violet" action={actionSnip}>This note details some violet information.</Note>
					<Note type="violet" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
					<Note fill type="violet">This note details some violet information.</Note>
					<Note fill type="violet" action={actionSnip}
						>This note details some violet information.</Note
					>
					<Note fill type="violet" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteViolet)}
		</div>
	</Row>
{/snippet}

{#snippet cyan()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#size" id="default">cyan</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Note type="cyan">This note details some cyan information.</Note>
					<Note type="cyan" action={actionSnip}>This note details some cyan information.</Note>
					<Note type="cyan" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
					<Note fill type="cyan">This note details some cyan information.</Note>
					<Note fill type="cyan" action={actionSnip}>This note details some cyan information.</Note>
					<Note fill type="cyan" action={actionSnip}>
						This note details some success information. Check
						<a href="/#" class="hover:underline">the documentation</a> to learn more.
					</Note>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteCyan)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">disabled</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Note action={actionSnip} fill type="warning">This note details a warning.</Note>
					<Note action={actionSnip} fill type="warning"
						>This filled note details some success information. Check <a
							href="/#"
							class="hover:underline">the documentation</a
						> to learn more.</Note
					>
				</div>
			{/snippet}
			{@render demoAndCode(demo, noteDefault)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'error', href: '/error' }}
			next={{ title: 'pagination', href: '/pagination' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render note()}
	{@render defaultNote()}
	{@render action()}
	{@render success()}
	{@render error()}
	{@render warning()}
	{@render secondary()}
	{@render violet()}
	{@render cyan()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
