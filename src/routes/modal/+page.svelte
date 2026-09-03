<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import { Button, Input, Modal, Text, Toaster, toast } from "$lib/index.js"
	import {
		modalDefault,
		modalDisabkedActions,
		modalFocusInput,
		modalInset,
		modalMobileInputs,
		modalSingleButton,
		modalSticky,
		modalToastsFocusTrap,
	} from "../../docs/data/modal.js"
	import { ArrowLeft } from "$lib/icons/index.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	let active = $state(false)
	let activeSticky = $state(false)
	let activeSingleButton = $state(false)
	let activeDisabled = $state(false)
	let activeInset = $state(false)
	let activeFocusInput = $state(false)
	let name = $state("")
	let inputElement = $state<HTMLInputElement>()
	let activeMobileInputs = $state(false)
	let email = $state("")
	let activeToasts = $state(false)
</script>

<Toaster />

<svelte:head>
	<title>Modal</title>
</svelte:head>

{#snippet modal()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			modal
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Display popup content that requires attention or provides additional information.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-hidden rounded-xl border"
	>
		<div class="w-full overflow-x-auto p-4 lg:p-6">
			<div class="flex w-full flex-wrap gap-4">
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
										Enter a unique name for your token to differentiate it from other tokens
										and then select the scope.
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
								{#each Array(60), index (index)}
									<Text size={14}>Some content contained within the modal.</Text>
								{/each}
							</Modal.Body>
							<Modal.Footer>
								<div class="flex gap-3">
									<Button onclick={() => (activeSticky = false)} variant="secondary"
										>Cancel</Button
									>
									<Button onclick={() => (activeSticky = false)} variant="secondary">
										{#snippet prefix()}
											<ArrowLeft />
										{/snippet}
										Previous
									</Button>
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
		<LinkH2 href="/modal#disabled-actions" aria-label="disabled-actions"
			>disabled actions</LinkH2
		>
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
								<Button onclick={() => (activeDisabled = false)} variant="secondary"
									>Cancel</Button
								>
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

{#snippet inset()}
	<Row>
		<LinkH2 href="/modal#inset" aria-label="inset">inset</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Button onclick={() => (activeInset = true)} size="small">Open Modal</Button>
					<Modal.Root bind:active={activeInset}>
						<Modal.Content>
							<Modal.Body>
								<Modal.Header>
									<Modal.Title>Create Token</Modal.Title>
									<Modal.Subtitle>This is a modal.</Modal.Subtitle>
								</Modal.Header>
								<Modal.Inset>
									<Text size={14}>Content within the inset.</Text>
								</Modal.Inset>
								<div class="pt-5">
									<Text size={14}>Content outside the inset.</Text>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button onclick={() => (activeInset = false)} variant="secondary"
									>Cancel</Button
								>
								<Button onclick={() => (activeInset = false)}>Submit</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, modalInset)}
		</div>
	</Row>
{/snippet}

{#snippet focusInput()}
	<Row>
		<LinkH2 href="/modal#focus-an-input-on-open" aria-label="focus-an-input-on-open"
			>focus an input on open</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Button onclick={() => (activeFocusInput = true)} size="small">Open Modal</Button>
					<Modal.Root bind:active={activeFocusInput} initialFocus={inputElement}>
						<Modal.Content>
							<Modal.Body>
								<Modal.Header>
									<Modal.Title>Invite Member</Modal.Title>
									<Modal.Subtitle>
										On both desktop and the mobile bottom sheet, the Name field receives focus
										when the Modal opens so the user can start typing immediately.
									</Modal.Subtitle>
								</Modal.Header>
								<Input
									label="Name"
									placeholder="Jane Doe"
									bind:value={name}
									bind:inputElement
								/>
							</Modal.Body>
							<Modal.Footer>
								<Button onclick={() => (activeFocusInput = false)} variant="secondary"
									>Cancel</Button
								>
								<Button onclick={() => (activeFocusInput = false)}>Send Invite</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, modalFocusInput)}
		</div>
	</Row>
{/snippet}

{#snippet mobileInputs()}
	<Row>
		<LinkH2 href="/modal#mobile-sheet-with-inputs" aria-label="mobile-sheet-with-inputs"
			>mobile sheet with inputs</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Button onclick={() => (activeMobileInputs = true)} size="small">Open Modal</Button>
					<Modal.Root bind:active={activeMobileInputs}>
						<Modal.Content>
							<Modal.Body>
								<Modal.Header>
									<Modal.Title>Invite Member</Modal.Title>
									<Modal.Subtitle>
										On a mobile viewport this opens as a bottom sheet. Verify that both inputs
										receive focus and accept keyboard input.
									</Modal.Subtitle>
								</Modal.Header>
								<div class="flex flex-col gap-3">
									<Input label="Name" placeholder="Jane Doe" bind:value={name} />
									<Input label="Email" placeholder="jane@example.com" bind:value={email} />
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button onclick={() => (activeMobileInputs = false)} variant="secondary"
									>Cancel</Button
								>
								<Button onclick={() => (activeMobileInputs = false)}>Send Invite</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, modalMobileInputs)}
		</div>
	</Row>
{/snippet}

{#snippet toastsFocusTrap()}
	<Row>
		<LinkH2 href="/modal#toasts-and-focus-trap" aria-label="toasts-and-focus-trap"
			>toasts and focus trap</LinkH2
		>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Button onclick={() => (activeToasts = true)} size="small">Open Modal</Button>
					<Modal.Root bind:active={activeToasts}>
						<Modal.Content>
							<Modal.Body>
								<Modal.Header>
									<Modal.Title>Toasts and Focus Trap</Modal.Title>
									<Modal.Subtitle>
										The Modal traps focus, so Tab stays within it. Toasts still render above
										the Modal and remain interactive — trigger one, then click its action. The
										Modal stays open and focus returns to it.
									</Modal.Subtitle>
								</Modal.Header>
								<div class="flex flex-col gap-3">
									<Button
										onclick={() =>
											toast("Project link copied", {
												action: "Undo",
												onAction: () => toast("Copy reverted"),
											})}
										size="small"
										variant="secondary"
									>
										Show Toast
									</Button>
								</div>
							</Modal.Body>
							<Modal.Footer>
								<Button size="small" onclick={() => (activeToasts = false)}>Done</Button>
							</Modal.Footer>
						</Modal.Content>
					</Modal.Root>
				</div>
			{/snippet}
			{@render demoAndCode(demo, modalToastsFocusTrap)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "menu", href: "/menu" }}
			next={{ title: "note", href: "/note" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render modal()}
	{@render defaultModal()}
	{@render sticky()}
	{@render singleButton()}
	{@render disabled()}
	{@render inset()}
	{@render focusInput()}
	{@render mobileInputs()}
	{@render toastsFocusTrap()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
