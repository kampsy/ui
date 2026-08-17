<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CodeSnip from "$lib/code/codeSnip.svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import {
		installationConfig,
		installationKampsy,
		installationSveltekit,
	} from "../../docs/data/installation.js"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
</script>

<svelte:head>
	<title>Installation</title>
</svelte:head>

{#snippet gettingStarted()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			Getting started
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Begin your journey with Kampsy-ui by following the quickstart guide to unlock the power
			of interactive Svelte 5 components, seamlessly integrated with Tailwind CSS.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCodeSnip(code: string, lang = "tsx", language = "language-tsx")}
	<div
		class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-hidden rounded-xl border"
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
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			We recommend using {@render roundedCode("SvelteKit")} , the official application framework
			from the Svelte team powered by {@render roundedCode("Vite")} .
		</p>

		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationSveltekit, "bash", "language-bash")}
		</div>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			After running the above command, you’ll be asked: {@render roundedCode(
				"Which template would you like?",
			)} Select {@render roundedCode("SvelteKit minimal")} and press Enter.
		</p>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Next, you’ll see the prompt: {@render roundedCode("Add type checking with Typescript?")} We
			recommend keeping the default option: {@render roundedCode(
				"Yes, using TypeScript syntax.",
			)} Press Enter to confirm.
		</p>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			You will then see the question: {@render roundedCode(
				"What would you like to add to your project?",
			)} Use the arrow keys to navigate, and spacebar to select or deselect options. Choose the following:
			{@render roundedCode("prettier")} ,
			{@render roundedCode("eslint")} ,
			{@render roundedCode("vitest")} ,
			{@render roundedCode("playwright")},
			{@render roundedCode("tailwindcss")}
			.
		</p>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			SvelteKit now includes Tailwind CSS 4 by default, which uses a simpler configuration
			approach. Press enter to confirm
		</p>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Tailwindcss plugins (optional): For the question: {@render roundedCode(
				"Tailwindcss: Which plugins would you like to add?",
			)} Press Enter if no plugins are needed.
		</p>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Finally, you’ll be asked: {@render roundedCode(
				"Which package manager do you want to install dependencies with?",
			)} Choose {@render roundedCode("pnpm,")} as it is preferred. Press Enter to confirm.
		</p>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Once the dependencies are installed, your SvelteKit project with Tailwindcss is ready!
			Navigate to your project directory {@render roundedCode("cd my-app")} . From here, you can
			proceed to the next step.
		</p>
	</Row>
{/snippet}

{#snippet kampsyui()}
	<Row>
		<LinkH2 href="/installation#install-kampsy-ui" aria-label="install kampsy-ui"
			>install kampsy-ui</LinkH2
		>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Run the following command to install kmapsy-ui:
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationKampsy, "bash", "language-bash")}
		</div>
	</Row>
{/snippet}

<!--Rounded content-->
{#snippet roundedCode(rct: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{rct}
	</code>
{/snippet}

{#snippet config()}
	<Row>
		<LinkH2 href="/installation#configuration" aria-label="Configuration">Configuration</LinkH2
		>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Add the following to your {@render roundedCode("layout.css")} file.
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(installationConfig)}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "introduction", href: "/" }}
			next={{ title: "colors", href: "/colors" }}
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
