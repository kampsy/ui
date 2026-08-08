<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import Pagination from "$lib/pagination/pagination.svelte"
</script>

<svelte:head>
	<title>Changelog</title>
</svelte:head>

{#snippet changelog()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-[32px] font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-[48px] lg:tracking-[-2.4px]"
		>
			Changelog
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-[30px] lg:tracking-[-0.33px]"
		>
			Latest updates and announcements.
		</p>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "colors", href: "/colors" }}
			next={{ title: "avatar", href: "/avatar" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render changelog()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
