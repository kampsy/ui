<script lang="ts">
	import { LoaderCircle } from '$lib/icons/index.js';
	import { fade } from 'svelte/transition';

	type propsT = {
		size?: number;
	};

	let { size = 20 }: propsT = $props();

	let sizeStyle = $derived.by(() => {
		return `width: ${size}px; height: ${size}px;`;
	});
</script>

<div style={sizeStyle} class="relative animate-spin flex items-center justify-center">
	<div transition:fade class="absolute w-full h-full">
		<LoaderCircle />
	</div>
</div>
