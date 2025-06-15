<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { SplitButton } from '$lib/index.js';
	import {
		splitButtonDefault,
		splitButtonMenuAlignment,
		splitButtonTypes
	} from '../../docs/data/split-button.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';

	const sizes: Array<'tiny' | 'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
	const sbTypes: Array<'primary' | 'secondary' | 'tertiary' | 'error' | 'warning'> = [
		'primary',
		'secondary',
		'tertiary',
		'error',
		'warning'
	];
</script>

<svelte:head>
	<title>Split Button</title>
</svelte:head>

{#snippet description()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Split Button
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A button that offers a primary interaction coupled with a dropdown menu offering additional
			actions.
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

{#snippet defaultDescription()}
	<Row>
		<LinkH2 href="/split-button#split-button" aria-label="split-button">default</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The button's primary action should be the first item in the dropdown menu.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="space-y-8">
					<div class="flex flex-wrap gap-4 lg:gap-8">
						{#each sizes as size}
							<SplitButton.Root>
								<SplitButton.Button onclick={() => alert('Clicked save')} {size}
									>save</SplitButton.Button
								>
								<SplitButton.Content class="w-[264px]">
									<SplitButton.Item
										onClick={() => alert('Clicked save')}
										title="Save"
										description="Save changes"
									/>
									<SplitButton.Item
										onClick={() => alert('Clicked save + Redeploy')}
										title="Save + Redeploy"
										description="Save changes and create a new production deployment"
									/>
								</SplitButton.Content>
							</SplitButton.Root>
						{/each}
					</div>
					<div class="w-full flex flex-wrap gap-4 lg:gap-8">
						{#each sizes as size}
							<SplitButton.Root>
								<SplitButton.Button onclick={() => alert('Clicked save')} {size} type="secondary"
									>save</SplitButton.Button
								>
								<SplitButton.Content class="w-[264px]">
									<SplitButton.Item
										onClick={() => alert('Clicked save')}
										title="Save"
										description="Save changes"
									/>
									<SplitButton.Item
										onClick={() => alert('Clicked save + Redeploy')}
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
				<div class="w-full flex flex-wrap gap-4 lg:gap-10">
					{#each sbTypes as sbType}
						<SplitButton.Root>
							<SplitButton.Button onclick={() => alert('Clicked save')} type={sbType}
								>save</SplitButton.Button
							>
							<SplitButton.Content class="w-[264px]">
								<SplitButton.Item
									onClick={() => alert('Clicked save')}
									title="Save"
									description="Save changes"
								/>
								<SplitButton.Item
									onClick={() => alert('Clicked save + Redeploy')}
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
		<LinkH2 href="/split-button#menu-alignment" aria-label="menu-alignment">Menu Alignment</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full flex gap-10">
					<SplitButton.Root>
						<SplitButton.Button onclick={() => alert('Clicked save')}>save</SplitButton.Button>
						<SplitButton.Content class="w-[264px]">
							<SplitButton.Item
								onClick={() => alert('Clicked save')}
								title="Save"
								description="Save changes"
							/>
							<SplitButton.Item
								onClick={() => alert('Clicked save + Redeploy')}
								title="Save + Redeploy"
								description="Save changes and create a new production deployment"
							/>
						</SplitButton.Content>
					</SplitButton.Root>

					<SplitButton.Root alignment="right">
						<SplitButton.Button onclick={() => alert('Clicked save')}>save</SplitButton.Button>
						<SplitButton.Content class="w-[264px]">
							<SplitButton.Item
								onClick={() => alert('Clicked save')}
								title="Save"
								description="Save changes"
							/>
							<SplitButton.Item
								onClick={() => alert('Clicked save + Redeploy')}
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
			previous={{ title: 'spinner', href: '/spinner' }}
			next={{ title: 'status dot', href: '/status-dot' }}
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
