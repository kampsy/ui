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
			return 'bg-light-bg-secondary dark:bg-dark-bg-secondary';
		}
		return 'bg-light-bg dark:bg-dark-bg';
	});

	let cursor = $derived.by(() => {
		if (disabled) {
			return 'cursor-not-allowed';
		}
		return '';
	});

	let border = $derived.by(() => {
		if (error) {
			return `border border-light-red-800 dark:border-dark-red-800 focus:ring-light-red-800 
			dark:focus:ring-dark-red-800 focus:border-light-red-800 dark:focus:border-dark-red-800 focus:shadow-sm`;
		}
		return `border border-light-gray-200 dark:border-dark-gray-400 focus:ring-light-gray-800 
		dark:focus:ring-dark-gray-800 focus:border-light-gray-800 dark:focus:border-dark-gray-800 focus:shadow-sm`;
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
		class="{textarea} block px-[12px] py-[10px] w-full rounded-[6px] outline-none text-light-gray-1000 dark:text-dark-gray-1000 bg-light-bg dark:bg-dark-bg placeholder-light-gray-800 dark:placeholder-dark-gray-800"
		{placeholder}
		{disabled}
	></textarea>

	{#if error}
		<div class="mt-[8px]">
			<div class="flex items-center gap-[8px]">
				<div class="w-[16px] h-[16px] text-light-red-900 dark:text-dark-red-900">
					<Error />
				</div>
				<div class="font-medium {text} text-light-red-900 dark:text-dark-red-900">
					{error}
				</div>
			</div>
		</div>
	{/if}
</div>
