<script lang="ts">
	type propsT = {
		state?: 'QUEUED' | 'BUILDING' | 'ERROR' | 'READY' | 'CANCELED';
		label?: boolean;
	};
	let { label = false, state = 'QUEUED' }: propsT = $props();

	const stateObj = {
		QUEUED: 'bg-kui-light-gray-600 dark:bg-kui-dark-gray-600',
		BUILDING: 'bg-kui-light-amber-600 dark:bg-kui-dark-amber-600',
		ERROR: 'bg-kui-light-red-600 dark:bg-kui-dark-red-600',
		READY: 'bg-kui-light-green-600 dark:bg-kui-dark-green-600',
		CANCELED: 'bg-kui-light-gray-600 dark:bg-kui-dark-gray-600'
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
