
export const projectBannerDefault = `
import { ProjectBanner, Tooltip } from 'kampsy-ui';

const ProjectBannerVariants: Array<'gray' | 'warning' | 'error' | 'success'> = [
	'gray',
	'warning',
	'error',
	'success'
];

const labelStr = "This project was rolled back by @johnphamous";

{#snippet labelSnip()}
	This project was rolled back by
	<Tooltip
		class="underline decoration-dashed underline-offset-[5px]"
		text="Yesterday for project marketing-website"
	>
		@johnphamous
	</Tooltip>
{/snippet}

<div class="w-full space-y-6">
	{#each ProjectBannerVariants as variant}
		<div class="w-full space-y-2">
			<ProjectBanner
				callToAction={{
					label: 'Undo Rollback',
					onClick: () => {
						alert('Button clicked');
					}
				}}
				label={labelStr}
				{variant}
			/>
			<ProjectBanner
				callToAction={{
					label: 'View Rollback',
					href: '/project-banner'
				}}
				label={labelSnip}
				{variant}
			/>
		</div>
	{/each}
</div>`;

