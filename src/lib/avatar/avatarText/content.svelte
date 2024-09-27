<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { class: klass = '', children }: propsT = $props();
</script>

{#if children}
	<div class={klass}>
		{@render children()}
	</div>
{/if}
