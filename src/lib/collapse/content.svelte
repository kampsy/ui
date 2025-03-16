<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet | undefined;
	}
	let { children, ...rest }: Props = $props();

	let { size, value } = getContext<{ size: 'small' | 'large'; value: string }>('collapseItem');

	let collapseItem = getContext<{ get: () => string; set: (value: string) => void }>('collapse');

	let isActive = $state(false);

	const textObj = {
		small: 'text-sm',
		large: 'text-base'
	};
	let textClass = $derived.by(() => {
		return textObj[size];
	});

	$effect.pre(() => {
		if (collapseItem.get() == value) {
			isActive = true;
		} else {
			isActive = false;
		}
	});

	let content: HTMLDivElement = $state<any>();
	$effect(() => {
		if (isActive) {
			content.setAttribute('aria-hidden', 'false');
		} else {
			content.setAttribute('aria-hidden', 'true');
		}
	});
</script>

{#if isActive}
	<div bind:this={content} transition:slide class="pb-4" {...rest}>
		{#if children}
			<p
				class=" {textClass} font-normal leading-[24px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
			>
				{@render children()}
			</p>
		{/if}
	</div>
{/if}
