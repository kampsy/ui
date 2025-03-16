<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import Button from '$lib/button/button.svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import Text from '$lib/text/text.svelte';
	import Tooltip from '$lib/tooltip/tooltip.svelte';

	import {
		gray,
		grayAlpha,
		blue,
		red,
		amber,
		green,
		teal,
		purple,
		pink
	} from '../../docs/data/colors.js';
	import Hr from '../../docs/ui/hr.svelte';
</script>

<svelte:head>
	<title>Colors</title>
</svelte:head>

{#snippet error()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			colors
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Learn how to use our color system. Hover over each color to view the corresponding colors.
		</p>
	</Row>
{/snippet}

{#snippet colSnip(title: string, colorList: string[])}
	<div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
		<div class="w-[100px] flex-shrink-0">
			<p
				class="text-sm text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium first-letter:capitalize"
			>
				{title}
			</p>
		</div>

		<ul class="flex w-full gap-1 md:gap-2">
			{#each colorList as item, index}
				<li class="w-full max-w-[68px]">
					<Tooltip position="top" text={item} class="w-full h-full">
						<div class="w-full h-full flex items-center">
							<button
								aria-label={item}
								class="w-full h-[30px] md:h-10 border border-opacity-5 border-kui-light-gray-1000 dark:border-kui-dark-gray-500 rounded {item}"
							></button>
						</div>
					</Tooltip>
				</li>
			{/each}
		</ul>
	</div>
{/snippet}

{#snippet scales()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			size
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			There are 10 color scales in the system. P3 colors are used on supported browsers and
			displays.
		</p>

		<div class="mt-5 xl:mt-10 space-y-6">
			<div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
				<div class="w-[100px] flex-shrink-0">
					<p
						class="text-sm text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium capitalize"
					>
						background
					</p>
				</div>
				<ul class="flex w-full gap-1 md:gap-2">
					<li class="flex items-center w-[72px] gap-1 md:w-[152px] md:gap-2">
						<ul class="flex items-center w-full gap-1 md:gap-2">
							<li class="w-full max-w-[68px]">
								<Tooltip
									position="top"
									text="bg-kui-light-bg rounded dark:bg-kui-dark-bg"
									class="w-full h-full"
								>
									<div class="w-full h-full flex items-center">
										<button
											aria-label="gray"
											class="w-full h-[34px] lg:h-[40px] border border-kui-light-gray-200 dark:border-kui-dark-gray-200 bg-kui-light-bg rounded dark:bg-kui-dark-bg"
										></button>
									</div>
								</Tooltip>
							</li>
							<li class="w-full max-w-[68px]">
								<Tooltip
									position="top"
									text="bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
									class="w-full h-full"
								>
									<div class="w-full h-full flex items-center">
										<button
											aria-label="gray alpha"
											class="w-full h-[34px] lg:h-[40px] border border-kui-light-gray-200 dark:border-kui-dark-gray-200 rounded bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
										></button>
									</div>
								</Tooltip>
							</li>
						</ul>
					</li>
				</ul>
			</div>

			{@render colSnip('gray', gray)}
			{@render colSnip('gray alpha', grayAlpha)}
			{@render colSnip('blue', blue)}
			{@render colSnip('red', red)}
			{@render colSnip('amber', amber)}
			{@render colSnip('green', green)}
			{@render colSnip('teal', teal)}
			{@render colSnip('purple', purple)}
			{@render colSnip('pink', pink)}
		</div>
	</Row>
{/snippet}

{#snippet backgrounds()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Backgrounds
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			There are two background colors for pages and UI components. In most instances, you should use
			Background 1—especially when color is being placed on top of the background. Background 2
			should be used sparingly when a subtle background differentiation is needed.
		</p>

		<!---->
		<div class="w-full py-[20px]">
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4 cursor-pointer">
						<Tooltip
							position="right"
							text="bg-kui-light-bg dark:bg-kui-dark-bg"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-400 dark:border-kui-dark-gray-400 rounded-full bg-kui-light-bg dark:bg-kui-dark-bg"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Background 1</Text
					>
				</div>

				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Default element background</Text
				>
			</div>
			<Hr class="py-2" />
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4">
						<Tooltip
							position="right"
							text="bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-400 dark:border-kui-dark-gray-400 rounded-full bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Background 2</Text
					>
				</div>
				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Secondary background</Text
				>
			</div>
		</div>

		<!---->
		<div
			class="bg-kui-light-bg dark:bg-kui-dark-bg mt-10 flex h-[700px] w-full flex-col border border-kui-light-gray-400 dark:border-kui-dark-gray-400 md:h-[412px] md:flex-row"
		>
			<div
				class="flex h-[50%] items-center justify-center border-r border-kui-light-gray-400 dark:border-kui-dark-gray-400 md:h-[100%] md:w-[50%]"
			>
				<div
					class="bg-kui-light-bg dark:bg-kui-dark-bg relative flex h-[164px] w-[164px] items-center justify-center rounded-[12px] border border-kui-light-gray-400 dark:border-kui-dark-gray-400"
				>
					<div
						class="bg-kui-light-gray-alpha-100 dark:bg-kui-dark-gray-alpha-100 flex h-6 w-6 items-center justify-center rounded-full text-xs text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>
						1
					</div>
					<div
						class="bg-kui-light-gray-alpha-100 dark:bg-kui-dark-gray-alpha-100 absolute bottom-[-57px] flex h-6 w-6 items-center justify-center rounded-full text-xs text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>
						2
					</div>
				</div>
			</div>

			<div
				class="bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary flex h-[50%] items-center justify-center md:h-[100%] md:w-[50%]"
			>
				<div
					class="bg-kui-light-bg dark:bg-kui-dark-bg relative flex h-[164px] w-[164px] items-center justify-center rounded-[12px] border border-kui-light-gray-400 dark:border-kui-dark-gray-400"
				>
					<div
						class="bg-kui-light-gray-alpha-100 dark:bg-kui-dark-gray-alpha-100 flex h-6 w-6 items-center justify-center rounded-full text-xs text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>
						1
					</div>
					<div
						class="bg-kui-light-gray-alpha-100 dark:bg-kui-dark-gray-alpha-100 absolute bottom-[-57px] flex h-6 w-6 items-center justify-center rounded-full text-xs text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>
						2
					</div>
				</div>
			</div>
		</div>
	</Row>
{/snippet}

{#snippet compactBackgrounds()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Colors 1–3: Component Backgrounds
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			These three colors are designed for UI component backgrounds.
		</p>

		<!---->
		<div class="w-full pt-[20px]">
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4 cursor-pointer">
						<Tooltip
							position="right"
							text="bg-kui-light-gray-100 dark:bg-kui-dark-gray-100"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-100 dark:bg-kui-dark-gray-100"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 1</Text
					>
				</div>

				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Default background</Text
				>
			</div>
			<Hr class="py-3" />
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4">
						<Tooltip
							position="right"
							text="bg-kui-light-gray-200 dark:bg-kui-dark-gray-200"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-200 dark:bg-kui-dark-gray-200"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 2</Text
					>
				</div>
				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Hover background</Text
				>
			</div>
			<Hr class="py-3" />
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4">
						<Tooltip
							position="right"
							text="bg-kui-light-gray-300 dark:bg-kui-dark-gray-300"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-300 dark:bg-kui-dark-gray-300"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 3</Text
					>
				</div>
				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Active background</Text
				>
			</div>
		</div>

		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			If your UI component’s default background is Background 1, you can use Color 1 as your hover
			background and Color 2 as your active background. On smaller UI elements like badges, you can
			use Color 2 or Color 3 as the background.
		</p>
	</Row>
{/snippet}

{#snippet borders()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Colors 4-6: Borders
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			These three colors are designed for UI component borders.
		</p>

		<!---->
		<div class="w-full pt-[20px]">
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4 cursor-pointer">
						<Tooltip
							position="right"
							text="border-kui-light-gray-400 dark:border-kui-dark-gray-400"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-400 dark:bg-kui-dark-gray-400"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 4</Text
					>
				</div>

				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Default border</Text
				>
			</div>
			<Hr class="py-3" />
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4">
						<Tooltip
							position="right"
							text="border-kui-light-gray-500 dark:border-kui-dark-gray-500"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-500 dark:bg-kui-dark-gray-500"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 5</Text
					>
				</div>
				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Hover border</Text
				>
			</div>
			<Hr class="py-3" />
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4">
						<Tooltip
							position="right"
							text="border-kui-light-gray-600 dark:border-kui-dark-gray-600"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-600 dark:bg-kui-dark-gray-600"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 6</Text
					>
				</div>
				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Active border</Text
				>
			</div>
		</div>

		<!--Box-->
		<div
			class="bg-kui-light-bg dark:bg-kui-dark-bg mt-10 flex h-[136px] w-full items-center justify-center border border-kui-light-gray-400 dark:border-kui-dark-gray-400"
		>
			<Button variant="secondary" class="min-w-[160px]">New Project</Button>
		</div>
	</Row>
{/snippet}

{#snippet contrast()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Colors 7-8: High Contrast Backgrounds
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			These two colors are designed for high contrast UI component backgrounds.
		</p>

		<!---->
		<div class="w-full pt-[20px]">
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4 cursor-pointer">
						<Tooltip
							position="right"
							text="border-kui-light-gray-700 dark:border-kui-dark-gray-700"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-700 dark:bg-kui-dark-gray-700"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 7</Text
					>
				</div>

				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>High contrast background</Text
				>
			</div>
			<Hr class="py-3" />
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4">
						<Tooltip
							position="right"
							text="border-kui-light-gray-800 dark:border-kui-dark-gray-800"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-800 dark:bg-kui-dark-gray-800"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 8</Text
					>
				</div>
				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Hover high contrast background</Text
				>
			</div>
		</div>

	</Row>
{/snippet}

{#snippet textIcon()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
		Colors 9-10: Text and Icons
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
		These two colors are designed for accessible text and icons.
		</p>

		<!---->
		<div class="w-full pt-[20px]">
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4 cursor-pointer">
						<Tooltip
							position="right"
							text="border-kui-light-gray-900 dark:border-kui-dark-gray-700"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-900 dark:bg-kui-dark-gray-900"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 9</Text
					>
				</div>

				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Secondary text and icons</Text
				>
			</div>
			<Hr class="py-3" />
			<div class="flex items-center gap-8">
				<div class="flex items-center gap-2">
					<div class="w-4 h-4">
						<Tooltip
							position="right"
							text="border-kui-light-gray-1000 dark:border-kui-dark-gray-1000"
							class="w-full h-full"
						>
							<div
								class="w-4 h-4 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 rounded-full bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000"
							></div>
						</Tooltip>
					</div>
					<Text size={14} class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
						>Color 10</Text
					>
				</div>
				<Text size={14} class="text-kui-light-gray-900 dark:text-kui-dark-gray-900"
					>Primary text and icons</Text
				>
			</div>
		</div>

	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'installation', href: '/installation' }}
			next={{ title: 'avatar', href: '/avatar' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render error()}
	{@render scales()}
	{@render backgrounds()}
	{@render compactBackgrounds()}
	{@render borders()}
	{@render contrast()}
	{@render textIcon()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
