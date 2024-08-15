<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Select } from '$lib/index.js';
	import { selectDefault, selectSize } from '../../docs/data/select.js';

	let value = $state('');
</script>

<svelte:head>
	<title>Select</title>
</svelte:head>

{#snippet select()}
	<Row>
		<h1
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			select
		</h1>
		<p
			class="first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Display a dropdown list of items.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-light-bg dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 rounded-lg"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="w-full flex flex-wrap gap-4 justify-between">
				{@render demo()}
			</div>
		</div>
		<div class="overflow-hidden rounded-b-lg">
			<CollapseCode {code} />
		</div>
	</div>
{/snippet}

{#snippet defaultSelect()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Displays a list of options for the user to pick from—triggered by a button.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Select.Root bind:value class="w-full lg:w-auto" >
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a friuit" />
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
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">size</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Select.Root size="small" bind:value class="w-full lg:w-auto" >
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a friuit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root bind:value class="w-full lg:w-auto" >
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a friuit" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="apple">apple</Select.Item>
						<Select.Item value="banana">banana</Select.Item>
						<Select.Item value="orange">orange</Select.Item>
						<Select.Item value="pineapple">pineapple</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root size="large" bind:value class="w-full lg:w-auto" >
					<Select.Trigger class="w-full lg:w-[200px]">
						<Select.Value placeholder="select a friuit" />
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

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'progress', href: '/progress' }}
			next={{ title: 'spinner', href: '/spinner' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render select()}
	{@render defaultSelect()}
	{@render size()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
