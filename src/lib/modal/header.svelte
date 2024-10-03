<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	type propsT = {
		children: Snippet | undefined;
	};

	let { children }: propsT = $props();

	const rootState = getContext<{
		sticky: boolean;
	}>('modal');

	let headerClass = $derived.by(() => {
		if (rootState.sticky) {
			return `absolute top-0 left-0 w-full px-[24px] py-[20px]  bg-kui-light-bg-secondary dark:bg-kui-dark-bg 
			rounded-t-[12px] border-b border-kui-light-gray-200 dark:border-kui-dark-gray-200 shadow-[rgba(0,0,0,0.08)]`;
		} else {
			return 'mb-6';
		}
	});
</script>

{#if children}
	<header class={headerClass}>
		{@render children()}
	</header>
{/if}
