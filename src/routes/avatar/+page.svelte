<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';

	
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

{#snippet cont()}
	{@render avatar()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
