<script lang="ts">
	import { type Snippet } from "svelte"
	import TextGradient from "$lib/text/textGradient.svelte"
	import Webhook from "$lib/icons/webhook.svelte"
	import { ThemeSwitcher } from "$lib/index.js"
	import { LogoGithub, MenuAlt } from "$lib/icons/index.js"
	import MobileNavmenu from "./mobileNavmenu.svelte"
	import { preventScroll } from "$lib/utils/general.js"

	let { asideSlot, contSlot }: { asideSlot: Snippet; contSlot: Snippet } = $props()

	// Mobile Navmenu
	let isMobileMenuOpen = $state(false)

	$effect(() => {
		preventScroll(isMobileMenuOpen)
	})
</script>

<header
	class="bg-kui-light-bg dark:bg-kui-dark-bg fixed top-0 z-50 mx-auto h-16 w-full max-w-305 md:sticky"
>
	<div
		class=" bg-kui-light-bg dark:bg-kui-dark-bg border-kui-light-gray-200 dark:border-kui-dark-gray-400 flex h-16 w-full border-r border-b"
	>
		<div
			class="border-kui-light-gray-200 dark:border-kui-dark-gray-400 hidden h-full w-full max-w-65 border-r border-l lg:block"
		>
			<div class="hidden h-full w-full items-center px-6 lg:flex">
				<a href="/">
					<div class="flex items-center gap-2">
						<div class="h-6.75 w-6.75">
							<Webhook />
						</div>
						<div>
							<TextGradient
								text="kampsy-ui"
								variant="vision"
								class="text-base leading-6 font-semibold"
							/>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="h-full w-full">
			<!---->
			<div class="flex h-full w-full items-center justify-between px-6">
				<div class="flex items-center gap-x-3">
					<div class="block lg:hidden">
						<div class="flex h-4 w-4 items-center justify-center">
							<button
								onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
								class="h-4 w-4 bg-transparent"
							>
								<MenuAlt />
							</button>
						</div>
					</div>
					<a href="/">
						<div class="flex items-center gap-2 lg:hidden">
							<div class="h-6.75 w-6.75">
								<Webhook />
							</div>
							<div>
								<TextGradient
									text="kampsy-ui"
									variant="vision"
									class="text-base leading-6 font-semibold"
								/>
							</div>
						</div>
					</a>
				</div>
				<div class="flex items-center justify-center gap-x-3">
					<div
						class="border-kui-light-gray-200 dark:border-kui-dark-gray-400 flex h-8 w-8 items-center justify-center rounded-full border"
					>
						<div class="h-4 w-4">
							<a
								href="https://github.com/kampsy/ui"
								target="_blank"
								class="text-kui-light-gray-900 hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:hover:text-kui-dark-gray-1000 h-full w-full transition-colors"
							>
								<LogoGithub />
							</a>
						</div>
					</div>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	</div>
</header>
<!--mobile only-->
<div class="h-16 md:hidden">
	<!---->
</div>
<main
	class="flex max-w-305 flex-col min-[1200px]:mt-0 min-[1200px]:grid min-[1200px]:grid-cols-[260px_1fr] md:mx-auto"
>
	<aside
		class="border-kui-light-gray-200 dark:border-kui-dark-gray-400 sticky top-[64px] bottom-0 order-1 hidden h-[calc(100vh-64px)] w-65 flex-col border-r border-l min-[1200px]:flex"
	>
		{@render asideSlot()}
	</aside>
	<div class="order-2 grow overflow-x-hidden">
		<div
			class="border-kui-light-gray-200 dark:border-kui-dark-gray-400 relative flex h-full w-full flex-col border-r"
		>
			{@render contSlot()}
		</div>
	</div>
</main>

<!--Mobile mavmenu -->
<MobileNavmenu bind:isOpen={isMobileMenuOpen} {asideSlot} />
