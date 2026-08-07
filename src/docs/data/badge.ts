export const badgeVariants = `
<script lang="ts">
	import { Badge } from 'kampsy-ui';
</script>

<div class="flex flex-col gap-2">
	<div class="flex gap-1 capitalize">
		<Badge variant="gray" aria-label="gray">gray</Badge>
		<Badge variant="gray" contrast="low" aria-label="gray-subtle">gray-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="blue" aria-label="blue">blue</Badge>
		<Badge variant="blue" contrast="low" aria-label="blue-subtle">blue-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="purple" aria-label="purple">purple</Badge>
		<Badge variant="purple" contrast="low" aria-label="purple-subtle">purple-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="amber" aria-label="amber">amber</Badge>
		<Badge variant="amber" contrast="low" aria-label="amber-subtle">amber-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="red" aria-label="red">red</Badge>
		<Badge variant="red" contrast="low" aria-label="red-subtle">red-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="pink" aria-label="pink">pink</Badge>
		<Badge variant="pink" contrast="low" aria-label="pink-subtle">pink-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="green" aria-label="green">green</Badge>
		<Badge variant="green" contrast="low" aria-label="green-subtle">green-subtle</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge variant="teal" aria-label="teal">teal</Badge>
		<Badge variant="teal" contrast="low" aria-label="teal-subtle">teal-subtle</Badge>
	</div>
	<div class="flex gap-1 capitalize">
		<Badge variant="inverted" aria-label="inverted">inverted</Badge>
		<Badge variant="trial" aria-label="trial">Trial</Badge>
		<Badge variant="turbo" aria-label="turbo">Turborepo</Badge>
	</div>
</div>`

export const badgeSize = `
<script lang="ts">
	import { Badge } from 'kampsy-ui';
</script>

<div class="flex items-center gap-2">

	<div class="flex gap-1 capitalize">
		<Badge size="sm" aria-label="small">small</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge size="md" aria-label="medium">medium</Badge>
	</div>

	<div class="flex gap-1 capitalize">
		<Badge size="lg" aria-label="large">large</Badge>
	</div>
</div>`

