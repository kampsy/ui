export const badgeVariants = `
import { Badge } from 'kampsy-ui';

<div class="flex flex-col gap-2">
	<div class="flex gap-1 capitalize">
		<Badge variant="gray" aria-label="gray">gray</Badge>
		<Badge variant="gray-subtle" aria-label="gray-subtle">gray-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="blue" aria-label="blue">blue</Badge>
		<Badge variant="blue-subtle" aria-label="blue-subtle">blue-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="purple" aria-label="purple">purple</Badge>
		<Badge variant="purple-subtle" aria-label="purple-subtle">purple-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="amber" aria-label="amber">amber</Badge>
		<Badge variant="amber-subtle" aria-label="amber-subtle">amber-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="red" aria-label="red">red</Badge>
		<Badge variant="red-subtle" aria-label="red-subtle">red-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="pink" aria-label="pink">pink</Badge>
		<Badge variant="pink-subtle" aria-label="pink-subtle">pink-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="green" aria-label="green">green</Badge>
		<Badge variant="green-subtle" aria-label="green-subtle">green-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="teal" aria-label="teal">teal</Badge>
		<Badge variant="teal-subtle" aria-label="teal-subtle">teal-subtle</Badge>
	</div>
	<div class="flex gap-1 capitalize">
		<Badge variant="inverted" aria-label="inverted">inverted</Badge>
	</div>
</div>`;

export const badgeSize = `
import { Badge } from 'kampsy-ui';

<div class="flex flex-col gap-2">

	<div class="flex gap-1 capitalize">
		<Badge size="small" aria-label="small">small</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge size="medium" aria-label="medium">medium</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge size="large" aria-label="large">large</Badge>
	</div>
</div>`;

export const badgeWithIcon = `
import { Badge } from 'kampsy-ui';
import { Shield } from 'kampsy-ui/icons';

<div class="flex flex-col gap-2">

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="gray" aria-label="icon large gray">gray</Badge>
		<Badge icon={Shield} size="medium" variant="gray" aria-label="icon medium gray">gray</Badge>
		<Badge icon={Shield} size="small" variant="gray" aria-label="icon small gray">gray</Badge>
		<Badge icon={Shield} size="small" variant="gray-subtle" aria-label="icon small gray-subtle">gray</Badge>
		<Badge icon={Shield} size="medium" variant="gray-subtle" aria-label="icon medium gray-subtle">gray</Badge>
		<Badge icon={Shield} size="large" variant="gray-subtle" aria-label="icon large gray-subtle">gray</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="blue" aria-label="icon large blue">blue</Badge>
		<Badge icon={Shield} size="medium" variant="blue" aria-label="icon medium blue">blue</Badge>
		<Badge icon={Shield} size="small" variant="blue" aria-label="icon small blue">blue</Badge>
		<Badge icon={Shield} size="small" variant="blue-subtle" aria-label="icon small blue-subtle">blue</Badge>
		<Badge icon={Shield} size="medium" variant="blue-subtle" aria-label="icon medium blue-subtle">blue</Badge>
		<Badge icon={Shield} size="large" variant="blue-subtle" aria-label="icon large blue-subtle">blue</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="purple" aria-label="icon large purple">purple</Badge>
		<Badge icon={Shield} size="medium" variant="purple" aria-label="icon medium purple">purple</Badge>
		<Badge icon={Shield} size="small" variant="purple" aria-label="icon small purple">purple</Badge>
		<Badge icon={Shield} size="small" variant="purple-subtle" aria-label="icon small purple-subtle">purple</Badge>
		<Badge icon={Shield} size="medium" variant="purple-subtle" aria-label="icon medium purple-subtle">purple</Badge>
		<Badge icon={Shield} size="large" variant="purple-subtle" aria-label="icon large purple-subtle">purple</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="amber" aria-label="icon large amber">amber</Badge>
		<Badge icon={Shield} size="medium" variant="amber" aria-label="icon medium amber">amber</Badge>
		<Badge icon={Shield} size="small" variant="amber" aria-label="icon small amber">amber</Badge>
		<Badge icon={Shield} size="small" variant="amber-subtle" aria-label="icon small amber-subtle">amber</Badge>
		<Badge icon={Shield} size="medium" variant="amber-subtle" aria-label="icon medium amber-subtle">amber</Badge>
		<Badge icon={Shield} size="large" variant="amber-subtle" aria-label="icon large amber-subtle">amber</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="red" aria-label="icon large red">red</Badge>
		<Badge icon={Shield} size="medium" variant="red" aria-label="icon medium red">red</Badge>
		<Badge icon={Shield} size="small" variant="red" aria-label="icon small red">red</Badge>
		<Badge icon={Shield} size="small" variant="red-subtle" aria-label="icon small red-subtle">red</Badge>
		<Badge icon={Shield} size="medium" variant="red-subtle" aria-label="icon medium red-subtle">red</Badge>
		<Badge icon={Shield} size="large" variant="red-subtle" aria-label="icon large red-subtle">red</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="pink" aria-label="icon large pink">pink</Badge>
		<Badge icon={Shield} size="medium" variant="pink" aria-label="icon medium pink">pink</Badge>
		<Badge icon={Shield} size="small" variant="pink" aria-label="icon small pink">pink</Badge>
		<Badge icon={Shield} size="small" variant="pink-subtle" aria-label="icon small pink-subtle">pink</Badge>
		<Badge icon={Shield} size="medium" variant="pink-subtle" aria-label="icon medium pink-subtle">pink</Badge>
		<Badge icon={Shield} size="large" variant="pink-subtle" aria-label="icon large pink-subtle">pink</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="green">green</Badge>
		<Badge icon={Shield} size="medium" variant="green" >green</Badge>
		<Badge icon={Shield} size="small" variant="green">green</Badge>
		<Badge icon={Shield} size="small" variant="green-subtle">green</Badge>
		<Badge icon={Shield} size="medium" variant="green-subtle" >green</Badge>
		<Badge icon={Shield} size="large" variant="green-subtle">green</Badge>
	</div>	

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="teal" aria-label="icon large teal">teal</Badge>
		<Badge icon={Shield} size="medium" variant="teal" aria-label="icon medium teal">teal</Badge>
		<Badge icon={Shield} size="small" variant="teal" aria-label="icon" aria-label="icon small teal">teal</Badge>
		<Badge icon={Shield} size="small" variant="teal-subtle" aria-label="icon small teal-subtle">teal</Badge>
		<Badge icon={Shield} size="medium" variant="teal-subtle" aria-label="icon medium teal-subtle">teal</Badge>
		<Badge icon={Shield} size="large" variant="teal-subtle" aria-label="icon large teal-subtle">teal</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="large" variant="inverted" aria-label="icon large inverted">inverted</Badge>
		<Badge icon={Shield} size="medium" variant="inverted" aria-label="icon medium inverted">inverted</Badge>
		<Badge icon={Shield} size="small" variant="inverted" aria-label="icon small inverted">inverted</Badge>
	</div>
</div>`;