<script lang="ts">
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import Badge from "$lib/badge/badge.svelte"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import {
		badgeSize,
		badgeVariants,
		badgeWithIcon,
		badgePill,
	} from "$lib/../docs/data/badge.js"
	import { ExternalLink, Shield } from "@lucide/svelte"
	import Pagination from "$lib/pagination/pagination.svelte"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"

	const contHeading = {
		title: "badge",
		para: `A label that emphasizes an element that requires attention, or helps categorize with other
			similar elements.`,
	}
</script>

<svelte:head>
	<title>Badge</title>
</svelte:head>

{#snippet badge(title: string, para: string)}
	<Row>
		<h1
			class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 mb-3 text-[24px] leading-8 font-semibold tracking-[-0.96px] first-letter:capitalize lg:text-[40px] lg:leading-12 lg:tracking-[-2.4px]"
		>
			{title}
		</h1>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] leading-6 font-normal tracking-normal first-letter:capitalize lg:text-[20px] lg:leading-7.5 lg:tracking-[-0.33px]"
		>
			{para}
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 overflow-hidden rounded-xl border"
	>
		<div class="w-full overflow-x-auto p-4 lg:p-6">
			<div class="flex w-full flex-wrap justify-between gap-4">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet variants()}
	<Row>
		<LinkH2 href="/badge#variants">Variants</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col gap-2">
					<div class="flex gap-1 capitalize">
						<Badge variant="gray" aria-label="gray">gray</Badge>
						<Badge variant="gray" contrast="low" aria-label="gray-subtle">gray-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="blue" aria-label="blue">blue</Badge>
						<Badge variant="blue" contrast="low" aria-label="blue-subtle">blue-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="purple" aria-label="purple">purple</Badge>
						<Badge variant="purple" contrast="low" aria-label="purple-subtle"
							>purple-subtle</Badge
						>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="amber" aria-label="amber">amber</Badge>
						<Badge variant="amber" contrast="low" aria-label="amber-subtle">amber-subtle</Badge
						>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="red" aria-label="red">red</Badge>
						<Badge variant="red" contrast="low" aria-label="red-subtle">red-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="pink" aria-label="pink">pink</Badge>
						<Badge variant="pink" contrast="low" aria-label="pink-subtle">pink-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="green" aria-label="green">green</Badge>
						<Badge variant="green" contrast="low" aria-label="green-subtle">green-subtle</Badge
						>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="teal" aria-label="teal">teal</Badge>
						<Badge variant="teal" contrast="low" aria-label="teal-subtle">teal-subtle</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge variant="inverted" aria-label="inverted">inverted</Badge>
						<Badge variant="trial" aria-label="trial">Trial</Badge>
						<Badge variant="turbo" aria-label="turbo">Turborepo</Badge>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, badgeVariants)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<LinkH2 href="/badge#sizes">Sizes</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-2">
					<div class="flex gap-1 capitalize">
						<Badge size="sm" aria-label="small">small</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge size="md" aria-label="medium">medium</Badge>
					</div>

					<div class="flex gap-1 capitalize">
						<Badge size="lg" aria-label="large">large</Badge>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, badgeSize)}
		</div>
	</Row>
{/snippet}

