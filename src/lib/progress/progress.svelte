<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		type?: 'success' | 'error' | 'warning' | 'secondary' | undefined;
		value: number;
	}
	let { type = undefined, value = 0, ...rest }: Props = $props();

	const tween = Tween.of(() => value, {
		duration: 400,
		easing: cubicOut
	});

	let widthClass = $derived.by(() => {
		return 'width:' + tween.current + '%';
	});

	const typeObj = {
		success: 'bg-kui-light-blue-700 dark:bg-kui-dark-blue-700',
		error: 'bg-kui-light-red-700 dark:bg-kui-dark-red-700',
		warning: 'bg-kui-light-amber-700 dark:bg-kui-dark-amber-700',
		secondary: 'bg-kui-light-gray-700 dark:bg-kui-dark-gray-700'
	};
	let progressClass = $derived.by(() => {
		if (type) {
			return typeObj[type];
		}
		return `dark:bg-kui-light-gray-300 bg-kui-dark-gray-200`;
	});
</script>

<div class="w-full">
	<div
		role="progressbar"
		aria-valuenow={tween.current}
		aria-valuemin="0"
		aria-valuemax="100"
		class="w-full h-2.5 dark:bg-kui-dark-gray-200 bg-kui-light-gray-300 rounded-full"
		{...rest}
	>
		<div class="h-2.5 {progressClass} rounded-full" style={widthClass}></div>
	</div>
</div>
