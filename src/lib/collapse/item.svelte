<script lang="ts">
	import { setContext, type Snippet } from 'svelte';

	interface Props {
		size?: 'small' | 'large';
		value: string;
		defaultExpanded?: boolean;
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let {
		size = 'large',
		value = '',
		class: klass = '',
		defaultExpanded = false,
		children
	}: Props = $props();

	setContext('collapseItem', {
		size: size,
		value: value,
		defaultExpanded: defaultExpanded
	});
</script>

<div class="w-full {klass}">
	{#if children}
		{@render children()}
	{/if}
</div>
