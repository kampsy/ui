export const choiceboxDefault = `
<script lang="ts">
	import { Choicebox } from 'kampsy-ui';

	let value: string | string[]  = $state('');
</script>

<div class="w-full">
	<Choicebox.Group
		label="select a plan"
		type="radio"
		bind:value
		onchange={(v) => console.log(v)}
	>
		<Choicebox.Item defaultChecked description="Free for two weeks" title="Pro Trial" value="trial" />
		<Choicebox.Item description="Get started now" title="Pro" value="pro" />
	</Choicebox.Group>
</div>`

export const choiceboxMultiselect = `
<script lang="ts">
	import { Choicebox } from 'kampsy-ui';

	let value: string | string[] = $state([]);
</script>

<div class="w-full">
	<Choicebox.Group
		label="select a plan"
		type="checkbox"
		bind:value
		onchange={(v) => console.log(v)}
	>
		<Choicebox.Item description="Free for two weeks" title="Pro Trial" value="trial" />
		<Choicebox.Item description="Get started now" title="Pro" value="pro" />
	</Choicebox.Group>
</div>`

export const choiceboxDisabled = `
<script lang="ts">
	import { Choicebox } from 'kampsy-ui';

	let value: string | string[] = $state('');
	let value2: string | string[] = $state([]);
</script>

<div class="flex w-full flex-initial flex-col items-stretch justify-start gap-6">
	<Choicebox.Group label="Choicebox group disabled" disabled type="radio" bind:value>
		<Choicebox.Item description="Free for two weeks" title="Pro Trial" value="trial" />
		<Choicebox.Item description="Get started now" title="Pro" value="pro" />
	</Choicebox.Group>
	<Choicebox.Group label="Single input disabled" type="checkbox" bind:value={value2}>
		<Choicebox.Item description="Free for two weeks" disabled title="Pro Trial" value="trial" />
		<Choicebox.Item description="Get started now" title="Pro" value="pro" />
	</Choicebox.Group>
</div>`

export const choiceboxCustomContent = `
<script lang="ts">
	import { Choicebox, Badge } from 'kampsy-ui';

	let value: string | string[] = $state('');
</script>

<div class="w-full">
	<Choicebox.Group label="select a plan" type="radio" bind:value>
		<Choicebox.Item
			description="Free for two weeks"
			title="Pro Trial"
			value="trial"
		>
			<div class="flex justify-center p-2">
				<Badge variant="trial">Trial</Badge>
			</div>
		</Choicebox.Item>
		<Choicebox.Item description="Get started now" title="Pro" value="pro">
			<div class="flex justify-center p-2">
				<Badge variant="blue">Pro</Badge>
			</div>
		</Choicebox.Item>
	</Choicebox.Group>
</div>`
