<script lang="ts">
	import { type Snippet } from 'svelte';
	import '../app.css';
	import Analytics from '../docs/ui/analytics/analytics.svelte';
	let { children }: { children: Snippet } = $props();
</script>

<Analytics>
	<main
		class="ui-scrollbar font-inter min-h-screen text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 overflow-x-hidden md:overflow-x-visible bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary"
	>
		{@render children()}
	</main>
</Analytics>
