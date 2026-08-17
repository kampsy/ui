<script lang="ts">
	import { type Snippet } from "svelte"

	interface Props {
		href: string
		type?: "primary" | "secondary" | "tertiary" | "error" | "warning"
		children?: Snippet | undefined
	}
	let { href, type = "tertiary", children = undefined }: Props = $props()

	const typeObj = {
		primary: "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000",
		secondary: "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000",
		tertiary: "text-kui-light-gray-1000 dark:text-kui-dark-gray-1000",
		error: "text-kui-light-red-800 dark:text-kui-dark-red-800",
		warning: "text-kui-light-amber-800 dark:text-kui-dark-amber-800",
	}
	let typeClass = $derived.by(() => {
		return typeObj[type]
	})
</script>

{#if children}
	<a
		{href}
		class="hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100 relative flex w-full cursor-pointer items-center rounded-md bg-transparent px-2 py-3.5 text-sm transition-colors lg:py-2.5"
	>
		<span class="first-letter:capitalize {typeClass}">
			{@render children()}
		</span>
	</a>
{/if}
