<script lang="ts">
	import { randomString } from '$lib/utils/random.js';
	import { getContext, type Component } from 'svelte';
	import type { Writable } from 'svelte/store';

	type propT = {
		defaultChecked?: boolean | undefined;
		label?: string | undefined;
		icon?: Component | undefined;
		value: string;
	};
	let { defaultChecked, label, icon = undefined, value }: propT = $props();

	// Switch props, the parent component
	type switchProps = {
		name: string;
		size: 'small' | 'medium' | 'large';
		fullWidth: boolean;
	};

	const { name, size, fullWidth } = getContext<switchProps>('props');
	const { selected } = getContext<{ selected: Writable<string> }>('switch');

	// If defaultChecked is set and value
	if (defaultChecked) {
		$selected = value;
	}

	const onchange = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement;
		$selected = target.value;
	};

	// random string for unique id
	const unique = `${randomString(4)}_${value}`;

	const sizeObj = {
		small: 'text-sm h-[24px]',
		medium: 'text-sm h-[32px]',
		large: 'text-base  h-[40px]'
	};
	let sizeClass = $derived.by(() => {
		return sizeObj[size];
	});

	// Seting the width and height values to the label
	const iconSizeObj = {
		small: 'w-[24px] h-[24px]',
		medium: 'w-[32px] h-[32px]',
		large: 'w-[40px] h-[40px]'
	};
	let iconSizeClass = $derived.by(() => {
		return iconSizeObj[size];
	});

	// Container seting the icon width and height
	const iconCont = {
		small: 'w-[16px] h-[16px]',
		medium: 'w-[16px] h-[16px]',
		large: 'w-[20px] h-[20px]'
	};
	let iconContClass = $derived.by(() => {
		return iconCont[size];
	});

	// Wthen the selected value is the same as the value 
	let selectedClass = $derived.by(() => {
		if ($selected === value) {
			return `text-light-gray-1000 dark:text-dark-gray-1000 bg-light-gray-100 dark:bg-dark-gray-100`;
		}
		return `text-light-gray-900 dark:text-dark-gray-900 hover:text-light-gray-1000 hover:dark:text-dark-gray-1000`;
	})
	

	let controlClass = $derived.by(() => {
		if (fullWidth) {
			if (icon) {
				return `w-full ${iconSizeClass} ${selectedClass}`;
			}
			return `w-full ${sizeClass} ${selectedClass}`;
		}
		return `${sizeClass} ${selectedClass}`;
	});
</script>

{#snippet withLabel()}
	{#if label && !icon}
		<div>{label}</div>
	{/if}
{/snippet}

{#snippet withIcon()}
	{#if icon && !label}
		<div class="flex items-center justify-center">
			<div class={iconContClass}>
				<svelte:component this={icon} />
			</div>
		</div>
	{/if}
{/snippet}

<label
	for={unique}
	class="{controlClass} flex items-center justify-center px-[12px] rounded-sm cursor-pointer"
>
	<input
		{onchange}
		type="radio"
		checked={$selected == value}
		id={unique}
		{name}
		{value}
		class="hidden"
	/>
	{@render withLabel()}
	{@render withIcon()}
</label>
