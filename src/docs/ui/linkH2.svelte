<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Link from '$lib/icons/link.svelte';

	interface Props extends HTMLAttributes<HTMLAnchorElement> {
		href: string;
		children: Snippet;
	}

	let { href, children, ...rest }: Props = $props();
</script>

<a {href} class="no-underline outline-none relative -ml-5 pl-5 inline-block group" {...rest}>
	<h2
		class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-[32px] tracking-[-0.96px]"
	>
		<div class="absolute left-0 top-[8px] outline-none opacity-0 group-hover:opacity-100">
			<div class="w-4 h-4">
				<Link />
			</div>
		</div>
		{@render children()}
	</h2>
</a>
