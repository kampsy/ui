<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { Checkbox } from "$lib/index.js"
	import {
		checkboxDefault,
		checkboxDisabled,
		checkboxIndeterminate,
	} from "$lib/../docs/data/checkbox.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	let checked = $state(false)
</script>

<svelte:head>
	<title>Checkbox</title>
</svelte:head>

{#snippet checkbox()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Checkbox
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-6 lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A control that toggles between two options, checked or unchecked.
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

{#snippet defaultCheckbox()}
	<Row>
		<LinkH2 href="/checkbox#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Checkbox bind:checked>Option 1</Checkbox>
				</div>
			{/snippet}
			{@render demoAndCode(demo, checkboxDefault)}
		</div>
	</Row>
{/snippet}

{#snippet disabledCheckbox()}
	<Row>
		<LinkH2 href="/checkbox#disabled" aria-label="disabled">disabled</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col items-stretch justify-start gap-4 flex-initial">
					<Checkbox disabled>Disabled</Checkbox>
					<Checkbox checked disabled>Disabled Checked</Checkbox>
					<Checkbox disabled indeterminate>Disabled Indeterminate</Checkbox>
				</div>
			{/snippet}
			{@render demoAndCode(demo, checkboxDisabled)}
		</div>
	</Row>
{/snippet}

{#snippet indeterminate()}
	<Row>
		<LinkH2 href="/checkbox#indeterminate" aria-label="indeterminate">indeterminate</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Checkbox indeterminate>Option 1</Checkbox>
				</div>
			{/snippet}
			{@render demoAndCode(demo, checkboxIndeterminate)}
		</div>
	</Row>
{/snippet}

{#snippet roundedCode(rct: string)}
	<code
		class="px-2 py-[3.6px] rounded-md text-xs text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		{rct}
	</code>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-8 tracking-[-0.96px] mb-3"
		>
			Best Practices
		</h2>
		<div class="mt-4">
			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[16px] font-semibold leading-6 tracking-[-0.16px] mb-2"
			>
				When to use
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Use Checkbox for multi-select inside a list, like table-row pickers, multi-pick
					filters, and opt-in preference groups.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Use it for acknowledgments where the user must affirm a specific statement, such as
					terms of service or an irreversible export.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					For a single boolean setting like dark mode or password protection, use
					<a href="/toggle" class="underline">Toggle</a>. The on/off mechanic is clearer there
					than a lone checkbox.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[16px] font-semibold leading-6 tracking-[-0.16px] mt-6 mb-2"
			>
				Behavior
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					{@render roundedCode("indeterminate")} is a visual state, not a third value. Drive it from
					a parent that knows partial selection, and clear it as soon as every child is fully checked
					or unchecked.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Validation on a required acknowledgment fires on submit, not on blur, so checking and
					unchecking should not flash an error.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Disabled checkboxes still need a <a href="/tooltip" class="underline">Tooltip</a>
					naming the reason; a greyed box with no explanation reads as a bug.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[16px] font-semibold leading-6 tracking-[-0.16px] mt-6 mb-2"
			>
				Content
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Group label above a {@render roundedCode("<fieldset>")} is a Title Case noun like
					{@render roundedCode("Notifications")} or {@render roundedCode(
						"Required Permissions",
					)}. No trailing colon.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Acknowledgment label is a full sentence ending in a period:
					{@render roundedCode("I agree to the Terms of Service.")}
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Indeterminate copy names the partial count next to the group label ({@render roundedCode(
						"3 of 5 selected",
					)}). Never leave the dash state unlabeled.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[16px] font-semibold leading-6 tracking-[-0.16px] mt-6 mb-2"
			>
				Accessibility
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Wrap related checkboxes in a {@render roundedCode("<fieldset>")} with a
					{@render roundedCode("<legend>")} so screen readers announce the group name before each
					option.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					Row-select checkbox in a <a href="/table" class="underline">Table</a> has no visible
					label. Set {@render roundedCode('aria-label="Select {row name}"')} so the row stays identifiable
					out of context.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
				>
					The click target already extends to the label. Don’t override the
					{@render roundedCode("<label>")}/{@render roundedCode("htmlFor")} association with a custom
					wrapper that breaks the click region.
				</li>
			</ul>
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "calendar", href: "/calendar" }}
			next={{ title: "choicebox", href: "/choicebox" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render checkbox()}
	{@render defaultCheckbox()}
	{@render disabledCheckbox()}
	{@render indeterminate()}
	{@render bestPractices()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
