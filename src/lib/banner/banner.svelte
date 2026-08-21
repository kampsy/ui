<script lang="ts">
	import ChevronRightSmall from "$lib/icons/chevron-right-small.svelte"
	import {
		desktopContainerClass,
		desktopContentClass,
		desktopIconClass,
		desktopLinkClass,
		desktopTextClass,
		mobileContentClass,
		mobileIconClass,
		mobileLinkClass,
	} from "./styles.js"
	import type { BannerProps } from "./types.js"

	let { class: klass, button, children, ...rest }: BannerProps = $props()
</script>

{#snippet mobileAndTablet()}
	<a href={button.href} class={mobileLinkClass}>
		<span class="{mobileContentClass} {klass}">
			{@render children?.()}
		</span>
		<span class={mobileIconClass}>
			<ChevronRightSmall />
		</span>
	</a>
{/snippet}

{#snippet desktop()}
	<!-- This is for desktop only -->
	<div class={desktopContainerClass}>
		<p class={desktopTextClass}>
			{@render children?.()}
		</p>
		<a href={button.href} class={desktopLinkClass}>
			<span class={desktopContentClass}> {button.content} </span>
			<span class={desktopIconClass}>
				<ChevronRightSmall />
			</span>
		</a>
	</div>
{/snippet}

{@render mobileAndTablet()}
{@render desktop()}
