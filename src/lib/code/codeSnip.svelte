<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/atom-one-light.css';

	type propsT = {
		code: string;
		lang?: string;
		language?: string;
	};

	let { code, lang = 'tsx', language = 'language-tsx' }: propsT = $props();

	const highlightedCode = hljs.highlight(code, { language: lang }).value;
</script>

<div class="ui-scrollbar w-full h-auto px-6 text-[13px] scroll-smoth overflow-x-auto">
	<pre class={language}>
        <code class={language}>
            {@html highlightedCode}
        </code>
    </pre>
</div>
