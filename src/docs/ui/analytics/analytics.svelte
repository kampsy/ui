<script lang="ts">
	import { page } from '$app/stores';
	import type { Snippet } from 'svelte';
	import { googleTag } from './analytics.js';

	type propsT = {
		children: Snippet | undefined;
	};

	let { children }: propsT = $props();

	$effect(() => {
		const pageViewEventParameters = {
			page_title: document.title,
			page_path: $page.url.pathname,
			value: 'page_view'
		};
		googleTag('event', 'page_view', pageViewEventParameters);

		// <!-- Global site tag (gtag.js) - Google Analytics -->
		// console.log("loading... Global site tag")
		const script = document.createElement('script');
		script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8TYYNBE4EE';
		script.async = true;
		// var n = window["__nonce"]
		// n && script.setAttribute("nonce", n)
		document.head.appendChild(script);
	});
</script>

<svelte:head>
	<link
		rel="preconnect"
		crossorigin="anonymous"
		href="https://www.googletagmanager.com/gtag/js?id=G-8TYYNBE4EE"
	/>
</svelte:head>

{#if children}
	{@render children()}
{/if}
