<script lang="ts">
	import { getStringWidth } from '$lib/utils/text.js';
	import type { Snippet } from 'svelte';

	interface Props {
		position?: 'top' | 'bottom' | 'left' | 'right';
		text?: string;
		type?: 'success' | 'error' | 'warning' | 'violet' | undefined;
		class?: string | undefined;
		children?: Snippet;
	};
	let {
		position = 'top',
		text,
		type = undefined,
		class: klass = '',
		children = undefined
	}: Props = $props();

	let widthClass = $state('width:250px');

	$effect(() => {
		if (text) {
			const num = getStringWidth(text);
			if (num < 250) {
				widthClass = 'width:' + (num + 24) + 'px'; // 24 is for the left 12px and right 12px padding
			}
		}
	});

	const positionObj = {
		top: `bottom-[125%] left-[50%] translate-x-[-50%] text-kui-dark-gray-1000 
				dark:text-kui-light-gray-1000 bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-kui-light-gray-1000 after:dark:border-t-kui-dark-gray-1000 after:border-b-transparent
				after:border-x-transparent `,
		bottom: `top-[125%] left-[50%] translate-x-[-50%] text-kui-dark-gray-1000 
				dark:text-kui-light-gray-1000 bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-kui-light-gray-1000 after:dark:border-b-kui-dark-gray-1000 
				after:border-x-transparent `,
		left: `top-[50%] right-[125%] transform translate-y-[-50%] text-kui-dark-gray-1000 
				dark:text-kui-light-gray-1000 bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-kui-light-gray-1000
				after:dark:border-l-kui-dark-gray-1000 after:border-r-transparent`,
		right: `top-[50%] left-[125%] transform translate-y-[-50%] text-kui-dark-gray-1000 
				dark:text-kui-light-gray-1000 bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-kui-light-gray-1000
				after:dark:border-r-kui-dark-gray-1000`
	};
	let positionStyle = $derived.by(() => {
		return positionObj[position];
	});

	const typeObj = {
		success: {
			top: `bottom-[125%] left-[50%] translate-x-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-blue-700 dark:bg-kui-dark-blue-700 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-kui-light-blue-700 after:dark:border-t-kui-dark-blue-700 after:border-b-transparent
				after:border-x-transparent `,
			bottom: `top-[125%] left-[50%] translate-x-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-blue-700 dark:bg-kui-dark-blue-700 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-kui-light-blue-700 after:dark:border-b-kui-dark-blue-700 
				after:border-x-transparent `,
			left: `top-[50%] right-[125%] transform translate-y-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-blue-700 dark:bg-kui-dark-blue-700 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-kui-light-blue-700
				after:dark:border-l-kui-dark-blue-700 after:border-r-transparent`,
			right: `top-[50%] left-[125%] transform translate-y-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-blue-700 dark:bg-kui-dark-blue-700 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-kui-light-blue-700
				after:dark:border-r-kui-dark-blue-700`
		},
		error: {
			top: `bottom-[125%] left-[50%] translate-x-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-red-700 dark:bg-kui-dark-red-700 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-kui-light-red-700 after:dark:border-t-kui-dark-red-700 after:border-b-transparent
				after:border-x-transparent `,
			bottom: `top-[125%] left-[50%] translate-x-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-red-700 dark:bg-kui-dark-red-700 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-kui-light-red-700 after:dark:border-b-kui-dark-red-700 
				after:border-x-transparent `,
			left: `top-[50%] right-[125%] transform translate-y-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-red-700 dark:bg-kui-dark-red-700 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-kui-light-red-700
				after:dark:border-l-kui-dark-red-700 after:border-r-transparent`,
			right: `top-[50%] left-[125%] transform translate-y-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-red-700 dark:bg-kui-dark-red-700 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-kui-light-red-700
				after:dark:border-r-kui-dark-red-700`
		},
		warning: {
			top: `bottom-[125%] left-[50%] translate-x-[-50%] text-kui-light-black 
				dark:text-black bg-kui-light-amber-700 dark:bg-kui-dark-amber-700 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-kui-light-amber-700 after:dark:border-t-kui-dark-amber-700 after:border-b-transparent
				after:border-x-transparent `,
			bottom: `top-[125%] left-[50%] translate-x-[-50%] text-kui-light-black 
				dark:text-black bg-kui-light-amber-700 dark:bg-kui-dark-amber-700 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-kui-light-amber-700 after:dark:border-b-kui-dark-amber-700 
				after:border-x-transparent `,
			left: `top-[50%] right-[125%] transform translate-y-[-50%] text-kui-light-black 
				dark:text-black bg-kui-light-amber-700 dark:bg-kui-dark-amber-700 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-kui-light-amber-700
				after:dark:border-l-kui-dark-amber-700 after:border-r-transparent`,
			right: `top-[50%] left-[125%] transform translate-y-[-50%] text-kui-light-black 
				dark:text-black bg-kui-light-amber-700 dark:bg-kui-dark-amber-700 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-kui-light-amber-700
				after:dark:border-r-kui-dark-amber-700`
		},
		violet: {
			top: `bottom-[125%] left-[50%] translate-x-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-purple-700 dark:bg-kui-dark-purple-700 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-kui-light-purple-700 after:dark:border-t-kui-dark-purple-700 after:border-b-transparent
				after:border-x-transparent `,
			bottom: `top-[125%] left-[50%] translate-x-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-purple-700 dark:bg-kui-dark-purple-700 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-kui-light-purple-700 after:dark:border-b-kui-dark-purple-700 
				after:border-x-transparent `,
			left: `top-[50%] right-[125%] transform translate-y-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-purple-700 dark:bg-kui-dark-purple-700 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-kui-light-purple-700
				after:dark:border-l-kui-dark-purple-700 after:border-r-transparent`,
			right: `top-[50%] left-[125%] transform translate-y-[-50%] text-kui-light-bg 
				dark:text-kui-light-bg bg-kui-light-purple-700 dark:bg-kui-dark-purple-700 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-kui-light-purple-700
				after:dark:border-r-kui-dark-purple-700`
		}
	};
	let typeStyle = $derived.by(() => {
		if (type && position) {
			return typeObj[type][position];
		}
		return '';
	});

	let tooltipStyle = $derived.by(() => {
		if (type) {
			return typeStyle;
		}
		return `${positionStyle}`;
	});
</script>

<span>
	<div class="group relative cursor-pointer text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 {klass}">
		{#if children}
			{@render children()}
		{/if}
		<div
			style={widthClass}
			class=" invisible group-hover:visible absolute {tooltipStyle} px-3 py-1.5 text-xs text-center rounded-[4px] z-[1000]"
		>
			{text || ''}
		</div>
	</div>
</span>
