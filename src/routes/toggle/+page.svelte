<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Toggle } from '$lib/index.js';
	import { toggleCustomColors, toggleDefault, toggleSizes, toggleWithLabel } from '../../docs/data/toggle.js';
	import { LockClosedSmall, LockOpenSmall } from '$lib/icons/index.js';

	let checked = $state(false);
	let checked2 = $state(true);
	let checkedCustom = $state(false);
	let label = $state(false);
</script>

<svelte:head>
	<title>Toggle</title>
</svelte:head>

{#snippet toggle()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Toggle
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Displays a boolean value.
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

{#snippet defaultToggle()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">default</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="space-y-4">
					<div class="w-full">
						<Toggle aria-label="Enable Firewall" {checked} />
					</div>
					<div class="w-full">
						<Toggle aria-label="Enable Firewall" checked={checked2} />
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, toggleDefault)}
		</div>
	</Row>
{/snippet}

{#snippet sizes()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">sizes</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full flex">
					<div class="w-4/12">
						<Toggle aria-label="Enable Firewall" checked={false} />
					</div>
					<div class="w-4/12">
						<Toggle aria-label="Enable Firewall" checked={false} size="large" />
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, toggleSizes)}
		</div>
	</Row>
{/snippet}

{#snippet customColors()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">custome color</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-4">
					<div class="w-full">
						<Toggle
							aria-label="Enable Firewall"
							bind:checked={checkedCustom}
							color="purple"
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}
						/>
					</div>
					<div class="w-full">
						<Toggle
							aria-label="Enable Firewall"
							bind:checked={checkedCustom}
							color="amber"
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}
						/>
					</div>
					<div class="w-full">
						<Toggle
							aria-label="Enable Firewall"
							bind:checked={checkedCustom}
							color="red"
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}
						/>
					</div>
					<div class="w-full">
						<Toggle
							aria-label="Enable Firewall"
							bind:checked={checkedCustom}
							color="pink"
							size="large"
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}
						/>
					</div>
					<div class="w-full">
						<Toggle
							aria-label="Enable Firewall"
							bind:checked={checkedCustom}
							color="green"
							size="large"
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}
						/>
					</div>
					<div class="w-full">
						<Toggle
							aria-label="Enable Firewall"
							bind:checked={checkedCustom}
							color="teal"
							size="large"
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}
						/>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, toggleCustomColors)}
		</div>
	</Row>
{/snippet}

{#snippet withLabel()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			<a href="#default" id="default">with label</a>
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="w-full space-y-4">
					<div class="w-full flex items-center gap-6">
						<Toggle aria-label="Enable Firewall" bind:checked={label}>Enable Firewall</Toggle>
						<Toggle aria-label="Enable Firewall" bind:checked={label} direction="switch-first"
							>Enable Firewall</Toggle
						>
					</div>
					<div class="w-full flex items-center gap-6">
						<Toggle aria-label="Enable Firewall" size="large" bind:checked={label}
							>Enable Firewall</Toggle
						>
						<Toggle
							aria-label="Enable Firewall"
							size="large"
							direction="switch-first"
							bind:checked={label}>Enable Firewall</Toggle
						>
					</div>
					<div class="w-full flex items-center gap-6">
						<Toggle
							aria-label="Enable Firewall"
							bind:checked={label}
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}>Enable Firewall</Toggle
						>

						<Toggle
							aria-label="Enable Firewall"
							bind:checked={label}
							direction="switch-first"
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}>Enable Firewall</Toggle
						>
					</div>
					<div class="w-full flex items-center gap-6">
						<Toggle
							aria-label="Enable Firewall"
							size="large"
							bind:checked={label}
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}>Enable Firewall</Toggle
						>

						<Toggle
							aria-label="Enable Firewall"
							size="large"
							bind:checked={label}
							direction="switch-first"
							icon={{
								checked: LockClosedSmall,
								unchecked: LockOpenSmall
							}}>Enable Firewall</Toggle
						>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, toggleWithLabel)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'theme switcher', href: '/theme-switcher' }}
			next={{ title: 'tooltip', href: '/tooltip' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render toggle()}
	{@render defaultToggle()}
	{@render sizes()}
	{@render customColors()}
	{@render withLabel()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
