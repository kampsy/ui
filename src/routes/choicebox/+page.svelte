<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { Choicebox, Badge } from "$lib/index.js"
	import {
		choiceboxCustomContent,
		choiceboxDefault,
		choiceboxDisabled,
		choiceboxMultiselect,
	} from "$lib/../docs/data/choicebox.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	let value: string | string[] = $state("")
	let value2: string | string[] = $state([])
</script>

<svelte:head>
	<title>Choicebox</title>
</svelte:head>

{#snippet choicebox()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			choicebox
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			A larger form of Radio or Checkbox, where the user has a larger tap target and more
			details.
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

{#snippet defaultChoicebox()}
	<Row>
		<LinkH2 href="/choicebox#Single-select" aria-label="Single-select">Single-select</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Choicebox.Group label="select a plan" type="radio" bind:value>
						<Choicebox.Item
							defaultChecked
							description="Free for two weeks"
							title="Pro Trial"
							value="trial"
						/>
						<Choicebox.Item description="Get started now" title="Pro" value="pro" />
					</Choicebox.Group>
				</div>
			{/snippet}
			{@render demoAndCode(demo, choiceboxDefault)}
		</div>
	</Row>
{/snippet}

{#snippet multiselect()}
	<Row>
		<LinkH2 href="/choicebox#multiselect" aria-label="multiselect">multiselect</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Choicebox.Group label="select a plan" type="checkbox" bind:value>
						<Choicebox.Item description="Free for two weeks" title="Pro Trial" value="trial" />
						<Choicebox.Item description="Get started now" title="Pro" value="pro" />
					</Choicebox.Group>
				</div>
			{/snippet}
			{@render demoAndCode(demo, choiceboxMultiselect)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<LinkH2 href="/choicebox#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex w-full flex-initial flex-col items-stretch justify-start gap-6">
					<Choicebox.Group label="Choicebox group disabled" disabled type="radio" bind:value>
						<Choicebox.Item description="Free for two weeks" title="Pro Trial" value="trial" />
						<Choicebox.Item description="Get started now" title="Pro" value="pro" />
					</Choicebox.Group>
					<Choicebox.Group label="Single input disabled" type="checkbox" bind:value={value2}>
						<Choicebox.Item
							description="Free for two weeks"
							disabled
							title="Pro Trial"
							value="trial"
						/>
						<Choicebox.Item description="Get started now" title="Pro" value="pro" />
					</Choicebox.Group>
				</div>
			{/snippet}
			{@render demoAndCode(demo, choiceboxDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet customContent()}
	<Row>
		<LinkH2 href="/choicebox#custom-content" aria-label="custom content">custom content</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Choicebox.Group label="select a plan" type="radio" bind:value>
						<Choicebox.Item description="Free for two weeks" title="Pro Trial" value="trial">
							<div class="flex justify-center p-2">
								<Badge variant="trial">Trial</Badge>
							</div>
						</Choicebox.Item>
						<Choicebox.Item description="Get started now" title="Pro" value="pro">
							<div class="flex justify-center p-2">
								<Badge variant="blue">Pro</Badge>
							</div>
						</Choicebox.Item>
					</Choicebox.Group>
				</div>
			{/snippet}
			{@render demoAndCode(demo, choiceboxCustomContent)}
		</div>
	</Row>
{/snippet}

{#snippet roundedCode(rct: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{rct}
	</code>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<LinkH2 href="/choicebox#best-practices" aria-label="best practices">best practices</LinkH2
		>
		<div class="mt-4">
			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				When to use
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Use Choicebox when a choice benefits from a larger tap target plus a description or
					icon, like a framework picker, plan comparison, or deployment region with latency.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Single-select for mutually exclusive choices, multi-select for additive ones. Don’t
					mix the two within one group.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Cap at 4–6 tiles. Past that, switch to a <a href="/select" class="underline"
						>Select</a
					>
					so the page doesn’t scroll for a single field. For plain text labels with no description,
					use <a href="/radio" class="underline">Radio</a>.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Behavior
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					The whole tile is the click and focus target; tapping anywhere inside selects it.
					Don’t place nested buttons or links inside a tile that would steal the click.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Selected state shows a check or filled dot in the corner. The border highlight alone
					isn’t enough on low-contrast screens.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Disabled tiles need a <a href="/tooltip" class="underline">Tooltip</a> naming why ({@render roundedCode(
						"Available on Pro",
					)}). A faded tile with no reason reads as broken.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Content
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Titles are parallel: one Title Case title plus one sentence-case description per
					tile, ending in a period.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Don’t restate the title in the description. The description adds the differentiator ({@render roundedCode(
						"$20/mo · 100 GB bandwidth",
					)}), not a synonym.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Icons are decorative when paired with a title; if the icon is the only label, give
					the tile an {@render roundedCode("aria-label")} naming the choice.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Accessibility
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Tiles render as radios or checkboxes under the hood, so they are kept inside a {@render roundedCode(
						"<fieldset>",
					)} with a {@render roundedCode("<legend>")} so screen readers announce the group.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Arrow keys move within a single-select group, Space toggles in multi-select. Don’t
					override those keys with custom handlers.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Color is not the selection signal. Pair the highlight border with the corner check so
					colorblind users still see what’s active.
				</li>
			</ul>
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "checkbox", href: "/checkbox" }}
			next={{ title: "collapse", href: "/collapse" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render choicebox()}
	{@render defaultChoicebox()}
	{@render multiselect()}
	{@render disabled()}
	{@render customContent()}
	{@render bestPractices()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
