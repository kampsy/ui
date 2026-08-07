<script lang="ts">
	import { CircleArrowUp, CircleCheck, Info } from "@lucide/svelte"
	import Aside from "$lib/../docs/ui/aside.svelte"
	import Row from "$lib/../docs/ui/row.svelte"
	import Shell from "$lib/../docs/ui/shell.svelte"
	import { asideData } from "$lib/../docs/utils/data.js"
	import CollapseCode from "$lib/collapse/collapseCode.svelte"
	import type { Snippet } from "svelte"
	import { Avatar, AvatarGroup, AvatarWithIcon } from "$lib/index.js"
	import Pagination from "$lib/pagination/pagination.svelte"
	import LinkH2 from "$lib/../docs/ui/linkH2.svelte"
	import {
		avatarFixedOverlap,
		avatarGroup,
		avatarGroupReverse,
		avatarLetter,
		avatarOverlap,
		avatarPlaceholder,
		avatarSize,
		avatarWithIcon,
	} from "../../docs/data/avatar.js"

	const members = [
		{ username: "evilrabbit" },
		{ username: "severinlandolt" },
		{ username: "rauchg" },
		{ username: "christopherkindl" },
		{ username: "rauno" },
		{ username: "shuding" },
		{ username: "skllcrn" },
		{ username: "almonk" },
	]
</script>

<svelte:head>
	<title>Avatar</title>
</svelte:head>

{#snippet avatar()}
	<Row>
		<h1
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-8 lg:leading-12 tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			avatar
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-6 lg:leading-7.5 tracking-normal lg:tracking-[-0.33px]"
		>
			Avatars represent a user or a team. Stacked avatars represent a group of people.
		</p>
	</Row>
{/snippet}

{#snippet demoAndCode(demo: Snippet, code: string)}
	<div
		class="bg-kui-light-bg dark:bg-kui-dark-bg border border-kui-light-gray-200 dark:border-kui-dark-gray-400 rounded-xl overflow-hidden"
	>
		<div class="w-full p-4 lg:p-6">
			<div class="w-full flex flex-wrap gap-4 justify-between">
				{@render demo()}
			</div>
		</div>
		<CollapseCode {code} />
	</div>
{/snippet}

{#snippet roundedCode(rct: string)}
	<code
		class="px-2 py-[3.6px] rounded-md text-xs text-kui-light-gray-900 bg-kui-light-gray-100 dark:bg-kui-dark-gray-100 dark:text-kui-dark-gray-900 border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		{rct}
	</code>
{/snippet}

{#snippet group()}
	<Row>
		<LinkH2 href="/avatar#group">group</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-4">
					<div>
						<AvatarGroup members={members.slice(0, 3)} size={32} />
					</div>
					<div>
						<AvatarGroup limit={4} {members} size={32} />
					</div>
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarGroup)}
		</div>
	</Row>
{/snippet}

{#snippet stackingOrder()}
	<Row>
		<LinkH2 href="/avatar#stacking-order">stacking order</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			By default the first member sits on top of the stack, so the first credited author stays
			the most prominent. Set {@render roundedCode("reverse")} to flip the order so the last member
			sits on top instead. The visual left-to-right order is unchanged.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-4">
					<AvatarGroup members={members.slice(0, 3)} size={32} />
					<AvatarGroup members={members.slice(0, 3)} size={32} reverse />
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarGroupReverse)}
		</div>
	</Row>
{/snippet}

{#snippet overlap()}
	<Row>
		<LinkH2 href="/avatar#overlap">overlap</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			By default {@render roundedCode('overlap="auto"')} scales the spacing with {@render roundedCode(
				"size",
			)}, keeping a generous, evenly-spaced cluster at any size.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-6">
					<AvatarGroup members={members.slice(0, 3)} overlap="auto" size={16} />
					<AvatarGroup members={members.slice(0, 3)} overlap="auto" size={24} />
					<AvatarGroup members={members.slice(0, 3)} overlap="auto" size={32} />
					<AvatarGroup members={members.slice(0, 3)} overlap="auto" size={48} />
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarOverlap)}
		</div>
	</Row>
{/snippet}

