<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import Badge from '$lib/badge/badge.svelte';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { badgeVariants } from '$lib/../docs/data/badge.js';
</script>

{#snippet badge()}
	<Row>
		<h1
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			badge
		</h1>
		<p
			class="first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A label that emphasizes an element that requires attention, or helps categorize with other
			similar elements.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-light-bg dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 rounded-lg overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6">
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
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
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

{#snippet cont()}
	{@render badge()}
	{@render variants()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
