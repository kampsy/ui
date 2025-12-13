<script lang="ts">
	import Copy from '$lib/icons/copy.svelte';
	import Check from '$lib/icons/check.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { scale } from 'svelte/transition';
	import { onDestroy } from 'svelte';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		class?: string;
		type?: 'default' | 'success' | 'error' | 'warning' | 'inverted';
		text?: string | Array<string>;
		prompt?: boolean;
		onCopy?: () => void;
	}

	let {
		class: klass = '',
		type = 'default',
		text = '',
		prompt = true,
		onCopy = undefined
	}: Props = $props();

	const snippetList = $derived.by(() => {
		if (typeof text == 'string') {
			return [text];
		} else if (Array.isArray(text)) {
			return [...text];
		}
		return [];
	});

	let isCopied = $state(false);
	let timeoutId: ReturnType<typeof setTimeout> | undefined;

	const copyToClipboard = async () => {
		if (snippetList.length === 0) return;

		if (!navigator.clipboard) {
			console.error('Clipboard API not supported');
			return;
		}

		const clipText = snippetList.join('\n');
		try {
			await navigator.clipboard.writeText(clipText);
			isCopied = true;
			if (timeoutId) clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				isCopied = false;
				timeoutId = undefined;
			}, 1500);
		} catch (error) {
			console.error('Failed to copy text:', error);
			// TODO: Show user-visible error feedback (e.g., error toast/message)
		}
	};

	onDestroy(() => {
		if (timeoutId) clearTimeout(timeoutId);
	});

	function onclick() {
		if (onCopy) onCopy();
		copyToClipboard();
	}

	const showPrompt = $derived.by(() => {
		if (prompt) {
			return "before:content-['$'] before:px-2";
		}
		return '';
	});

	const typeBorderObj = {
		default: `border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400`,
		success: `border-kui-light-blue-400 dark:border-kui-dark-blue-400`,
		error: `border-kui-light-red-400 dark:border-kui-dark-red-400`,
		warning: `border-kui-light-amber-400 dark:border-kui-dark-amber-400`,
		inverted: `border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400`
	};
	let typeBorderClass = $derived.by(() => {
		return typeBorderObj[type];
	});

	const typeFillObj = {
		default: `bg-kui-light-bg dark:bg-kui-dark-bg`,
		success: `bg-kui-light-blue-100 dark:bg-kui-dark-blue-100`,
		error: `bg-kui-light-red-100 dark:bg-kui-dark-red-100`,
		warning: `bg-kui-light-amber-100 dark:bg-kui-dark-amber-100`,
		inverted: `bg-kui-light-gray-1000 dark:bg-kui-dark-gray-1000`
	};
	let typeFillClass = $derived.by(() => {
		return typeFillObj[type];
	});

	const typeTextObj = {
		default: `text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 selection:bg-kui-light-gray-1000
		selection:text-kui-light-gray-100 dark:selection:bg-kui-dark-gray-1000
		dark:selection:text-kui-dark-gray-100`,
		success: `text-kui-light-blue-900 dark:text-kui-dark-blue-900 selection:bg-kui-light-blue-1000
		selection:text-kui-light-blue-100 dark:selection:bg-kui-dark-blue-1000
		dark:selection:text-kui-dark-blue-100`,
		error: `text-kui-light-red-900 dark:text-kui-dark-red-900 selection:bg-kui-light-red-1000
		selection:text-kui-light-red-100 dark:selection:bg-kui-dark-red-1000 dark:selection:text-kui-dark-red-100
		dark:selection:text-kui-dark-red-100`,
		warning: `text-kui-light-amber-900 dark:text-kui-dark-amber-900 selection:bg-kui-light-amber-1000
		selection:text-kui-light-amber-100 dark:selection:bg-kui-dark-amber-1000
		dark:selection:text-kui-dark-amber-100`,
		inverted: `text-kui-light-gray-100 dark:text-kui-dark-gray-100 selection:bg-kui-light-gray-100
		selection:text-kui-light-gray-1000 dark:selection:bg-kui-dark-gray-100
		dark:selection:text-kui-dark-gray-1000`
	};
	const typeTextClass = $derived.by(() => {
		return typeTextObj[type];
	});

	const snippetClass = $derived.by(() => {
		return `${typeBorderClass} ${typeFillClass} ${typeTextClass}`;
	});
</script>

{#snippet preSnippet()}
	{#each snippetList as sl}
		<pre class="{showPrompt} text-sm">{sl}</pre>
	{/each}
{/snippet}

<div class="max-w-full relative rounded-md px-[12px] py-[10px] border {snippetClass} {klass}">
	{@render preSnippet()}
	<button
		{onclick}
		aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
		class="absolute top-2/4 right-1 w-[32px] h-[32px] rounded-md flex items-center justify-center translate-y-[-50%]
		hover:border hover:border-kui-light-gray-400 hover:dark:border-kui-dark-gray-400"
	>
		<span class="flex items-center justify-center">
			<div class="relative w-4 h-4">
				{#if isCopied}
					<div
						in:scale|local={{ duration: 200 }}
						out:scale|local={{ duration: 300 }}
						class="absolute w-4 h-4"
					>
						<Check />
					</div>
				{/if}
				{#if !isCopied}
					<div
						in:scale|local={{ duration: 200 }}
						out:scale|local={{ duration: 300 }}
						class="absolute w-4 h-4"
					>
						<Copy />
					</div>
				{/if}
			</div>
		</span>
	</button>
</div>
