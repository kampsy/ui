<script lang="ts">
	interface Props {
		size?: number;
		placeholder?: boolean;
	};

	let { size = 32, placeholder = false }: Props = $props();

	let widthAndHeight = $derived.by(() => {
		return ` width: ${size}px; height: ${size}px;`;
	});
</script>

{#snippet isPlaceholder()}
	<div
		aria-label="Avatar placeholder"
		style={widthAndHeight}
		class="flex items-center justify-center rounded-full overflow-hidden text-[10px] font-semibold border dark:text-kui-dark-gray-1000 border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	></div>
{/snippet}

{#if placeholder}
	{@render isPlaceholder()}
{/if}
