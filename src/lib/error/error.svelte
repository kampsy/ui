<script lang="ts">
	import Error from "$lib/icons/error.svelte"
	import LinkExternal from "$lib/icons/link-external.svelte"
	import type { Snippet } from "svelte"

	interface Props {
		label?: string
		size?: "sm" | "md" | "lg"
		error?: withErrorProp
		children?: Snippet | undefined
	}

	type withErrorProp = {
		message: string
		action: string
		link: string
	}

	let { label, size = "md", error = undefined, children }: Props = $props()

	const sizeObj = {
		sm: "text-[13px] leading-5",
		md: "text-[14px] leading-5",
		lg: "text-[16px] leading-6",
	}

	let sizeClass = $derived.by(() => {
		return sizeObj[size]
	})
</script>

{#snippet childrenLabelSizeSnip()}
	<div class="space-x-1 {sizeClass}">
		{#if label}
			<span class="text-kui-light-red-900 dark:text-kui-dark-red-900 font-medium">
				{label}:
			</span>
		{/if}

		{#if children}
			<span class="text-kui-light-red-900 dark:text-kui-dark-red-900 font-normal">
				{@render children()}
			</span>
		{/if}
	</div>
{/snippet}

{#snippet withErrorPropSnip()}
	<div
		class="text-kui-light-red-900 dark:text-kui-dark-red-900 flex items-center gap-1 text-[14px]"
	>
		{error?.message || ""}
		<div
			class=" border-kui-light-red-900 dark:border-kui-dark-red-900 hover:text-kui-light-red-600 dark:hover:text-kui-dark-red-800 hover:border-kui-light-red-600 dark:hover:border-kui-dark-red-800 border-b leading-5 font-medium capitalize"
		>
			<a href={error?.link || ""}>
				<div class="flex items-center gap-1">
					{error?.action || ""}
					<div class="h-3.5 w-3.5">
						<LinkExternal />
					</div>
				</div>
			</a>
		</div>
	</div>
{/snippet}

{#snippet errorSnip()}
	{#if error}
		{@render withErrorPropSnip()}
	{:else}
		{@render childrenLabelSizeSnip()}
	{/if}
{/snippet}

<div class="flex items-center gap-2">
	<div class="text-kui-light-red-900 dark:text-kui-dark-red-900 h-4 w-4">
		<Error />
	</div>
	<div>
		{@render errorSnip()}
	</div>
</div>
