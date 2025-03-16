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
		aria-label="avatar subheading"
		class="first-letter:capitalize text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900{klass}"
	>
		{@render children()}
	</div>
{/if}
