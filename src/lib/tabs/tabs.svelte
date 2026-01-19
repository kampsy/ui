<script lang="ts">
	import { Tooltip } from '$lib/index.js';
	import type { Component } from 'svelte';

	interface Props {
		disabled?: boolean | undefined;
		selected?: string | undefined;
		tabs?:
			| Array<{
					title: string;
					value: string;
					icon?: Component;
					disabled?: boolean;
					tooltip?: string;
			  }>
			| undefined;
		type?: 'default' | 'secondary';
	};
	let {
		disabled = false,
		selected = $bindable(''),
		tabs = undefined,
		type = 'default'
	}: Props = $props();

	const isSelected = (value: string) => {
		if (value === selected) {
			return true;
		}
		return false;
	};

	const tabButtonFunc = (
		isActive: boolean,
		isDisabled: boolean,
		isDisabledSpecific: boolean | undefined
	): string => {
		if (type === 'secondary') {
			// if the tab is disabled does not matter if active or not
			if (isDisabled || isDisabledSpecific) {
				return `cursor-not-allowed px-1.5 py-1 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 rounded-md bg-kui-light-gray-alpha-400 
            dark:bg-kui-dark-gray-alpha-400`;
			}

			if (isActive) {
				return `px-1.5 py-1 text-kui-light-bg dark:text-kui-dark-bg rounded-md bg-kui-light-gray-1000 
                dark:bg-kui-dark-gray-1000`;
			}
			return `px-1.5 py-1 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 rounded-md bg-kui-light-gray-alpha-400 
            dark:bg-kui-dark-gray-alpha-400 hover:bg-kui-light-gray-300 dark:hover:bg-kui-dark-gray-300`;
		}

		if (type === 'default') {
			if (isActive) {
				// Active but the tab is disabled
				if (isDisabled || isDisabledSpecific) {
					return `cursor-not-allowed px-[2px] py-3 border-b-2 border-kui-light-gray-1000 dark:border-kui-dark-gray-1000 
                text-kui-light-gray-900 dark:text-kui-dark-gray-900`;
				}
				return `px-[2px] py-3 border-b-2 border-kui-light-gray-1000 dark:border-kui-dark-gray-1000 
                text-kui-light-gray-1000 dark:text-kui-dark-gray-1000`;
			}

			// Not active and the tab is disabled
			if (isDisabled || isDisabledSpecific) {
				return `cursor-not-allowed px-[2px] py-3 border-b-2 border-transparent text-kui-light-gray-900 
                dark:text-kui-dark-gray-900`;
			}
			return `px-[2px] py-3 border-b-2 border-transparent text-kui-light-gray-900 dark:text-kui-dark-gray-900 
            hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000`;
		}

		return '';
	};

	let contClass = $derived.by(() => {
		if (type === 'secondary') {
			return 'gap-3';
		}
		return 'gap-6 border-b border-kui-light-gray-200 dark:border-kui-dark-gray-400';
	});
</script>

{#snippet tabButton(
	isActive: boolean,
	tab: {
		title: string;
		value: string;
		icon?: Component;
		disabled?: boolean;
		tooltip?: string;
	}
)}
	<button
		disabled={disabled || tab.disabled}
		onclick={() => (selected = tab.value)}
		class="flex items-center justify-center gap-x-[6px] transition-all text-xs {tabButtonFunc(
			isActive,
			disabled,
			tab.disabled
		)} "
	>
		{#if tab.icon}
			{@const Icon = tab.icon}
			<div class="w-[16px] h-[16px] flex items-center justify-center">
				<div class="w-[16px] h-[16px]">
					<Icon />
				</div>
			</div>
		{/if}
		{tab.title}
	</button>
{/snippet}

<div class="w-full flex items-center {contClass}">
	{#if tabs}
		{#each tabs as tab}
			<div class="-mb-px">
				{#if tab.disabled}
					<Tooltip text={tab.tooltip}>
						{@render tabButton(isSelected(tab.value), tab)}
					</Tooltip>
				{:else}
					{@render tabButton(isSelected(tab.value), tab)}
				{/if}
			</div>
		{/each}
	{/if}
</div>
