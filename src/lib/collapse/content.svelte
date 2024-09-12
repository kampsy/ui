<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { slide } from 'svelte/transition';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children }: propsT = $props();

	let { size, value } = getContext<{ size: Writable<'small' | 'large'>; value: Writable<string> }>(
		'collapseItem'
	);
	let { open } = getContext<{ open: Writable<string> }>('collapse');

	let isActive = $state(false);

	const textObj = {
        small: 'text-sm',
        large: 'text-base'
    }
    let textClass = $derived.by(()=>{
        return textObj[$size] 
    })

	$effect(() => {
		if ($open == $value) {
			isActive = true;
		} else {
			isActive = false;
		}
	});
</script>

{#if isActive}
	<div transition:slide class="pb-4">
		{#if children}
			<p
				class=" {textClass} font-normal leading-[24px] text-kui-light-gray-1000 dark:text-kui-dark-gray-1000"
			>
				{@render children()}
			</p>
		{/if}
	</div>
{/if}
