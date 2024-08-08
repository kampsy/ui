<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	type propsT = {
		type?: 'success' | 'error' | 'warning' | 'secondary' | undefined;
		value?: number | undefined;
	};
	let { type = undefined, value = 0 }: propsT = $props();

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	let widthClass = $derived.by(() => {
		progress.set(value);
		return 'width:' + $progress + '%';
	});

	const typeObj = {
		success: 'bg-light-blue-700 dark:bg-dark-blue-700',
		error: 'bg-light-red-700 dark:bg-dark-red-700',
		warning: 'bg-light-amber-700 dark:bg-dark-amber-700',
		secondary: 'bg-light-gray-700 dark:bg-dark-gray-700'
	};
	let progressClass = $derived.by(() => {
		if (type) {
			return typeObj[type];
		}
		return `dark:bg-light-gray-300 bg-dark-gray-200`;
	});
</script>

<div class="w-full">
	<div class="w-full h-2.5 dark:bg-dark-gray-200 bg-light-gray-300 rounded-full">
		<div class="h-2.5 {progressClass} rounded-full" style={widthClass}></div>
	</div>
</div>
