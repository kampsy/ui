<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { avatarGroup, avatarPlaceholder } from '../../docs/data/avatar.js';
	import AvatarGroup from '$lib/avatar/avatarGroup.svelte';
	import Avatar from '$lib/avatar/avatar.svelte';
	import Pagination from '$lib/pagination/pagination.svelte';

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

{#snippet avatar()}
	<Row>
		<h1
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			avatar
		</h1>
		<p
			class="first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Avatars represent a user or a team. Stacked avatars represent a group of people
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-light-bg dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 rounded-lg overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6 overflow-x-auto">
			<div class="w-full flex flex-wrap gap-4 justify-between">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet group()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Group
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="space-y-4">
					<div>
						<AvatarGroup  members={members.slice(0, 3)} size={32} />
					</div>
					<div>
						<AvatarGroup limit={4} {members} size={32} />
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarGroup)}
		</div>
	</Row>
{/snippet}

{#snippet placeholder()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			placeholder
		</h2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div>
					<Avatar placeholder size={90} />
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarPlaceholder)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'introduction', href: '/introduction' }}
			next={{ title: 'badge', href: '/badge' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render avatar()}
	{@render group()}
	{@render placeholder()}

	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
