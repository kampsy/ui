<script lang="ts">
	import { Tooltip } from '$lib/index.js';

	type propsT = {
		disabled?: boolean | undefined;
		selected?: string | undefined;
		tabs?:
			| Array<{ title: string; value: string; disabled?: boolean; tooltip?: string }>
			| undefined;
	};
	let { disabled = false, selected = $bindable(''), tabs = undefined }: propsT = $props();

	const isSelected = (value: string) => {
		if (value === selected) {
			return true;
		}
	};

	const isActive = ` text-kui-light-gray-1000 
    dark:text-kui-dark-gray-1000`;
	const isInactive = `text-kui-light-gray-900 dark:text-kui-dark-gray-900 
    hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000`;
	const isDisabled = `cursor-not-allowed text-kui-light-gray-900 dark:text-kui-dark-gray-900`;

	let [tabsActive, tabsInactive] = $derived.by(() => {
		if (disabled) {
			return [isDisabled, isDisabled];
		}
		return [isActive, isInactive];
	});
</script>

<div class="w-full flex items-center gap-3 border-b border-kui-light-gray-200 dark:border-kui-dark-gray-400">
	{#if tabs}
		{#each tabs as tab}
			<div class="mb-[-1px]">
				{#if tab.disabled}
					<Tooltip text={tab.tooltip}>
						<button
							disabled={tab.disabled}
							class="transition-colors text-sm {isSelected(tab.value)
								? `border-b-2 border-kui-light-gray-1000 dark:border-kui-dark-gray-1000`
								: `border-b-2 border-transparent`} px-[2px] py-3 cursor-not-allowed text-kui-light-gray-900 dark:text-kui-dark-gray-900 capitalize "
						>
							{tab.title}
						</button>
					</Tooltip>
				{:else}
					<button
						{disabled}
						onclick={() => (selected = tab.value)}
						class="transition-colors text-sm {isSelected(tab.value)
							? `border-b-2 border-kui-light-gray-1000 dark:border-kui-dark-gray-1000 ${tabsActive}`
							: `border-b-2 border-transparent ${tabsInactive}`} px-[2px] py-3 capitalize"
					>
						{tab.title}
					</button>
				{/if}
			</div>
		{/each}
	{/if}
</div>
