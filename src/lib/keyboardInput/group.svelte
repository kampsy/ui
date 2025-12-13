<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

    interface Props extends HTMLAttributes<HTMLElement> {
        children: Snippet;
    }

    let {
        children,
        ...rest 
    }: Props = $props();
</script>

<kbd class="inline-flex items-center gap-1" {...rest}>
    {@render children()}
</kbd>