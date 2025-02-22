<script lang="ts">
	import { Button } from '$lib/index.js';
	import { getContext, type Component, type Snippet } from 'svelte';
	interface Props {
		class?: string | undefined;
		'aria-label'?: string;
		shape?: 'circle' | 'square' | undefined;
		size?: 'tiny' | 'small' | 'medium' | 'large';
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		prefix?: Component | undefined;
		suffix?: Component | undefined;
		rounded?: boolean;
		loading?: boolean;
		disabled?: boolean;
		children: Snippet | undefined;
	};
	let { class: klass = '', children, ...attributes }: Props = $props();

	const rootState = getContext<{
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
		setContentPosition: (value: string) => void;
		setTransY: (value: number) => void;
	}>('menu');

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
	<Button {...attributes} onclick={toogle}>
		{@render children()}
	</Button>
{/if}
