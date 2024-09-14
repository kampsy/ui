<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	type propsT = {
		children: Snippet | undefined;
	};
	let { children }: propsT = $props();

	let { size, value } = getContext<{ size:'small' | 'large'; value: string }>(
		'collapseItem'
	);
	
	let collapseItem = getContext<{ get: () => string; set: (value: string) => void }>('collapse');

	let isActive = $state(false);

	const textObj = {
        small: 'text-sm',
        large: 'text-base'
    }
    let textClass = $derived.by(()=>{
        return textObj[size] 
    })

	$effect(() => {
		if (collapseItem.get() == value) {
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
