<script lang="ts">
	import { getAllContexts, mount, type Snippet } from 'svelte';
	import PortalConsumer from './portalConsumer.svelte';

	type propsT = {
		target?: HTMLElement;
		children: Snippet;
	};

	let { target: target = document.body, children }: propsT = $props();

	const context = getAllContexts();

	let instance: { $destroy?: any; $set?: any; $on?: any };

	$effect(() => {
		instance = mount(PortalConsumer, { target, props: { children }, context });

		return () => {
			instance.$destroy();
		};
	});
</script>
