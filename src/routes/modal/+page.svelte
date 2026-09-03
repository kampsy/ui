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

{#snippet roundedCode(value: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{value}
	</code>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<LinkH2 href="/modal#best-practices" aria-label="best practices">best practices</LinkH2>
		<div class="mt-4">
			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				When to use
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Use {@render roundedCode("Modal")} when a decision must block the rest of the page. For
					persistent associated context where the underlying page stays readable, use
					{@render roundedCode("Sheet")} on desktop or {@render roundedCode("Drawer")} on mobile.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Confirm destructive actions in a {@render roundedCode("Modal")}. {@render roundedCode(
						"Drawer",
					)} and {@render roundedCode("Sheet")} don't fully dim the page, so they read as too soft
					for a delete or revoke.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Skip {@render roundedCode("Modal")} for routine create flows that have a dedicated page;
					route to the page instead.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Behavior
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Default focus to {@render roundedCode("Cancel")} on any destructive {@render roundedCode(
						"Modal",
					)}. Enter must never trigger the destructive action without a typed confirmation.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Allow Escape and outside-click to dismiss non-destructive modals; gate dismissal on
					destructive ones with unsaved input.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Trap focus inside the {@render roundedCode("Modal")} while it's open and return focus to
					the trigger after close. Restore body scroll on the same tick the modal unmounts.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					For high-stakes destructive actions, gate the primary button on a typed match of the
					resource name.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Content
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					{@render roundedCode("Modal.Title")} is a Title Case statement, never a question.
					{@render roundedCode("Transfer Project")} is correct; {@render roundedCode(
						"Transfer Project?",
					)} is wrong.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Body copy is sentence case, one to three sentences. State the consequence first, then
					any cascade.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Primary button is {@render roundedCode("Verb + Noun")} and matches the title verb. Never
					{@render roundedCode("Confirm")}, {@render roundedCode("OK")}, or a bare verb on a
					destructive primary.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					The cancel literal stays {@render roundedCode("Cancel")}. Acknowledgment-only modals
					use {@render roundedCode("Done")}, never {@render roundedCode("OK")} or
					{@render roundedCode("Close")}.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Close irreversible bodies with {@render roundedCode("This cannot be undone.")}; close
					cascade-only bodies with {@render roundedCode("Some effects cannot be undone.")}.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Pair the success toast verb one-to-one with the primary button:
					{@render roundedCode("Delete Project")} button, {@render roundedCode(
						"Project deleted",
					)} toast.
				</li>
			</ul>

			<h3
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mt-6 mb-2 text-[16px] leading-6 font-semibold tracking-[-0.16px]"
			>
				Accessibility
			</h3>
			<ul class="mt-2 list-disc">
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Set {@render roundedCode("aria-labelledby")} to the {@render roundedCode(
						"Modal.Title",
					)} id so screen readers announce the title on open.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					Keep the cancel button literally {@render roundedCode("Cancel")} so screen-reader users
					hear a stable dismissal label across destructive flows.
				</li>
				<li
					class="[&_strong]:text-kui-light-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 ml-8 py-0.5 leading-6 [&_strong]:font-normal"
				>
					After an error inside the {@render roundedCode("Modal")}, keep focus inside so the
					user can retry; after success, return focus to the trigger.
				</li>
			</ul>
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
	{@render bestPractices()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
