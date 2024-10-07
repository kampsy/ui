<script lang="ts">
	import { Button } from '$lib/index.js';
	import { clickOutside } from '$lib/utils/event.js';
	import { getContext, type Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

	type propsT = {
		class?: string;
		children: Snippet;
	};
	let { class: klass = '', children }: propsT = $props();

	// Get the state of the select from the context
	const rootState = getContext<{
		getIsMobile: () => boolean;
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
	}>('modal');
</script>

{#snippet mobileSnip()}
	{#if rootState.getIsActive()}
		<div
			in:fly|local={{ y: '100vh', duration: 500, opacity: 1 }}
			out:fly|local={{ y: '100vh', duration: 500, opacity: 1 }}
			class="fixed bottom-0 left-0 w-full rounded-t-[15px] bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary lg:bg-transparent z-[1001]"
		>
			<div
				use:clickOutside={() => {
					rootState.setIsActive(false);
				}}
				class="w-full max-h-[80vh] rounded-t-[15px] rounded-[15px] bg-kui-light-bg dark:bg-kui-dark-bg-secondary 
				border-t border-kui-light-gray-600 dark:border-kui-dark-gray-200"
			>
				{@render children()}
			</div>
		</div>
	{/if}
{/snippet}

{#snippet desktopSnip()}
	{#if rootState.getIsActive()}
		<div
			in:fly|local={{ y: '-10vh', duration: 500, opacity: 0 }}
			out:fly|local={{ y: '-10vh', duration: 500, opacity: 0 }}
			use:clickOutside={() => {
				rootState.setIsActive(false);
			}}
			class="relative w-[540px] max-h-[626px] rounded-[12px] bg-kui-light-bg dark:bg-kui-dark-bg-secondary border
                border-kui-light-gray-600 dark:border-kui-dark-gray-200 {klass}"
		>
			
				{@render children()}
		</div>
	{/if}
{/snippet}

{#if rootState.getIsMobile()}
	{@render mobileSnip()}
{:else}
	{@render desktopSnip()}
{/if}
