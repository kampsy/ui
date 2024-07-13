<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		class?: string;
		size?: number;
		children?: Snippet;
	};
	let { class: klass = '', size = 32, children }: propsT = $props();
</script>

<div class="flex items-center">
	<div class=" w-[32px] h-[32px] rounded-full overflow-hidden border border-light-gray-200 dark:border-dark-gray-200 {klass}">
		<div class="w-[30px] h-[30px]">
			<img
				src="https://vercel.com/api/www/avatar?u=evilrabbit&s=64"
				alt="Avatar for evilrabbit"
				loading="eager"
				width="32"
				height="32"
                decoding="async"
			/>
        </div>
	</div>
    
    <div class="w-[32px] h-[32px] -ml-2 rounded-full overflow-hidden border border-light-gray-200 dark:border-dark-gray-200 {klass}">
		<div class="w-[30px] h-[30px]">
			<img
				src="https://vercel.com/api/www/avatar?u=leerob&s=64"
				alt="Avatar for evilrabbit"
				loading="eager"
				width="32"
				height="32"
                decoding="async"
			/>
        </div>
	</div>

    <div class="w-[32px] h-[32px] flex items-center justify-center -ml-2 rounded-full overflow-hidden text-[10px] font-semibold border dark:text-dark-gray-1000 dark:bg-dark-gray-100 border-light-gray-200  dark:border-dark-gray-400">
		+2
	</div>
</div>
