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
</div>`;

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
					<Button onclick={() => (activeSticky = false)} type="secondary">Cancel</Button>
					<Button prefix={ArrowLeft} onclick={() => (activeSticky = false)} type="secondary">Previous</Button>
				</div>
    			<Button onclick={() => (active = false)}>Submit</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`;

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
</div>`;

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
</div>`;
