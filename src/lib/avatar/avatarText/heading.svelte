<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { class: klass = '', children }: Props = $props();
</script>

{#if children}
	<div
		aria-label="avatar heading"
		class="first-letter:capitalize text-base font-medium
		text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 {klass}"
	>
		{@render children()}
	</div>
{/if}
