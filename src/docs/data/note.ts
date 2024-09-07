export const noteDefault = `
import { Note } from 'kampsy-ui';

<div class="w-full flex gap-8">
    <Note size="small">A small note</Note>
    <Note>A default note</Note>
    <Note size="large">A large note</Note>
</div>`;

export const noteAction = `
import { Note, Button } from 'kampsy-ui';

{#snippet actionSnip()}
	<Button size="small">Upgrade</Button>
{/snippet}

<div class="w-full space-y-8">
    <Note action={actionSnip}>This note details some information.</Note>
    <Note action={actionSnip}>
    	This note details a large amount information that could potentially wrap into two or
    	more lines, forcing the height of the Note to be larger.
    </Note>
</div>`;

export const noteSuccess = `
import { Note } from 'kampsy-ui';

<div class="w-full space-y-8">
    <Note type="success">This note details some success information.</Note>
    <Note type="success" action={actionSnip}>
    	This note details some success information.
    </Note>
    <Note type="success" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
    <Note fill type="success">This note details some success information.</Note>
    <Note fill type="success" action={actionSnip}>
    	This note details some success information.
    </Note>
    <Note fill type="success" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
</div>`;

export const noteError = `
import { Note } from 'kampsy-ui';

<div class="w-full space-y-8">
    <Note type="error">This note details some error information.</Note>
    <Note type="error" action={actionSnip}>
    	This note details some error information.
    </Note>
    <Note type="error" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
    <Note fill type="error">This note details some error information.</Note>
    <Note fill type="error" action={actionSnip}>
    	This note details some error information.
    </Note>
    <Note fill type="error" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
</div>`;

export const noteWarning = `
import { Note } from 'kampsy-ui';

<div class="w-full space-y-8">
    <Note type="warning">This note details some warning information.</Note>
    <Note type="warning" action={actionSnip}>
    	This note details some warning information.
    </Note>
    <Note type="warning" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
    <Note fill type="warning">This note details some warning information.</Note>
    <Note fill type="warning" action={actionSnip}>
    	This note details some warning information.
    </Note>
    <Note fill type="warning" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
</div>`;

export const noteSecondary = `
import { Note } from 'kampsy-ui';

<div class="w-full space-y-8">
    <Note type="secondary">This note details some secondary information.</Note>
    <Note type="secondary" action={actionSnip}>
    	This note details some secondary information.
    </Note>
    <Note type="secondary" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
    <Note fill type="secondary">This note details some secondary information.</Note>
    <Note fill type="secondary" action={actionSnip}>
    	This note details some secondary information.
    </Note>
    <Note fill type="secondary" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
</div>`;

export const noteViolet = `
import { Note } from 'kampsy-ui';

<div class="w-full space-y-8">
    <Note type="violet">This note details some violet information.</Note>
    <Note type="violet" action={actionSnip}>
    	This note details some violet information.
    </Note>
    <Note type="violet" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
    <Note fill type="violet">This note details some violet information.</Note>
    <Note fill type="violet" action={actionSnip}>
    	This note details some violet information.
    </Note>
    <Note fill type="violet" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
</div>`;

export const noteCyan = `
import { Note } from 'kampsy-ui';

<div class="w-full space-y-8">
    <Note type="cyan">This note details some cyan information.</Note>
    <Note type="cyan" action={actionSnip}>
    	This note details some cyan information.
    </Note>
    <Note type="cyan" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
    <Note fill type="cyan">This note details some cyan information.</Note>
    <Note fill type="cyan" action={actionSnip}>
    	This note details some cyan information.
    </Note>
    <Note fill type="cyan" action={actionSnip}>
		This note details some success information. Check
		<a href="/#" class="hover:underline ">the documentation</a> to learn more.
	</Note>
</div>`;
