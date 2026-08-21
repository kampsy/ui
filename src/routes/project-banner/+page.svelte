<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { ProjectBanner, Tooltip } from "$lib/index.js"
	import {
		projectBannerError,
		projectBannerSuccess,
		projectBannerWarning,
	} from "../../docs/data/project-banner.js"
	import { RotateCounterClockWise, ShieldCheck, Warning } from "$lib/icons/index.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
</script>

<svelte:head>
	<title>Project Banner</title>
</svelte:head>

{#snippet projectBanner()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-[32px] font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-[48px] lg:tracking-[-2.4px]"
		>
			Project Banner
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-[30px] lg:tracking-[-0.33px]"
		>
			Used for temporary, project-wide notifications that require resolution.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl border"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="flex w-full flex-nowrap items-center justify-between gap-4">
				{@render demo()}
			</div>
		</div>
		<div class="overflow-hidden rounded-b-xl">
			<CollapseCode {code} />
		</div>
	</div>
{/snippet}

<!--Rounded content-->
{#snippet roundedCode(rct: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{rct}
	</code>
{/snippet}

{#snippet success()}
	<Row>
		<LinkH2 href="/project-banner#success" aria-label="success">success</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			For positive, temporary mitigations put in place to protect a project, e.g., Attack
			Challenge Mode.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<ProjectBanner
						icon={ShieldCheck}
						callToAction={{
							label: "Disable",
							href: "/project-banner",
						}}
						label="Attack Challenge Mode is enabled for this project"
						variant="success"
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, projectBannerSuccess)}
		</div>
	</Row>
{/snippet}

{#snippet warning()}
	{#snippet labelSnip()}
		This project was rolled back by
		<Tooltip
			class="underline decoration-dashed underline-offset-[5px]"
			text="Yesterday for project marketing-website"
		>
			@johnphamous
		</Tooltip>
	{/snippet}

	<Row>
		<LinkH2 href="/project-banner#warning" aria-label="warning">warning</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			When a project is in an exceptional state which requires non-immediate action to exit,
			e.g., during a rollback. The {@render roundedCode("label")} prop accepts either a {@render roundedCode(
				"string",
			)} or a
			{@render roundedCode("Snippet")}.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<ProjectBanner
						icon={RotateCounterClockWise}
						callToAction={{
							label: "Undo Rollback",
							onClick: () => {
								alert("Button clicked")
							},
						}}
						label={labelSnip}
						variant="warning"
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, projectBannerWarning)}
		</div>
	</Row>
{/snippet}

{#snippet error()}
	<Row>
		<LinkH2 href="/project-banner#error" aria-label="error">error</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			When a project is approaching or experiencing critical downtime which requires immediate
			attention, e.g., when payment is overdue.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<ProjectBanner
						icon={Warning}
						callToAction={{
							label: "Add Credit Card",
							href: "/project-banner",
						}}
						label="Payment failed, update credit card information before your account is shut down"
						variant="error"
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, projectBannerError)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "progress", href: "/progress" }}
			next={{ title: "search input", href: "/search-input" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render projectBanner()}
	{@render success()}
	{@render warning()}
	{@render error()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
