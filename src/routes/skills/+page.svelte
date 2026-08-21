<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CodeSnip from "$lib/code/codeSnip.svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
	import {
		skillsBadge,
		skillsInstallNpm,
		skillsInstallPnpm,
		skillsVerify,
	} from "../../docs/data/skills.js"
</script>

<svelte:head>
	<title>Skills</title>
</svelte:head>

{#snippet demoAndCodeSnip(code: string, lang = "bash", language = "language-bash")}
	<div
		class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-hidden rounded-xl border"
	>
		<CodeSnip {code} {lang} {language} />
	</div>
{/snippet}

{#snippet roundedCode(rct: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{rct}
	</code>
{/snippet}

{#snippet hero()}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			Skills
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			Give your AI assistant deep knowledge of kampsy-ui — Geist-inspired Svelte 5 components,
			kui tokens, and snippet patterns — so it generates correct code on the first try.
		</p>
	</Row>
{/snippet}

{#snippet install()}
	<Row>
		<LinkH2 href="/skills#install" aria-label="Install">Install</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Install the skill into any project. Once installed, your assistant auto-loads it when you
			work with kampsy-ui.
		</p>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			With {@render roundedCode("pnpm")} (recommended):
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(skillsInstallPnpm, "bash", "language-bash")}
		</div>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-4 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			With {@render roundedCode("npm")}:
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(skillsInstallNpm, "bash", "language-bash")}
		</div>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-4 text-[16px] leading-6 font-normal first-letter:capitalize"
		>
			Learn more at <a href="https://skills.sh" target="_blank" class="underline">skills.sh</a
			>. After this PR merges to {@render roundedCode("main")}, the skill is also discoverable
			at
			<a href="https://skills.sh/kampsy/ui" target="_blank" class="underline"
				>skills.sh/kampsy/ui</a
			>.
		</p>
	</Row>
{/snippet}

{#snippet whatsIncluded()}
	<Row>
		<LinkH2 href="/skills#whats-included" aria-label="What's included"
			>What&apos;s included</LinkH2
		>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			The skill gives your assistant project-aware context — no manual copy-pasting from docs.
		</p>
		<ul class="mt-4 list-disc space-y-3">
			<li
				class="[&_strong]:text-kui-light-gray-1000 dark:[&_strong]:text-kui-dark-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6 [&_strong]:font-medium"
			>
				<strong>Auto-install & wiring</strong> — detects the package manager, runs
				{@render roundedCode("pnpm add -D kampsy-ui@latest")} only if missing (minimal, no
				{@render roundedCode("svelte-kit sync")}), and ensures your global CSS has
				{@render roundedCode('@import "kampsy-ui/theme.css"')} and
				{@render roundedCode('@source "../node_modules/kampsy-ui/dist"')} so
				{@render roundedCode("kui-*")} tokens are not purged.
			</li>
			<li
				class="[&_strong]:text-kui-light-gray-1000 dark:[&_strong]:text-kui-dark-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6 [&_strong]:font-medium"
			>
				<strong>Component catalog</strong> — 30+ components with correct import shapes ({@render roundedCode(
					'import { Button } from "kampsy-ui"',
				)} vs
				{@render roundedCode('import * as Modal from "kampsy-ui"')}), valid enums ({@render roundedCode(
					"Button variant: default|secondary|tertiary|error|warning",
				)},
				{@render roundedCode("Badge variant: gray|blue|…|pill")},
				{@render roundedCode("Note type: success|error|warning|…|cyan|default")}), and the
				{@render roundedCode("Snippet")} vs {@render roundedCode("Component")} distinction for
				{@render roundedCode("prefix/suffix/action")} and {@render roundedCode("icon")}.
			</li>
			<li
				class="[&_strong]:text-kui-light-gray-1000 dark:[&_strong]:text-kui-dark-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6 [&_strong]:font-medium"
			>
				<strong>Theming</strong> — every {@render roundedCode("kui-light-*")} paired with
				{@render roundedCode("dark:kui-dark-*")} (`kui-light-gray-1000` /
				{@render roundedCode("kui-dark-gray-1000")}, blue/red/amber/green/teal/purple/pink
				100–1000 scales from {@render roundedCode("theme.css")}), {@render roundedCode(
					".dark",
				)}
				toggle via {@render roundedCode("ThemeSwitcher")}. Tailwind v4 only.
			</li>
			<li
				class="[&_strong]:text-kui-light-gray-1000 dark:[&_strong]:text-kui-dark-gray-1000 text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6 [&_strong]:font-medium"
			>
				<strong>Patterns & recipes</strong> — auth form, team dashboard, and settings dialog
				recipes (Input + Button + Note, Table + Pagination + Avatar + Badge, Tabs + Select +
				Modal) that validate with
				{@render roundedCode("npx @sveltejs/mcp svelte-autofixer --svelte-version 5")}.
			</li>
		</ul>
	</Row>
{/snippet}

{#snippet howItWorks()}
	<Row>
		<LinkH2 href="/skills#how-it-works" aria-label="How it works">How it works</LinkH2>
		<ol class="mt-4 list-decimal space-y-2">
			<li class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6">
				<strong class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium"
					>Project detection</strong
				>
				— activates when it finds a Svelte 5 + Tailwind v4 project and {@render roundedCode(
					"package.json",
				)}.
			</li>
			<li class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6">
				<strong class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium"
					>Auto-install (minimal)</strong
				>
				— checks {@render roundedCode("kampsy-ui")} in deps, runs
				{@render roundedCode("pnpm add -D kampsy-ui@latest")} if missing, wires the 3 CSS lines.
			</li>
			<li class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6">
				<strong class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium"
					>Pattern enforcement</strong
				>
				— enforces snippet decorators
				{@render roundedCode("{#snippet prefix()}<Icon/>{/snippet}")},
				{@render roundedCode("bind:value|active|checked|selected")}, and
				{@render roundedCode("svgOnly + aria-label")} rules.
			</li>
			<li class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6">
				<strong class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium"
					>Scaffold & verify</strong
				>
				— picks the right component (Button vs Split Button vs Menu), scaffolds the page, then runs
				{@render roundedCode("svelte-autofixer")} on the new file.
			</li>
		</ol>
	</Row>
{/snippet}

{#snippet examples()}
	<Row>
		<LinkH2 href="/skills#examples" aria-label="Examples">Examples</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			Try prompting your assistant after installing the skill:
		</p>
		<ul class="mt-4 list-disc space-y-2">
			<li class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6">
				{@render roundedCode("Add a login form with email, password and Remember me.")}
			</li>
			<li class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6">
				{@render roundedCode(
					"Create a settings page with Tabs, Select and a delete-workspace modal.",
				)}
			</li>
			<li class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 ml-6 leading-6">
				{@render roundedCode(
					"Build a team dashboard with Table, Pagination, Avatar.Group and status Badges.",
				)}
			</li>
		</ul>
	</Row>
{/snippet}

{#snippet verify()}
	<Row>
		<LinkH2 href="/skills#verify" aria-label="Verify">Verify</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			List installed skills:
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(skillsVerify, "bash", "language-bash")}
		</div>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-4 text-[16px] leading-6 font-normal first-letter:capitalize"
		>
			Add a badge to your README (after this page merges to {@render roundedCode("main")}):
		</p>
		<div class="mt-4 xl:mt-7">
			{@render demoAndCodeSnip(skillsBadge, "markdown", "language-markdown")}
		</div>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "installation", href: "/installation" }}
			next={{ title: "colors", href: "/colors" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render hero()}
	{@render install()}
	{@render whatsIncluded()}
	{@render howItWorks()}
	{@render examples()}
	{@render verify()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
