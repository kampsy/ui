

export const projectBannerSuccess = `
import { ProjectBanner } from 'kampsy-ui';
import { ShieldCheck } from 'kampsy-ui/icons';

<div class="w-full">
	<ProjectBanner
		icon={ShieldCheck}
		callToAction={{
			label: 'Disable',
			href: '/project-banner'
		}}
		label="Attack Challenge Mode is enabled for this project"
		variant="success"
	/>
</div>`;

export const projectBannerWarning = `
import { ProjectBanner } from 'kampsy-ui';
import { RotateCounterClockWise } from 'kampsy-ui/icons';

{#snippet labelSnip()}
	This project was rolled back by
	<Tooltip
		class="underline decoration-dashed underline-offset-[5px]"
		text="Yesterday for project marketing-website"
	>
		@johnphamous
	</Tooltip>
{/snippet}

<div class="w-full">
	<ProjectBanner
		icon={RotateCounterClockWise}
		callToAction={{
			label: 'Undo Rollback',
			onClick: () => {
				alert('Button clicked');
			}
		}}
		label={labelSnip}
		variant="warning"
	/>
</div>`;

export const projectBannerError = `
import { ProjectBanner } from 'kampsy-ui';
import { Warning } from 'kampsy-ui/icons';

<div class="w-full">
	<ProjectBanner
		icon={Warning}
		callToAction={{
			label: 'Add Credit Card',
			href: '/project-banner'
		}}
		label="Payment failed, update credit card information before your account is shut down"
		variant="error"
	/>
</div>`;

