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
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-lg overflow-hidden"
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
					<div class="flex gap-1">
						<Badge variant="gray">gray</Badge>
						<Badge variant="gray-subtle">gray-subtle</Badge>
					</div>

					<div class="flex gap-1">
						<Badge variant="blue">blue</Badge>
						<Badge variant="blue-subtle">blue-subtle</Badge>
					</div>

					<div class="flex gap-1">
						<Badge variant="purple">purple</Badge>
						<Badge variant="purple-subtle">purple-subtle</Badge>
					</div>

					<div class="flex gap-1">
						<Badge variant="amber">amber</Badge>
						<Badge variant="amber-subtle">amber-subtle</Badge>
					</div>

					<div class="flex gap-1">
						<Badge variant="red">red</Badge>
						<Badge variant="red-subtle">red-subtle</Badge>
					</div>

					<div class="flex gap-1">
						<Badge variant="pink">pink</Badge>
						<Badge variant="pink-subtle">pink-subtle</Badge>
					</div>

					<div class="flex gap-1">
						<Badge variant="green">green</Badge>
						<Badge variant="green-subtle">green-subtle</Badge>
					</div>

					<div class="flex gap-1">
						<Badge variant="teal">teal</Badge>
						<Badge variant="teal-subtle">teal-subtle</Badge>
					</div>

					<div class="flex gap-1">
						<Badge variant="inverted">inverted</Badge>
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
					<div class="flex gap-1">
						<Badge size="sm">small</Badge>
					</div>

					<div class="flex gap-1">
						<Badge size="md">medium</Badge>
					</div>

					<div class="flex gap-1">
						<Badge size="lg">large</Badge>
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
					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="gray">gray</Badge>
						<Badge icon={Shield} size="md" variant="gray" >gray</Badge>
						<Badge icon={Shield} size="sm" variant="gray">gray</Badge>
						<Badge icon={Shield} size="sm" variant="gray-subtle">gray</Badge>
						<Badge icon={Shield} size="md" variant="gray-subtle" >gray</Badge>
						<Badge icon={Shield} size="lg" variant="gray-subtle">gray</Badge>
					</div>

					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="blue">blue</Badge>
						<Badge icon={Shield} size="md" variant="blue" >blue</Badge>
						<Badge icon={Shield} size="sm" variant="blue">blue</Badge>
						<Badge icon={Shield} size="sm" variant="blue-subtle">blue</Badge>
						<Badge icon={Shield} size="md" variant="blue-subtle" >blue</Badge>
						<Badge icon={Shield} size="lg" variant="blue-subtle">blue</Badge>
					</div>

					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="purple">purple</Badge>
						<Badge icon={Shield} size="md" variant="purple" >purple</Badge>
						<Badge icon={Shield} size="sm" variant="purple">purple</Badge>
						<Badge icon={Shield} size="sm" variant="purple-subtle">purple</Badge>
						<Badge icon={Shield} size="md" variant="purple-subtle" >purple</Badge>
						<Badge icon={Shield} size="lg" variant="purple-subtle">purple</Badge>
					</div>

					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="amber">amber</Badge>
						<Badge icon={Shield} size="md" variant="amber" >amber</Badge>
						<Badge icon={Shield} size="sm" variant="amber">amber</Badge>
						<Badge icon={Shield} size="sm" variant="amber-subtle">amber</Badge>
						<Badge icon={Shield} size="md" variant="amber-subtle" >amber</Badge>
						<Badge icon={Shield} size="lg" variant="amber-subtle">amber</Badge>
					</div>

					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="red">red</Badge>
						<Badge icon={Shield} size="md" variant="red" >red</Badge>
						<Badge icon={Shield} size="sm" variant="red">red</Badge>
						<Badge icon={Shield} size="sm" variant="red-subtle">red</Badge>
						<Badge icon={Shield} size="md" variant="red-subtle" >red</Badge>
						<Badge icon={Shield} size="lg" variant="red-subtle">red</Badge>
					</div>

					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="pink">pink</Badge>
						<Badge icon={Shield} size="md" variant="pink" >pink</Badge>
						<Badge icon={Shield} size="sm" variant="pink">pink</Badge>
						<Badge icon={Shield} size="sm" variant="pink-subtle">pink</Badge>
						<Badge icon={Shield} size="md" variant="pink-subtle" >pink</Badge>
						<Badge icon={Shield} size="lg" variant="pink-subtle">pink</Badge>
					</div>

					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="green">green</Badge>
						<Badge icon={Shield} size="md" variant="green" >green</Badge>
						<Badge icon={Shield} size="sm" variant="green">green</Badge>
						<Badge icon={Shield} size="sm" variant="green-subtle">green</Badge>
						<Badge icon={Shield} size="md" variant="green-subtle" >green</Badge>
						<Badge icon={Shield} size="lg" variant="green-subtle">green</Badge>
					</div>	

					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="teal">teal</Badge>
						<Badge icon={Shield} size="md" variant="teal" >teal</Badge>
						<Badge icon={Shield} size="sm" variant="teal">teal</Badge>
						<Badge icon={Shield} size="sm" variant="teal-subtle">teal</Badge>
						<Badge icon={Shield} size="md" variant="teal-subtle" >teal</Badge>
						<Badge icon={Shield} size="lg" variant="teal-subtle">teal</Badge>
					</div>

					<div class="flex items-center gap-1">
						<Badge icon={Shield} size="lg" variant="inverted">inverted</Badge>
						<Badge icon={Shield} size="md" variant="inverted" >inverted</Badge>
						<Badge icon={Shield} size="sm" variant="inverted">inverted</Badge>
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
