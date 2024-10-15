<script lang="ts">
	import { type Snippet } from 'svelte';
	import '../app.css';
	import Analytics from '../docs/ui/analytics/analytics.svelte';
	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<meta name="title" content="Kampsy-ui | A Svelte 5 component library" />
	<meta
		name="description"
		content="Kampsy-ui - A Svelte 5 component library, thoughtfully designed to deliver consistent and cohesive web experiences."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ui.kampsy.xyz" />
	<meta property="og:title" content="Kampsy-ui | A Svelte 5 component library" />
	<meta
		property="og:description"
		content="Kampsy-ui - A Svelte 5 component library, thoughtfully designed to deliver consistent and cohesive web experiences."
	/>
	<meta
		property="og:image"
		content="https://ucarecdn.com/91722eb1-c95a-42b2-b851-cdfe01a9bdf7/-/preview/1200x628/"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ui.kampsy.xyz" />
	<meta property="twitter:title" content="Kampsy-ui | A Svelte 5 component library" />
	<meta
		property="twitter:description"
		content="Kampsy-ui - A Svelte 5 component library, thoughtfully designed to deliver consistent and cohesive web experiences."
	/>
	<meta
		property="twitter:image"
		content="https://ucarecdn.com/91722eb1-c95a-42b2-b851-cdfe01a9bdf7/-/preview/1200x628/"
	/>

	<!-- Meta Tags Generated with https://metatags.io -->
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

<Analytics>
	<main
		class="ui-scrollbar font-inter min-h-screen overflow-x-hidden md:overflow-x-visible bg-kui-light-bg-secondary 
		dark:bg-kui-dark-bg-secondary"
	>
		{@render children()}
	</main>
</Analytics>
