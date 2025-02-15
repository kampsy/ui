<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/atom-one-light.css';

	import { slide } from 'svelte/transition';
	import ChevronRightSmall from '$lib/icons/chevron-right-small.svelte';

    let {code}:{code:string}=$props()

	let isActive = $state(false);

	const toggleFunc = () => {
		isActive = !isActive;
	};

	let rotate180 = $derived.by(() => {
		if (isActive) {
			return 'rotate-90';
		}
		return '';
	});

	let title = $derived.by(() => {
		if (isActive) {
			return 'Hide code';
		}
		return 'Show code';
	});

	let border = $derived.by(() => {
		if (isActive) {
			return 'border-y';
		}
		return 'border-t';
	});

	const highlightedCode = hljs.highlight(code, { language: 'tsx' }).value;
</script>

<button
	onclick={toggleFunc}
	class="w-full h-[48px] px-4 text-kui-light-gray-900 hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:hover:text-kui-dark-gray-1000 bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary {border} border-kui-light-gray-200 dark:border-kui-dark-gray-400"
>
	<div class="flex items-center gap-x-2">
		<div class="w-[16px] h-[16px]  {rotate180} transform-gpu duration-200">
            <ChevronRightSmall/>
		</div>
		<span class="text-sm font-normal leading-[20px] first-letter:capitalize"> {title} </span>
	</div>
</button>
{#if isActive}
	<div class="ui-scrollbar w-full h-auto px-6 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[13px] scroll-smoth overflow-x-auto">
		<div transition:slide>
			<pre class="language-tsx">
            <code class="language-tsx">
                {@html highlightedCode}
            </code>
        </pre>
		</div>
	</div>
{/if}
