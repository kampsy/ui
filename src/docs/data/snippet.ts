export const snippetDefault = `
<script lang="ts">
	import { CodeSnippet } from 'kampsy-ui';
</script>

<CodeSnippet text="npm init next-app" class="w-full lg:w-[300px]"/>`;

export const snippetInverted = `
<script lang="ts">
	import { CodeSnippet } from 'kampsy-ui';
</script>

<CodeSnippet type="inverted" text="npm init next-app" class="w-full lg:w-[300px]"/>`;

export const snippetMultiline = `
<script lang="ts">
	import { CodeSnippet } from 'kampsy-ui';
</script>

<CodeSnippet text={['cd project', 'now']} class="w-full"/>`;

export const snippetNoPrompt = `
<script lang="ts">
	import { CodeSnippet } from 'kampsy-ui';
</script>

<CodeSnippet prompt={false} text="npm init next-app" class="w-full lg:w-[300px]"/>`;

export const snippetCallback = `
<script lang="ts">
	import { CodeSnippet } from 'kampsy-ui';
</script>

<CodeSnippet
	onCopy={() => alert('You copied the text!')}
	text="npm init next-app"
	class="w-full lg:w-[300px]"
/>`;

export const snippetVariants = `
<script lang="ts">
	import { CodeSnippet } from 'kampsy-ui';
</script>

<div class="w-full flex flex-col gap-3 flex-wrap">
	<CodeSnippet type="success" text="npm init next-app" class="w-full lg:w-[300px]" />
	<CodeSnippet type="error" text="npm init next-app" class="w-full lg:w-[300px]" />
	<CodeSnippet type="warning" text="npm init next-app" class="w-full lg:w-[300px]" />
</div>`;
