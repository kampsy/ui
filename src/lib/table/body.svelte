<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		striped?: boolean | undefined;
		interactive?: boolean | undefined;
		children: Snippet | undefined;
	};
	let { striped = undefined, interactive = undefined, children = undefined }: Props = $props();

	let stripedClass = $derived.by(() => {
		if (striped) {
			return `[&_tr:where(:nth-child(odd))]:bg-kui-light-bg-secondary dark:[&_tr:where(:nth-child(odd))]:bg-kui-dark-bg-secondary`;
		}
		return '';
	});

	let interactiveClass = $derived.by(() => {
		if (interactive) {
			return `[&_tr:hover]:bg-kui-light-gray-200 dark:[&_tr:hover]:bg-kui-dark-gray-200`;
		}
		return '';
	});

	let bodyClass = $derived.by(() => {
		return `${stripedClass} ${interactiveClass}`;
	});

</script>

<tbody aria-hidden="true" class="table-row h-3"></tbody>
<tbody class=" {bodyClass} [&_td:first-child]:rounded-l [&_td:last-child]:rounded-r ">
	{#if children}
		{@render children()}
	{/if}
</tbody>
