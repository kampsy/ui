<script lang="ts">
	import { ChevronDown } from '$lib/icons/index.js';
	import { getContext, type Component, type Snippet } from 'svelte';

	interface Props {
		onclick?: (evt: Event) => void;
		'aria-label'?: string;
		shape?: 'circle' | 'square' | undefined;
		size?: 'tiny' | 'small' | 'medium' | 'large';
		type?: 'primary' | 'secondary' | 'tertiary' | 'error' | 'warning';
		disabled?: boolean;
		children: Snippet | undefined;
	};

	let {
		onclick = undefined,
		'aria-label': ariaLabel = undefined,
		shape = undefined,
		size = 'medium',
		type = 'primary',
		disabled = false,
		children = undefined
	}: Props = $props();

	const typeObj = {
		primary: `text-white dark:text-kui-dark-bg bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000 
		hover:opacity-85 hover:dark:opacity-90`,
		tertiary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 hover:bg-kui-light-gray-200 
		dark:hover:bg-kui-dark-gray-200`,
		error: `text-[#F5F5F5] bg-kui-light-red-800 dark:bg-kui-dark-red-800 hover:bg-kui-light-red-900 
		dark:hover:bg-kui-dark-red-900 `,
		warning: `text-kui-light-gray-1000 bg-kui-light-amber-700 dark:bg-kui-dark-amber-700 
		hover:bg-kui-light-amber-800 dark:hover:bg-kui-dark-amber-800`
	};

	const sizeObj = {
		tiny: 'h-[24px] text-xs leading-3',
		small: 'h-8 px-[6px] text-sm leading-4',
		medium: 'h-[40px] px-[10px] text-sm leading-5',
		large: 'h-[48px] px-[14px] text-base leading-6'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});

	// Button
	const typeButtonObj = {
		...typeObj,
		secondary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg border-l border-y
		border-kui-light-gray-200 dark:border-kui-dark-gray-400 hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`
	};
	let typeButtonClass = $derived.by(() => {
		return typeButtonObj[type];
	});
	const radiusButtonObj = {
		tiny: 'rounded-l-[4px]',
		small: 'rounded-l-[6px]',
		medium: 'rounded-l-[6px]',
		large: 'rounded-l-[8px]'
	};
	let roundedButtonWithShapeClass = $derived.by(() => {
		if (shape == 'circle') {
			return 'rounded-full';
		}
		return radiusButtonObj[size];
	});

	let buttonClass = $derived.by(() => {
		return `${sizeClass}  ${typeButtonClass} ${roundedButtonWithShapeClass}`;
	});

	// The divider between the buttons
	const sizeDivideObj = {
		tiny: 'h-[24px]',
		small: 'h-8',
		medium: 'h-[40px]',
		large: 'h-[48px]'
	};
	let sizeDivideClass = $derived.by(() => {
		return sizeDivideObj[size];
	});

	const typeDivideObj = {
		primary: 'border-kui-light-gray-900 dark:border-kui-dark-gray-900',
		secondary: 'border-kui-light-gray-200 dark:border-kui-dark-gray-400',
		tertiary: 'border-kui-light-gray-200 dark:border-kui-dark-gray-400',
		error: 'border-kui-light-red-900 dark:border-kui-dark-red-900',
		warning: 'border-kui-light-amber-800 dark:border-kui-dark-amber-800'
	};
	let typeDivideClass = $derived.by(() => {
		return typeDivideObj[type];
	});

	// The menu button with the icon
	const typeMenuObj = {
		...typeObj,
		secondary: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg border-r border-y
		border-kui-light-gray-200 dark:border-kui-dark-gray-400 hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`
	};
	let typeMenuClass = $derived.by(() => {
		return typeMenuObj[type];
	});
	const radiusMenuObj = {
		tiny: 'rounded-r-[4px]',
		small: 'rounded-r-[6px]',
		medium: 'rounded-r-[6px]',
		large: 'rounded-r-[8px]'
	};
	let roundedMenuWithShapeClass = $derived.by(() => {
		if (shape == 'circle') {
			return 'rounded-full';
		}
		return radiusMenuObj[size];
	});

	let menuClass = $derived.by(() => {
		return `${sizeClass} ${typeMenuClass} ${roundedMenuWithShapeClass}`;
	});

	const rootState = getContext<{
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
		setContentPosition: (value: string) => void;
		setTransY: (value: number) => void;
	}>('split-button');

	const toogle = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement;
		const position = target.getBoundingClientRect();

		const viewportHeight = window.innerHeight;

		const positionFromTop = position.top;
		const positionFromBottom = viewportHeight - position.bottom;

		if (positionFromTop > positionFromBottom) {
			rootState.setContentPosition(`bottom-[112%]`);
			rootState.setTransY(10);
		} else {
			rootState.setContentPosition(`top-[112%]`);
			rootState.setTransY(-10);
		}
		rootState.setIsActive(!rootState.getIsActive());
	};
</script>

<div class="flex">
	<button aria-label={ariaLabel} {onclick} type="button" {disabled} class={buttonClass}>
		{#if children}
			<span class="px-[6px] font-medium capitalize">
				{@render children()}
			</span>
		{/if}
	</button>
	<div class="{sizeDivideClass} border-l {typeDivideClass}"></div>
	<button aria-label={ariaLabel} onclick={toogle} type="button" {disabled} class={menuClass}>
		<span class="flex px-[6px]">
			<span class="w-4 h-4">
				<ChevronDown />
			</span>
		</span>
	</button>
</div>
