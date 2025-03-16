<script lang="ts">
	import { Button } from '$lib/index.js';
	import { getContext, type Component, type Snippet } from 'svelte';
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
	}
	let { class: klass = '', children, ...rest }: Props = $props();

	const rootState = getContext<{
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
		setContentPosition: (value: string) => void;
		setTransY: (value: number) => void;
	}>('menu');

	let buttonElement: HTMLButtonElement = $state<any>();

	$effect(() => {
		if (rootState.getIsActive()) {
			buttonElement.setAttribute('aria-expanded', 'true');
		} else {
			buttonElement.setAttribute('aria-expanded', 'false');
		}
	});

	const toogle = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement;
		const position = target.getBoundingClientRect();

		const viewportHeight = window.innerHeight;

		const positionFromTop = position.top;
		const positionFromBottom = viewportHeight - position.bottom;

		if (positionFromTop > positionFromBottom) {
			rootState.setContentPosition(`bottom-[112%]`);
			rootState.setTransY(10);
		} else {
			rootState.setContentPosition(`top-[112%]`);
			rootState.setTransY(-10);
		}
		rootState.setIsActive(!rootState.getIsActive());
	};
</script>

{#if children}
	<Button bind:buttonElement {...rest} onclick={toogle}>
		{@render children()}
	</Button>
{/if}
