<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import CodeSnip from '$lib/code/codeSnip.svelte';
	import Pagination from '$lib/pagination/pagination.svelte';
	import {
		installationConfig,
		installationConfigLong,
		installationKampsy,
		installationSveltekit
	} from '../../docs/data/installation.js';
	import LinkH2 from '$lib/../docs/ui/linkH2.svelte';
</script>

<svelte:head>
	<title>Installation</title>
</svelte:head>

{#snippet gettingStarted()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Getting started
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			Begin your journey with Kampsy-ui by following the quickstart guide to unlock the power of
			interactive Svelte 5 components, seamlessly integrated with Tailwind CSS.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCodeSnip(code: string, lang = 'tsx', language = 'language-tsx')}
	<div
		class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<CodeSnip {code} {lang} {language} />
	</div>
{/snippet}

{#snippet sveltekit()}
	<Row>
		<LinkH2 href="/installation#using-svelteKit" aria-label="Using SvelteKit"
			>Using SvelteKit</LinkH2
		>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			We recommend using {@render roundedCode('SvelteKit')} , the official application framework from
			the Svelte team powered by {@render roundedCode('Vite')} .
		</p>

		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationSveltekit, 'bash', 'language-bash')}
		</div>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			After running the above command, you’ll be asked: {@render roundedCode(
				'Which template would you like?'
			)} Select {@render roundedCode('SvelteKit minimal')} and press Enter.
		</p>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Next, you’ll see the prompt: {@render roundedCode('Add type checking with Typescript?')} We recommend
			keeping the default option: {@render roundedCode('Yes, using TypeScript syntax.')} Press Enter
			to confirm.
		</p>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			You will then see the question: {@render roundedCode(
				'What would you like to add to your project?'
			)} Use the arrow keys to navigate, and the spacebar to select or deselect options. Choose the following:
			{@render roundedCode('prettier')} ,
			{@render roundedCode('eslint')} ,
			{@render roundedCode('vitest')} ,
			{@render roundedCode('playwright')} ,
			{@render roundedCode('tailwindcss')} . Once you have made your selections, press Enter.
		</p>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Tailwindcss plugins (optional): For the question: {@render roundedCode(
				'Tailwindcss: Which plugins would you like to add?'
			)} Press Enter, as no plugins are needed.
		</p>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Finally, you’ll be asked: {@render roundedCode(
				'Which package manager do you want to install dependencies with?'
			)} The default option is {@render roundedCode('pnpm,')} which we prefer. Press Enter to confirm.
		</p>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Once the dependencies are installed, your SvelteKit project with Tailwindcss is ready!
			Navigate to your project directory {@render roundedCode('cd my-app')} . From here, you can proceed
			to the next step.
		</p>
	</Row>
{/snippet}

{#snippet kampsyui()}
	<Row>
		<LinkH2 href="/installation#install-kampsy-ui" aria-label="install kampsy-ui"
			>install kampsy-ui</LinkH2
		>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Run the following command to install kmapsy-ui:
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationKampsy, 'bash', 'language-bash')}
		</div>
	</Row>
{/snippet}

<!--Rounded content-->
{#snippet roundedCode(rct: string)}
	<code
		class="px-2 py-[3.6px] rounded-[6px] text-xs text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		{rct}
	</code>
{/snippet}

{#snippet config()}
	<Row>
		<LinkH2 href="/installation#configuration" aria-label="Configuration">Configuration</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Update the {@render roundedCode('tailwind.config.cjs')} file in your project’s root folder to inform
			the Tailwind CSS compiler where to locate the utility classes and configure Kampsy-ui's custom
			color palette, by using the config preset.
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationConfig)}
		</div>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			If you prefer the classic Tailwind config options, you can use the extended defaults.
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationConfigLong)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: 'introduction', href: '/' }}
			next={{ title: 'colors', href: '/colors' }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render gettingStarted()}
	{@render sveltekit()}
	{@render kampsyui()}
	{@render config()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
