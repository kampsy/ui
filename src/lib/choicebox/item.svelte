<script lang="ts">
	import Check from "$lib/icons/check.svelte"
	import { getContext, type Snippet } from "svelte"
	import type { HTMLLabelAttributes } from "svelte/elements"
	import {
		resolveCheckboxCheckClass,
		resolveCheckboxContClass,
		resolveDescriptionClass,
		resolveItemLabelClass,
		resolveRadioContClass,
		resolveRadioDotClass,
		resolveTitleClass,
	} from "./styles.js"

	interface Props extends HTMLLabelAttributes {
		defaultChecked?: boolean | undefined
		disabled?: boolean | undefined
		description?: string | undefined
		title?: string | undefined
		value: string
		children?: Snippet | undefined
	}

	let {
		defaultChecked = false,
		disabled = false,
		description = undefined,
		title = undefined,
		value,
		children = undefined,
		class: klass,
		...rest
	}: Props = $props()

	const groupState = getContext<{
		name: string
		type: "radio" | "checkbox"
		disabledParent: boolean
		get: () => string | Array<string>
		set: (value: string | Array<string>) => void
	}>("choicebox")

	const unique = $props.id()

	let isDisabled = $derived(disabled || groupState.disabledParent)
	let isSelected = $derived.by(() => {
		const current = groupState.get()
		if (groupState.type === "radio") return current === value
		return Array.isArray(current) && current.includes(value)
	})

	let defaultApplied = false
	$effect.pre(() => {
		if (defaultApplied || !defaultChecked) return
		defaultApplied = true
		if (groupState.type === "radio") {
			groupState.set(value)
		} else if (groupState.type === "checkbox") {
			groupState.set([...groupState.get(), value])
		}
	})

	function handleChange(evt: Event) {
		const target = evt.currentTarget as HTMLInputElement
		if (groupState.type === "radio") {
			groupState.set(target.value)
		} else if (groupState.type === "checkbox") {
			const current = groupState.get() as Array<string>
			const val = target.value
			if (current.includes(val)) {
				groupState.set(current.filter(item => item !== val))
			} else {
				groupState.set([...current, val])
			}
		}
	}

	let labelClass = $derived(
		resolveItemLabelClass({ disabled: isDisabled, selected: isSelected }),
	)
	let titleClass = $derived(resolveTitleClass({ disabled: isDisabled, selected: isSelected }))
	let descriptionClass = $derived(
		resolveDescriptionClass({ disabled: isDisabled, selected: isSelected }),
	)
	let radioContClass = $derived(
		resolveRadioContClass({ disabled: isDisabled, selected: isSelected }),
	)
	let radioDotClass = $derived(resolveRadioDotClass({ selected: isSelected }))
	let checkboxContClass = $derived(
		resolveCheckboxContClass({ disabled: isDisabled, selected: isSelected }),
	)
	let checkboxCheckClass = $derived(resolveCheckboxCheckClass({ selected: isSelected }))
</script>

{#snippet radio()}
	{#if groupState.type === "radio"}
		<div class={radioContClass}>
			<div class="flex h-4 w-4 items-center justify-center">
				<input
					onchange={handleChange}
					type="radio"
					checked={isSelected}
					id={unique}
					name={groupState.name}
					{value}
					disabled={isDisabled}
					class="peer sr-only"
				/>
				<div class={radioDotClass}></div>
			</div>
		</div>
	{/if}
{/snippet}

{#snippet checkbox()}
	{#if groupState.type === "checkbox"}
		<div class={checkboxContClass}>
			<div class="flex h-4 w-4 items-center justify-center">
				<input
					onchange={handleChange}
					type="checkbox"
					checked={isSelected}
					id={unique}
					name={groupState.name}
					{value}
					disabled={isDisabled}
					class="peer sr-only"
				/>
				<div class={checkboxCheckClass}>
					<Check />
				</div>
			</div>
		</div>
	{/if}
{/snippet}

<label for={unique} class={[labelClass, klass]} {...rest}>
	<div class="flex w-full items-center justify-between p-3">
		<div class="w-full">
			{#if title}
				<p class={titleClass}>
					{title}
				</p>
			{/if}

			{#if description}
				<p class={descriptionClass}>
					{description}
				</p>
			{/if}

			{#if children && isSelected}
				<div class="mt-2 w-full">
					{@render children()}
				</div>
			{/if}
		</div>
		{@render radio()}
		{@render checkbox()}
	</div>
</label>
