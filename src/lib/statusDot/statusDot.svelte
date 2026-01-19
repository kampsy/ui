<script lang="ts">
	interface Props {
		state?: 'QUEUED' | 'BUILDING' | 'ERROR' | 'READY' | 'CANCELED';
		label?: boolean;
	}
	let { label = false, state = 'QUEUED' }: Props = $props();

	const stateObj = {
		QUEUED: 'bg-kui-light-gray-400 dark:bg-kui-dark-gray-400',
		BUILDING: 'bg-kui-light-amber-600 dark:bg-kui-dark-amber-600',
		ERROR: 'bg-kui-light-red-600 dark:bg-kui-dark-red-600',
		READY: 'bg-kui-light-green-600 dark:bg-kui-dark-green-600',
		CANCELED: 'bg-kui-light-gray-400 dark:bg-kui-dark-gray-400'
	};
</script>

<div class="flex items-center gap-x-2">
	<div class="w-2.5 h-2.5 rounded-full {stateObj[state]}"></div>
	{#if label}
		<span
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-sm leading-4"
			>{state.toLowerCase()}</span
		>
	{/if}
</div>
