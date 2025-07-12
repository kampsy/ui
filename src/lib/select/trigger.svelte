<script lang="ts">
	import Error from '$lib/error/error.svelte';
	import { getContext, type Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}
	let { class: klass = '', children }: Props = $props();

	// Get the state of the select from the context
	const rootState = getContext<{
		getIsError: () => string;
		size: 'tiny' | 'small' | 'medium' | 'large';
		getIsActive: () => boolean;
		setIsActive: (value: boolean) => void;
		setContentPosition: (value: string) => void;
		setTransY: (value: number) => void;
	}>('select');

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

	const sizeObj = {
		tiny: 'h-[24px] text-xs leading-3',
		small: 'h-[32px] px-[6px] text-sm leading-4',
		medium: 'h-[40px] px-[10px] text-sm leading-[20px]',
		large: 'h-[48px] px-[14px] text-base leading-[24px]'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[rootState.size];
	});

	let ringClass = $derived.by(() => {
		if (rootState.getIsError()) {
			return `bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-red-700 dark:border-kui-dark-red-700
			hover:border-kui-light-red-700 dark:hover:border-kui-dark-red-700 ring ring-kui-light-red-400
			dark:ring-kui-dark-red-400 hover:ring-kui-light-red-500 dark:hover:ring-kui-dark-red-500 `;
		}

		return `bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400
		hover:border-kui-light-gray-500 dark:hover:border-kui-dark-gray-500`;
	});

	let triggerClass = $derived.by(() => {
		return `${sizeClass}  ${ringClass}`;
	});

	// The size of the error text
	const errorTextObj = {
		tiny: 'text-[12px] leading-[16px]',
		small: 'text-[13px] leading-[20px]',
		medium: 'text-[14px] leading-[20px]',
		large: 'text-[16px] leading-[24px]'
	};

	let errorText = $derived.by(() => {
		return errorTextObj[rootState.size];
	});
</script>

<button
	onclick={toogle}
	class="group transition-all {triggerClass} flex items-center justify-between rounded-[6px] {klass} "
>
	{@render children()}
</button>
{#if rootState.getIsError()}
	<div class="mt-[8px]">
		<div class="flex items-center gap-[8px]">
			<div class="w-[16px] h-[16px] text-kui-light-red-900 dark:text-kui-dark-red-900">
				<Error />
			</div>
			<div class="font-medium {errorText} text-kui-light-red-900 dark:text-kui-dark-red-900">
				{rootState.getIsError()}
			</div>
		</div>
	</div>
{/if}