export const badgeWithIcon = `
<script lang="ts">
	import { Badge } from 'kampsy-ui';
	import { Shield } from '@lucide/svelte';
</script>

<div class="flex flex-col gap-2">

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="gray" aria-label="icon large gray">gray</Badge>
		<Badge icon={Shield} size="md" variant="gray" aria-label="icon medium gray">gray</Badge>
		<Badge icon={Shield} size="sm" variant="gray" aria-label="icon small gray">gray</Badge>
		<Badge icon={Shield} size="sm" variant="gray" contrast="low" aria-label="icon small gray-subtle">gray</Badge>
		<Badge icon={Shield} size="md" variant="gray" contrast="low" aria-label="icon medium gray-subtle">gray</Badge>
		<Badge icon={Shield} size="lg" variant="gray" contrast="low" aria-label="icon large gray-subtle">gray</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="blue" aria-label="icon large blue">blue</Badge>
		<Badge icon={Shield} size="md" variant="blue" aria-label="icon medium blue">blue</Badge>
		<Badge icon={Shield} size="sm" variant="blue" aria-label="icon small blue">blue</Badge>
		<Badge icon={Shield} size="sm" variant="blue" contrast="low" aria-label="icon small blue-subtle">blue</Badge>
		<Badge icon={Shield} size="md" variant="blue" contrast="low" aria-label="icon medium blue-subtle">blue</Badge>
		<Badge icon={Shield} size="lg" variant="blue" contrast="low" aria-label="icon large blue-subtle">blue</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="purple" aria-label="icon large purple">purple</Badge>
		<Badge icon={Shield} size="md" variant="purple" aria-label="icon medium purple">purple</Badge>
		<Badge icon={Shield} size="sm" variant="purple" aria-label="icon small purple">purple</Badge>
		<Badge icon={Shield} size="sm" variant="purple" contrast="low" aria-label="icon small purple-subtle">purple</Badge>
		<Badge icon={Shield} size="md" variant="purple" contrast="low" aria-label="icon medium purple-subtle">purple</Badge>
		<Badge icon={Shield} size="lg" variant="purple" contrast="low" aria-label="icon large purple-subtle">purple</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="amber" aria-label="icon large amber">amber</Badge>
		<Badge icon={Shield} size="md" variant="amber" aria-label="icon medium amber">amber</Badge>
		<Badge icon={Shield} size="sm" variant="amber" aria-label="icon small amber">amber</Badge>
		<Badge icon={Shield} size="sm" variant="amber" contrast="low" aria-label="icon small amber-subtle">amber</Badge>
		<Badge icon={Shield} size="md" variant="amber" contrast="low" aria-label="icon medium amber-subtle">amber</Badge>
		<Badge icon={Shield} size="lg" variant="amber" contrast="low" aria-label="icon large amber-subtle">amber</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="red" aria-label="icon large red">red</Badge>
		<Badge icon={Shield} size="md" variant="red" aria-label="icon medium red">red</Badge>
		<Badge icon={Shield} size="sm" variant="red" aria-label="icon small red">red</Badge>
		<Badge icon={Shield} size="sm" variant="red" contrast="low" aria-label="icon small red-subtle">red</Badge>
		<Badge icon={Shield} size="md" variant="red" contrast="low" aria-label="icon medium red-subtle">red</Badge>
		<Badge icon={Shield} size="lg" variant="red" contrast="low" aria-label="icon large red-subtle">red</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="pink" aria-label="icon large pink">pink</Badge>
		<Badge icon={Shield} size="md" variant="pink" aria-label="icon medium pink">pink</Badge>
		<Badge icon={Shield} size="sm" variant="pink" aria-label="icon small pink">pink</Badge>
		<Badge icon={Shield} size="sm" variant="pink" contrast="low" aria-label="icon small pink-subtle">pink</Badge>
		<Badge icon={Shield} size="md" variant="pink" contrast="low" aria-label="icon medium pink-subtle">pink</Badge>
		<Badge icon={Shield} size="lg" variant="pink" contrast="low" aria-label="icon large pink-subtle">pink</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="green">green</Badge>
		<Badge icon={Shield} size="md" variant="green" >green</Badge>
		<Badge icon={Shield} size="sm" variant="green">green</Badge>
		<Badge icon={Shield} size="sm" variant="green" contrast="low">green</Badge>
		<Badge icon={Shield} size="md" variant="green" contrast="low" >green</Badge>
		<Badge icon={Shield} size="lg" variant="green" contrast="low">green</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="teal" aria-label="icon large teal">teal</Badge>
		<Badge icon={Shield} size="md" variant="teal" aria-label="icon medium teal">teal</Badge>
		<Badge icon={Shield} size="sm" variant="teal" aria-label="icon small teal">teal</Badge>
		<Badge icon={Shield} size="sm" variant="teal" contrast="low" aria-label="icon small teal-subtle">teal</Badge>
		<Badge icon={Shield} size="md" variant="teal" contrast="low" aria-label="icon medium teal-subtle">teal</Badge>
		<Badge icon={Shield} size="lg" variant="teal" contrast="low" aria-label="icon large teal-subtle">teal</Badge>
	</div>

	<div class="flex items-center gap-1 capitalize">
		<Badge icon={Shield} size="lg" variant="inverted" aria-label="icon large inverted">inverted</Badge>
		<Badge icon={Shield} size="md" variant="inverted" aria-label="icon medium inverted">inverted</Badge>
		<Badge icon={Shield} size="sm" variant="inverted" aria-label="icon small inverted">inverted</Badge>
	</div>
</div>`

export const badgePill = `
<script lang="ts">
	import { Badge } from 'kampsy-ui';
	import { ExternalLink } from '@lucide/svelte';
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2 capitalize">
	  <Badge href="/badge#pill" size="sm" variant="pill" aria-label="large pill">label</Badge>
	  <Badge href="/badge#pill" size="md" variant="pill" aria-label="medium pill">label</Badge>
	  <Badge href="/badge#pill" size="lg" variant="pill" aria-label="small pill">label</Badge>
  </div>
  <div class="flex items-center gap-2 capitalize">
	  <Badge href="/badge#pill" icon={ExternalLink} size="sm" variant="pill" aria-label="icon large pill">label</Badge>
	  <Badge href="/badge#pill" icon={ExternalLink} size="md" variant="pill" aria-label="icon medium pill">label</Badge>
	  <Badge href="/badge#pill" icon={ExternalLink} size="lg" variant="pill" aria-label="icon small pill">label</Badge>
  </div>
</div>`
