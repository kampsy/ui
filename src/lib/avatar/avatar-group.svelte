<script lang="ts">
	import Avatar from "./avatar.svelte"
	import { overflowBase, sizeStyle, fontSizeStyle } from "./styles.js"
	import { resolveOverlapPx } from "./utils.js"
	import type { AvatarGroupProps } from "./types.js"

	let {
		members,
		size = 32,
		limit = 0,
		reverse = false,
		overlap = "auto",
		class: klass,
	}: AvatarGroupProps = $props()

	let visible = $derived(limit > 0 ? members.slice(0, limit) : members)
	let overflow = $derived(limit > 0 && members.length > limit ? members.length - limit : 0)
	let overlapPx = $derived(resolveOverlapPx(size, overlap))
	let spacing = $derived(`margin-left: -${overlapPx}px;`)
</script>

<div class="flex {klass}" aria-label="{members.length} members">
	{#each visible as member, index (member.username ?? member.src ?? member.letter ?? index)}
		<div
			class="relative"
			style={index > 0 ? spacing : undefined}
			style:z-index={reverse ? index + 1 : visible.length - index}
		>
			<Avatar
				{size}
				src={member.src}
				username={member.username}
				letter={member.letter}
				title={member.title}
				class="ring-kui-light-bg dark:ring-kui-dark-bg ring-1"
			/>
		</div>
	{/each}

	{#if overflow > 0}
		<div
			class="relative"
			style={visible.length > 0 ? spacing : undefined}
			style:z-index={reverse ? visible.length + 1 : 0}
		>
			<div
				class={overflowBase}
				style="{sizeStyle(size)}{fontSizeStyle(size)}"
				aria-label="{overflow} more members"
			>
				+{overflow}
			</div>
		</div>
	{/if}
</div>