{#snippet fixedOverlap()}
	<Row>
		<LinkH2 href="/avatar#fixed-overlap">fixed overlap</LinkH2>
		<p
			class="mt-2 xl:mt-4 first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] font-normal leading-6"
		>
			Pass a number to set the overlap in pixels instead. Lower values give more generous
			spacing; higher values pack tighter for dense, space-constrained UI.
		</p>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-6">
					<AvatarGroup members={members.slice(0, 3)} overlap={10} size={24} />
					<AvatarGroup members={members.slice(0, 3)} overlap={6} size={24} />
					<AvatarGroup members={members.slice(0, 3)} overlap={0} size={24} />
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarFixedOverlap)}
		</div>
	</Row>
{/snippet}

{#snippet size()}
	<Row>
		<LinkH2 href="/avatar#size">size</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-6">
					<Avatar size={24} username="evilrabbit" />
					<Avatar size={32} username="evilrabbit" />
					<Avatar size={48} username="evilrabbit" />
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarSize)}
		</div>
	</Row>
{/snippet}

{#snippet withIcon()}
	<Row>
		<LinkH2 href="/avatar#with-custom-icon">with custom icon</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-6">
					<AvatarWithIcon size={32} iconBackground>
						{#snippet icon()}
							<CircleArrowUp />
						{/snippet}
					</AvatarWithIcon>
					<AvatarWithIcon size={32} iconBackground>
						{#snippet icon()}
							<CircleCheck />
						{/snippet}
					</AvatarWithIcon>
					<AvatarWithIcon size={32} iconBackground>
						{#snippet icon()}
							<Info />
						{/snippet}
					</AvatarWithIcon>
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarWithIcon)}
		</div>
	</Row>
{/snippet}

{#snippet letter()}
	<Row>
		<LinkH2 href="/avatar#letter">letter</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<div class="flex items-center gap-6">
					<Avatar letter="SL" size={32} />
					<Avatar letter="EK" size={32} />
					<Avatar letter="CK" size={32} />
				</div>
			{/snippet}
			{@render demoAndCode(demo, avatarLetter)}
		</div>
	</Row>
{/snippet}

{#snippet placeholder()}
	<Row>
		<LinkH2 href="/avatar#placeholder">placeholder</LinkH2>
		<div class="mt-4 xl:mt-7">
			{#snippet demo()}
				<Avatar placeholder size={90} />
			{/snippet}
			{@render demoAndCode(demo, avatarPlaceholder)}
		</div>
	</Row>
{/snippet}

{#snippet bestPractices()}
	<Row>
		<h2
			class="first-letter:capitalize text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] font-semibold leading-8 tracking-[-0.96px] mb-3"
		>
			Best Practices
		</h2>
		<ul class="mt-4 list-disc">
			<li
				class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
			>
				Use a single {@render roundedCode("Avatar")} for one person, team, or organization. For two
				or more stacked avatars, use {@render roundedCode("AvatarGroup")} so the cluster gets correct
				overlap, sizing, and a single accessible label.
			</li>
			<li
				class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
			>
				Pass {@render roundedCode("src")} first and fall back to {@render roundedCode(
					"letter",
				)} (1–2 uppercase chars) when the image is missing. Reserve {@render roundedCode(
					"placeholder",
				)} for the loading shell, never as a permanent fallback.
			</li>
			<li
				class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
			>
				{@render roundedCode("title")} is the literal entity name ({@render roundedCode(
					"Acme Inc.",
				)}, {@render roundedCode("Jane Doe")}). The component already prefixes letter avatars
				with "Avatar with initials:" for screen readers, so don't hand-write {@render roundedCode(
					"Avatar of …",
				)}.
			</li>
			<li
				class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
			>
				Keep {@render roundedCode("letter")} uppercase and derived from the entity name. No emoji,
				no punctuation, no {@render roundedCode("?")}.
			</li>
			<li
				class="[&_strong]:text-kui-light-gray-1000 mt-2 py-0.5 leading-6 text-kui-light-gray-900 dark:text-kui-dark-gray-900 [&_strong]:font-normal ml-8"
			>
				Pick a size that matches adjacent type: 20–24 px next to small text, 32 px next to body
				text, 48–64 px in headers and onboarding states.
			</li>
		</ul>
	</Row>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination
			previous={{ title: "introduction", href: "/" }}
			next={{ title: "badge", href: "/badge" }}
		/>
	</Row>
{/snippet}

{#snippet cont()}
	{@render avatar()}
	{@render group()}
	{@render stackingOrder()}
	{@render overlap()}
	{@render fixedOverlap()}
	{@render size()}
	{@render withIcon()}
	{@render letter()}
	{@render placeholder()}
	{@render bestPractices()}

	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
