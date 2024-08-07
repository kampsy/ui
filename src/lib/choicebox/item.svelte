<script lang="ts">
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
		type: 'radio' | 'checkbox' | undefined;
	};

	const { name, type } = getContext<switchProps>('props');
	const { selected } = getContext<{ selected: Writable<string> }>('choicebox');

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
</script>

<label
	for=""
	class="group w-full border flex rounded-[6px] cursor-pointer hover:bg-light-gray-200 dark:hover:bg-dark-gray-200 border-light-gray-200 dark:border-dark-gray-400 hover:border-light-gray-500 dark:hover:border-dark-gray-500"
>
	<div class="w-full p-[12px] flex items-center justify-between">
		<div>
			{#if title}
				<p
					class="first-letter:capitalize text-sm text-light-gray-1000 dark:text-dark-gray-1000 font-medium leading-6"
				>
					{title}
				</p>
			{/if}

			{#if description}
				<p
					class="first-letter:capitalize text-sm text-light-gray-900 dark:text-dark-gray-900 font-normal leading-6"
				>
					{description}
				</p>
			{/if}
		</div>
		<div
			class="w-[16px] h-[16px] p-[1px] rounded-full flex items-center justify-center border border-light-gray-200 dark:border-dark-gray-400 group-hover:border-light-gray-500 dark:group-hover:border-dark-gray-500 group-hover:bg-light-bg dark:group-hover:bg-dark-bg"
		>
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
			<div class="w-[8px] h-[8px] bg-red rounded-full"></div>
		</div>
	</div>
</label>
