<script lang="ts">
	import { ChevronDownSmall } from '$lib/icons/index.js';

    type propsT = {
        isActive: boolean;
    }

    let { isActive = $bindable(false) }: propsT = $props();


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
    })
</script>

{#snippet suffixSnip()}
	<div class="w-4 h-4 overflow-hidden">
		<div class="w-4 h-4 {rotate} transform-gpu duration-200 flex items-center justify-center">
            <ChevronDownSmall/>
        </div>
	</div>
{/snippet}

<div class="w-full">
	<div class="flex items-center">
		<div class="w-full border-t border-kui-light-gray-400 dark:border-kui-dark-gray-400">
			<!--line-->
		</div>  
            <div class="w-[250px]">
                <button onclick="{()=>{
                    isActive = !isActive
                }}" type="button" class="w-full rounded-full border border-kui-light-gray-400 dark:border-kui-dark-gray-400">
                    <div class="w-full px-2 py-2 flex items-center justify-between flex-nowrap gap-[8px]">
                        <div class="font-medium first-letter:capitalize text-xs"> {buttonText}</div>
                        {@render suffixSnip()}
                    </div>
                </button>
            </div>
		<div class="w-full border-t border-kui-light-gray-400 dark:border-kui-dark-gray-400">
			<!--second line-->
		</div>
	</div>
</div>
