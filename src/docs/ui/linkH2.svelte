<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import Link from '$lib/icons/link.svelte';

	interface Props extends HTMLAnchorAttributes {
		href: string;
		children: Snippet;
	}

	let { href, children, ...rest }: Props = $props();

	// id for page navigation
	const id = href.split('#').pop();
</script>

<a
	{href}
	{id}
	class="no-underline outline-hidden relative -ml-5 pl-5 inline-block group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kui-light-primary dark:focus-visible:outline-kui-dark-primary"
	{...rest}
>
	<h2
		class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px]"
	>
		<div class="absolute left-0 top-[8px] outline-hidden opacity-0 group-hover:opacity-100">
			<div class="w-4 h-4">
				<Link />
			</div>
		</div>
		{@render children()}
	</h2>
</a>
