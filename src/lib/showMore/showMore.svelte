<script lang="ts">
	import { ChevronDownSmall } from '$lib/icons/index.js';

	type propsT = {
		isActive: boolean;
	};

	let { isActive = $bindable(false) }: propsT = $props();

    const onclick = () => {
		isActive = !isActive;
	};

	let rotate = $derived.by(() => {
		if (isActive) {
			return 'rotate-180';
		}
		return '';
	});

	let buttonText = $derived.by(() => {
		if (isActive) {
			return 'show less';
		}
		return 'Show more';
	});
    

</script>

{#snippet suffixSnip()}
	<div class="w-4 h-4">
		<div
			class="rounded-full w-4 h-4 {rotate} transform-gpu duration-200 flex items-center justify-center"
		>
			<ChevronDownSmall />
		</div>
	</div>
{/snippet}

<div class="w-full">
	<div class="flex items-center box-border">
		<div class="grow border-t border-kui-light-gray-400 dark:border-kui-dark-gray-400">
			<!--line-->
		</div>
		<div class="grow-0">
			<button
				{onclick}
				type="button"
				class="rounded-full p-1.5 border border-kui-light-gray-400 dark:border-kui-dark-gray-400 
                hover:border-kui-light-gray-500 dark:hover:border-kui-dark-gray-500 hover:bg-kui-light-gray-200 
                dark:hover:bg-kui-dark-gray-200 transition duration-300"
			>
				<div class="px-1.5 w-full flex items-center gap-1 justify-center">
					<div class="font-medium capitalize text-sm">{buttonText}</div>
					{@render suffixSnip()}
				</div>
			</button>
		</div>
		<div class="grow border-t border-kui-light-gray-400 dark:border-kui-dark-gray-400">
			<!--second line-->
		</div>
	</div>
</div>
