<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { class: klass = '', children }: Props = $props();
</script>

{#if children}
	<div class={klass}>
		{@render children()}
	</div>
{/if}
