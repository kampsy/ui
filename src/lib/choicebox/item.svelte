<script lang="ts">
	import Check from '$lib/icons/check.svelte';
	import { randomString } from '$lib/utils/random.js';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	type propT = {
		defaultChecked?: boolean | undefined;
		disabled?: boolean | undefined;
		description?: string | undefined;
		title?: string | undefined;
		value: string;
	};
	let { defaultChecked, disabled = undefined, description, title, value }: propT = $props();

	// Switch props, the parent component

	type switchProps = {
		name: string;
		disabledParent?: boolean | undefined;
		type: 'radio' | 'checkbox' | undefined;
	};

	const { name, type, disabledParent } = getContext<switchProps>('props');
	const { selected } = getContext<{ selected: Writable<string | Array<string>> }>('choicebox');

	// If the parent is disabled then the child is disabled
	if (disabledParent) {
		disabled = true;
	}

	// If defaultChecked is set and value
	if (defaultChecked) {
		if (type === 'radio') {
			$selected = value;
		} else if (type === 'checkbox') {
			$selected = [...$selected, value];
		}
	}

	const onchange = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement;
		if (type == 'radio') {
			$selected = target.value;
		} else if (type == 'checkbox') {
			const arrStr = $selected as Array<string>;
			const val = target.value;
			// if val is in the arrStr then remove it else add it
			if (arrStr.includes(val)) {
				$selected = arrStr.filter((item) => item !== val);
			} else {
				$selected = [...arrStr, val];
			}
		}
	};

	// random string for unique id
	const unique = `${randomString(4)}_${value}`;

	//When the selected class
	let labelClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return ` cursor-not-allowed border-kui-light-gray-200 dark:border-kui-dark-gray-400`;
		}
		if ($selected === value || $selected.includes(value)) {
			return `cursor-pointer bg-kui-light-blue-200 dark:bg-kui-dark-blue-200 border-kui-light-blue-600  dark:border-kui-dark-blue-600 
			hover:border-kui-light-blue-700 dark:hover:border-kui-dark-blue-700`;
		}
		return `cursor-pointer hover:bg-kui-light-gray-200 dark:hover:bg-kui-dark-gray-200 border-kui-light-gray-200 
		dark:border-kui-dark-gray-400 hover:border-kui-light-gray-500 dark:hover:border-kui-dark-gray-500`;
	});

	// Title text
	let titleClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return `text-kui-light-gray-500 dark:text-kui-dark-gray-500`;
		}
		if ($selected === value || $selected.includes(value)) {
			return `text-kui-light-blue-900 dark:text-kui-dark-blue-900`;
		}
		return `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000`;
	});

	// Description text
	let descriptionClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return `text-kui-light-gray-500 dark:text-kui-dark-gray-500`;
		}
		if ($selected === value || $selected.includes(value)) {
			return `text-kui-light-blue-900 dark:text-kui-dark-blue-900`;
		}
		return `text-kui-light-gray-900 dark:text-kui-dark-gray-900`;
	});

	// The rounded radio cont
	let radioContClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return `border-kui-light-gray-200 dark:border-kui-dark-gray-400`;
		}

		if ($selected === value) {
			return `border-kui-light-blue-900  dark:border-kui-dark-blue-900 `;
		}
		return `border-kui-light-gray-200 dark:border-kui-dark-gray-200 group-hover:border-kui-light-gray-500 
		dark:group-hover:border-kui-dark-gray-500 group-hover:bg-kui-light-bg dark:group-hover:bg-kui-dark-bg`;
	});

	// The radio cont
	let radioClass = $derived.by(() => {
		if ($selected === value) {
			return `bg-kui-light-blue-900  dark:bg-kui-dark-blue-900 `;
		}
		return ``;
	});

	// The rounded radio cont
	let checkboxContClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return `border-kui-light-gray-200 dark:border-kui-dark-gray-400`;
		}
		if ($selected.includes(value)) {
			return `border-kui-light-blue-900  dark:border-kui-dark-blue-900 bg-kui-light-blue-900  dark:bg-kui-dark-blue-900 `;
		}
		return `border-kui-light-gray-200 dark:border-kui-dark-gray-200 group-hover:border-kui-light-gray-500 
		dark:group-hover:border-kui-dark-gray-500 group-hover:bg-kui-light-bg dark:group-hover:bg-kui-dark-bg`;
	});
	let checkboxClass = $derived.by(() => {
		if ($selected.includes(value)) {
			return `text-white dark:text-black font-bold `;
		}
		return `text-transparent font-bold`;
	});
</script>

{#snippet radio()}
	{#if type === 'radio'}
		<div
			class="w-[16px] h-[16px] p-[1px] rounded-full transition-colors ease-in flex items-center justify-center border {radioContClass} "
		>
			<div class="w-[16px] h-[16px] flex items-center justify-center">
				<input
					{onchange}
					{type}
					checked={$selected == value}
					id={unique}
					{name}
					{value}
					{disabled}
					class="hidden"
				/>
				<div
					class="w-[8px] h-[8px] bg-red rounded-full transition-colors ease-in {radioClass}"
				></div>
			</div>
		</div>
	{/if}
{/snippet}

{#snippet checkbox()}
	{#if type === 'checkbox'}
		<div
			class="w-[16px] h-[16px] p-[1px] rounded-[4px] transition-colors ease-in flex items-center justify-center border {checkboxContClass} "
		>
			<div class="w-[16px] h-[16px] flex items-center justify-center">
				<input
					{onchange}
					{type}
					checked={$selected.includes(value)}
					id={unique}
					{name}
					{value}
					{disabled}
					class="hidden"
				/>
				<div class="w-[10px] h-[10px] transition-colors ease-in {checkboxClass}">
					<Check />
				</div>
			</div>
		</div>
	{/if}
{/snippet}

<label
	for={unique}
	class="group transition-colors ease-in w-full border flex rounded-[6px] {labelClass} "
>
	<div class="w-full p-[12px] flex items-center justify-between">
		<div>
			{#if title}
				<p
					class="first-letter:capitalize ransition-colors ease-in text-sm {titleClass}  font-medium leading-6"
				>
					{title}
				</p>
			{/if}

			{#if description}
				<p
					class="first-letter:capitalize ransition-colors ease-in text-sm {descriptionClass} font-normal leading-6"
				>
					{description}
				</p>
			{/if}
		</div>
		{@render radio()}
		{@render checkbox()}
	</div>
</label>
