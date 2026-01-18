const title = "avatar"
const description = `
Avatars represent a user or a team. Stacked avatars represent a group of people
`

export const avatarGroup = `
<script lang="ts">
	import { AvatarGroup } from 'kampsy-ui';

	const members = [
		{
			name: 'Evil Rabbit',
			imageLink: 'https://vercel.com/api/www/avatar?u=evilrabbit&s=64'
		},
		{
			name: 'Evil Rabbit',
			imageLink: 'https://vercel.com/api/www/avatar?u=sambecker&s=64'
		},
		{
			name: 'Evil Rabbit',
			imageLink: 'https://vercel.com/api/www/avatar?u=rauno&s=64'
		},
		{
			name: 'Evil Rabbit',
			imageLink: 'https://vercel.com/api/www/avatar?u=sambecker&s=64'
		},
		{
			name: 'Evil Rabbit',
			imageLink: 'https://vercel.com/api/www/avatar?u=rauno&s=64'
		},
		{
			name: 'Evil Rabbit',
			imageLink: 'https://vercel.com/api/www/avatar?u=sambecker&s=64'
		},
		{
			name: 'Evil Rabbit',
			imageLink: 'https://vercel.com/api/www/avatar?u=evilrabbit&s=64'
		}
	];
</script>

<div class="flex flex-col gap-2">
	<div class="space-y-4">
		<div>
			<AvatarGroup members={members.slice(0, 3)} size={32} />
		</div>
		<div>
			<AvatarGroup limit={4} {members} size={32} />
		</div>
	</div>
</div>`;

export const avatarText = `
<script lang="ts">
	import { AvatarText } from 'kampsy-ui';
</script>

<AvatarText.Root size={40}>
	<AvatarText.Content>
		<AvatarText.Heading>Jese Leos</AvatarText.Heading>
		<AvatarText.Subheading>Joined in August 2014</AvatarText.Subheading>
	</AvatarText.Content>
</AvatarText.Root>`;

export const avatarPlaceholder = `
<script lang="ts">
	import { Avatar } from 'kampsy-ui';
</script>

<div>
	<Avatar placeholder size={90} />
</div>`;