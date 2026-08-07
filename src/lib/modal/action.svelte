<script lang="ts">
	import Button from "$lib/button/button.svelte"
	import type { ButtonProps } from "$lib/button/types.js"

	let { children, ...rest }: ButtonProps = $props()
</script>

{#if children}
	<Button {...rest}>
		{@render children()}
	</Button>
{/if}
