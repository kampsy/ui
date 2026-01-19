<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet | undefined;
	};

	let { class: klass = '', children }: Props = $props();

	const rootState = getContext<{
		sticky: boolean;
	}>('modal');

	let footerClass = $derived.by(() => {
		if (rootState.sticky) {
			return ``;
		} else {
			return '';
		}
	});
</script>

{#if children}
	<footer
		aria-labelledby="modal-actions"
		class="sticky lg:absolute inset-x-0 bottom-0 p-4 box-border border-t border-kui-light-gray-200 dark:border-kui-dark-gray-200 flex
	items-center justify-between bg-kui-light-bg-secondary dark:bg-kui-dark-bg rounded-b-xl drop-shadow-xs {footerClass} {klass}"
	>
		{@render children()}
	</footer>
{/if}
