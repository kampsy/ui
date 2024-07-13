<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CollapseCode from '$lib/collapse/collapseCode.svelte';
	import type { Snippet } from 'svelte';
	import { avatarGroup } from '../../docs/data/avatar.js';
	import Avatar from '$lib/avatar/avatar.svelte';
	import AvatarGroup from '$lib/avatar/avatarGroup.svelte';

	
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
				<div>
					<AvatarGroup/>
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarGroup)}
		</div>
	</Row>
{/snippet}

{#snippet cont()}
	{@render avatar()}
	{@render group()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
