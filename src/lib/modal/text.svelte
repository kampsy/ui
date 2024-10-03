<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		class?: string | undefined;
		children: Snippet | undefined;
	};

	let { class: klass = '', children }: propsT = $props();
</script>

{#if children}
	<p class="text-sm text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 leading-[20px] {klass}">
		{@render children()}
	</p>
{/if}
