<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { Table } from '$lib/index.js';
	import { tableDefault, tableStriped, tableInteractive, tableFull } from '$lib/../docs/data/table.js';
	import Pagination from '$lib/pagination/pagination.svelte';

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		maximumFractionDigits: 2,
		currency: 'usd'
	});

	function formatCurrency(amount: number): string {
		return formatter.format(amount);
	}

	const items = [
		{
			product: 'Brake Pads Set',
			usage: '100 sets',
			price: '$50 per set',
			charge: 5000
		},
		{
			product: 'Oil Filters',
			usage: '200 filters',
			price: '$10 per filter',
			charge: 2000
		},
		{
			product: 'Car Batteries',
			usage: '50 batteries',
			price: '$100 per battery',
			charge: 5000
		},
		{
			product: 'Headlight Bulbs',
			usage: '300 bulbs',
			price: '$15 per bulb',
			charge: 4500
		},
		{
			product: 'Windshield Wipers',
			usage: '250 pairs',
			price: '$20 per pair',
			charge: 5000
		},
		{
			product: 'Spark Plugs',
			usage: '500 sets',
			price: '$5 per set',
			charge: 2500
		}
	];
</script>

<svelte:head>
	<title>Table</title>
</svelte:head>

{#snippet table()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			table
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A semantic HTML table component
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-lg overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultTable()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Basic table</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Col 1</Table.Head>
								<Table.Head>Col 2</Table.Head>
								<Table.Head>Col 3</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							<Table.Row>
								<Table.Cell>Value 1.1</Table.Cell>
								<Table.Cell>Value 1.2</Table.Cell>
								<Table.Cell>Value 1.3</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Value 2.1</Table.Cell>
								<Table.Cell>Value 2.2</Table.Cell>
								<Table.Cell>Value 2.3</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Value 3.1</Table.Cell>
								<Table.Cell>Value 3.2</Table.Cell>
								<Table.Cell>Value 3.3</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, tableDefault)}
		</div>
	</Row>
{/snippet}

{#snippet striped()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">striped table</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Col 1</Table.Head>
								<Table.Head>Col 2</Table.Head>
								<Table.Head>Col 3</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body striped>
							<Table.Row>
								<Table.Cell>Value 1.1</Table.Cell>
								<Table.Cell>Value 1.2</Table.Cell>
								<Table.Cell>Value 1.3</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Value 2.1</Table.Cell>
								<Table.Cell>Value 2.2</Table.Cell>
								<Table.Cell>Value 2.3</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Value 3.1</Table.Cell>
								<Table.Cell>Value 3.2</Table.Cell>
								<Table.Cell>Value 3.3</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, tableStriped)}
		</div>
	</Row>
{/snippet}

{#snippet interactive()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">interactive table</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Table.Root>
						<Table.Header>
							<Table.Row>
								<Table.Head>Col 1</Table.Head>
								<Table.Head>Col 2</Table.Head>
								<Table.Head>Col 3</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body interactive>
							<Table.Row>
								<Table.Cell>Value 1.1</Table.Cell>
								<Table.Cell>Value 1.2</Table.Cell>
								<Table.Cell>Value 1.3</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Value 2.1</Table.Cell>
								<Table.Cell>Value 2.2</Table.Cell>
								<Table.Cell>Value 2.3</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell>Value 3.1</Table.Cell>
								<Table.Cell>Value 3.2</Table.Cell>
								<Table.Cell>Value 3.3</Table.Cell>
							</Table.Row>
						</Table.Body>
					</Table.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, tableInteractive)}
		</div>
	</Row>
{/snippet}

{#snippet full()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">full featured table</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Table.Root>
						<Table.Colgroup>
							<Table.Col class="w-[44%]" />
							<Table.Col class="w-[22%]" />
							<Table.Col class="w-[22%]" />
							<Table.Col class="w-[11%]" />
						</Table.Colgroup>
						<Table.Header>
							<Table.Row>
								<Table.Head>Product</Table.Head>
								<Table.Head>Usage</Table.Head>
								<Table.Head>Price</Table.Head>
								<Table.Head>Charge</Table.Head>
							</Table.Row>
						</Table.Header>
						<Table.Body interactive striped>
							{#each items as item}
								<Table.Row>
									<Table.Cell>{item.product}</Table.Cell>
									<Table.Cell>{item.usage}</Table.Cell>
									<Table.Cell>{item.price}</Table.Cell>
									<Table.Cell>{formatCurrency(item.charge)}</Table.Cell>
								</Table.Row>
							{/each}
						</Table.Body>
						<Table.Footer>
							<Table.Row>
								<Table.Cell class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium">Subtotal</Table.Cell>
								<Table.Cell></Table.Cell>
								<Table.Cell></Table.Cell>
								<Table.Cell class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium">
									{formatCurrency(items.reduce((sum, val) => sum + val.charge, 0))}
								</Table.Cell>
							</Table.Row>
						</Table.Footer>
					</Table.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, tableFull)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'switch', href: '/switch' }}
			next={{ title: 'textarea', href: '/textarea' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render table()}
	{@render defaultTable()}
	{@render striped()}
	{@render interactive()}
	{@render full()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