{#snippet icons()}
	<Row>
		<LinkH2 href="/badge#with-icons">With Icons</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="gray" aria-label="icon large gray"
							>gray</Badge
						>
						<Badge icon={Shield} size="md" variant="gray" aria-label="icon medium gray"
							>gray</Badge
						>
						<Badge icon={Shield} size="sm" variant="gray" aria-label="icon small gray"
							>gray</Badge
						>
						<Badge
							icon={Shield}
							size="sm"
							variant="gray"
							contrast="low"
							aria-label="icon small gray-subtle">gray</Badge
						>
						<Badge
							icon={Shield}
							size="md"
							variant="gray"
							contrast="low"
							aria-label="icon medium gray-subtle">gray</Badge
						>
						<Badge
							icon={Shield}
							size="lg"
							variant="gray"
							contrast="low"
							aria-label="icon large gray-subtle">gray</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="blue" aria-label="icon large blue"
							>blue</Badge
						>
						<Badge icon={Shield} size="md" variant="blue" aria-label="icon medium blue"
							>blue</Badge
						>
						<Badge icon={Shield} size="sm" variant="blue" aria-label="icon small blue"
							>blue</Badge
						>
						<Badge
							icon={Shield}
							size="sm"
							variant="blue"
							contrast="low"
							aria-label="icon small blue-subtle">blue</Badge
						>
						<Badge
							icon={Shield}
							size="md"
							variant="blue"
							contrast="low"
							aria-label="icon medium blue-subtle">blue</Badge
						>
						<Badge
							icon={Shield}
							size="lg"
							variant="blue"
							contrast="low"
							aria-label="icon large blue-subtle">blue</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="purple" aria-label="icon large purple"
							>purple</Badge
						>
						<Badge icon={Shield} size="md" variant="purple" aria-label="icon medium purple"
							>purple</Badge
						>
						<Badge icon={Shield} size="sm" variant="purple" aria-label="icon small purple"
							>purple</Badge
						>
						<Badge
							icon={Shield}
							size="sm"
							variant="purple"
							contrast="low"
							aria-label="icon small purple-subtle">purple</Badge
						>
						<Badge
							icon={Shield}
							size="md"
							variant="purple"
							contrast="low"
							aria-label="icon medium purple-subtle">purple</Badge
						>
						<Badge
							icon={Shield}
							size="lg"
							variant="purple"
							contrast="low"
							aria-label="icon large purple-subtle">purple</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="amber" aria-label="icon large amber"
							>amber</Badge
						>
						<Badge icon={Shield} size="md" variant="amber" aria-label="icon medium amber"
							>amber</Badge
						>
						<Badge icon={Shield} size="sm" variant="amber" aria-label="icon small amber"
							>amber</Badge
						>
						<Badge
							icon={Shield}
							size="sm"
							variant="amber"
							contrast="low"
							aria-label="icon small amber-subtle">amber</Badge
						>
						<Badge
							icon={Shield}
							size="md"
							variant="amber"
							contrast="low"
							aria-label="icon medium amber-subtle">amber</Badge
						>
						<Badge
							icon={Shield}
							size="lg"
							variant="amber"
							contrast="low"
							aria-label="icon large amber-subtle">amber</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="red" aria-label="icon large red">red</Badge
						>
						<Badge icon={Shield} size="md" variant="red" aria-label="icon medium red"
							>red</Badge
						>
						<Badge icon={Shield} size="sm" variant="red" aria-label="icon small red">red</Badge
						>
						<Badge
							icon={Shield}
							size="sm"
							variant="red"
							contrast="low"
							aria-label="icon small red-subtle">red</Badge
						>
						<Badge
							icon={Shield}
							size="md"
							variant="red"
							contrast="low"
							aria-label="icon medium red-subtle">red</Badge
						>
						<Badge
							icon={Shield}
							size="lg"
							variant="red"
							contrast="low"
							aria-label="icon large red-subtle">red</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="pink" aria-label="icon large pink"
							>pink</Badge
						>
						<Badge icon={Shield} size="md" variant="pink" aria-label="icon medium pink"
							>pink</Badge
						>
						<Badge icon={Shield} size="sm" variant="pink" aria-label="icon small pink"
							>pink</Badge
						>
						<Badge
							icon={Shield}
							size="sm"
							variant="pink"
							contrast="low"
							aria-label="icon small pink-subtle">pink</Badge
						>
						<Badge
							icon={Shield}
							size="md"
							variant="pink"
							contrast="low"
							aria-label="icon medium pink-subtle">pink</Badge
						>
						<Badge
							icon={Shield}
							size="lg"
							variant="pink"
							contrast="low"
							aria-label="icon large pink-subtle">pink</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="green" aria-label="icon large green"
							>green</Badge
						>
						<Badge icon={Shield} size="md" variant="green" aria-label="icon medium green"
							>green</Badge
						>
						<Badge icon={Shield} size="sm" variant="green" aria-label="icon small green"
							>green</Badge
						>
						<Badge
							icon={Shield}
							size="sm"
							variant="green"
							contrast="low"
							aria-label="icon small green-subtle">green</Badge
						>
						<Badge
							icon={Shield}
							size="md"
							variant="green"
							contrast="low"
							aria-label="icon medium green-subtle">green</Badge
						>
						<Badge
							icon={Shield}
							size="lg"
							variant="green"
							contrast="low"
							aria-label="icon large green-subtle">green</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="teal" aria-label="icon large teal"
							>teal</Badge
						>
						<Badge icon={Shield} size="md" variant="teal" aria-label="icon medium teal"
							>teal</Badge
						>
						<Badge icon={Shield} size="sm" variant="teal" aria-label="icon small teal"
							>teal</Badge
						>
						<Badge
							icon={Shield}
							size="sm"
							variant="teal"
							contrast="low"
							aria-label="icon small teal-subtle">teal</Badge
						>
						<Badge
							icon={Shield}
							size="md"
							variant="teal"
							contrast="low"
							aria-label="icon medium teal-subtle">teal</Badge
						>
						<Badge
							icon={Shield}
							size="lg"
							variant="teal"
							contrast="low"
							aria-label="icon large teal-subtle">teal</Badge
						>
					</div>

					<div class="flex items-center gap-1 capitalize">
						<Badge icon={Shield} size="lg" variant="inverted" aria-label="icon large inverted"
							>inverted</Badge
						>
						<Badge icon={Shield} size="md" variant="inverted" aria-label="icon medium inverted"
							>inverted</Badge
						>
						<Badge icon={Shield} size="sm" variant="inverted" aria-label="icon small inverted"
							>inverted</Badge
						>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, badgeWithIcon)}
		</div>
	</Row>
{/snippet}

