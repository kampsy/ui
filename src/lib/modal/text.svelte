<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		children: Snippet | undefined;
	};

	let { class: klass = '', children }: Props = $props();
</script>

{#if children}
	<p aria-describedby="modal-description" class="text-sm text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 leading-[20px] {klass}">
		{@render children()}
	</p>
{/if}
