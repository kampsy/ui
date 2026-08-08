<script lang="ts">
	import Check from "$lib/icons/check.svelte"
	import { randomString } from "$lib/utils/random.js"
	import { getContext } from "svelte"

	type propT = {
		defaultChecked?: boolean | undefined
		disabled?: boolean | undefined
		description?: string | undefined
		title?: string | undefined
		value: string
	}
	let { defaultChecked, disabled = undefined, description, title, value }: propT = $props()

	const groupState = getContext<{
		name: string
		type: "radio" | "checkbox"
		disabledParent: boolean
		get: () => string | Array<string>
		set: (value: string | Array<string>) => void
	}>("choicebox")

	const { name, type, disabledParent } = groupState

	// If the parent is disabled then the child is disabled
	if (disabledParent) {
		disabled = true
	}

	// If defaultChecked is set and value
	if (defaultChecked) {
		if (type === "radio") {
			groupState.set(value)
		} else if (type === "checkbox") {
			groupState.set([...groupState.get(), value])
		}
	}

	const onchange = (evt: Event) => {
		const target = evt.currentTarget as HTMLInputElement
		if (type == "radio") {
			groupState.set(target.value)
		} else if (type == "checkbox") {
			const arrStr = groupState.get() as Array<string>
			const val = target.value
			// if val is in the arrStr then remove it else add it
			if (arrStr.includes(val)) {
				groupState.set(arrStr.filter(item => item !== val))
			} else {
				groupState.set([...arrStr, val])
			}
		}
	}

	// random string for unique id
	const unique = `${randomString(4)}_${value}`

	//When the selected class
	let labelClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return ` cursor-not-allowed border-kui-light-gray-200 dark:border-kui-dark-gray-400`
		}
		if (groupState.get() === value || groupState.get().includes(value)) {
			return `cursor-pointer bg-kui-light-blue-200 dark:bg-kui-dark-blue-200 border-kui-light-blue-600  dark:border-kui-dark-blue-600 
			hover:border-kui-light-blue-700 dark:hover:border-kui-dark-blue-700`
		}
		return `cursor-pointer hover:bg-kui-light-gray-200 dark:hover:bg-kui-dark-gray-200 border-kui-light-gray-200 
		dark:border-kui-dark-gray-400 hover:border-kui-light-gray-500 dark:hover:border-kui-dark-gray-500`
	})

	// Title text
	let titleClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return `text-kui-light-gray-500 dark:text-kui-dark-gray-500`
		}
		if (groupState.get() === value || groupState.get().includes(value)) {
			return `text-kui-light-blue-900 dark:text-kui-dark-blue-900`
		}
		return `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000`
	})

	// Description text
	let descriptionClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return `text-kui-light-gray-500 dark:text-kui-dark-gray-500`
		}
		if (groupState.get() === value || groupState.get().includes(value)) {
			return `text-kui-light-blue-900 dark:text-kui-dark-blue-900`
		}
		return `text-kui-light-gray-900 dark:text-kui-dark-gray-900`
	})

	// The rounded radio cont
	let radioContClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return `border-kui-light-gray-200 dark:border-kui-dark-gray-400`
		}

		if (groupState.get() === value) {
			return `border-kui-light-blue-900  dark:border-kui-dark-blue-900 `
		}
		return `border-kui-light-gray-200 dark:border-kui-dark-gray-200 group-hover:border-kui-light-gray-500 
		dark:group-hover:border-kui-dark-gray-500 group-hover:bg-kui-light-bg dark:group-hover:bg-kui-dark-bg`
	})

	// The radio cont
	let radioClass = $derived.by(() => {
		if (groupState.get() === value) {
			return `bg-kui-light-blue-900  dark:bg-kui-dark-blue-900 `
		}
		return ``
	})

	// The rounded radio cont
	let checkboxContClass = $derived.by(() => {
		// it is desabled
		if (disabled) {
			return `border-kui-light-gray-200 dark:border-kui-dark-gray-400`
		}
		if (groupState.get().includes(value)) {
			return `border-kui-light-blue-900  dark:border-kui-dark-blue-900 bg-kui-light-blue-900  dark:bg-kui-dark-blue-900 `
		}
		return `border-kui-light-gray-200 dark:border-kui-dark-gray-200 group-hover:border-kui-light-gray-500 
		dark:group-hover:border-kui-dark-gray-500 group-hover:bg-kui-light-bg dark:group-hover:bg-kui-dark-bg`
	})
	let checkboxClass = $derived.by(() => {
		if (groupState.get().includes(value)) {
			return `text-white dark:text-black font-bold `
		}
		return `text-transparent font-bold`
	})
</script>

{#snippet radio()}
	{#if type === "radio"}
		<div
			class="flex h-4 w-4 items-center justify-center rounded-full border p-px transition-colors ease-in {radioContClass} "
		>
			<div class="flex h-4 w-4 items-center justify-center">
				<input
					{onchange}
					{type}
					checked={groupState.get() == value}
					id={unique}
					{name}
					{value}
					{disabled}
					class="hidden"
				/>
				<div class="bg-red h-2 w-2 rounded-full transition-colors ease-in {radioClass}"></div>
			</div>
		</div>
	{/if}
{/snippet}

{#snippet checkbox()}
	{#if type === "checkbox"}
		<div
			class="flex h-4 w-4 items-center justify-center rounded-sm border p-px transition-colors ease-in {checkboxContClass} "
		>
			<div class="flex h-4 w-4 items-center justify-center">
				<input
					{onchange}
					{type}
					checked={groupState.get().includes(value)}
					id={unique}
					{name}
					{value}
					{disabled}
					class="hidden"
				/>
				<div class="h-2.5 w-2.5 transition-colors ease-in {checkboxClass}">
					<Check />
				</div>
			</div>
		</div>
	{/if}
{/snippet}

<label
	for={unique}
	class="group flex w-full rounded-md border transition-colors ease-in {labelClass} "
>
	<div class="flex w-full items-center justify-between p-3">
		<div>
			{#if title}
				<p
					class="ransition-colors text-sm ease-in first-letter:capitalize {titleClass}  leading-6 font-medium"
				>
					{title}
				</p>
			{/if}

			{#if description}
				<p
					class="ransition-colors text-sm ease-in first-letter:capitalize {descriptionClass} leading-6 font-normal"
				>
					{description}
				</p>
			{/if}
		</div>
		{@render radio()}
		{@render checkbox()}
	</div>
</label>
