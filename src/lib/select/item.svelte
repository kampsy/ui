<script lang="ts">
	import { Check } from '$lib/icons/index.js';
	import { getContext, type Snippet } from 'svelte';
	import type { Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	type propsT = {
		value: string;
		children: Snippet;
	};
	let { value, children }: propsT = $props();

	// Get the select stores from the context
	const { selected, isActive } = getContext<{
		selected: Writable<string>;
		isActive: Writable<boolean>;
	}>('select');
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	onclick={() => {
		$selected = value;
		$isActive = false;
	}}
	class="relative w-full cursor-default transition-colors text-sm flex items-center rounded-sm py-1.5 pl-8 pr-2 hover:bg-light-gray-100 hover:dark:bg-dark-gray-100"
>
	{#if $selected === value}
		<!--Icon-->
		<div transition:fade class="absolute left-2">
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
</div>
