export const avatarGroup = `
<script lang="ts">
	import { AvatarGroup } from 'kampsy-ui';

	const members = [
		{ username: 'evilrabbit' },
		{ username: 'severinlandolt' },
		{ username: 'rauchg' },
		{ username: 'christopherkindl' },
		{ username: 'rauno' },
		{ username: 'shuding' },
		{ username: 'skllcrn' },
		{ username: 'almonk' },
	];
</script>

<div class="flex items-center gap-4">
	<AvatarGroup members={members.slice(0, 3)} size={32} />
	<AvatarGroup limit={4} {members} size={32} />
</div>`

export const avatarGroupReverse = `
<script lang="ts">
	import { AvatarGroup } from 'kampsy-ui';

	const members = [
		{ username: 'evilrabbit' },
		{ username: 'severinlandolt' },
		{ username: 'rauchg' },
	];
</script>

<div class="flex items-center gap-4">
	<AvatarGroup {members} size={32} />
	<AvatarGroup {members} size={32} reverse />
</div>`

export const avatarOverlap = `
<script lang="ts">
	import { AvatarGroup } from 'kampsy-ui';

	const members = [
		{ username: 'evilrabbit' },
		{ username: 'severinlandolt' },
		{ username: 'rauchg' },
	];
</script>

<div class="flex items-center gap-6">
	<AvatarGroup {members} overlap="auto" size={16} />
	<AvatarGroup {members} overlap="auto" size={24} />
	<AvatarGroup {members} overlap="auto" size={32} />
	<AvatarGroup {members} overlap="auto" size={48} />
</div>`

export const avatarFixedOverlap = `
<script lang="ts">
	import { AvatarGroup } from 'kampsy-ui';

	const members = [
		{ username: 'evilrabbit' },
		{ username: 'severinlandolt' },
		{ username: 'rauchg' },
	];
</script>

<div class="flex items-center gap-4">
	<AvatarGroup {members} overlap={10} size={24} />
	<AvatarGroup {members} overlap={6} size={24} />
	<AvatarGroup {members} overlap={0} size={24} />
</div>`

export const avatarSize = `
<script lang="ts">
	import { Avatar } from 'kampsy-ui';
</script>

<div class="flex items-center gap-4">
	<Avatar size={24} username="evilrabbit" />
	<Avatar size={32} username="evilrabbit" />
	<Avatar size={48} username="evilrabbit" />
</div>`

export const avatarWithIcon = `
<script lang="ts">
	import { AvatarWithIcon } from 'kampsy-ui';
	import { ArrowUpCircle, CircleCheck, Info } from '@lucide/svelte';
</script>

<div class="flex items-center gap-4">
	<AvatarWithIcon size={32} iconBackground>
		{#snippet icon()}<ArrowUpCircle />{/snippet}
	</AvatarWithIcon>
	<AvatarWithIcon size={32} iconBackground>
		{#snippet icon()}<CircleCheck />{/snippet}
	</AvatarWithIcon>
	<AvatarWithIcon size={32} iconBackground>
		{#snippet icon()}<Info />{/snippet}
	</AvatarWithIcon>
</div>`

export const avatarLetter = `
<script lang="ts">
	import { Avatar } from 'kampsy-ui';
</script>

<div class="flex items-center gap-4">
	<Avatar letter="SL" size={32} />
	<Avatar letter="EK" size={32} />
	<Avatar letter="CK" size={32} />
</div>`

export const avatarPlaceholder = `
<script lang="ts">
	import { Avatar } from 'kampsy-ui';
</script>

<div>
	<Avatar placeholder size={90} />
</div>`

export const avatarBestPractices = `
<script lang="ts">
	import { Avatar, AvatarGroup } from 'kampsy-ui';
</script>

<div class="flex items-center gap-4">
	<Avatar username="evilrabbit" />
	<AvatarGroup members={[
		{ username: 'evilrabbit' },
		{ username: 'severinlandolt' },
		{ username: 'rauchg' },
	]} size={32} />
</div>`
