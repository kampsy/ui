<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import { Kbd, Pagination } from "$lib/index.js"
	import { keyboardInputModifiers } from "$lib/../docs/data/keyboard-input.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
</script>

<svelte:head>
	<title>Keyboard Input</title>
</svelte:head>

{#snippet keyboardInputDefault()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-[32px] font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-[48px] lg:tracking-[-2.4px]"
		>
			Keyboard Input
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-[30px] lg:tracking-[-0.33px]"
		>
			Display keyboard input that triggers an action.
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

{#snippet keyboardInputModifiersSnippet()}
	<Row>
		<LinkH2 href="/keyboard-input#modifiers" aria-label="modifiers">Modifiers</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Kbd.Group>
						<Kbd.Root>⌘</Kbd.Root>
						<Kbd.Root>⇧</Kbd.Root>
						<Kbd.Root>⌥</Kbd.Root>
						<Kbd.Root>⌃</Kbd.Root>
					</Kbd.Group>
				</div>
			{/snippet}
			{@render demoAndCode(demo, keyboardInputModifiers)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "input", href: "/input" }}
			next={{ title: "menu", href: "/menu" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render keyboardInputDefault()}
	{@render keyboardInputModifiersSnippet()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
