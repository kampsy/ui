<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		class?: string;
		size?: number;
		limit?: number;
		members?: Array<{
			name: string;
			imageLink: string;
		}>;
		children?: Snippet;
	};
	let { class: klass = '', size = 32, members = undefined, limit = 0, children }: propsT = $props();

	let widthHeight = $derived.by(() => {
		return ` width: ${size}px; height: ${size}px;`;
	});
</script>

<div class="flex -space-x-4 rtl:space-x-reverse">
	{#if members}
		{#snippet noLimit()}
			{#each members as member}
				<div
					style={widthHeight}
					class="rounded-full overflow-hidden border border-kui-light-gray-200 dark:border-kui-dark-gray-200 {klass}"
				>
					<div style={widthHeight}>
						<img
							src={member.imageLink}
							alt="{member.name}'s avatar"
							loading="eager"
							width={size}
							height={size}
							decoding="async"
						/>
					</div>
				</div>
			{/each}
		{/snippet}

		{#snippet withLimit()}
			{#each members as member, index}
				{#if index < limit}
					<div
						style={widthHeight}
						class=" rounded-full overflow-hidden border border-kui-light-gray-200 dark:border-kui-dark-gray-200 {klass}"
					>
						<div style={widthHeight}>
							<img
								src={member.imageLink}
								alt="{member.name}'s avatar"
								loading="eager"
								width={size}
								height={size}
								decoding="async"
							/>
						</div>
					</div>
				{/if}
			{/each}
		{/snippet}

		{#if limit > 0}
			{@render withLimit()}
		{:else}
			{@render noLimit()}
		{/if}

		{#if limit && members.length > limit}
			<div
				style={widthHeight}
				class="flex items-center justify-center rounded-full overflow-hidden text-[10px] font-semibold text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
			>
				+{members.length - limit}
			</div>
		{/if}
	{/if}
</div>
