<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	interface Props {
		children: Snippet | undefined;
	};

	let { children }: Props = $props();

	const rootState = getContext<{
		sticky: boolean;
	}>('modal');

	let headerClass = $derived.by(() => {
		if (rootState.sticky) {
			return `absolute inset-x-0 top-0  w-full px-[24px] py-[20px]  bg-kui-light-bg-secondary dark:bg-kui-dark-bg 
			rounded-t-[12px] border-b border-kui-light-gray-200 dark:border-kui-dark-gray-200 drop-shadow-sm`;
		} else {
			return 'mb-6';
		}
	});
</script>

{#if children}
	<header aria-labelledby="modal-title" class={headerClass}>
		{@render children()}
	</header>
{/if}
