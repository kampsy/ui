<script lang="ts">
	import { switchCont } from '$lib/switch/switch.svelte.js';

	type propT = {
		defaultChecked?: boolean | undefined;
		label?: string | undefined;
		value?: string | undefined;
	};
	let { defaultChecked = false, label, value }: propT = $props();

	// set the selected to value of defaultChecked is true
	if (defaultChecked && value) {
		switchCont.setSelected(value);
	}

    const onchange = (evt: any) => {
		switchCont.setSelected(evt.currentTarget.value);
	};

	const selectedClass = `text-light-gray-1000 dark:text-dark-gray-1000 bg-light-gray-100 dark:bg-dark-gray-100`;
	const unselectedClass = `text-light-gray-900 dark:text-dark-gray-900 hover:text-light-gray-1000 hover:dark:text-dark-gray-1000`;	
</script>

{#if label && value}
	<label
		for={value}
		class="flex items-center h-[32px] px-[12px] text-sm rounded-sm {switchCont.selected === value
			? selectedClass
			: unselectedClass}"
	>
		<input
			{onchange}
			type="radio"
			checked={switchCont.selected == value}
			id={value}
			name={switchCont.name}
			{value}
			class="hidden"
		/>
		<div>{label}</div>
	</label>
{/if}
