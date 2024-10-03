<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	type propsT = {
		class?: string;
		children: Snippet | undefined;
	};

	let { class: klass = '', children }: propsT = $props();

	const rootState = getContext<{
		sticky: boolean;
	}>('modal');

	let footerClass = $derived.by(() => {
		if (rootState.sticky) {
			return `absolute bottom-0 left-0 w-full  shadow-[rgba(0,0,0,0.08)]`;
		} else {
			return '';
		}
	});
</script>

{#if children}
	<footer class="p-[12px] border-t border-kui-light-gray-200 dark:border-kui-dark-gray-200 flex 
		items-center justify-between bg-kui-light-bg-secondary dark:bg-kui-dark-bg rounded-b-[12px] {footerClass} {klass}">
		{@render children()}
	</footer>
{/if}