<!-- The pill section of the documentation -->
{#snippet pill()}
	<Row>
		<LinkH2 href="/badge#pill">Pill</LinkH2>
		<p
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-2 text-[16px] leading-6 font-normal first-letter:capitalize xl:mt-4"
		>
			A special link, not quite as prominent as a button, based on {@render roundedCode(
				"<Badge />",
			)} styling.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-2 capitalize">
						<Badge href="/badge#pill" size="sm" variant="pill" aria-label="large pill"
							>label</Badge
						>
						<Badge href="/badge#pill" size="md" variant="pill" aria-label="medium pill"
							>label</Badge
						>
						<Badge href="/badge#pill" size="lg" variant="pill" aria-label="small pill"
							>label</Badge
						>
					</div>
					<div class="flex items-center gap-2 capitalize">
						<Badge
							href="/badge#pill"
							icon={ExternalLink}
							size="sm"
							variant="pill"
							aria-label="icon large pill">label</Badge
						>
						<Badge
							href="/badge#pill"
							icon={ExternalLink}
							size="md"
							variant="pill"
							aria-label="icon medium pill">label</Badge
						>
						<Badge
							href="/badge#pill"
							icon={ExternalLink}
							size="lg"
							variant="pill"
							aria-label="icon small pill">label</Badge
						>
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, badgePill)}
		</div>
	</Row>
{/snippet}

{#snippet roundedCode(rct: string)}
	<code
		class="text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-md border px-2 py-[3.6px] text-xs"
	>
		{rct}
	</code>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<LinkH2 href="/badge#best-practices">Best Practices</LinkH2>
		<ul
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mt-4 list-disc space-y-2 pl-5 text-[14px] leading-6 md:text-[16px] xl:mt-7"
		>
			<li>
				Use Badge for short, scannable metadata that sits next to the thing it describes:
				status, plan tier, environment, or role. One badge per row; two side by side is a sign
				the row needs a second column.
			</li>
			<li>
				For a colored dot without text, use {@render roundedCode("StatusDot")}. For clickable
				filter chips that toggle a query, use the {@render roundedCode("pill")} variant or a small
				{@render roundedCode("Button")}.
			</li>
			<li>
				Badges are static labels. Don’t wire {@render roundedCode("on:click")} onto them; promote
				to a {@render roundedCode("Button")} or link if the user can act on the value.
			</li>
			<li>
				Keep badge content to text or {@render roundedCode("icon")} + text. Never stack two icons
				or a child Badge inside a Badge.
			</li>
			<li>
				Pair lifecycle badges ({@render roundedCode("Alpha")}, {@render roundedCode("Beta")},
				{@render roundedCode("Early Access")}) with a {@render roundedCode("Tooltip")} that names
				the limit, like {@render roundedCode("Alpha: API may change before GA")}.
			</li>
			<li>
				Title Case, one word when possible, two max: {@render roundedCode("Active")},
				{@render roundedCode("Pending")}, {@render roundedCode("Pro")},
				{@render roundedCode("Enterprise Trial")}. Match the canonical API or log term:
				{@render roundedCode("Production")} not {@render roundedCode("Prod")},
				{@render roundedCode("Deployed")} not {@render roundedCode("Live")},
				{@render roundedCode("Canceled")} not {@render roundedCode("Cancelled")} (the Vercel API
				uses one L).
			</li>
			<li>
				Don’t add a checkmark icon for success states or an X for errors; the variant carries
				that signal. Map meaning to color: {@render roundedCode("green")} for healthy,
				{@render roundedCode("red")} for error, {@render roundedCode("amber")} for warning,
				{@render roundedCode("blue")} for informational or production, {@render roundedCode(
					"gray",
				)}
				for neutral. Use {@render roundedCode('contrast="low"')} to tone any of them down on dense
				surfaces.
			</li>
			<li>
				Skip stuffing sentences inside ({@render roundedCode("Currently Active")},
				{@render roundedCode("You are on Pro")}); the surrounding row supplies the context.
			</li>
			<li>
				Set {@render roundedCode("title")} for icon-only or ambiguous badges so screen readers announce
				the meaning. Don’t rely on color alone; the text has to be readable without it.
			</li>
		</ul>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "avatar", href: "/avatar" }}
			next={{ title: "banner", href: "/banner" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render badge(contHeading.title, contHeading.para)}

	<section>
		{@render variants()}
		{@render size()}
		{@render icons()}
		{@render pill()}
		{@render bestPractices()}
	</section>

	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
