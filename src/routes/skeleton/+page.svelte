<script lang="ts">
	import type { Snippet } from "svelte"
	import Aside from "$lib/../docs/ui/aside.svelte"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import { Button, Skeleton } from "$lib/index.js"
	import {
		skeletonBoxHeight,
		skeletonButton,
		skeletonChildren,
		skeletonDefault,
		skeletonFixedSize,
		skeletonNoAnimation,
		skeletonPill,
		skeletonRounded,
		skeletonSquared,
	} from "$lib/../docs/data/skeleton.js"
</script>

<svelte:head>
	<title>Skeleton</title>
</svelte:head>

{#snippet intro()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			skeleton
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Display a skeleton whilst another component is loading.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-hidden rounded-xl border"
	>
		<div class="w-full overflow-x-auto p-4 lg:p-6">
			<div class="flex w-full flex-wrap items-center gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet roundedCode(text: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{text}
	</code>
{/snippet}

{#snippet defaultDemo()}
	<Row>
		<LinkH2 href="/skeleton#default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Skeleton width={160} />
			{/snippet}
			{@render demoAndCode(demo, skeletonDefault)}
		</div>
	</Row>
{/snippet}

{#snippet boxHeightDemo()}
	<Row>
		<LinkH2 href="/skeleton#box-height">box height</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Skeleton boxHeight={42} width={160} />
			{/snippet}
			{@render demoAndCode(demo, skeletonBoxHeight)}
		</div>
	</Row>
{/snippet}

{#snippet childrenDemo()}
	<Row>
		<LinkH2 href="/skeleton#wrapping-children">wrapping children</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			If you do not pass a fixed size, it will be calculated automatically.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col items-start gap-4">
					<Skeleton>
						<Button>Hidden by skeleton</Button>
					</Skeleton>
					<Skeleton show={false}>
						<Button>Not hidden by skeleton</Button>
					</Skeleton>
				</div>
			{/snippet}
			{@render demoAndCode(demo, skeletonChildren)}
		</div>
	</Row>
{/snippet}

{#snippet fixedSizeDemo()}
	<Row>
		<LinkH2 href="/skeleton#wrapping-children-with-fixed-size"
			>wrapping children with fixed size</LinkH2
		>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Set <code>show={"{false}"}</code> to reveal children once loaded; the dimensions are retained
			so there is no layout shift.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex w-full flex-col items-start gap-4">
					<Skeleton height={100} width="100%" />
					<Skeleton height={100} show={false} width="100%">
						<Button>Not hidden by Skeleton</Button>
					</Skeleton>
				</div>
			{/snippet}
			{@render demoAndCode(demo, skeletonFixedSize)}
		</div>
	</Row>
{/snippet}

{#snippet pillDemo()}
	<Row>
		<LinkH2 href="/skeleton#pill">pill</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Skeleton pill width={48} />
			{/snippet}
			{@render demoAndCode(demo, skeletonPill)}
		</div>
	</Row>
{/snippet}

{#snippet roundedDemo()}
	<Row>
		<LinkH2 href="/skeleton#rounded">rounded</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Skeleton boxHeight={48} height={48} rounded width={48} />
			{/snippet}
			{@render demoAndCode(demo, skeletonRounded)}
		</div>
	</Row>
{/snippet}

{#snippet squaredDemo()}
	<Row>
		<LinkH2 href="/skeleton#squared">squared</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Skeleton boxHeight={48} height={48} squared width={48} />
			{/snippet}
			{@render demoAndCode(demo, skeletonSquared)}
		</div>
	</Row>
{/snippet}

{#snippet noAnimationDemo()}
	<Row>
		<LinkH2 href="/skeleton#no-animation">no animation</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Skeleton animated={false} height={100} width="100%" />
			{/snippet}
			{@render demoAndCode(demo, skeletonNoAnimation)}
		</div>
	</Row>
{/snippet}

{#snippet buttonDemo()}
	<Row>
		<LinkH2 href="/skeleton#button">button</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Pass the <code>button</code> prop to extend the shell by 1px, covering button borders cleanly.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-2">
						<p
							class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[14px] leading-5 font-normal"
						>
							Without button prop (default):
						</p>
						<Skeleton height={32} width={120}>
							<Button>Loading...</Button>
						</Skeleton>
					</div>
					<div class="flex flex-col gap-2">
						<p
							class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[14px] leading-5 font-normal"
						>
							With button prop (extends shell by 1px):
						</p>
						<Skeleton button height={32} width={120}>
							<Button>Loading...</Button>
						</Skeleton>
					</div>
					<div class="flex flex-col gap-2">
						<p
							class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[14px] leading-5 font-normal"
						>
							Multiple buttons loading:
						</p>
						<div class="flex gap-3">
							<Skeleton button>
								<Button>Save</Button>
							</Skeleton>
							<Skeleton button>
								<Button variant="secondary">Cancel</Button>
							</Skeleton>
						</div>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, skeletonButton)}
		</div>
	</Row>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<h2
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize"
		>
			Best Practices
		</h2>
		<p
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-4 text-[16px] leading-6 font-semibold"
		>
			When to use
		</p>
		<ul
			class="[&_code]:text-kui-light-gray-900 [&_code]:bg-kui-light-gray-100 dark:[&_code]:text-kui-dark-gray-900 dark:[&_code]:bg-kui-dark-gray-100 [&_code]:border-kui-light-gray-200 dark:[&_code]:border-kui-dark-gray-400 [&_li]:text-kui-light-gray-900 dark:[&_li]:text-kui-dark-gray-900 mt-4 list-disc [&_code]:rounded-md [&_code]:border [&_code]:px-2 [&_code]:py-[3.6px] [&_code]:text-xs [&_li]:mt-2 [&_li]:ml-8 [&_li]:py-0.5 [&_li]:leading-6"
		>
			<li>
				Show a Skeleton when async data fills a known layout: table rows, card grids, profile
				blocks, sidebars.
			</li>
			<li>
				For a single in-flight action, use <code>Spinner</code>; for an indeterminate inline
				wait, use loading dots; for known progress, use <code>Progress</code>.
			</li>
			<li>
				Don't use Skeleton as permanent decoration or as a placeholder for empty states. When
				there's no data to load, render an <code>EmptyState</code>.
			</li>
		</ul>
		<p
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-4 text-[16px] leading-6 font-semibold"
		>
			Behavior
		</p>
		<ul
			class="[&_code]:text-kui-light-gray-900 [&_code]:bg-kui-light-gray-100 dark:[&_code]:text-kui-dark-gray-900 dark:[&_code]:bg-kui-dark-gray-100 [&_code]:border-kui-light-gray-200 dark:[&_code]:border-kui-dark-gray-400 [&_li]:text-kui-light-gray-900 dark:[&_li]:text-kui-dark-gray-900 mt-4 list-disc [&_code]:rounded-md [&_code]:border [&_code]:px-2 [&_code]:py-[3.6px] [&_code]:text-xs [&_li]:mt-2 [&_li]:ml-8 [&_li]:py-0.5 [&_li]:leading-6"
		>
			<li>
				Set <code>width</code> and <code>height</code> to match the final content so the layout doesn't
				shift when data resolves.
			</li>
			<li>
				Pick <code>pill</code>, <code>rounded</code>, or <code>squared</code> to mirror the eventual
				element's shape.
			</li>
			<li>
				When the skeleton wraps children, keep dimensions stable so the reveal swap doesn't
				reflow surrounding content.
			</li>
		</ul>
		<p
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-4 text-[16px] leading-6 font-semibold"
		>
			Accessibility
		</p>
		<ul
			class="[&_code]:text-kui-light-gray-900 [&_code]:bg-kui-light-gray-100 dark:[&_code]:text-kui-dark-gray-900 dark:[&_code]:bg-kui-dark-gray-100 [&_code]:border-kui-light-gray-200 dark:[&_code]:border-kui-dark-gray-400 [&_li]:text-kui-light-gray-900 dark:[&_li]:text-kui-dark-gray-900 mt-4 list-disc [&_code]:rounded-md [&_code]:border [&_code]:px-2 [&_code]:py-[3.6px] [&_code]:text-xs [&_li]:mt-2 [&_li]:ml-8 [&_li]:py-0.5 [&_li]:leading-6"
		>
			<li>
				Wrap the loading region in <code>aria-busy="true"</code> and announce completion with
				<code>aria-live="polite"</code> on the destination container.
			</li>
			<li>
				Disable the shimmer with <code>animated={"{false}"}</code> on low-power surfaces and
				respect
				<code>prefers-reduced-motion</code>.
			</li>
			<li>
				Skeletons are decorative; avoid placing focusable controls inside them while loading.
			</li>
		</ul>
	</Row>
{/snippet}

{#snippet cont()}
	{@render intro()}
	{@render defaultDemo()}
	{@render boxHeightDemo()}
	{@render childrenDemo()}
	{@render fixedSizeDemo()}
	{@render pillDemo()}
	{@render roundedDemo()}
	{@render squaredDemo()}
	{@render noAnimationDemo()}
	{@render buttonDemo()}
	{@render bestPractices()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "show more", href: "/show-more" }}
			next={{ title: "spinner", href: "/spinner" }}
		/>
	</Row>
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
