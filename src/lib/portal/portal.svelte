<script lang="ts">
	import type { Snippet } from "svelte";
	import Root from "./root.svelte"

    type propsT = {
        children: Snippet;
    };

    let { children }: propsT = $props();

	let target: HTMLDivElement = $state(document.createElement("div"));

	$effect(() => {
		target.id = "target";
		document.body.appendChild(target);
	})

</script>

<Root {target}>
    {@render children()}
</Root>