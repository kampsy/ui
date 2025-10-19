<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Select } from '$lib/index.js';
	import { selectDefault, selectSize, selectError } from '$lib/../docs/data/select.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';

	let value = $state('');
	let error = $state('Please select a value.');
	let loading = $state(true);
</script>

<svelte:head>
	<title>Select</title>
</svelte:head>

{#snippet select()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			select
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Display a dropdown list of items.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="w-full grid gap-4 lg:flex lg:flex-wrap lg:justify-between">
				{@render demo()}
			</div>
		</div>
		<div class="overflow-hidden rounded-b-xl">
			<CollapseCode {code} />
		</div>
	</div>
{/snippet}

{#snippet defaultSelect()}
	<Row>
		<LinkH2 href="/select#default" aria-label="default">default</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Displays a list of options for the user to pick from—triggered by a button.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Select.Root bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>
			{/snippet}
			{@render demoAndCode(demo, selectDefault)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<LinkH2 href="/select#size" aria-label="size">size</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Select.Root size="small" bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root size="large" bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>
			{/snippet}
			{@render demoAndCode(demo, selectSize)}
		</div>
	</Row>
{/snippet}

{#snippet errorSnip()}
	<Row>
		<LinkH2 href="/select#size" aria-label="size">error</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Select.Root bind:error size="small" bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root bind:error bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root bind:error size="large" bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>
			{/snippet}
			{@render demoAndCode(demo, selectError)}
		</div>
	</Row>
{/snippet}

{#snippet loadingSnip()}
	<Row>
		<LinkH2 href="/select#size" aria-label="size">loading</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Select.Root bind:loading size="small" bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root bind:loading bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root bind:loading size="large" bind:value class="w-full lg:w-auto">
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a fruit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>
			{/snippet}
			{@render demoAndCode(demo, selectError)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'project banner', href: '/project-banner' }}
			next={{ title: 'show more', href: '/show-more' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render select()}
	{@render defaultSelect()}
	{@render size()}
	{@render errorSnip()}
	{@render loadingSnip()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
