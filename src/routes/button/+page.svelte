<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Row from '$lib/ui/row.svelte';
	import Shell from '$lib/ui/shell.svelte';
</script>

{#snippet button()}
	<Row>
		<h1
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[40px] font-semibold leading-[48px] tracking-[-2.4px] mb-3"
		>
			button
		</h1>
		<p
			class="first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[20px] font-normal leading-[30px] tracking-[-0.33px]"
		>
			Trigger an action or event, such as submitting a form or displaying a dialog.
		</p>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			size
		</h2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-light-gray-900 dark:text-dark-gray-900 text-[16px] font-normal leading-6"
		>
			The default size is medium.
		</p>
		<div class="mt-4 xl:mt-7">
			<div
				class="w-full p-6 bg-light-bg dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 rounded-lg"
			>
				<div class="w-full flex justify-between">
					<Button size="sm">upload</Button>
					<Button>upload</Button>
					<Button size="lg">upload</Button>
				</div>
			</div>
		</div>
	</Row>
{/snippet}

{#snippet types()}
	<Row>
		<h2
			class="first-letter:capitalize text-light-gray-1000 dark:text-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px] mb-3"
		>
			Types
		</h2>

		<!--The example with code snippet-->
		<div class="mt-4 xl:mt-7">
			<div
				class="w-full p-6 bg-light-bg dark:bg-dark-bg border border-light-gray-200 dark:border-dark-gray-400 rounded-lg"
			>
				<div class="w-full flex justify-between">
					<Button size="sm">upload</Button>
					<Button>upload</Button>
					<Button size="lg">upload</Button>
				</div>
			</div>
		</div>
	</Row>
{/snippet}

{#snippet cont()}
	{@render button()}
	{@render size()}
	{@render types()}
{/snippet}

<Shell contSlot={cont} />
