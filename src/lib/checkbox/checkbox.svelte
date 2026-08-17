<script lang="ts">
	import Check from "$lib/icons/check.svelte"
	import Minus from "$lib/icons/minus.svelte"
	import {
		resolveBoxClass,
		resolveIconClass,
		resolveLabelClass,
		resolveRootClass,
	} from "./styles.js"
	import type { CheckboxProps } from "./types.js"

	let {
		id: idProp,
		class: klass,
		checked = $bindable(false),
		indeterminate = false,
		disabled = false,
		children,
		onclick,
		...rest
	}: CheckboxProps = $props()

	const fallbackId = $props.id()
	let id = $derived(idProp ?? fallbackId)

	const handleClick = (evt: MouseEvent & { currentTarget: HTMLInputElement }) => {
		if (indeterminate) {
			evt.preventDefault()
		}
		onclick?.(evt)
	}

	let boxClass = $derived(resolveBoxClass({ checked, indeterminate, disabled }))
	let iconClass = $derived(resolveIconClass({ checked, indeterminate, disabled }))
	let labelClass = $derived(resolveLabelClass({ disabled }))
	let rootClass = $derived(resolveRootClass({ disabled }))
</script>

<label for={id} class={[rootClass, klass]}>
	<span class="relative flex items-center justify-center">
		<input
			{...rest}
			type="checkbox"
			{id}
			bind:checked
			{indeterminate}
			{disabled}
			class="peer sr-only"
			onclick={handleClick}
		/>
		<span class={boxClass} aria-hidden="true">
			<span class={iconClass}>
				{#if indeterminate}
					<Minus />
				{:else if checked}
					<Check />
				{/if}
			</span>
		</span>
	</span>

	{#if children}
		<span class={labelClass}>
			{@render children()}
		</span>
	{/if}
</label>
