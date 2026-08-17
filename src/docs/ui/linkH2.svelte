<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAnchorAttributes } from "svelte/elements"
	import Link from "$lib/icons/link.svelte"

	interface Props extends HTMLAnchorAttributes {
		href: string
		children: Snippet
	}

	let { href, children, ...rest }: Props = $props()

	// id for page navigation
	const id = href.split("#").pop()
</script>

<a
	{href}
	{id}
	class="group focus-visible:outline-kui-light-primary dark:focus-visible:outline-kui-dark-primary relative -ml-5 inline-block pl-5 no-underline outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2"
	{...rest}
>
	<h2
		class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] leading-[32px] font-semibold tracking-[-0.96px] first-letter:capitalize"
	>
		<div class="absolute top-[8px] left-0 opacity-0 outline-hidden group-hover:opacity-100">
			<div class="h-4 w-4">
				<Link />
			</div>
		</div>
		{@render children()}
	</h2>
</a>
