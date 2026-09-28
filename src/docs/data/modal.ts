export const modalDefault = `
<script lang="ts">
	import { Modal, Text } from 'kampsy-ui';

	let active = $state(false);
</script>

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
    			<Button onclick={() => (active = false)} type="secondary">Cancel</Button>
    			<Button onclick={() => (active = false)}>Submit</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`

export const modalSticky = `
<script lang="ts">
	import { Modal, Text } from 'kampsy-ui';
	import { ArrowLeft } from 'kampsy-ui/icons';

	let active = $state(false);
</script>

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active sticky>
    	<Modal.Content>
    		<Modal.Body>
    			<Modal.Header>
    				<Modal.Title>Create Token</Modal.Title>
    			</Modal.Header>
				{#each Array(40) as _, i}
					<Text size={14}>Some content contained within the modal.</Text>
				{/each}
    		</Modal.Body>
    		<Modal.Footer>
    			<div class="flex gap-3">
					<Button onclick={() => (activeSticky = false)} variant="secondary">Cancel</Button>
					<Button onclick={() => (activeSticky = false)} variant="secondary">
						{#snippet prefix()}
							<ArrowLeft />
						{/snippet}
						Previous
					</Button>
				</div>
    			<Button onclick={() => (active = false)}>Submit</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`

export const modalSingleButton = `
<script lang="ts">
	import { Modal, Text } from 'kampsy-ui';

	let active = $state(false);
</script>

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active>
    	<Modal.Content>
    		<Modal.Body>
    			<Modal.Header>
    				<Modal.Title>Create Token</Modal.Title>
    			</Modal.Header>
    			<Text size={14}>Some content contained within the modal.</Text>
    		</Modal.Body>
    		<Modal.Footer>
    			<Button onclick={() => (activeSingleButton = false)} type="secondary" class="w-full">
                    Cancel
                </Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`

export const modalDisabkedActions = `
<script lang="ts">
	import { Modal, Text } from 'kampsy-ui';

	let active = $state(false);
</script>

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active>
    	<Modal.Content>
    		<Modal.Body>
    			<Modal.Header>
    				<Modal.Title>Create Token</Modal.Title>
					<Modal.Subtitle>This is a modal.</Modal.Subtitle>
    			</Modal.Header>
    			<Text size={14}>Some content contained within the modal.</Text>
    		</Modal.Body>
    		<Modal.Footer>
                <Button onclick={() => (activeDisabled = false)} type="secondary">Cancel</Button>
    			<Button disabled onclick={() => (activeDisabled = false)}>Submit</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`

export const modalInset = `
<script lang="ts">
	import { Button, Modal, Text } from 'kampsy-ui';

	let active = $state(false);
</script>

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active>
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
    			<Button onclick={() => (active = false)} variant="secondary">Cancel</Button>
    			<Button onclick={() => (active = false)}>Submit</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`

export const modalFocusInput = `
<script lang="ts">
	import { Button, Input, Modal } from 'kampsy-ui';

	let active = $state(false);
	let name = $state('');
	let inputElement = $state<HTMLInputElement>();
</script>

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active initialFocus={inputElement}>
    	<Modal.Content>
    		<Modal.Body>
    			<Modal.Header>
    				<Modal.Title>Invite Member</Modal.Title>
    				<Modal.Subtitle>
                        On both desktop and the mobile bottom sheet, the Name field receives focus
                        when the Modal opens so the user can start typing immediately.
    				</Modal.Subtitle>
    			</Modal.Header>
    			<Input label="Name" placeholder="Jane Doe" bind:value={name} bind:inputElement />
    		</Modal.Body>
    		<Modal.Footer>
    			<Button onclick={() => (active = false)} variant="secondary">Cancel</Button>
    			<Button onclick={() => (active = false)}>Send Invite</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`

export const modalMobileInputs = `
<script lang="ts">
	import { Button, Input, Modal } from 'kampsy-ui';

	let active = $state(false);
	let name = $state('');
	let email = $state('');
</script>

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active>
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
    			<Button onclick={() => (active = false)} variant="secondary">Cancel</Button>
    			<Button onclick={() => (active = false)}>Send Invite</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`

export const modalToastsFocusTrap = `
<script lang="ts">
	import { Button, Modal, Toaster, toast } from 'kampsy-ui';

	let active = $state(false);
</script>

<Toaster />

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active>
    	<Modal.Content>
    		<Modal.Body>
    			<Modal.Header>
    				<Modal.Title>Toasts and Focus Trap</Modal.Title>
    				<Modal.Subtitle>
                        The Modal traps focus, so Tab stays within it. Toasts still render above the
                        Modal and remain interactive — trigger one, then click its action. The Modal
                        stays open and focus returns to it.
    				</Modal.Subtitle>
    			</Modal.Header>
    			<div class="flex flex-col gap-3">
    				<Button
    					onclick={() =>
    						toast('Project link copied', {
    							action: 'Undo',
    							onAction: () => toast('Copy reverted'),
    						})
    					}
    					size="small"
    					variant="secondary"
    				>
    					Show Toast
    				</Button>
    			</div>
    		</Modal.Body>
    		<Modal.Footer>
    			<Button onclick={() => (active = false)}>Done</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`
