<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { SplitButton } from "$lib/index.js"
	import {
		splitButtonDefault,
		splitButtonMenuAlignment,
		splitButtonTypes,
	} from "../../docs/data/split-button.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	const sizes: Array<"tiny" | "small" | "medium" | "large"> = ["small", "medium", "large"]
	const sbTypes: Array<"primary" | "secondary" | "tertiary" | "error" | "warning"> = [
		"primary",
		"secondary",
		"tertiary",
		"error",
		"warning",
	]
</script>

<svelte:head>
	<title>Split Button</title>
</svelte:head>

{#snippet description()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			Split Button
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			A button that offers a primary interaction coupled with a dropdown menu offering
			additional actions.
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

{#snippet defaultDescription()}
	<Row>
		<LinkH2 href="/split-button#split-button" aria-label="split-button">default</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			The button's primary action should be the first item in the dropdown menu.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="space-y-8">
					<div class="flex flex-wrap gap-4 lg:gap-8">
						{#each sizes as size, index (index)}
							<SplitButton.Root>
								<SplitButton.Button onclick={() => alert("Clicked save")} {size}
									>save</SplitButton.Button
								>
								<SplitButton.Content class="w-66">
									<SplitButton.Item
										onClick={() => alert("Clicked save")}
										title="Save"
										description="Save changes"
									/>
									<SplitButton.Item
										onClick={() => alert("Clicked save + Redeploy")}
										title="Save + Redeploy"
										description="Save changes and create a new production deployment"
									/>
								</SplitButton.Content>
							</SplitButton.Root>
						{/each}
					</div>
					<div class="flex w-full flex-wrap gap-4 lg:gap-8">
						{#each sizes as size, index (index)}
							<SplitButton.Root>
								<SplitButton.Button
									onclick={() => alert("Clicked save")}
									{size}
									type="secondary">save</SplitButton.Button
								>
								<SplitButton.Content class="w-66">
									<SplitButton.Item
										onClick={() => alert("Clicked save")}
										title="Save"
										description="Save changes"
									/>
									<SplitButton.Item
										onClick={() => alert("Clicked save + Redeploy")}
										title="Save + Redeploy"
										description="Save changes and create a new production deployment"
									/>
								</SplitButton.Content>
							</SplitButton.Root>
						{/each}
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, splitButtonDefault)}
		</div>
	</Row>
{/snippet}

{#snippet types()}
	<Row>
		<LinkH2 href="/split-button#types" aria-label="types">types</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex w-full flex-wrap gap-4 lg:gap-10">
					{#each sbTypes as sbType, index (index)}
						<SplitButton.Root>
							<SplitButton.Button onclick={() => alert("Clicked save")} type={sbType}
								>save</SplitButton.Button
							>
							<SplitButton.Content class="w-66">
								<SplitButton.Item
									onClick={() => alert("Clicked save")}
									title="Save"
									description="Save changes"
								/>
								<SplitButton.Item
									onClick={() => alert("Clicked save + Redeploy")}
									title="Save + Redeploy"
									description="Save changes and create a new production deployment"
								/>
							</SplitButton.Content>
						</SplitButton.Root>
					{/each}
				</div>
			{/snippet}
			{@render demoAndCode(demo, splitButtonTypes)}
		</div>
	</Row>
{/snippet}

{#snippet alignment()}
	<Row>
		<LinkH2 href="/split-button#menu-alignment" aria-label="menu-alignment"
			>Menu Alignment</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex w-full gap-10">
					<SplitButton.Root>
						<SplitButton.Button onclick={() => alert("Clicked save")}>save</SplitButton.Button>
						<SplitButton.Content class="w-66">
							<SplitButton.Item
								onClick={() => alert("Clicked save")}
								title="Save"
								description="Save changes"
							/>
							<SplitButton.Item
								onClick={() => alert("Clicked save + Redeploy")}
								title="Save + Redeploy"
								description="Save changes and create a new production deployment"
							/>
						</SplitButton.Content>
					</SplitButton.Root>

					<SplitButton.Root alignment="right">
						<SplitButton.Button onclick={() => alert("Clicked save")}>save</SplitButton.Button>
						<SplitButton.Content class="w-66">
							<SplitButton.Item
								onClick={() => alert("Clicked save")}
								title="Save"
								description="Save changes"
							/>
							<SplitButton.Item
								onClick={() => alert("Clicked save + Redeploy")}
								title="Save + Redeploy"
								description="Save changes and create a new production deployment"
							/>
						</SplitButton.Content>
					</SplitButton.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, splitButtonMenuAlignment)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "snippet", href: "/snippet" }}
			next={{ title: "status dot", href: "/status-dot" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render description()}
	{@render defaultDescription()}
	{@render types()}
	{@render alignment()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
