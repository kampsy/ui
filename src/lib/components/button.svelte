<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		size?: 'sm' | 'md' | 'lg';
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		children: Snippet;
	};

	let { size = 'md', type = 'primary', children }: propsT = $props();

	let sizeClass = $derived.by(() => {
		switch (size) {
			case 'sm':
				return 'px-[6px] h-[32px] text-sm leading-4';
			case 'md':
				return 'px-[10px] h-[40px] text-sm leading-[20px]';
			case 'lg':
				return 'px-[14px] h-[48px] text-base leading-[24px]';
		}
	});

	let typeClass = $derived.by(() => {
		switch (type) {
			case 'primary':
				return 'bg-light-gray-1000 dark:bg-dark-gray-1000 hover:bg-[#383838] hover:dark:bg-[#CCCCCC]';
			case 'secondary':
				return 'border ';
			case 'tertiary':
				return '';
		}
	});
</script>

<button class="{sizeClass} rounded-[6px] {typeClass} first-letter:capitalize">
	<span class="px-[6px] text-white dark:text-dark-bg font-medium">
		{@render children()}
	</span>
</button>
