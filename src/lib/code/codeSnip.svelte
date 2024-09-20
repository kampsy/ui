<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/atom-one-light.css';


	let { code }: { code: string } = $props();

	const highlightedCode = hljs.highlight(code, { language: 'tsx' }).value;
</script>

<div class="ui-scrollbar w-full h-auto px-6 text-[13px] scroll-smoth overflow-x-auto">
	<pre class="language-tsx">
        <code class="language-tsx">
            {@html highlightedCode}
        </code>
    </pre>
</div>
