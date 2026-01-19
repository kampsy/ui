<script lang="ts">
	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

{#snippet textSnip(text: string)}
	<code
		class="px-2 py-[3.6px] rounded-md text-xs text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		{text}
	</code>
{/snippet}

{@render textSnip(text)}
