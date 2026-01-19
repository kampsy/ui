<script lang="ts">
	import Check from '$lib/icons/check.svelte';
	import Minus from '$lib/icons/minus.svelte';
	import { randomString } from '$lib/utils/random.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLInputElement> {
		checked?: boolean | undefined;
		value?: string | undefined;
		items?: Array<string> | undefined;
		indeterminate?: boolean | undefined;
		disabled?: boolean | undefined;
		children?: Snippet;
	}
	let {
		checked = $bindable(false),
		value = undefined,
		items = $bindable(undefined),
		indeterminate = false,
		disabled = false,
		children
	}: Props = $props();

	// random string for unique id
	const unique = `${randomString(4)}_${value}`;

	const onchange = () => {
		checked = !checked;
		// if checked is true add the value to the item
		if (items && value) {
			if (checked) {
				items = [...items, value];
			} else {
				items = items.filter((item) => item !== value);
			}
		}
	};

	$effect(() => {
		if (items && value) {
			if (items.includes(value)) {
				checked = true;
			}
		}
	});

	// The rounded radio cont
	let checkboxContClass = $derived.by(() => {
		if (disabled) {
			if (indeterminate) {
				return `border-kui-light-gray-600 dark:border-kui-dark-gray-600 text-kui-light-gray-600 dark:text-kui-dark-gray-600
				bg-kui-light-gray-100 dark:bg-kui-dark-gray-100`;
			}

			// will check for indeterminate and checked
			if (checked) {
				return `border-kui-light-gray-600 dark:border-kui-dark-gray-600 bg-kui-light-gray-600 dark:bg-kui-dark-gray-600`;
			}
			return `border-kui-light-gray-500 dark:border-kui-dark-gray-500 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100`;
		}
		// if its indeterminate
		if (indeterminate) {
			return `border-kui-light-gray-900 dark:border-kui-dark-gray-900`;
		}

		// If checked is true
		if (checked) {
			return `border-kui-dark-bg-secondary  dark:border-kui-light-bg bg-kui-dark-bg-secondary  dark:bg-kui-light-bg `;
		}
		return `border-kui-light-gray-500 dark:border-kui-dark-gray-500 hover:bg-kui-light-gray-100 dark:hover:bg-kui-dark-gray-100`;
	});

	let checkboxClass = $derived.by(() => {
		if (indeterminate) {
			return `text-kui-light-gray-900 dark:text-kui-dark-gray-900`;
		}
		if (checked) {
			return `text-kui-light-bg dark:text-kui-black`;
		}
		return `text-transparent`;
	});

	let textClass = $derived.by(() => {
		if (disabled) {
			return `text-kui-light-gray-500 dark:text-kui-dark-gray-500`;
		}
		return `text-kui-light-gray-900 dark:text-kui-dark-gray-900`;
	});
</script>

<section class="flex">
	<label for={unique}>
		<div class="flex items-center gap-2 cursor-pointer">
			<div
				class="w-4 h-4 rounded-sm p-0.5 box-border transition-colors ease-in flex items-center justify-center border {checkboxContClass} "
			>
				<input
					{onchange}
					type="checkbox"
					{checked}
					id={unique}
					{value}
					{disabled}
					{indeterminate}
					class="hidden"
				/>
				<div class="w-4 h-4 font-bold transition-colors ease-in {checkboxClass}">
					{#if indeterminate}
						<Minus />
					{:else}
						<Check />
					{/if}
				</div>
			</div>

			{#if children}
				<div class="text-sm select-none first-letter:capitalize {textClass}">
					{@render children()}
				</div>
			{/if}
		</div>
	</label>
</section>
