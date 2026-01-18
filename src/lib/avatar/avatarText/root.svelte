<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		size?: number;
		placeholder?: boolean;
		children: Snippet | undefined;
	};

	let { size = 32, placeholder = false, children = undefined }: Props = $props();

	let widthHeight = $derived.by(() => {
		return ` width: ${size}px; height: ${size}px;`;
	});
</script>

<div
	class="group cursor-pointer transition duration-150 ease-out hover:ease-in hover:bg-kui-light-gray-200 dark:hover:bg-kui-dark-gray-200 px-[10px] py-[8px] rounded-[8px]"
>
	<div class="flex items-center gap-x-[10px]">
		<div
			aria-label="avatar circle"
			style={widthHeight}
			class="flex items-center justify-center rounded-full overflow-hidden text-[10px] font-semibold border dark:text-kui-dark-gray-1000 border-kui-light-gray-200 dark:border-kui-dark-gray-400 group-hover:border-kui-light-gray-500 dark:group-hover:border-kui-dark-gray-500"
		></div>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
