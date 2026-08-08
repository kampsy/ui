<script lang="ts">
	import hljs from "highlight.js"
	import "highlight.js/styles/atom-one-light.css"

	import { slide } from "svelte/transition"
	import ChevronRightSmall from "$lib/icons/chevron-right-small.svelte"

	let { code }: { code: string } = $props()

	let isActive = $state(false)

	const toggleFunc = () => {
		isActive = !isActive
	}

	let rotate180 = $derived.by(() => {
		if (isActive) {
			return "rotate-90"
		}
		return ""
	})

	let title = $derived.by(() => {
		if (isActive) {
			return "Hide code"
		}
		return "Show code"
	})

	let border = $derived.by(() => {
		if (isActive) {
			return "border-y"
		}
		return "border-t"
	})

	const highlightedCode = hljs.highlight(code, { language: "tsx" }).value
</script>

<button
	onclick={toggleFunc}
	class="text-kui-light-gray-900 hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:hover:text-kui-dark-gray-1000 bg-kui-light-bg-secondary
	 dark:bg-kui-dark-bg-secondary h-12 w-full
	  px-4 {border} border-kui-light-gray-200 dark:border-kui-dark-gray-400
	   cursor-pointer"
>
	<div class="flex items-center gap-x-2">
		<div class="h-4 w-4 {rotate180} transform-gpu duration-200">
			<ChevronRightSmall />
		</div>
		<span class="text-sm leading-5 font-normal first-letter:capitalize"> {title} </span>
	</div>
</button>
{#if isActive}
	<div
		class="ui-scrollbar text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 scroll-smoth h-auto w-full overflow-x-auto px-6 text-[13px]"
	>
		<div transition:slide>
			<pre class="language-tsx">
            <code class="language-tsx">
                <!-- oxlint-disable-next-line svelte/no-at-html-tags -- safe: highlight.js escapes the code before adding highlight spans -->
                {@html highlightedCode}
            </code>
        </pre>
		</div>
	</div>
{/if}
