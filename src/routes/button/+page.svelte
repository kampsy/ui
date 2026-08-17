<script lang="ts">
	import { ArrowLeft, ArrowRight } from "$lib/icons/index.js"
	import { Button } from "$lib/index.js"
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
	import {
		buttonDisabled,
		buttonLoading,
		buttonPrefixAndSuffix,
		buttonRounded,
		buttonShapes,
		buttonSize,
		buttonVariants,
		buttonDisabledVariants,
	} from "../../docs/data/button.js"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import ArrowUp from "$lib/icons/arrow-up.svelte"
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>

{#snippet button()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			button
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Trigger an action or event, such as submitting a form or displaying a dialog.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-hidden rounded-xl border"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="flex flex-initial flex-col items-start gap-4 md:flex-row">
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
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			The default size is medium.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="tiny">Upload</Button>
				<Button size="small">Upload</Button>
				<Button>Upload</Button>
				<Button size="large">Upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonSize)}
		</div>
	</Row>
{/snippet}

{#snippet types()}
	<Row>
		<LinkH2 href="/button#all-types-and-sizes-in-comparison"
			>All Types and Sizes in comparison</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col gap-6">
					<div class="flex items-center gap-3">
						<Button size="small" variant="default">Upload</Button>
						<Button size="small" variant="error">Upload</Button>
						<Button size="small" variant="warning">Upload</Button>
						<Button size="small" variant="secondary">Upload</Button>
						<Button size="small" variant="tertiary">Upload</Button>
					</div>
					<div class="flex items-center gap-3">
						<Button variant="default">Upload</Button>
						<Button variant="error">Upload</Button>
						<Button variant="warning">Upload</Button>
						<Button variant="secondary">Upload</Button>
						<Button variant="tertiary">Upload</Button>
					</div>
					<div class="flex items-center gap-3">
						<Button size="large" variant="default">Upload</Button>
						<Button size="large" variant="error">Upload</Button>
						<Button size="large" variant="warning">Upload</Button>
						<Button size="large" variant="secondary">Upload</Button>
						<Button size="large" variant="tertiary">Upload</Button>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, buttonVariants)}
		</div>
	</Row>
{/snippet}

