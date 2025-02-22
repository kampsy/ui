<script lang="ts">
	import { Button } from '$lib/index.js';
	import { type Component, type Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	interface Props extends HTMLButtonAttributes {
		onclick?: (evt: Event) => void;
		class?: string;
		shape?: 'circle' | 'square' | undefined;
		size?: 'tiny' | 'small' | 'medium' | 'large';
		variant?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		iconPrefix?: Component | undefined;
		iconSuffix?: Component | undefined;
		rounded?: boolean;
		loading?: boolean;
		disabled?: boolean;
		children: Snippet | undefined;
	};
	let { children, ...rest }: Props = $props();
</script>

{#if children}
	<Button {...rest}>
		{@render children()}
	</Button>
{/if}
