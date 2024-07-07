<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<section class="p-6 lg:p-12 border-b border-light-gray-200 dark:border-dark-gray-400">
	{@render children()}
</section>
