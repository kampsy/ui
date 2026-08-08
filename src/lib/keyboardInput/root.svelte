<script lang="ts">
	import type { Snippet } from "svelte"
	import type { HTMLAttributes } from "svelte/elements"

	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet
	}

	let { children, ...rest }: Props = $props()
</script>

<kbd
	class="border-kui-light-gray-200 dark:border-kui-dark-gray-400 inline-flex min-h-6 min-w-6 items-center justify-center rounded-sm
	border px-1.5 select-none"
	{...rest}
>
	{@render children()}
</kbd>
