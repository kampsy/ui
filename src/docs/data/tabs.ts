export const tabsDefault = `
import { Tabs } from 'kampsy-ui';

let selected = $state('apple');

<Tabs
	bind:selected
	tabs={[
		{ title: 'Apple', value: 'apple' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Mango', value: 'mango' }
	]}
/>`;


export const tabsDisabled = `
import { Tabs } from 'kampsy-ui';

let selected = $state('apple');

<Tabs
    disabled
	bind:selected
	tabs={[
		{ title: 'Apple', value: 'apple' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Mango', value: 'mango' }
	]}
/>`;

export const tabsDisabledSpecific = `
import { Tabs } from 'kampsy-ui';

let selected = $state('apple');

<Tabs
	bind:selected
	tabs={[
		{ title: 'Apple', value: 'apple' },
		{ title: 'Orange', value: 'orange' },
		{ title: 'Mango', value: 'mango' ,disabled: true, tooltip: 'Mangos are not allowed'}
	]}
/>`;

export const tabsWithIcons = `
import { Tabs } from 'kampsy-ui';
import { LogoGithub, LogoGitlab, LogoBitbucketColor } from 'kampsy-ui/icons';

let selected = $state('github');

<Tabs
	bind:selected
	tabs={[
		{ title: 'Github', value: 'github', icon: LogoGithub },
		{ title: 'Gitlab', value: 'gitlab', icon: LogoGitlab },
		{ title: 'Bitbucket', value: 'bitbucket', icon: LogoBitbucketColor }
	]}
/>`;

export const tabsSecondary = `
import { Tabs } from 'kampsy-ui';

let selected = $state('github');

<Tabs
	bind:selected
	tabs={[
		{ title: 'Github', value: 'github'},
		{ title: 'Gitlab', value: 'gitlab'},
		{ title: 'Bitbucket', value: 'bitbucket'}
	]}
    type="secondary"
/>`;