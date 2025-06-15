<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import RoundedCode from '$lib/../docs/ui/roundedCode.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { Menu, Tabs, Text } from '$lib/index.js';
	import Pagination from '$lib/pagination/pagination.svelte';
	import {
		menuAlignment,
		menuDefault,
		menuLinkItem,
		menuPrefixAndSuffix
	} from '../../docs/data/menu.js';
	import { MoreHorizontal, Accessibility, Webhook } from '$lib/icons/index.js';
	import { fade } from 'svelte/transition';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';

	let selected = $state('implementation');
</script>

<svelte:head>
	<title>Menu</title>
</svelte:head>

{#snippet menu()}
	<Row bottomLine={false}>
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

{#snippet tabSnip()}
	<Row bottomLine={false} class="!py-1">
		<Tabs
			bind:selected
			tabs={[
				{ title: 'Implementation', value: 'implementation', icon: Webhook },
				{ title: 'Accessibility', value: 'accessibility', icon: Accessibility }
			]}
		/>
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
		<LinkH2 href="/menu#default" aria-label="default">default</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Menu extends the <a href="/button" class="underline">Button component.</a>
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Menu.Root>
						<Menu.Button aria-controls="menu" aria-expanded="false" aria-haspopup="true"
							>Actions</Menu.Button
						>
						<Menu.Content id="menu" aria-hidden="true" class="w-[200px]">
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
		<LinkH2 href="/menu#link-item" aria-label="link item">link item</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Menu.Root>
						<Menu.Button aria-controls="menu-2" aria-expanded="false" aria-haspopup="true"
							>Actions</Menu.Button
						>
						<Menu.Content id="menu-2" aria-hidden="true" class="w-[200px]">
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
		<LinkH2 href="/menu#prefix-and-suffix" aria-label="prefix and suffix">prefix and suffix</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The trigger is still wrapped by an unstyled button.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full flex gap-6">
					<Menu.Root>
						<Menu.Button
							shape="square"
							size="small"
							variant="secondary"
							aria-controls="menu-3"
							aria-expanded="false"
							aria-haspopup="true"
						>
							<div class="w-[16px] h-[16px]">
								<MoreHorizontal />
							</div>
						</Menu.Button>
						<Menu.Content id="menu-3" aria-hidden="true" class="w-[200px]">
							<Menu.Item prefix={Accessibility}>Left</Menu.Item>
							<Menu.Item prefix={Accessibility}>Center</Menu.Item>
							<Menu.Item prefix={Accessibility}>Right</Menu.Item>
						</Menu.Content>
					</Menu.Root>
					<Menu.Root>
						<Menu.Button
							shape="square"
							size="small"
							variant="secondary"
							aria-controls="menu-4"
							aria-expanded="false"
							aria-haspopup="true"
						>
							<div class="w-[16px] h-[16px]">
								<MoreHorizontal />
							</div>
						</Menu.Button>
						<Menu.Content id="menu-4" aria-hidden="true" class="w-[200px]">
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
		<LinkH2 href="/menu#menu-alignment" aria-label="menu alignment">menu alignment</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full flex justify-between gap-8">
					<Menu.Root>
						<Menu.Button aria-controls="menu-5" aria-expanded="false" aria-haspopup="true"
							>Actions</Menu.Button
						>
						<Menu.Content id="menu-5" aria-hidden="true" class="w-[200px]">
							<Menu.Item prefix={Accessibility}>Left</Menu.Item>
							<Menu.Item prefix={Accessibility}>Center</Menu.Item>
							<Menu.Item prefix={Accessibility}>Right</Menu.Item>
						</Menu.Content>
					</Menu.Root>
					<Menu.Root alignment="right">
						<Menu.Button aria-controls="menu-6" aria-expanded="false" aria-haspopup="true"
							>Actions</Menu.Button
						>
						<Menu.Content id="menu-6" aria-hidden="true" class="w-[200px]">
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

<!--The following snippets are for accessibility-->
{#snippet howItWorks()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			How it works
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The dropdown menu is a secondary menu which can be applied to <RoundedCode
				text={'Menu.Button'}
			/>. The <RoundedCode text={'Menu.Button'} /> contains a few aria-attributes:
		</p>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			An <RoundedCode text={'aria-controls'} /> attribute matching the id of the <RoundedCode
				text={'Menu.Content'}
			/> containing the menu.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			An <RoundedCode text={'aria-expanded'} /> attribute, the value always being the opposite of the
			aria-hidden value on the <RoundedCode text={'Menu.Content'} />.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			An <RoundedCode text={'aria-haspopup'} /> with the value of true.
		</Text>
		<Text
			size={{ sm: 14, md: 16, lg: 16 }}
			class="mt-2 xl:mt-4 text-kui-light-gray-900 dark:text-kui-dark-gray-900"
		>
			Keyboard interaction:
			<Text
				size={{ sm: 12, md: 14, lg: 14 }}
				class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
			>
				The Enter and space keys opens the menu
			</Text>
			<Text
				size={{ sm: 12, md: 14, lg: 14 }}
				class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
			>
				The Escape closes the menu
			</Text>
			<Text
				size={{ sm: 12, md: 14, lg: 14 }}
				class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
			>
				When the menu is open, the Tab key will move through the menu items and once it leaves the
				final item, the menu closes. AT will then announce the pop up has collapsed.
			</Text>
		</Text>
	</Row>
{/snippet}
{#snippet considerations()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Considerations
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			This component aims to adhere to
			<a
				href="https://www.w3.org/TR/WCAG22/"
				class="text-kui-light-blue-900 underline dark:text-kui-dark-blue-900">WCAG 2.2 (level AA)</a
			> guidelines. Ensure this compliance is maintained when the component is integrated into other
			projects.
		</p>
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
	{@render tabSnip()}

	{#if selected === 'implementation'}
		<section transition:fade>
			{@render defaultMenu()}
			{@render linkItem()}
			{@render defaultPrefixAndSuffix()}
			{@render alignment()}
		</section>
	{/if}

	{#if selected === 'accessibility'}
		<section transition:fade>
			{@render howItWorks()}
			{@render considerations()}
		</section>
	{/if}

	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
