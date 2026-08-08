<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Error from "$lib/error/error.svelte"
	import { errorDefault } from "../../docs/data/error.js"
	import Pagination from "$lib/pagination/pagination.svelte"
</script>

<svelte:head>
	<title>Feedback</title>
</svelte:head>

{#snippet feedback()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			feedback
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Gather text feedback with an associated emotion.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-hidden rounded-xl border"
	>
		<div class="w-full overflow-x-auto p-4 lg:p-6">
			<div class="flex w-full flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultFeedback()}
	<Row>
		<h2
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Should only be used on desktop.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Error>This email address is already in use.</Error>
				</div>
			{/snippet}
			{@render demoAndCode(demo, errorDefault)}
		</div>
	</Row>
{/snippet}

{#snippet inline()}
	<Row>
		<h2
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize"
		>
			<a href="#default" id="default">inline</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Error>This email address is already in use.</Error>
				</div>
			{/snippet}
			{@render demoAndCode(demo, errorDefault)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "button", href: "/button" }}
			next={{ title: "pagination", href: "/pagination" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render feedback()}
	{@render defaultFeedback()}
	{@render inline()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
