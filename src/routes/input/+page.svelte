<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { Input, SearchInput } from "$lib/index.js"
	import ArrowCircleUp from "$lib/icons/arrow-circle-up.svelte"
	import {
		inputDefault,
		inputPrefixAndSuffix,
		inputDisabled,
		inputLabel,
		inputError,
		inputSearch,
		inputRoundedPrefixAndSuffix,
		inputRoundedPrefixAndSuffixWithoutStyling,
	} from "$lib/../docs/data/input.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
</script>

<svelte:head>
	<title>Input</title>
</svelte:head>

{#snippet input()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			input
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Retrieve text input from a user.
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

{#snippet defaultInput()}
	<Row>
		<LinkH2 href="/input#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div
					class="flex w-full flex-initial flex-col items-start justify-between gap-4 md:flex-row"
				>
					<Input aria-labelledby="Demo input" placeholder="small" size="small" />
					<Input aria-labelledby="Demo input" placeholder="default" />
					<Input aria-labelledby="Demo input" placeholder="large" size="large" />
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputDefault)}
		</div>
	</Row>
{/snippet}

{#snippet prefixAndSuffix()}
	<Row>
		<LinkH2 href="/input#prefix-and-suffix" aria-label="prefix and suffix"
			>prefix and suffix</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-initial flex-col items-start justify-start gap-6">
					<Input aria-labelledby="Demo" prefix={ArrowCircleUp} placeholder="default" />

					<Input aria-labelledby="Demo" suffix={ArrowCircleUp} placeholder="default" />
					<Input
						aria-labelledby="Demo"
						prefix="https://"
						suffix=".com"
						placeholder="default"
					/>
					<Input
						aria-labelledby="Demo"
						prefix={ArrowCircleUp}
						prefixStyling={false}
						suffix={ArrowCircleUp}
						suffixStyling={false}
						placeholder="default"
					/>
					<Input aria-labelledby="Demo" prefix="ui/" placeholder="default" />
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet inputDisabledSnip()}
	<Row>
		<LinkH2 href="/input#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-initial flex-col items-start justify-start gap-4">
					<Input aria-labelledby="Demo" placeholder="Disabled with placeholder" disabled />
					<Input aria-labelledby="Demo" value="Disabled with value" disabled />

					<Input
						aria-labelledby="Demo"
						prefix={ArrowCircleUp}
						placeholder="Disabled with prefix"
						disabled
					/>

					<Input
						aria-labelledby="Demo"
						suffix={ArrowCircleUp}
						placeholder="Disabled with suffix"
						disabled
					/>

					<Input
						aria-labelledby="Demo"
						prefix="https://"
						suffix=".com"
						placeholder="Disabled with prefix and suffix"
						disabled
					/>

					<Input
						aria-labelledby="Demo"
						prefix={ArrowCircleUp}
						prefixStyling={false}
						suffix={ArrowCircleUp}
						suffixStyling={false}
						placeholder="Disabled with prefix and suffix"
						disabled
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet searchSnip()}
	<Row>
		<LinkH2 href="/input#search" aria-label="search">search</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Automatically clears the input if escape is pressed.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<SearchInput placeholder="Enter some text..." />
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputSearch)}
		</div>
	</Row>
{/snippet}

{#snippet errorSnip()}
	<Row>
		<LinkH2 href="/input#error" aria-label="error">error</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-initial flex-col items-start justify-start gap-8">
					<div class="grid w-full grid-cols-1 lg:grid-cols-3">
						<Input
							aria-labelledby="Demo input"
							error="An error message."
							placeholder="long-error@gmail.com"
							size="small"
						/>
					</div>
					<div class="grid w-full grid-cols-1 lg:grid-cols-3">
						<Input
							aria-labelledby="Demo input"
							error="An error message."
							placeholder="long-error@gmail.com"
						/>
					</div>
					<div class="grid w-full grid-cols-1 lg:grid-cols-3">
						<Input
							aria-labelledby="Demo input"
							error="An error message."
							placeholder="long-error@gmail.com"
							size="large"
						/>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputError)}
		</div>
	</Row>
{/snippet}

