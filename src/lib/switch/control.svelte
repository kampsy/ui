<script lang="ts">
	import { randomString } from '$lib/utils/random.js';
	import { getContext, type Component } from 'svelte';

	type propT = {
		defaultChecked?: boolean | undefined;
		disabled?: boolean | undefined;
		label?: string | undefined;
		icon?: Component | undefined;
		value: string;
	};
	let { defaultChecked, disabled = undefined, label, icon = undefined, value }: propT = $props();

	const rootState = getContext<{
		name: string;
		size: 'small' | 'medium' | 'large';
		fullWidth: boolean;
		getSelected: () => string;
		setSelected: (value: string) => void;
	}>('switch');
	const { name, size, fullWidth } = rootState;

	// If defaultChecked is set and value
	if (defaultChecked) {
		rootState.setSelected(value);
	}

	const onchange = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement;
		rootState.setSelected(target.value);
	};

	// random string for unique id
	const unique = `${randomString(4)}_${value}`;

	const sizeObj = {
		small: 'text-sm h-[24px] px-[12px] rounded-xs',
		medium: 'text-sm h-8 px-[12px] rounded-xs',
		large: 'text-base  h-[40px] px-[12px] rounded-sm'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});

	// Seting the width and height values to the label
	const iconSizeObj = {
		small: 'h-[24px] px-[8px] py-[4px] rounded-xs',
		medium: 'h-8 px-[12px] py-[8px] rounded-xs',
		large: 'w-[40px] h-[40px] p-3 rounded-sm'
	};
	let iconSizeClass = $derived.by(() => {
		return iconSizeObj[size];
	});

	// Container seting the icon width and height
	const iconCont = {
		small: 'w-4 h-4',
		medium: 'w-4 h-4',
		large: 'w-[20px] h-[20px]'
	};
	let iconContClass = $derived.by(() => {
		return iconCont[size];
	});

	// Wthen the selected value is the same as the value
	let selectedClass = $derived.by(() => {
		// If the switch is disabled
		if (disabled) {
			if (rootState.getSelected() === value) {
				return `text-kui-light-gray-700 dark:text-kui-dark-gray-700 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100`;
			}
			return `text-kui-light-gray-700 dark:text-kui-dark-gray-700`;
		}

		if (rootState.getSelected() === value) {
			return `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100`;
		}
		return `text-kui-light-gray-900 dark:text-kui-dark-gray-900 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000`;
	});

	let disabledClass = $derived.by(() => {
		if (disabled) {
			return `cursor-not-allowed`;
		}
		return 'cursor-pointer';
	});

	let controlClass = $derived.by(() => {
		if (fullWidth) {
			if (icon) {
				return `w-full ${disabledClass} ${iconSizeClass} ${selectedClass}`;
			}
			return `w-full ${disabledClass} ${sizeClass} ${selectedClass}`;
		}

		if (icon) {
			return `${disabledClass} ${iconSizeClass} ${selectedClass}`;
		}

		return `${disabledClass} ${sizeClass} ${selectedClass}`;
	});
</script>

{#snippet withLabel()}
	{#if label && !icon}
		<div>{label}</div>
	{/if}
{/snippet}

{#snippet withIcon()}
	{#if icon && !label}
		{@const Icon = icon}
		<div class="flex items-center justify-center">
			<div class={iconContClass}>
				<Icon />
			</div>
		</div>
	{/if}
{/snippet}

<label for={unique} class="{controlClass}  flex items-center justify-center">
	<input
		{onchange}
		type="radio"
		checked={rootState.getSelected() == value}
		id={unique}
		{name}
		{value}
		{disabled}
		class="hidden"
	/>
	{@render withLabel()}
	{@render withIcon()}
</label>
