export const avatarGroup = `
import { AvatarGroup } from 'kodo-ui';

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

export const avatarPlaceholder = `
import { Avatar } from 'kodo-ui';

<div>
	<Avatar placeholder size={90} />
</div>`;