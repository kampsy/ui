<script lang="ts">
	import { getContext, type Snippet } from 'svelte';

	type propsT = {
		class?: string;
		children: Snippet | undefined;
	};

	let { class: klass = '', children }: propsT = $props();

	const rootState = getContext<{
		sticky: boolean;
	}>('modal');

	let bodyClass = $derived.by(() => {
		if (rootState.sticky) {
			return 'px-6 py-20 ';
		} else {
			return 'p-6';
		}
	});
</script>

{#if children}
	<div class="modal-body scroll-smooth overflow-y-auto {bodyClass} {klass}">
		{@render children()}
	</div>
{/if}

<style>
	.modal-body {
		max-height: calc(39.125rem - 4.0625rem);
	}
</style>
