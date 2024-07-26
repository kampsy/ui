<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
    import type { Snippet } from 'svelte';

	type propsT = {
		target?: string;
		children: Snippet;
	};

	let { target = 'body', children }: propsT = $props();

	let portalElement: HTMLDivElement | undefined = $state(undefined);

	onMount(() => {
		portalElement = document.createElement('div');
        portalElement.innerHTML = children().toString();

        console.log(children()?.toString() || '==========')

		let elem = document.querySelector(target);
		if (elem) {
			elem.appendChild(portalElement);
		}
	});

	onDestroy(() => {
		if (portalElement) {
			portalElement.remove();
		}
	});
</script>