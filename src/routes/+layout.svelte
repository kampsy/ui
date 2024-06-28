<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	let { children }: { children: Snippet } = $props();
</script>

<main
	class=" min-h-screen text-light-txt-primary dark:text-dark-txt-primary overflow-x-hidden md:overflow-x-visible bg-light-bg-secondary dark:bg-dark-bg-secondary"
>
	{@render children()}
</main>
