<script lang="ts">
	import Error from '$lib/icons/error.svelte';
	import { randomString } from '$lib/utils/random.js';

	type propT = {
		'aria-labelledby'?: string | undefined;
		id?: string | undefined;
		name?: string | undefined;
		value?: string | undefined;
		label?: string | undefined;
		defaultValue?: string | undefined;
		error?: string | undefined;
		size?: 'tiny' | 'small' | 'medium' | 'large';
		placeholder?: string | undefined;
		disabled?: boolean;
	};
	let {
		'aria-labelledby': araiLabelledBy = undefined,
		id = undefined,
		name = undefined,
		value = $bindable(''),
		label = undefined,
		defaultValue = '',
		error = undefined,
		size = 'medium',
		placeholder = undefined,
		disabled = false
	}: propT = $props();

	// The focus and blur state of the input
	let hasRing = $state(false);

	// The name is used on the label and input name
	let inputID = $derived.by(() => {
		if (id) {
			return id;
		}
		return randomString(8);
	});

	// Assign defaultValue if it is not ''
	if (defaultValue !== '') {
		value = defaultValue;
	}

	const textObj = {
		tiny: 'text-[12px] leading-[16px]',
		small: 'text-[13px] leading-[20px]',
		medium: 'text-[14px] leading-[20px]',
		large: 'text-[16px] leading-[24px]'
	};

	let text = $derived.by(() => {
		return textObj[size];
	});

	let ringClass = $derived.by(() => {
		if (disabled) {
			return `cursor-not-allowed border-kui-light-gray-400 dark:border-kui-dark-gray-400
			bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 text-kui-light-gray-600 dark:text-kui-dark-gray-600
			placeholder-kui-light-gray-600 dark:placeholder-kui-dark-gray-600`;
		}
		if (error) {
			return `border-kui-light-red-700 dark:border-kui-dark-red-700 hover:border-kui-light-gray-500
			dark:hover:border-kui-dark-gray-500 ring ring-kui-light-red-400 dark:ring-kui-dark-red-400
			hover:ring-0 dark:hover:ring-0 `;
		}

		if (hasRing) {
			return `border-kui-light-gray-700 dark:border-kui-dark-gray-700 ring ring-kui-light-gray-400
            dark:ring-kui-dark-gray-400 hover:border-kui-light-gray-700 dark:hover:border-kui-dark-gray-700
			text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 placeholder-kui-light-gray-600 dark:placeholder-kui-dark-gray-600`;
		}

		return `border-kui-light-gray-400 dark:border-kui-dark-gray-400 hover:border-kui-light-gray-500
		dark:hover:border-kui-dark-gray-500 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 placeholder-kui-light-gray-600
		dark:placeholder-kui-dark-gray-600`;
	});

	let textareaClass = $derived.by(() => {
		return `${text}  ${ringClass}`;
	});
</script>

{#snippet textAreaSnip()}
	<div class="w-full">
		<textarea
			bind:value
			id={inputID}
			{name}
			aria-labelledby={araiLabelledBy}
			autocapitalize="off"
			autocomplete="off"
			rows="4"
			class=" transition-all border {textareaClass} block px-[12px] py-[10px] w-full rounded-[6px] outline-hidden
		 bg-kui-light-bg dark:bg-kui-dark-bg"
			{placeholder}
			{disabled}
			onfocus={() => {
				hasRing = true;
			}}
			onblur={() => {
				hasRing = false;
			}}
		></textarea>

		{#if error}
			<div class="mt-[8px]">
				<div class="flex items-center gap-[8px]">
					<div class="w-[16px] h-[16px] text-kui-light-red-900 dark:text-kui-dark-red-900">
						<Error />
					</div>
					<div class="font-medium {text} text-kui-light-red-900 dark:text-kui-dark-red-900">
						{error}
					</div>
				</div>
			</div>
		{/if}
	</div>
{/snippet}

<!--With a label-->
{#snippet textAreaLabel()}
	<label for={inputID}>
		<div class="inline-block text-sm text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-2">
			{label}
		</div>
		{@render textAreaSnip()}
	</label>
{/snippet}

{#if label}
	{@render textAreaLabel()}
{:else}
	{@render textAreaSnip()}
{/if}
