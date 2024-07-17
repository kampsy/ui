<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		bottomLine?: boolean;
		children: Snippet;
	};

	let { bottomLine = true, children }: propsT = $props();

	const bottomLineClass = $derived.by(() => {
		if (bottomLine) {
			return 'border-b border-light-gray-200 dark:border-dark-gray-400';
		}
		return '';
	});
</script>

<section class="p-6 lg:p-12 {bottomLineClass} ">
	{@render children()}
</section>
