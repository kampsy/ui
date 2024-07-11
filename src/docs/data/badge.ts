export const badgeVariants = `
import { Badge } from 'kodo-ui';

<div class="flex flex-col gap-2">
	<div class="flex gap-1">
		<Badge variant="gray">gray</Badge>
		<Badge variant="gray-subtle">gray-subtle</Badge>
	</div>

	<div class="flex gap-1">
		<Badge variant="blue">blue</Badge>
		<Badge variant="blue-subtle">blue-subtle</Badge>
	</div>

	<div class="flex gap-1">
		<Badge variant="purple">purple</Badge>
		<Badge variant="purple-subtle">purple-subtle</Badge>
	</div>

	<div class="flex gap-1">
		<Badge variant="amber">amber</Badge>
		<Badge variant="amber-subtle">amber-subtle</Badge>
	</div>

	<div class="flex gap-1">
		<Badge variant="red">red</Badge>
		<Badge variant="red-subtle">red-subtle</Badge>
	</div>

	<div class="flex gap-1">
		<Badge variant="pink">pink</Badge>
		<Badge variant="pink-subtle">pink-subtle</Badge>
	</div>

	<div class="flex gap-1">
		<Badge variant="green">green</Badge>
		<Badge variant="green-subtle">green-subtle</Badge>
	</div>

	<div class="flex gap-1">
		<Badge variant="teal">teal</Badge>
		<Badge variant="teal-subtle">teal-subtle</Badge>
	</div>
	<div class="flex gap-1">
		<Badge variant="inverted">inverted</Badge>
	</div>
</div>`;

export const badgeSize = `
import { Badge } from 'kodo-ui';

<div class="flex flex-col gap-2">

	<div class="flex gap-1">
		<Badge size="sm" >small</Badge>
	</div>

	<div class="flex gap-1">
		<Badge size="md" >medium</Badge>
	</div>

	<div class="flex gap-1">
		<Badge size="lg" >large</Badge>
	</div>
</div>`;

export const badgeWithIcon = `
import { Badge } from 'kodo-ui';
import { Shield } from 'kodo-ui/icons/shield.svelte';


{#snippet shield()}
	<Shield/>
{/snippet}

<div class="flex flex-col gap-2">

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="gray">gray</Badge>
		<Badge icon={shield} size="md" variant="gray" >gray</Badge>
		<Badge icon={shield} size="sm" variant="gray">gray</Badge>
		<Badge icon={shield} size="sm" variant="gray-subtle">gray</Badge>
		<Badge icon={shield} size="md" variant="gray-subtle" >gray</Badge>
		<Badge icon={shield} size="lg" variant="gray-subtle">gray</Badge>
	</div>

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="blue">blue</Badge>
		<Badge icon={shield} size="md" variant="blue" >blue</Badge>
		<Badge icon={shield} size="sm" variant="blue">blue</Badge>
		<Badge icon={shield} size="sm" variant="blue-subtle">blue</Badge>
		<Badge icon={shield} size="md" variant="blue-subtle" >blue</Badge>
		<Badge icon={shield} size="lg" variant="blue-subtle">blue</Badge>
	</div>

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="purple">purple</Badge>
		<Badge icon={shield} size="md" variant="purple" >purple</Badge>
		<Badge icon={shield} size="sm" variant="purple">purple</Badge>
		<Badge icon={shield} size="sm" variant="purple-subtle">purple</Badge>
		<Badge icon={shield} size="md" variant="purple-subtle" >purple</Badge>
		<Badge icon={shield} size="lg" variant="purple-subtle">purple</Badge>
	</div>

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="amber">amber</Badge>
		<Badge icon={shield} size="md" variant="amber" >amber</Badge>
		<Badge icon={shield} size="sm" variant="amber">amber</Badge>
		<Badge icon={shield} size="sm" variant="amber-subtle">amber</Badge>
		<Badge icon={shield} size="md" variant="amber-subtle" >amber</Badge>
		<Badge icon={shield} size="lg" variant="amber-subtle">amber</Badge>
	</div>

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="red">red</Badge>
		<Badge icon={shield} size="md" variant="red" >red</Badge>
		<Badge icon={shield} size="sm" variant="red">red</Badge>
		<Badge icon={shield} size="sm" variant="red-subtle">red</Badge>
		<Badge icon={shield} size="md" variant="red-subtle" >red</Badge>
		<Badge icon={shield} size="lg" variant="red-subtle">red</Badge>
	</div>

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="pink">pink</Badge>
		<Badge icon={shield} size="md" variant="pink" >pink</Badge>
		<Badge icon={shield} size="sm" variant="pink">pink</Badge>
		<Badge icon={shield} size="sm" variant="pink-subtle">pink</Badge>
		<Badge icon={shield} size="md" variant="pink-subtle" >pink</Badge>
		<Badge icon={shield} size="lg" variant="pink-subtle">pink</Badge>
	</div>

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="green">green</Badge>
		<Badge icon={shield} size="md" variant="green" >green</Badge>
		<Badge icon={shield} size="sm" variant="green">green</Badge>
		<Badge icon={shield} size="sm" variant="green-subtle">green</Badge>
		<Badge icon={shield} size="md" variant="green-subtle" >green</Badge>
		<Badge icon={shield} size="lg" variant="green-subtle">green</Badge>
	</div>	

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="teal">teal</Badge>
		<Badge icon={shield} size="md" variant="teal" >teal</Badge>
		<Badge icon={shield} size="sm" variant="teal">teal</Badge>
		<Badge icon={shield} size="sm" variant="teal-subtle">teal</Badge>
		<Badge icon={shield} size="md" variant="teal-subtle" >teal</Badge>
		<Badge icon={shield} size="lg" variant="teal-subtle">teal</Badge>
	</div>

	<div class="flex items-center gap-1">
		<Badge icon={shield} size="lg" variant="inverted">inverted</Badge>
		<Badge icon={shield} size="md" variant="inverted" >inverted</Badge>
		<Badge icon={shield} size="sm" variant="inverted">inverted</Badge>
	</div>
</div>`;