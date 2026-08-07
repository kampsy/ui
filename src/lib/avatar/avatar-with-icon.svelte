<script lang="ts">
	import { avatarIconBase, sizeStyle } from "./styles.js"
	import type { AvatarWithIconProps } from "./types.js"

	let {
		size = 32,
		icon,
		iconBackground = false,
		class: klass,
		...rest
	}: AvatarWithIconProps = $props()

	let iconSize = $derived(Math.round(size / 2.1))
</script>

<span
	{...rest}
	class={[avatarIconBase, iconBackground ? "" : "bg-transparent", klass]}
	style={sizeStyle(size)}
>
	<span
		class="flex items-center justify-center"
		style="width: {iconSize}px; height: {iconSize}px;"
	>
		{@render icon()}
	</span>
</span>
