export const snippetDefault = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet text="npm init next-app" class="w-full lg:w-[300px]"/>`;

export const snippetInverted = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet type="inverted" text="npm init next-app" class="w-full lg:w-[300px]"/>`;

export const snippetMultiline = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet text={['cd project', 'now']} class="w-full"/>`;

export const snippetNoPrompt = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet prompt={false} text="npm init next-app" class="w-full lg:w-[300px]"/>`;

export const snippetCallback = `
import { CodeSnippet } from 'kampsy-ui';

<CodeSnippet
	onCopy={() => alert('You copied the text!')}
	text="npm init next-app"
	class="w-full lg:w-[300px]"
/>`;

export const snippetVariants = `
import { CodeSnippet } from 'kampsy-ui';

<div class="w-full flex flex-col gap-3 flex-wrap">
	<CodeSnippet type="success" text="npm init next-app" class="w-full lg:w-[300px]" />
	<CodeSnippet type="error" text="npm init next-app" class="w-full lg:w-[300px]" />
	<CodeSnippet type="warning" text="npm init next-app" class="w-full lg:w-[300px]" />
</div>`;
