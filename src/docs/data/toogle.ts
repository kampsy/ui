export const toogleDefault = `
import { Toogle } from 'kampsy-ui';

let checked = $state(false);
let checked2 = $state(true);

<div class="space-y-4">
	<div class="w-full">
		<Toggle aria-label="Enable Firewall" {checked} />
	</div>
	<div class="w-full">
		<Toggle aria-label="Enable Firewall" checked={checked2} />
	</div>
</div>`;

export const toogleSizes = `
import { Toogle } from 'kampsy-ui';

<div class="w-full flex">
	<div class="w-4/12">
		<Toggle aria-label="Enable Firewall" checked={false} />
	</div>
	<div class="w-4/12">
		<Toggle aria-label="Enable Firewall" checked={false} size="large" />
	</div>
</div>`;

export const toogleCustomColors = `
import { Toogle } from 'kampsy-ui';
import { LockClosedSmall, LockOpenSmall } from 'kampsy-ui/icons';

let checked = $state(false);


<div class="w-full space-y-4">
	<div class="w-full">
		<Toggle
			aria-label="Enable Firewall"
			bind:checked={checked}
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
			size="large"
			icon={{
				checked: LockClosedSmall,
				unchecked: LockOpenSmall
			}}
		/>
	</div>
</div>`