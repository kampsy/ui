<script lang="ts">
	import { type Snippet } from 'svelte';
	import '../app.css';
	let { children }: { children: Snippet } = $props();
</script>

<main
	class="ui-scrollbar font-inter min-h-screen text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 overflow-x-hidden md:overflow-x-visible bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
>
	{@render children()}
</main>
