<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		bottomLine?: boolean;
		children: Snippet;
	};

	let {class: klass = '', bottomLine = true, children }: Props = $props();

	const bottomLineClass = $derived.by(() => {
		if (bottomLine) {
			return 'border-b border-kui-light-gray-200 dark:border-kui-dark-gray-400';
		}
		return '';
	});
</script>

<section class="p-6 lg:p-12 {bottomLineClass} {klass}">
	{@render children()}
</section>
