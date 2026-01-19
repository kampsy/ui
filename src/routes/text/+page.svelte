<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Text } from '$lib/index.js';
	import {
		textModifiers,
		textResponsive,
		textResponsiveVariant,
		textSize,
		textTruncate,
		textVariants
	} from '../../docs/data/text.js';
	import type { VariantOption } from '../../docs/ui/types.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';

	const variants: Array<VariantOption> = [
		'heading-72',
		'heading-64',
		'heading-56',
		'heading-48',
		'heading-40',
		'heading-32',
		'heading-24',
		'heading-20',
		'heading-16',
		'button-16',
		'button-14',
		'button-12',
		'label-20',
		'label-18',
		'label-16',
		'label-14',
		'label-13',
		'label-12',
		'copy-24',
		'copy-20',
		'copy-18',
		'copy-16',
		'copy-14',
		'copy-13'
	];
</script>

<svelte:head>
	<title>Text</title>
</svelte:head>

{#snippet textSnip()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Text
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-6 lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Display text using well-defined typographic styles.
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

{#snippet sizeSnip()}
	<Row>
		<LinkH2 href="/text#size" aria-label="size">size</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-2">
					<Text size={48}>The Evil Rabbit jumps.</Text>
					<Text size={32}>The Evil Rabbit jumps.</Text>
					<Text size={24}>The Evil Rabbit jumps.</Text>
					<Text size={20}>The Evil Rabbit jumps.</Text>
					<Text size={16}>The Evil Rabbit jumps.</Text>
					<Text size={14}>The Evil Rabbit jumps.</Text>
					<Text size={12}>The Evil Rabbit jumps.</Text>
					<Text size={10}>The Evil Rabbit jumps.</Text>
				</div>
			{/snippet}
			{@render demoAndCode(demo, textSize)}
		</div>
	</Row>
{/snippet}

{#snippet responsiveSnip()}
	<Row>
		<LinkH2 href="/text#responsive" aria-label="responsive">responsive</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Text size={{ sm: 24, md: 32, lg: 48 }}>The Evil Rabbit jumps.</Text>
				</div>
			{/snippet}
			{@render demoAndCode(demo, textResponsive)}
		</div>
	</Row>
{/snippet}

{#snippet variantSnip()}
	<Row>
		<LinkH2 href="/text#variants" aria-label="variants">variants</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-2">
					{#each variants as variant}
						<Text class="capitalize" {variant}>
							{variant.replace('-', ' ')}
						</Text>
					{/each}
				</div>
			{/snippet}
			{@render demoAndCode(demo, textVariants)}
		</div>
	</Row>
{/snippet}

{#snippet responsiveVariantSnip()}
	<Row>
		<LinkH2 href="/text#responsive-variants" aria-label="responsive-variants"
			>responsive variants</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-6">
					<Text variant={{ sm: 'heading-24', md: 'heading-32', lg: 'heading-48' }}>
						Responsive Heading
					</Text>
					<Text variant={{ sm: 'copy-14', md: 'copy-16', lg: 'copy-20' }}>
						Responsive Copy, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Text>
				</div>
			{/snippet}
			{@render demoAndCode(demo, textResponsiveVariant)}
		</div>
	</Row>
{/snippet}

{#snippet modifiersSnip()}
	<Row>
		<LinkH2 href="/text#modifiers" aria-label="modifiers">modifiers</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Text size={16}>
						The <strong>Evil Rabbit</strong> <em>jumps</em>
						over the <s>quick brown fox</s> <u>Lawful Meerkat</u>.
					</Text>
				</div>
			{/snippet}
			{@render demoAndCode(demo, textModifiers)}
		</div>
	</Row>
{/snippet}

{#snippet truncateSnip()}
	<Row>
		<LinkH2 href="/text#truncate" aria-label="truncate">truncate</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full">
					<Text size={16} class="max-w-[100px]" truncate>The Evil Rabbit jumps.</Text>
				</div>
			{/snippet}
			{@render demoAndCode(demo, textTruncate)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'tabs', href: '/tabs' }}
			next={{ title: 'textarea', href: '/textarea' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render textSnip()}
	{@render sizeSnip()}
	{@render responsiveSnip()}
	{@render variantSnip()}
	{@render responsiveVariantSnip()}
	{@render modifiersSnip()}
	{@render truncateSnip()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