{#snippet inputLabelSnip()}
	<Row>
		<LinkH2 href="/input#label" aria-label="label">label</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Input aria-labelledby="Demo input" label="Label" placeholder="Label" />
			{/snippet}
			{@render demoAndCode(demo, inputLabel)}
		</div>
	</Row>
{/snippet}

{#snippet roundedPrefixAndSuffixSnip()}
	<Row>
		<LinkH2 href="/input#rounded-prefix-and-suffix" aria-label="rounded prefix and suffix">
			rounded prefix and suffix
		</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Input
						aria-labelledby="Demo"
						placeholder="Label example"
						prefix="www."
						rounded
						suffix=".com"
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputRoundedPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet roundedPrefixAndSuffixWithoutStylingSnip()}
	<Row>
		<LinkH2
			href="/input#rounded-prefix-and-suffix-without-styling"
			aria-label="rounded prefix and suffix without styling"
		>
			rounded prefix and suffix without styling
		</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Input
						aria-labelledby="Demo"
						placeholder="Label example"
						prefix="www."
						prefixStyling={false}
						rounded
						suffix=".com"
						suffixStyling={false}
					/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, inputRoundedPrefixAndSuffixWithoutStyling)}
		</div>
	</Row>
{/snippet}

{#snippet inlineCode(value: string)}
	<code
		class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{value}
	</code>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<LinkH2 href="/input#best-practices" aria-label="best practices">best practices</LinkH2>
		<div class="mt-4">
			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				When to use
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Use <code>Input</code> for a single line of free-form text such as names, domains, or tokens.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Switch to <code>Textarea</code> the moment content can wrap to multiple lines.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Use <code>Combobox</code> when the value comes from a known list the user filters by typing.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					For an inline search box, use <code>SearchInput</code> with a scoped placeholder like
					{@render inlineCode("Search projects")}; do not embed it inside an unrelated form.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Behavior
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Validate on blur, not on every keystroke; surface the message with the {@render inlineCode(
						"error",
					)} prop.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Trim leading and trailing whitespace before submit so {@render inlineCode(
						" example.com",
					)} and {@render inlineCode("example.com")} resolve to one value.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Keep the field focusable while saving; pair {@render inlineCode("disabled")} with a spinner
					only when input is impossible.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Do not wrap a labelled <code>Input</code> in a <code>Tooltip</code>; put the
					explainer on a sibling icon button so the label stays announced.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Content
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Labels are short Title Case nouns such as {@render inlineCode("Project Name")},
					{@render inlineCode("Domain")}, or {@render inlineCode("Environment Variable Name")}.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Placeholders show an example value such as {@render inlineCode("my-awesome-project")} or
					{@render inlineCode("example.com")}, never instructions.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Helper text is sentence case, one sentence with a trailing period, on a sibling
					element wired through {@render inlineCode("aria-describedby")}.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Validation names the field and the constraint, ends in a period, and skips "please":<br
					/>
					{@render inlineCode("Project name is required.")} and {@render inlineCode(
						"Code must be 6 digits.",
					)}.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Accessibility
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					Passing a string to <code>label</code> associates it with the input automatically;
					provide an <code>id</code> when you need a stable ID for external labels or references.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					For icon-only affordances, use a circular button with an accessible name such as
					{@render inlineCode('aria-label="Clear search"')} rather than an unlabeled icon.
				</li>
				<li
					class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6"
				>
					A <code>SearchInput</code> placeholder names the scope, such as
					{@render inlineCode("Search projects")}, so its purpose is clear without sighted
					context.
				</li>
			</ul>
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "error", href: "/error" }}
			next={{ title: "keyboard input", href: "/keyboard-input" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render input()}
	{@render defaultInput()}
	{@render prefixAndSuffix()}
	{@render inputDisabledSnip()}
	{@render searchSnip()}
	{@render errorSnip()}
	{@render inputLabelSnip()}
	{@render roundedPrefixAndSuffixSnip()}
	{@render roundedPrefixAndSuffixWithoutStylingSnip()}
	{@render bestPractices()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
