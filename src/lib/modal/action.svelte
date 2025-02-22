<script lang="ts">
	import { Button } from '$lib/index.js';
	import { getContext, type Component, type Snippet } from 'svelte';

	interface Props {
		onclick?: (evt: Event) => void;
		class?: string;
		'aria-label'?: string;
		shape?: 'circle' | 'square' | undefined;
		size?: 'tiny' | 'small' | 'medium' | 'large';
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		prefix?: Component | undefined;
		suffix?: Component | undefined;
		rounded?: boolean;
		loading?: boolean;
		disabled?: boolean;
		children: Snippet;
	};
	let { children, ...attributes }: Props = $props();
</script>

{#if children}
	<Button {...attributes}>
		{@render children()}
	</Button>
{/if}
