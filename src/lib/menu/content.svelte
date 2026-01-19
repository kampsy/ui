<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: string;
		children: Snippet;
	}
	let { class: klass = '', children, ...rest }: Props = $props();

	// Get the state of the menu from the context
	const rootState = getContext<{
		alignment: 'left' | 'right';
		getIsMobile: () => boolean;
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
		getContentPosition: () => string;
		getTransY: () => number;
	}>('menu');

	let alightmentClass = $derived.by(() => {
		if (rootState.alignment === 'left') {
			return 'left-0';
		} else {
			return 'right-0';
		}
	});

	let content: HTMLDivElement = $state<any>();
	$effect(() => {
		if (content) {
			if (rootState.getIsActive()) {
				content.setAttribute('aria-hidden', 'false');
			} else {
				content.setAttribute('aria-hidden', 'true');
			}
		}
	});
</script>

{#snippet mobileSnip()}
	{#if rootState.getIsActive()}
		<div
			bind:this={content}
			in:fly|local={{ y: '50vh', duration: 500, opacity: 1 }}
			out:fly|local={{ y: '100vh', duration: 600, easing: cubicOut, opacity: 1 }}
			class="fixed bottom-0 left-0 w-full rounded-t-[10px] bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary lg:bg-transparent z-1001"
			{...rest}
		>
			<div
				class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg px-3 rounded-t-[10px] border-t
				border-kui-light-gray-600 dark:border-kui-dark-gray-500 scroll-smooth overflow-y-auto"
			>
				{@render children()}
			</div>
		</div>
	{/if}
{/snippet}

{#snippet desktopSnip()}
	{#if rootState.getIsActive()}
		<div
			bind:this={content}
			in:fly={{ y: rootState.getTransY() }}
			out:fly={{ y: rootState.getTransY() }}
			class="absolute {rootState.getContentPosition()} {alightmentClass} z-1000 {klass}"
			{...rest}
		>
			<div
				class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg p-2 rounded-[12px] border border-kui-light-gray-200 dark:border-kui-dark-gray-400 shadow-xs scroll-smooth overflow-y-auto {klass}"
			>
				{@render children()}
			</div>
		</div>
	{/if}
{/snippet}

{#if rootState.getIsMobile()}
	{@render mobileSnip()}
{:else}
	{@render desktopSnip()}
{/if}
