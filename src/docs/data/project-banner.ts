
export const projectBannerDefault = `
import { ProjectBanner } from 'kampsy-ui';

<div class="w-full space-y-6">
    <div class="w-full space-y-2">
    	<ProjectBanner
    		callToAction={{
    			label: 'Undo Rollback',
    			onClick: () => {
    				alert('Button clicked');
    			}
    		}}
    		label="This project was rolled back by @johnphamous"
    		variant='gray'
    	/>
    	<ProjectBanner
    		callToAction={{
    			label: 'View Rollback',
    			href: '/project-banner'
    		}}
    		label="This project was rolled back by @johnphamous"
    		variant='gray'
    	/>
    </div>

    <div class="w-full space-y-2">
    	<ProjectBanner
    		callToAction={{
    			label: 'Undo Rollback',
    			onClick: () => {
    				alert('Button clicked');
    			}
    		}}
    		label="This project was rolled back by @johnphamous"
    		variant='warning'
    	/>
    	<ProjectBanner
    		callToAction={{
    			label: 'View Rollback',
    			href: '/project-banner'
    		}}
    		label="This project was rolled back by @johnphamous"
    		variant='warning'
    	/>
    </div>

    <div class="w-full space-y-2">
    	<ProjectBanner
    		callToAction={{
    			label: 'Undo Rollback',
    			onClick: () => {
    				alert('Button clicked');
    			}
    		}}
    		label="This project was rolled back by @johnphamous"
    		variant='error'
    	/>
    	<ProjectBanner
    		callToAction={{
    			label: 'View Rollback',
    			href: '/project-banner'
    		}}
    		label="This project was rolled back by @johnphamous"
    		variant='error'
    	/>
    </div>

    <div class="w-full space-y-2">
    	<ProjectBanner
    		callToAction={{
    			label: 'Undo Rollback',
    			onClick: () => {
    				alert('Button clicked');
    			}
    		}}
    		label="This project was rolled back by @johnphamous"
    		variant='success'
    	/>
    	<ProjectBanner
    		callToAction={{
    			label: 'View Rollback',
    			href: '/project-banner'
    		}}
    		label="This project was rolled back by @johnphamous"
    		variant='success'
    	/>
    </div>
</div>`;

