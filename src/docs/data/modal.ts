export const modalDefault = `
import { Modal } from 'kampsy-ui';

let active = $state(false);

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
    			<Modal.Text>Some content contained within the modal.</Modal.Text>
    		</Modal.Body>
    		<Modal.Footer>
    			<Button onclick={() => (active = false)} type="secondary">Cancel</Button>
    			<Button onclick={() => (active = false)}>Submit</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`;

export const modalSticky = `
import { Modal } from 'kampsy-ui';

let active = $state(false);

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active sticky>
    	<Modal.Content>
    		<Modal.Body>
    			<Modal.Header>
    				<Modal.Title>Create Token</Modal.Title>
    			</Modal.Header>
    			<!--Array from 1 to 30-->
				{#each Array(30) as _, i}
					<Modal.Text>Some content contained within the modal.</Modal.Text>
				{/each}
    		</Modal.Body>
    		<Modal.Footer>
    			<Button onclick={() => (active = false)} type="secondary">Cancel</Button>
    			<Button onclick={() => (active = false)}>Submit</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`;

export const modalSingleButton = `
import { Modal } from 'kampsy-ui';

let active = $state(false);

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active>
    	<Modal.Content>
    		<Modal.Body>
    			<Modal.Header>
    				<Modal.Title>Create Token</Modal.Title>
    			</Modal.Header>
    			<Modal.Text>Some content contained within the modal.</Modal.Text>
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
import { Modal } from 'kampsy-ui';

let active = $state(false);

<div>
	<Button onclick={() => (active = true)} size="small">Open Modal</Button>
    <Modal.Root bind:active>
    	<Modal.Content>
    		<Modal.Body>
    			<Modal.Header>
    				<Modal.Title>Create Token</Modal.Title>
					<Modal.Subtitle>This is a modal.</Modal.Subtitle>
    			</Modal.Header>
    			<Modal.Text>Some content contained within the modal.</Modal.Text>
    		</Modal.Body>
    		<Modal.Footer>
                <Button onclick={() => (activeDisabled = false)} type="secondary">Cancel</Button>
    			<Button disabled onclick={() => (activeDisabled = false)}>Submit</Button>
    		</Modal.Footer>
    	</Modal.Content>
    </Modal.Root>
</div>`;