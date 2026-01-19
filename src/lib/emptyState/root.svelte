<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Component, Snippet } from 'svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title: string;
		description: string;
		icon: Component | undefined;
		children?: Snippet | undefined;
	}

	let { title, description, icon, children, ...rest }: Props = $props();
</script>

<div
	{...rest}
	class="w-full px-17.5 py-12 border border-kui-light-gray-400 dark:border-kui-dark-gray-200 rounded-lg"
>
	<div class="grid justify-items-center gap-6">
		<!-- icon container -->
		{#if icon}
			{@const Icon = icon}
			<div class="w-full flex justify-center">
				<div
					class="flex items-center justify-center w-15.5 h-15 border border-kui-light-gray-400 dark:border-kui-dark-gray-200 rounded-lg"
				>
					<div class="w-8 h-8">
						<Icon />
					</div>
				</div>
			</div>
		{/if}
		<!-- text cont -->
		<div class="flex flex-col gap-2 mx-auto max-w-85">
			<p
				class="text-center text-base capitalize text-kui-light-dark-gray-1000 dark:text-kui-dark-gray-1000"
			>
				<span>{title}</span>
			</p>
			<p class="text-center text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900">
				<span class="inline-block text-balance">{description}</span>
			</p>
		</div>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
