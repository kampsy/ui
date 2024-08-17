<script lang="ts">
	import Error from '$lib/icons/error.svelte';

	type propT = {
		defaultValue?: string | undefined;
		error?: string | undefined;
		size?: 'tiny' | 'small' | 'medium' | 'large';
		placeholder?: string | undefined;
		disabled?: boolean;
	};
	let {
		defaultValue = '',
		error = undefined,
		size = 'medium',
		placeholder = undefined,
		disabled = false
	}: propT = $props();

	const textObj = {
		tiny: 'text-[12px] leading-[16px]',
		small: 'text-[13px] leading-[20px]',
		medium: 'text-[14px] leading-[20px]',
		large: 'text-[16px] leading-[24px]'
	};

	let text = $derived.by(() => {
		return textObj[size];
	});

	let background = $derived.by(() => {
		if (disabled) {
			return 'bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary';
		}
		return 'bg-kui-light-bg dark:bg-kui-dark-bg';
	});

	let cursor = $derived.by(() => {
		if (disabled) {
			return 'cursor-not-allowed';
		}
		return '';
	});

	let border = $derived.by(() => {
		if (error) {
			return `border border-kui-light-red-800 dark:border-kui-dark-red-800 focus:ring-kui-light-red-800 
			dark:focus:ring-kui-dark-red-800 focus:border-kui-light-red-800 dark:focus:border-kui-dark-red-800 focus:shadow-sm`;
		}
		return `border border-kui-light-gray-200 dark:border-kui-dark-gray-400 focus:ring-kui-light-gray-800 
		dark:focus:ring-kui-dark-gray-800 focus:border-kui-light-gray-800 dark:focus:border-kui-dark-gray-800 focus:shadow-sm`;
	});

	let textarea = $derived.by(() => {
		return `${background} ${text} ${cursor} ${border}`;
	});
</script>

<div class="w-full">
	<textarea
		autocapitalize="off"
		autocomplete="off"
		autocorrect="off"
		id="message"
		rows="4"
		value={defaultValue}
		class="{textarea} block px-[12px] py-[10px] w-full rounded-[6px] outline-none text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg placeholder-kui-light-gray-800 dark:placeholder-kui-dark-gray-800"
		{placeholder}
		{disabled}
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
