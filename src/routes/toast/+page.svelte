<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { Toaster } from "$lib/index.js"
	import ToastDemo from "$lib/../docs/ui/toastDemo.svelte"
	import {
		toastAction,
		toastDefault,
		toastError,
		toastMultiLine,
		toastPositioning,
		toastPreserve,
		toastSuccess,
		toastUndo,
		toastWarning,
	} from "$lib/../docs/data/toast.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	type ToastVariant =
		| "default"
		| "positioning"
		| "multi-line"
		| "preserve"
		| "action"
		| "undo"
		| "success"
		| "warning"
		| "error"
</script>

<Toaster position="bottom-right" />

<svelte:head>
	<title>Toast</title>
</svelte:head>

{#snippet intro()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			toast
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			A succinct message that is displayed temporarily.
		</p>
	</Row>
{/snippet}

{#snippet roundedCode(value: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{value}
	</code>
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

{#snippet example(title: string, code: string, variant: ToastVariant)}
	<Row>
		<LinkH2 href={`/toast#${title.toLowerCase().replaceAll(" ", "-")}`} aria-label={title}
			>{title}</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<ToastDemo {variant} />
			{/snippet}
			{@render demoAndCode(demo, code)}
		</div>
	</Row>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<LinkH2 href="/toast#best-practices" aria-label="best practices">best practices</LinkH2>
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
					Use {@render roundedCode("toast")} for non-blocking acknowledgements of user-initiated
					actions, such as {@render roundedCode("Domain added")}, {@render roundedCode(
						"Project archived",
					)}, or {@render roundedCode("Deployment canceled")}.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Do not use a toast alone for billing failures, permission denials, or build failures
					that require investigation. Pair a short toast with a persistent recovery step and
					stable identifier.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Keep field validation beside the {@render roundedCode("Input")}; use a persistent
					{@render roundedCode("Note")} or {@render roundedCode("Banner")} for configuration warnings.
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
					Toasts auto-dismiss by default. Pass {@render roundedCode("preserve: true")} only when
					the user must read or act on the message before it disappears.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Undo snackbars should stay visible for 5–10 seconds and pair a past-tense message
					with one {@render roundedCode("Undo")} action. Use the {@render roundedCode(
						"onUndoAction",
					)} option only when the rollback is safe.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Do not stack toasts to narrate one asynchronous flow. Show one message at the
					terminal step instead.
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
					Use one sentence, sentence case, and no trailing period for a single-sentence toast.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Completion messages follow {@render roundedCode("Noun + past participle")}: {@render roundedCode(
						"Blob deleted",
					)} or {@render roundedCode("Environment variable saved")}. Do not add {@render roundedCode(
						"successfully",
					)}.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Error messages use two sentences and end with a recovery step: {@render roundedCode(
						"Couldn't verify domain. Try again.",
					)}. Use {@render roundedCode("Couldn't")} for user-state errors and {@render roundedCode(
						"Failed to",
					)}
					for system or infrastructure failures.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Match the toast verb to the triggering action: {@render roundedCode(
						"Delete Project",
					)} becomes
					{@render roundedCode("Project deleted")}. Use the literal {@render roundedCode(
						"Undo",
					)} label, not
					{@render roundedCode("Restore")} or {@render roundedCode("Bring Back")}.
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
					Keep the toast region {@render roundedCode('aria-live="polite"')}; reserve assertive
					announcements for blocking errors that must interrupt the current flow.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Keep action and dismiss controls keyboard reachable. Do not put primary navigation
					inside a toast because transient content can disappear before keyboard users reach
					it.
				</li>
			</ul>
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "theme switcher", href: "/theme-switcher" }}
			next={{ title: "toggle", href: "/toggle" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render intro()}
	{@render example("default", toastDefault, "default")}
	{@render example("positioning", toastPositioning, "positioning")}
	{@render example("multi-line", toastMultiLine, "multi-line")}
	{@render example("preserve", toastPreserve, "preserve")}
	{@render example("action", toastAction, "action")}
	{@render example("undo", toastUndo, "undo")}
	{@render example("success", toastSuccess, "success")}
	{@render example("warning", toastWarning, "warning")}
	{@render example("error", toastError, "error")}
	{@render bestPractices()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
