<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		position?: 'top' | 'bottom' | 'left' | 'right';
		text?: string;
		type?: 'success' | 'error' | 'warning' | 'violet' | undefined;
		children?: Snippet;
	};

	let { position = 'top', text, type = undefined, children = undefined }: propsT = $props();

	const positionObj = {
		top: `max-w-[250px] bottom-[125%] left-[50%] translate-x-[-50%] text-dark-gray-1000 
				dark:text-light-gray-1000 bg-light-gray-1000 dark:bg-dark-gray-1000 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-light-gray-1000 after:dark:border-t-dark-gray-1000 after:border-b-transparent
				after:border-x-transparent `,
		bottom: `max-w-[250px] top-[125%] left-[50%] translate-x-[-50%] text-dark-gray-1000 
				dark:text-light-gray-1000 bg-light-gray-1000 dark:bg-dark-gray-1000 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-light-gray-1000 after:dark:border-b-dark-gray-1000 
				after:border-x-transparent `,
		left: `max-w-[250px] top-[50%] right-[125%] transform translate-y-[-50%] text-dark-gray-1000 
				dark:text-light-gray-1000 bg-light-gray-1000 dark:bg-dark-gray-1000 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-light-gray-1000
				after:dark:border-l-dark-gray-1000 after:border-r-transparent`,
		right: `max-w-[250px] top-[50%] left-[125%] transform translate-y-[-50%] text-dark-gray-1000 
				dark:text-light-gray-1000 bg-light-gray-1000 dark:bg-dark-gray-1000 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-light-gray-1000
				after:dark:border-r-dark-gray-1000`
	};
	let positionStyle = $derived.by(() => {
		return positionObj[position];
	});

	const typeObj = {
		success: {
			top: `max-w-[250px] bottom-[125%] left-[50%] translate-x-[-50%] text-light-bg 
				dark:text-light-bg bg-light-blue-700 dark:bg-dark-blue-700 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-light-blue-700 after:dark:border-t-dark-blue-700 after:border-b-transparent
				after:border-x-transparent `,
			bottom: `max-w-[250px] top-[125%] left-[50%] translate-x-[-50%] text-light-bg 
				dark:text-light-bg bg-light-blue-700 dark:bg-dark-blue-700 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-light-blue-700 after:dark:border-b-dark-blue-700 
				after:border-x-transparent `,
			left: `max-w-[250px] top-[50%] right-[125%] transform translate-y-[-50%] text-light-bg 
				dark:text-light-bg bg-light-blue-700 dark:bg-dark-blue-700 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-light-blue-700
				after:dark:border-l-dark-blue-700 after:border-r-transparent`,
			right: `max-w-[250px] top-[50%] left-[125%] transform translate-y-[-50%] text-light-bg 
				dark:text-light-bg bg-light-blue-700 dark:bg-dark-blue-700 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-light-blue-700
				after:dark:border-r-dark-blue-700`
		},
		error: {
			top: `max-w-[250px] bottom-[125%] left-[50%] translate-x-[-50%] text-light-bg 
				dark:text-light-bg bg-light-red-700 dark:bg-dark-red-700 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-light-red-700 after:dark:border-t-dark-red-700 after:border-b-transparent
				after:border-x-transparent `,
			bottom: `max-w-[250px] top-[125%] left-[50%] translate-x-[-50%] text-light-bg 
				dark:text-light-bg bg-light-red-700 dark:bg-dark-red-700 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-light-red-700 after:dark:border-b-dark-red-700 
				after:border-x-transparent `,
			left: `max-w-[250px] top-[50%] right-[125%] transform translate-y-[-50%] text-light-bg 
				dark:text-light-bg bg-light-red-700 dark:bg-dark-red-700 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-light-red-700
				after:dark:border-l-dark-red-700 after:border-r-transparent`,
			right: `max-w-[250px] top-[50%] left-[125%] transform translate-y-[-50%] text-light-bg 
				dark:text-light-bg bg-light-red-700 dark:bg-dark-red-700 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-light-red-700
				after:dark:border-r-dark-red-700`
		},
		warning: {
			top: `max-w-[250px] bottom-[125%] left-[50%] translate-x-[-50%] text-light-black 
				dark:text-black bg-light-amber-700 dark:bg-dark-amber-700 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-light-amber-700 after:dark:border-t-dark-amber-700 after:border-b-transparent
				after:border-x-transparent `,
			bottom: `max-w-[250px] top-[125%] left-[50%] translate-x-[-50%] text-light-black 
				dark:text-black bg-light-amber-700 dark:bg-dark-amber-700 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-light-amber-700 after:dark:border-b-dark-amber-700 
				after:border-x-transparent `,
			left: `max-w-[250px] top-[50%] right-[125%] transform translate-y-[-50%] text-light-black 
				dark:text-black bg-light-amber-700 dark:bg-dark-amber-700 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-light-amber-700
				after:dark:border-l-dark-amber-700 after:border-r-transparent`,
			right: `max-w-[250px] top-[50%] left-[125%] transform translate-y-[-50%] text-light-black 
				dark:text-black bg-light-amber-700 dark:bg-dark-amber-700 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-light-amber-700
				after:dark:border-r-dark-amber-700`
		},
		violet: {
			top: `max-w-[250px] bottom-[125%] left-[50%] translate-x-[-50%] text-light-bg 
				dark:text-light-bg bg-light-purple-700 dark:bg-dark-purple-700 after:content-[' ']
				after:absolute after:top-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px]
				after:border-t-light-purple-700 after:dark:border-t-dark-purple-700 after:border-b-transparent
				after:border-x-transparent `,
			bottom: `max-w-[250px] top-[125%] left-[50%] translate-x-[-50%] text-light-bg 
				dark:text-light-bg bg-light-purple-700 dark:bg-dark-purple-700 after:content-[' ']
				after:absolute after:bottom-[100%] after:left-[50%] after:ml-[-5px] after:border-[5px] 
				after:border-t-transparent after:border-b-light-purple-700 after:dark:border-b-dark-purple-700 
				after:border-x-transparent `,
			left: `max-w-[250px] top-[50%] right-[125%] transform translate-y-[-50%] text-light-bg 
				dark:text-light-bg bg-light-purple-700 dark:bg-dark-purple-700 after:content-[' ']
				after:absolute after:top-[50%] after:left-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-light-purple-700
				after:dark:border-l-dark-purple-700 after:border-r-transparent`,
			right: `max-w-[250px] top-[50%] left-[125%] transform translate-y-[-50%] text-light-bg 
				dark:text-light-bg bg-light-purple-700 dark:bg-dark-purple-700 after:content-[' '] 
				after:absolute after:top-[50%] after:right-[100%] after:mt-[-5px] after:border-[5px] 
				after:border-y-transparent after:border-l-transparent after:border-r-light-purple-700
				after:dark:border-r-dark-purple-700`
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

<div>
	<div class="group relative inline-block cursor-pointer">
		{#if children}
			{@render children()}
		{/if}
		<div
			class="invisible group-hover:visible absolute {tooltipStyle} whitespace-nowrap px-3 py-2 text-xs text-center rounded-[4px] z-[1000]"
		>
			{text || ''}
		</div>
	</div>
</div>
