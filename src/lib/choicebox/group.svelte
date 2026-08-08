<script lang="ts">
	import { randomString } from "$lib/utils/random.js"
	import { setContext, type Snippet } from "svelte"
	import type { HTMLFieldsetAttributes } from "svelte/elements"
	import { createGroupState } from "./group.svelte.js"
	import { groupRootBase, listBase, resolveGroupLabelClass } from "./styles.js"

	interface Props extends Omit<HTMLFieldsetAttributes, "onchange"> {
		type?: "radio" | "checkbox" | undefined
		label?: string | undefined
		value?: string | Array<string> | undefined
		disabled?: boolean | undefined
		showLabel?: boolean | undefined
		listClassName?: string | undefined
		onchange?: (value: string | Array<string>) => void
		children?: Snippet | undefined
	}

	let {
		type = "radio",
		label = undefined,
		value = $bindable(""),
		disabled = false,
		showLabel = true,
		listClassName = undefined,
		onchange = undefined,
		children = undefined,
		class: klass,
		...rest
	}: Props = $props()

	const groupState = createGroupState({
		selected: "",
		name: randomString(8),
		get type() {
			return type
		},
		get disabledParent() {
			return disabled
		},
		onchange: value => onchange?.(value),
	})

	setContext("choicebox", groupState)

	let legendClass = $derived.by(() => {
		return [resolveGroupLabelClass({ disabled }), !showLabel && "sr-only"]
	})

	$effect(() => {
		value = groupState.get()
	})
</script>

<fieldset class={[groupRootBase, klass]} {...rest}>
	{#if label}
		<legend class={legendClass}>
			{label}
		</legend>
	{/if}
	<div class={[listBase, listClassName]}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</fieldset>
