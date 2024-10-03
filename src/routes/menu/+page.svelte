<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { Menu } from '$lib/index.js';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { menuAlignment, menuDefault, menuLinkItem, menuPrefixAndSuffix } from '../../docs/data/menu.js';
	import { MoreHorizontal, Accessibility } from '$lib/icons/index.js';
</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

{#snippet menu()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			menu
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Dropdown menu opened via button. Supports keyboard navigation. The position will automatically
			adapt based on the window bounds.
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

{#snippet defaultMenu()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Menu extends the <a href="/button" class="underline">Button component.</a>
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Menu.Root>
						<Menu.Button>Actions</Menu.Button>
						<Menu.Content class="w-[200px]">
							<Menu.Item onClick={() => console.log('One')}>One</Menu.Item>
							<Menu.Item onClick={() => console.log('Two')}>Two</Menu.Item>
							<Menu.Item onClick={() => console.log('Three')}>One</Menu.Item>
							<Menu.Item onClick={() => console.log('Delete')} type="error">Delete</Menu.Item>
						</Menu.Content>
					</Menu.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, menuDefault)}
		</div>
	</Row>
{/snippet}

{#snippet linkItem()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">link item</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Menu.Root>
						<Menu.Button>Actions</Menu.Button>
						<Menu.Content class="w-[200px]">
							<Menu.Link href="/menu">One</Menu.Link>
							<Menu.Link href="#/">Two</Menu.Link>
							<Menu.Link href="#/">One</Menu.Link>
						</Menu.Content>
					</Menu.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, menuLinkItem)}
		</div>
	</Row>
{/snippet}

{#snippet defaultPrefixAndSuffix()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Prefix and Suffix</a>
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The trigger is still wrapped by an unstyled button.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full flex gap-6">
					<Menu.Root>
						<Menu.Button aria-label="Menu" shape="square" size="small" type="secondary">
							<div class="w-[16px] h-[16px]">
								<MoreHorizontal />
							</div>
						</Menu.Button>
						<Menu.Content class="w-[200px]">
							<Menu.Item prefix={Accessibility}>Left</Menu.Item>
							<Menu.Item prefix={Accessibility}>Center</Menu.Item>
							<Menu.Item prefix={Accessibility}>Right</Menu.Item>
						</Menu.Content>
					</Menu.Root>
					<Menu.Root>
						<Menu.Button aria-label="Menu" shape="square" size="small" type="secondary">
							<div class="w-[16px] h-[16px]">
								<MoreHorizontal />
							</div>
						</Menu.Button>
						<Menu.Content class="w-[200px]">
							<Menu.Item suffix={Accessibility}>Left</Menu.Item>
							<Menu.Item suffix={Accessibility}>Center</Menu.Item>
							<Menu.Item suffix={Accessibility}>Right</Menu.Item>
						</Menu.Content>
					</Menu.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, menuPrefixAndSuffix)}
		</div>
	</Row>
{/snippet}

{#snippet alignment()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">Menu Alignment</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full flex justify-between gap-8">
					<Menu.Root>
						<Menu.Button>Actions</Menu.Button>
						<Menu.Content class="w-[200px]">
							<Menu.Item prefix={Accessibility}>Left</Menu.Item>
							<Menu.Item prefix={Accessibility}>Center</Menu.Item>
							<Menu.Item prefix={Accessibility}>Right</Menu.Item>
						</Menu.Content>
					</Menu.Root>
					<Menu.Root alignment="right">
						<Menu.Button>Actions</Menu.Button>
						<Menu.Content class="w-[200px]">
							<Menu.Item suffix={Accessibility}>Left</Menu.Item>
							<Menu.Item suffix={Accessibility}>Center</Menu.Item>
							<Menu.Item suffix={Accessibility}>Right</Menu.Item>
						</Menu.Content>
					</Menu.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, menuAlignment)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'input', href: '/input' }}
			next={{ title: 'modal', href: '/modal' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render menu()}
	{@render defaultMenu()}
	{@render linkItem()}
	{@render defaultPrefixAndSuffix()}
	{@render alignment()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
