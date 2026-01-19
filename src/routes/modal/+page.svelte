<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import { Button, Modal, Text } from '$lib/index.js';
	import {
		modalDefault,
		modalDisabkedActions,
		modalSingleButton,
		modalSticky
	} from '../../docs/data/modal.js';
	import { ArrowLeft } from '$lib/icons/index.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';

	let active = $state(false);
	let activeSticky = $state(false);
	let activeSingleButton = $state(false);
	let activeDisabled = $state(false);
</script>

<svelte:head>
	<title>Modal</title>
</svelte:head>

{#snippet modal()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			modal
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-6 lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Display popup content that requires attention or provides additional information.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet defaultModal()}
	<Row>
		<LinkH2 href="/modal#default" aria-label="default">default</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Button onclick={() => (active = true)} size="small">Open Modal</Button>
					<Modal.Root bind:active>
						<Modal.Content>
							<Modal.Body>
								<Modal.Header>
									<Modal.Title>Create Token</Modal.Title>
									<Modal.Subtitle>
										Enter a unique name for your token to differentiate it from other tokens and
										then select the scope.
									</Modal.Subtitle>
								</Modal.Header>
								<Text size={14}>Some content contained within the modal.</Text>
							</Modal.Body>
							<Modal.Footer>
								<Button onclick={() => (active = false)} variant="secondary">Cancel</Button>
								<Button onclick={() => (active = false)}>Submit</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, modalDefault)}
		</div>
	</Row>
{/snippet}

{#snippet sticky()}
	<Row>
		<LinkH2 href="/modal#sticky" aria-label="sticky">sticky</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Button onclick={() => (activeSticky = true)} size="small">Open Modal</Button>
					<Modal.Root bind:active={activeSticky} sticky>
						<Modal.Content>
							<Modal.Body>
								<Modal.Header>
									<Modal.Title>Create Token</Modal.Title>
								</Modal.Header>
								<!--Array from 1 to 30-->
								{#each Array(60) as _, i}
									<Text size={14}>Some content contained within the modal.</Text>
								{/each}
							</Modal.Body>
							<Modal.Footer>
								<div class="flex gap-3">
									<Button onclick={() => (activeSticky = false)} variant="secondary">Cancel</Button>
									<Button
										iconPrefix={ArrowLeft}
										onclick={() => (activeSticky = false)}
										variant="secondary">Previous</Button
									>
								</div>
								<Button onclick={() => (activeSticky = false)}>Submit</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, modalSticky)}
		</div>
	</Row>
{/snippet}

{#snippet singleButton()}
	<Row>
		<LinkH2 href="/modal#single-button" aria-label="single-button">single button</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Button onclick={() => (activeSingleButton = true)} size="small">Open Modal</Button>
					<Modal.Root bind:active={activeSingleButton}>
						<Modal.Content>
							<Modal.Body>
								<Modal.Header>
									<Modal.Title>Create Token</Modal.Title>
								</Modal.Header>
								<Text size={14}>Some content contained within the modal.</Text>
							</Modal.Body>
							<Modal.Footer>
								<Button
									onclick={() => (activeSingleButton = false)}
									variant="secondary"
									class="w-full">Cancel</Button
								>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, modalSingleButton)}
		</div>
	</Row>
{/snippet}

{#snippet disabled()}
	<Row>
		<LinkH2 href="/modal#disabled-actions" aria-label="disabled-actions">disabled actions</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Button onclick={() => (activeDisabled = true)} size="small">Open Modal</Button>
					<Modal.Root bind:active={activeDisabled}>
						<Modal.Content>
							<Modal.Body>
								<Modal.Header>
									<Modal.Title>Create Token</Modal.Title>
									<Modal.Subtitle>This is a modal.</Modal.Subtitle>
								</Modal.Header>
								<Text size={14}>Some content contained within the modal.</Text>
							</Modal.Body>
							<Modal.Footer>
								<Button onclick={() => (activeDisabled = false)} variant="secondary">Cancel</Button>
								<Button disabled onclick={() => (activeDisabled = false)}>Submit</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, modalDisabkedActions)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'menu', href: '/menu' }}
			next={{ title: 'note', href: '/note' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render modal()}
	{@render defaultModal()}
	{@render sticky()}
	{@render singleButton()}
	{@render disabled()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
