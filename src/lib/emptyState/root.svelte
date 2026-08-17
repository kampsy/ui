<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements"
	import type { Component, Snippet } from "svelte"

	interface Props extends HTMLAttributes<HTMLDivElement> {
		title: string
		description: string
		icon: Component | undefined
		children?: Snippet | undefined
	}

	let { title, description, icon, children, ...rest }: Props = $props()
</script>

<div
	{...rest}
	class="border-kui-light-gray-400 dark:border-kui-dark-gray-200 w-full rounded-lg border px-17.5 py-12"
>
	<div class="grid justify-items-center gap-6">
		<!-- icon container -->
		{#if icon}
			{@const Icon = icon}
			<div class="flex w-full justify-center">
				<div
					class="border-kui-light-gray-400 dark:border-kui-dark-gray-200 flex h-15 w-15.5 items-center justify-center rounded-lg border"
				>
					<div class="h-8 w-8">
						<Icon />
					</div>
				</div>
			</div>
		{/if}
		<!-- text cont -->
		<div class="mx-auto flex max-w-85 flex-col gap-2">
			<p
				class="text-kui-light-dark-gray-1000 dark:text-kui-dark-gray-1000 text-center text-base capitalize"
			>
				<span>{title}</span>
			</p>
			<p class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-center text-sm">
				<span class="inline-block text-balance">{description}</span>
			</p>
		</div>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
