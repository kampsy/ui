
export const splitButtonDefault = `
<script lang="ts">
	import { SplitButton } from 'kampsy-ui';

	const sizes: Array<'tiny' | 'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
</script>

<div class="space-y-8">
	<div class="flex flex-wrap gap-4 lg:gap-8">
		{#each sizes as size}
			<SplitButton.Root>
				<SplitButton.Button onclick={() => alert('Clicked save')} {size}>save</SplitButton.Button>
				<SplitButton.Content class="w-[264px]">
					<SplitButton.Item
						onClick={() => alert('Clicked save')}
						title="Save"
						description="Save changes"
					/>
					<SplitButton.Item
						onClick={() => alert('Clicked save + Redeploy')}
						title="Save + Redeploy"
						description="Save changes and create a new production deployment"
					/>
				</SplitButton.Content>
			</SplitButton.Root>
		{/each}
    </div>
	<div class="flex flex-wrap gap-4 lg:gap-8">
		{#each sizes as size}
			<SplitButton.Root>
				<SplitButton.Button onclick={() => alert('Clicked save')} {size} type="secondary">save</SplitButton.Button>
				<SplitButton.Content class="w-[264px]">
					<SplitButton.Item
						onClick={() => alert('Clicked save')}
						title="Save"
						description="Save changes"
					/>
					<SplitButton.Item
						onClick={() => alert('Clicked save + Redeploy')}
						title="Save + Redeploy"
						description="Save changes and create a new production deployment"
					/>
				</SplitButton.Content>
			</SplitButton.Root>
		{/each}
    </div>
</div>`;



export const splitButtonTypes = `
<script lang="ts">
	import { SplitButton } from 'kampsy-ui';

	const sbTypes: Array<'primary' | 'secondary' | 'tertiary' | 'error' | 'warning'> = [
	'primary',
	'secondary',
	'tertiary',
	'error',
	'warning'
	];
</script>

<div class="flex flex-wrap gap-4 lg:gap-10">
	{#each sbTypes as sbType}
		<SplitButton.Root>
			<SplitButton.Button onclick={() => alert('Clicked save')} type={sbType}>save</SplitButton.Button>
			<SplitButton.Content class="w-[264px]">
				<SplitButton.Item
					onClick={() => alert('Clicked save')}
					title="Save"
					description="Save changes"
				/>
				<SplitButton.Item
					onClick={() => alert('Clicked save + Redeploy')}
					title="Save + Redeploy"
					description="Save changes and create a new production deployment"
				/>
			</SplitButton.Content>
		</SplitButton.Root>
	{/each}
</div>`;


export const splitButtonMenuAlignment = `
<script lang="ts">
	import { SplitButton } from 'kampsy-ui';
</script>

<div class="w-full flex gap-10">
    <SplitButton.Root>
    	<SplitButton.Button onclick={() => alert('Clicked save')}>save</SplitButton.Button>
    	<SplitButton.Content class="w-[264px]">
    		<SplitButton.Item
    			onClick={() => alert('Clicked save')}
    			title="Save"
    			description="Save changes"
    		/>
    		<SplitButton.Item
    			onClick={() => alert('Clicked save + Redeploy')}
    			title="Save + Redeploy"
    			description="Save changes and create a new production deployment"
    		/>
    	</SplitButton.Content>
    </SplitButton.Root>

    <SplitButton.Root alignment="right">
    	<SplitButton.Button onclick={() => alert('Clicked save')}>save</SplitButton.Button>
    	<SplitButton.Content class="w-[264px]">
    		<SplitButton.Item
    			onClick={() => alert('Clicked save')}
    			title="Save"
    			description="Save changes"
    		/>
    		<SplitButton.Item
    			onClick={() => alert('Clicked save + Redeploy')}
    			title="Save + Redeploy"
    			description="Save changes and create a new production deployment"
    		/>
    	</SplitButton.Content>
    </SplitButton.Root>
</div>`;