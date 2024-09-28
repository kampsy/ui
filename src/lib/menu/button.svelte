<script lang="ts">
	import { Button } from '$lib/index.js';
	import { getContext, type Snippet } from 'svelte';
	type propsT = {
		class?: string | undefined;
		children: Snippet | undefined;
	};
	let { class: klass = '', children }: propsT = $props();

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

<div>
	{#if children}
		<Button onclick={toogle}>
			{@render children()}
		</Button>
	{/if}
</div>
