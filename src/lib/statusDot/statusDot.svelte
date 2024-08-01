<script lang="ts">
	type propsT = {
		state?: 'QUEUED' | 'BUILDING' | 'ERROR' | 'READY' | 'CANCELED';
		label?: boolean;
	};
	let { label = false, state = 'QUEUED' }: propsT = $props();

	const stateObj = {
		QUEUED: 'bg-light-gray-600 dark:bg-dark-gray-600',
		BUILDING: 'bg-light-amber-600 dark:bg-dark-amber-600',
		ERROR: 'bg-light-red-600 dark:bg-dark-red-600',
		READY: 'bg-light-green-600 dark:bg-dark-green-600',
		CANCELED: 'bg-light-gray-600 dark:bg-dark-gray-600'
	};

	let stateClass = $derived.by(() => {
		return stateObj[state];
	});
</script>

<div class="flex items-center gap-x-2">
	<div class="w-[10px] h-[10px] rounded-full {stateClass}"></div>
	{#if label}
		<span class="first-letter:capitalize text-sm leading-4">{state.toLowerCase()}</span>
	{/if}
</div>
