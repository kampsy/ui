<script lang="ts">
	import { randomString } from '$lib/utils/random.js';
	import type { Component } from 'svelte';

	type propT = {
		defaultChecked?: boolean | undefined;
		disabled?: boolean | undefined;
		label?: string | undefined;
		icon?: Component | undefined;
		value: string;
	};
	let { defaultChecked, disabled = undefined, label, icon = undefined, value= $bindable('') }: propT = $props();

	const onchange = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement;
		console.log(target.value, '<-------');
	};

	// random string for unique id
	const unique = `${randomString(4)}_${value}`;
</script>

<label for={unique} class="inline-flex items-center cursor-pointer gap-2 py-[3px]">
	<span class="ms-3 text-xs font-medium text-kui-light-gray-900 dark-text-kui-dark-gray-900">Toggle me</span
	>
	<input {onchange} type="radio" id={unique} {value} {disabled} class="hidden" />
	<span
		class="w-[28px] h-[14px] flex items-center bg-kui-light-blue-700 dark:bg-kui-dark-blue-700 rounded-full"
	>
		<div class="w-[12px] h-[12px] bg-kui-light-bg rounded-full">
			<!---->
		</div>
	</span>
</label>
