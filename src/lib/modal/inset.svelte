<script lang="ts">
	import type { ModalSectionProps } from "./types.js"

	let { class: klass, children }: ModalSectionProps = $props()
</script>

{#if children}
	<div
		class={[
			"border-kui-light-gray-400 dark:border-kui-dark-gray-400 bg-kui-light-gray-alpha-100 dark:bg-kui-dark-gray-alpha-100 -mx-6 border-y px-6 py-5",
			klass,
		]}
	>
		{@render children()}
	</div>
{/if}
