<script lang="ts">
	import MagnifyingGlass from '$lib/icons/magnifying-glass.svelte';

	type propsT = {
		'aria-labelledby'?: string | undefined;
		value?: string | undefined;
		size?: 'small' | 'medium' | 'large';
		error?: string | undefined;
		disabled?: boolean | undefined;
		placeholder?: string | undefined;
	};
	let {
		'aria-labelledby': araiLabelledBy = undefined,
		value = $bindable(''),
		size = 'medium',
		error = undefined,
		disabled = false,
		placeholder = undefined
	}: propsT = $props();

	// The focus and blur state of the input
	let hasRing = $state(false);

	const sizeObj = {
		small: 'h-[32px] text-sm',
		medium: 'h-[40px] text-sm',
		large: 'h-[48px] text-base'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});

	// Show the ring when the input is focused
	let ringClass = $derived.by(() => {
		if (disabled) {
			return `cursor-not-allowed border-kui-light-gray-200 dark:border-kui-dark-gray-400 
			bg-kui-light-gray-100 dark:bg-kui-dark-gray-100`;
		}
		if (error) {
			return `border-kui-light-red-700 dark:border-kui-dark-red-700 hover:border-kui-light-red-700 
			dark:hover:border-kui-dark-red-700 ring-4 ring-kui-light-red-400 dark:ring-kui-dark-red-400 
			hover:ring-kui-light-red-500 dark:hover:ring-kui-dark-red-500 `;
		}
		if (hasRing) {
			return `border-kui-light-gray-700 dark:border-kui-dark-gray-700 ring-4 ring-kui-light-gray-400 
            dark:ring-kui-dark-gray-400 hover:border-kui-light-gray-700 dark:hover:border-kui-dark-gray-700`;
		}
		return `border-kui-light-gray-200 dark:border-kui-dark-gray-400 hover:border-kui-light-gray-700 dark:hover:border-kui-dark-gray-700`;
	});
</script>

<div
	class="flex items-center {sizeClass} overflow-hidden transition-all border {ringClass} rounded-[6px]"
>
	<span class="h-full flex items-center px-3 text-kui-light-gray-700 dark:text-kui-dark-gray-700">
		<div class="w-[16px] h-[16px]">
			<MagnifyingGlass />
		</div>
	</span>
	<div class="w-full h-full pr-3">
		<input
			type="search"
			aria-labelledby={araiLabelledBy}
			bind:value
			{placeholder}
			{disabled}
			onfocus={() => {
				hasRing = true;
			}}
			onblur={() => {
				hasRing = false;
			}}
			class="w-full h-full outline-none bg-transparent capitalize placeholder:text-sm placeholder:text-kui-light-gray-600
             dark:placeholder:text-kui-dark-gray-600"
		/>
	</div>
</div>
