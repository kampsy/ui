export const snippetDefault = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet text="npm init next-app" class="w-[300px]"/>`;

export const snippetInverted = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet type="inverted" text="npm init next-app" class="w-[300px]"/>`;

export const snippetMultiline = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet text={['cd project', 'now']} class="w-full"/>`;

export const snippetCallback = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet
	onCopy={() => alert('You copied the text!')}
	text="npm init next-app"
	class="w-[300px]"
/>`;

export const snippetVariants = `
import { CodeSnippet } from 'kampsy-ui';

<div class="flex flex-col gap-3 flex-wrap">
	<CodeSnippet type="success" text="npm init next-app" class="w-[300px]" />
	<CodeSnippet type="error" text="npm init next-app" class="w-[300px]" />
	<CodeSnippet type="warning" text="npm init next-app" class="w-[300px]" />
</div>`;
