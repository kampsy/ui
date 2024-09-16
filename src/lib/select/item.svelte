<script lang="ts">
	import { Check } from '$lib/icons/index.js';
	import { getContext, type Snippet } from 'svelte';
	import { fade } from 'svelte/transition';

	type propsT = {
		value: string;
		children: Snippet;
	};
	let { value, children }: propsT = $props();

	
	const rootState = getContext<{
		getSelected: () => string;
		setSelected: (value: string) => void;
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
	}>('select');
</script>

<button
	onclick={() => {
		rootState.setSelected(value);
		rootState.setIsActive(false);
	}}
	class="relative w-full cursor-pointer transition-colors text-sm flex items-center rounded-sm py-1.5 px-2 hover:bg-kui-light-gray-100 hover:dark:bg-kui-dark-gray-100"
>
	{#if rootState.getSelected() === value}
		<!--Icon-->
		<div transition:fade class="absolute right-2">
			<div class="w-full h-full flex items-center justify-center">
				<div class="w-[14px] h-[14px]">
					<Check />
				</div>
			</div>
		</div>
	{/if}
	<span class="first-letter:capitalize">
		{@render children()}
	</span>
</button>
