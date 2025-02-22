<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import Badge from '$lib/badge/badge.svelte';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { badgeSize, badgeVariants, badgeWithIcon } from '$lib/../docs/data/badge.js';
	import Shield from '$lib/icons/shield.svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
</script>

<svelte:head>
	<title>Badge</title>
</svelte:head>

{#snippet badge()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			badge
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A label that emphasizes an element that requires attention, or helps categorize with other
			similar elements.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4 justify-between">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet variants()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Variants
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col gap-2">
					<div class="flex gap-1 capitalize">
						<Badge variant="gray" aria-label="gray">gray</Badge>
						<Badge variant="gray-subtle" aria-label="gray-subtle">gray-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="blue" aria-label="blue">blue</Badge>
						<Badge variant="blue-subtle" aria-label="blue-subtle">blue-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="purple" aria-label="purple">purple</Badge>
						<Badge variant="purple-subtle" aria-label="purple-subtle">purple-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="amber" aria-label="amber">amber</Badge>
						<Badge variant="amber-subtle" aria-label="amber-subtle">amber-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="red" aria-label="red">red</Badge>
						<Badge variant="red-subtle" aria-label="red-subtle">red-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="pink" aria-label="pink">pink</Badge>
						<Badge variant="pink-subtle" aria-label="pink-subtle">pink-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="green" aria-label="green">green</Badge>
						<Badge variant="green-subtle" aria-label="green-subtle">green-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="teal" aria-label="teal">teal</Badge>
						<Badge variant="teal-subtle" aria-label="teal-subtle">teal-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="inverted" aria-label="inverted">inverted</Badge>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, badgeVariants)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Sizes
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col gap-2">
					<div class="flex gap-1 capitalize">
						<Badge size="small" aria-label="small">small</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge size="medium" aria-label="medium">medium</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge size="large" aria-label="large">large</Badge>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, badgeSize)}
		</div>
	</Row>
{/snippet}

{#snippet icons()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			With Icons
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="gray" aria-label="icon large gray">gray</Badge>
						<Badge icon={Shield} size="medium" variant="gray" aria-label="icon medium gray">gray</Badge>
						<Badge icon={Shield} size="small" variant="gray" aria-label="icon small gray">gray</Badge>
						<Badge icon={Shield} size="small" variant="gray-subtle" aria-label="icon small gray-subtle"
							>gray</Badge
						>
						<Badge icon={Shield} size="medium" variant="gray-subtle" aria-label="icon medium gray-subtle"
							>gray</Badge
						>
						<Badge icon={Shield} size="large" variant="gray-subtle" aria-label="icon large gray-subtle"
							>gray</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="blue" aria-label="icon large blue">blue</Badge>
						<Badge icon={Shield} size="medium" variant="blue" aria-label="icon medium blue">blue</Badge>
						<Badge icon={Shield} size="small" variant="blue" aria-label="icon small blue">blue</Badge>
						<Badge icon={Shield} size="small" variant="blue-subtle" aria-label="icon small blue-subtle"
							>blue</Badge
						>
						<Badge icon={Shield} size="medium" variant="blue-subtle" aria-label="icon medium blue-subtle"
							>blue</Badge
						>
						<Badge icon={Shield} size="large" variant="blue-subtle" aria-label="icon large blue-subtle"
							>blue</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="purple" aria-label="icon large purple">purple</Badge>
						<Badge icon={Shield} size="medium" variant="purple" aria-label="icon medium purple">purple</Badge>
						<Badge icon={Shield} size="small" variant="purple" aria-label="icon small purple">purple</Badge>
						<Badge icon={Shield} size="small" variant="purple-subtle" aria-label="icon small purple-subtle">purple</Badge>
						<Badge icon={Shield} size="medium" variant="purple-subtle" aria-label="icon medium purple-subtle">purple</Badge>
						<Badge icon={Shield} size="large" variant="purple-subtle" aria-label="icon large purple-subtle">purple</Badge>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="amber" aria-label="icon large amber">amber</Badge>
						<Badge icon={Shield} size="medium" variant="amber" aria-label="icon medium amber">amber</Badge>
						<Badge icon={Shield} size="small" variant="amber" aria-label="icon small amber">amber</Badge>
						<Badge icon={Shield} size="small" variant="amber-subtle" aria-label="icon small amber-subtle">amber</Badge>
						<Badge icon={Shield} size="medium" variant="amber-subtle" aria-label="icon medium amber-subtle">amber</Badge>
						<Badge icon={Shield} size="large" variant="amber-subtle" aria-label="icon large amber-subtle">amber</Badge>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="red" aria-label="icon large red">red</Badge>
						<Badge icon={Shield} size="medium" variant="red" aria-label="icon medium red">red</Badge>
						<Badge icon={Shield} size="small" variant="red" aria-label="icon small red">red</Badge>
						<Badge icon={Shield} size="small" variant="red-subtle" aria-label="icon small red-subtle">red</Badge>
						<Badge icon={Shield} size="medium" variant="red-subtle" aria-label="icon medium red-subtle">red</Badge>
						<Badge icon={Shield} size="large" variant="red-subtle" aria-label="icon large red-subtle">red</Badge>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="pink" aria-label="icon large pink">pink</Badge>
						<Badge icon={Shield} size="medium" variant="pink" aria-label="icon medium pink">pink</Badge>
						<Badge icon={Shield} size="small" variant="pink" aria-label="icon small pink">pink</Badge>
						<Badge icon={Shield} size="small" variant="pink-subtle" aria-label="icon small pink-subtle">pink</Badge>
						<Badge icon={Shield} size="medium" variant="pink-subtle" aria-label="icon medium pink-subtle">pink</Badge>
						<Badge icon={Shield} size="large" variant="pink-subtle" aria-label="icon large pink-subtle">pink</Badge>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="green" aria-label="icon large green">green</Badge>
						<Badge icon={Shield} size="medium" variant="green" aria-label="icon medium green">green</Badge>
						<Badge icon={Shield} size="small" variant="green" aria-label="icon small green">green</Badge>
						<Badge icon={Shield} size="small" variant="green-subtle" aria-label="icon small green-subtle">green</Badge>
						<Badge icon={Shield} size="medium" variant="green-subtle" aria-label="icon medium green-subtle">green</Badge>
						<Badge icon={Shield} size="large" variant="green-subtle" aria-label="icon large green-subtle">green</Badge>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="teal" aria-label="icon large teal">teal</Badge>
						<Badge icon={Shield} size="medium" variant="teal" aria-label="icon medium teal">teal</Badge>
						<Badge icon={Shield} size="small" variant="teal" aria-label="icon small teal">teal</Badge>
						<Badge icon={Shield} size="small" variant="teal-subtle" aria-label="icon small teal-subtle">teal</Badge>
						<Badge icon={Shield} size="medium" variant="teal-subtle" aria-label="icon medium teal-subtle">teal</Badge>
						<Badge icon={Shield} size="large" variant="teal-subtle" aria-label="icon large teal-subtle">teal</Badge>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="large" variant="inverted" aria-label="icon large inverted">inverted</Badge>
						<Badge icon={Shield} size="medium" variant="inverted" aria-label="icon medium inverted">inverted</Badge>
						<Badge icon={Shield} size="small" variant="inverted" aria-label="icon small inverted">inverted</Badge>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, badgeWithIcon)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'avatar', href: '/avatar' }}
			next={{ title: 'button', href: '/button' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render badge()}
	{@render variants()}
	{@render size()}
	{@render icons()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
