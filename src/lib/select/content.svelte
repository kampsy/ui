<script lang="ts">
	import { Button } from '$lib/index.js';
	import { getContext, type Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	type propsT = {
		class?: string;
		children: Snippet;
	};
	let { class: klass = '', children }: propsT = $props();

	// Get the select stores from the context
	const { isMobile, isActive, transY, contentPosition } = getContext<{
		isMobile: Writable<boolean>;
		isActive: Writable<boolean>;
		transY: Writable<number>;
		contentPosition: Writable<string>;
	}>('select');
</script>

{#snippet mobileSnip()}
	{#if $isActive}
		<div
			in:fly|local={{ y: '100vh', duration: 500, opacity: 1 }}
			out:fly|local={{ y: '100vh', duration: 500, opacity: 1 }}
			class="fixed bottom-0 left-0 w-full rounded-t-[15px] bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary lg:bg-transparent z-[1001]"
		>
			<div
				class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg p-6 rounded-t-[15px] border-y border-kui-light-gray-400 dark:border-kui-dark-gray-400 scroll-smooth overflow-y-auto"
			>
				{@render children()}
			</div>
			<footer class="p-4">
				<Button
					onclick={() => {
						$isActive = false;
					}}
					type="secondary"
					class="w-full">done</Button
				>
			</footer>
		</div>
	{/if}
{/snippet}

{#snippet desktopSnip()}
	{#if $isActive}
		<div
			in:fly={{ y: $transY }}
			out:fly={{ y: $transY }}
			class="absolute w-full {$contentPosition} z-[1000] {klass}"
		>
			<div
				class="hide-scrollbar bg-kui-light-bg dark:bg-kui-dark-bg p-1 rounded-[6px] border border-kui-light-gray-200 dark:border-kui-dark-gray-400 shadow-sm scroll-smooth overflow-y-auto {klass}"
			>
				{@render children()}
			</div>
		</div>
	{/if}
{/snippet}

{#if $isMobile}
	{@render mobileSnip()}
{:else}
	{@render desktopSnip()}
{/if}
