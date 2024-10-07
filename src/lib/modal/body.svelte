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
			return '';
		} else {
			return '';
		}
	});
</script>

{#if children}
	<div class="relative modal-body !h-full p-6 scroll-smooth overflow-y-auto overscroll-contain {bodyClass} {klass}">
		<div>
			{@render children()}
		</div>
		<div aria-hidden="true" class="w-full lg:h-[73px]"></div>
	</div>
{/if}
