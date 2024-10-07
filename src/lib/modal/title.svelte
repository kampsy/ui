<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		class?: string | undefined;
		children: Snippet | undefined;
	};

	let { class: klass = '', children }: propsT = $props();
</script>

{#if children}
	<h3
		class="text-[24px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 leading-[32px] font-semibold {klass}"
	>
		{@render children()}
	</h3>
{/if}