<!--Rounded content-->
{#snippet roundedCode(rct: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{rct}
	</code>
{/snippet}

{#snippet shapes()}
	<Row>
		<LinkH2 href="/button#shapes">shapes</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Icon-only buttons should include the {@render roundedCode("svgOnly")} prop and an
			{@render roundedCode("aria-label")}.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button aria-label="Upload" shape="square" size="tiny" svgOnly>
					<ArrowUp />
				</Button>

				<Button aria-label="Upload" shape="square" size="small" svgOnly>
					<ArrowUp />
				</Button>

				<Button aria-label="Upload" shape="square" svgOnly>
					<ArrowUp />
				</Button>

				<Button aria-label="Upload" shape="square" size="large" svgOnly>
					<ArrowUp />
				</Button>

				<Button aria-label="Upload" shape="circle" size="tiny" svgOnly>
					<ArrowUp />
				</Button>

				<Button aria-label="Upload" shape="circle" size="small" svgOnly>
					<ArrowUp />
				</Button>

				<Button aria-label="Upload" shape="circle" svgOnly>
					<ArrowUp />
				</Button>

				<Button aria-label="Upload" shape="circle" size="large" svgOnly>
					<ArrowUp />
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
				<Button>
					{#snippet prefix()}
						<ArrowLeft />
					{/snippet}
					Upload
				</Button>
				<Button>
					{#snippet suffix()}
						<ArrowRight />
					{/snippet}
					Upload
				</Button>
				<Button>
					{#snippet prefix()}
						<ArrowLeft />
					{/snippet}
					{#snippet suffix()}
						<ArrowRight />
					{/snippet}
					Upload
				</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet rounded()}
	<Row>
		<LinkH2 href="/button#rounded">rounded</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Combination of {@render roundedCode('shape="rounded"')} and the
			{@render roundedCode("shadow")} prop, often used on marketing pages.
		</p>

		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button size="small" variant="secondary" shape="rounded" shadow>Upload</Button>
				<Button variant="secondary" shape="rounded" shadow>Upload</Button>
				<Button size="large" variant="secondary" shape="rounded" shadow>Upload</Button>
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
				<Button size="small" loading>Upload</Button>
				<Button loading>Upload</Button>
				<Button size="large" loading>Upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonLoading)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<LinkH2 href="/button#disabled" aria-label="Disabled">Disabled</LinkH2>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button disabled size="small">Upload</Button>
				<Button disabled>Upload</Button>
				<Button disabled size="large">Upload</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet disabledVariants()}
	<Row>
		<LinkH2 href="/button#disabled-variants" aria-label="Disabled variants"
			>Disabled variants</LinkH2
		>
		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Button disabled>Default</Button>
				<Button disabled variant="secondary">Secondary</Button>
				<Button disabled variant="tertiary">Tertiary</Button>
				<Button disabled variant="error">Error</Button>
				<Button disabled variant="warning">Warning</Button>
			{/snippet}
			{@render demoAndCode(demo, buttonDisabledVariants)}
		</div>
	</Row>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<h2
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize"
		>
			Best Practices
		</h2>
		<div class="mt-4">
			<ul class="mt-4 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Use {@render roundedCode("Button")} for actions that mutate state (deploy, save, delete);
					use {@render roundedCode("ButtonLink")} for navigation that changes the URL. Switch to
					a <a href="/menu" class="underline">Menu</a> or
					<a href="/split-button" class="underline">Split Button</a> when more than one related action
					shares a row.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Default {@render roundedCode("Button")} is the primary style. Pass {@render roundedCode(
						'variant="secondary"',
					)} for the supporting action and {@render roundedCode('variant="error"')} for destructive
					confirmations.
					{@render roundedCode("primary")}, {@render roundedCode("success")}, {@render roundedCode(
						"ghost",
					)}, and {@render roundedCode("violet")} are not valid {@render roundedCode(
						"variant",
					)} values.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					For form submits, use {@render roundedCode('type="submit"')}. The HTML {@render roundedCode(
						"type",
					)} attribute controls the button behavior; the visual style lives on {@render roundedCode(
						"variant",
					)}.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Pass {@render roundedCode("loading")} instead of swapping in a spinner so the button stays
					focusable and announces the busy state to assistive tech.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Disable a button only when the action is impossible right now (missing input,
					insufficient permission); pair with a
					<a href="/tooltip" class="underline">Tooltip</a> that explains why.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Title Case the label and name what happens: {@render roundedCode("Deploy Project")}, {@render roundedCode(
						"Invite Member",
					)}, {@render roundedCode("Rotate Key")}. Avoid bare verbs ({@render roundedCode(
						"Submit",
					)}) and generic confirms ({@render roundedCode("OK")}, {@render roundedCode(
						"Confirm",
					)}).
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Destructive buttons follow {@render roundedCode("Verb + Noun")} and pair 1:1 with their
					toast: {@render roundedCode("Delete Project")} then
					{@render roundedCode("Project deleted")}. Mode-switch buttons append {@render roundedCode(
						"Instead",
					)}: {@render roundedCode("Use a Recovery Code Instead")}.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Icon-only buttons require both {@render roundedCode("svgOnly")} and {@render roundedCode(
						"aria-label",
					)}; the component warns in development without them. The {@render roundedCode(
						"aria-label",
					)} names the action and the target ({@render roundedCode("Copy deployment URL")}),
					not the icon ({@render roundedCode("Copy")}).
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Don't set {@render roundedCode("aria-label")} on a button that already has visible text;
					it overrides the label and creates a screen-reader mismatch.
				</li>
			</ul>
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "badge", href: "/badge" }}
			next={{ title: "calendar", href: "/calendar" }}
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
	{@render disabledVariants()}
	{@render bestPractices()}

	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
