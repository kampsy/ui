<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLElement> {
		children: Snippet;
	}

	let { children, ...rest }: Props = $props();
</script>

<kbd
	class="min-h-6 min-w-6 inline-flex items-center justify-center rounded-sm px-1.5 select-none
	border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	{...rest}
>
	{@render children()}
</kbd>
