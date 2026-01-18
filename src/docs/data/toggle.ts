export const toggleDefault = `
<script lang="ts">
	import { Toggle } from 'kampsy-ui';

	let checked = $state(false);
	let checked2 = $state(true);
</script>

<div class="space-y-4">
	<div class="w-full">
		<Toggle aria-label="Enable Firewall" {checked} />
	</div>
	<div class="w-full">
		<Toggle aria-label="Enable Firewall" checked={checked2} />
	</div>
</div>`;

export const toggleSizes = `
<script lang="ts">
	import { Toggle } from 'kampsy-ui';
</script>

<div class="w-full flex">
	<div class="w-4/12">
		<Toggle aria-label="Enable Firewall" checked={false} />
	</div>
	<div class="w-4/12">
		<Toggle aria-label="Enable Firewall" checked={false} size="large" />
	</div>
</div>`;

export const toggleCustomColors = `
import { Toggle } from 'kampsy-ui';
import { LockClosedSmall, LockOpenSmall } from 'kampsy-ui/icons';

let checked = $state(false);


<div class="w-full space-y-4">
	<div class="w-full">
		<Toggle
			aria-label="Enable Firewall"
			bind:checked={checked}
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
			bind:checked={checked}
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
			bind:checked={checked}
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
			bind:checked={checked}
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
			bind:checked={checked}
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
			bind:checked={checked}
			color="teal"
			size="large"
			icon={{
				checked: LockClosedSmall,
				unchecked: LockOpenSmall
			}}
		/>
	</div>
</div>`

export const toggleWithLabel = `
import { Toggle } from 'kampsy-ui';
import { LockClosedSmall, LockOpenSmall } from 'kampsy-ui/icons';

let withLabel = $state(false);

<div class="w-full space-y-4">
	<div class="w-full flex items-center gap-6">
		<Toggle aria-label="Enable Firewall" bind:checked={withLabel}>Enable Firewall</Toggle>
		<Toggle aria-label="Enable Firewall" bind:checked={withLabel} direction="switch-first">Enable Firewall</Toggle>
	</div>
	<div class="w-full flex items-center gap-6">
		<Toggle aria-label="Enable Firewall" size="large" bind:checked={withLabel}>Enable Firewall</Toggle>
		<Toggle
			aria-label="Enable Firewall"
			size="large"
			direction="switch-first"
			bind:checked={withLabel}>Enable Firewall</Toggle>
	</div>
	<div class="w-full flex items-center gap-6">
		<Toggle
			aria-label="Enable Firewall"
			bind:checked={withLabel}
			icon={{
				checked: LockClosedSmall,
				unchecked: LockOpenSmall
			}}>Enable Firewall</Toggle>

		<Toggle
			aria-label="Enable Firewall"
			bind:checked={withLabel}
			direction="switch-first"
			icon={{
				checked: LockClosedSmall,
				unchecked: LockOpenSmall
			}}>Enable Firewall</Toggle>
	</div>
	<div class="w-full flex items-center gap-6">
		<Toggle
			aria-label="Enable Firewall"
			size="large"
			bind:checked={withLabel}
			icon={{
				checked: LockClosedSmall,
				unchecked: LockOpenSmall
			}}>Enable Firewall</Toggle>

		<Toggle
			aria-label="Enable Firewall"
			size="large"
			bind:checked={withLabel}
			direction="switch-first"
			icon={{
				checked: LockClosedSmall,
				unchecked: LockOpenSmall
			}}>Enable Firewall</Toggle>
	</div>
</div>`