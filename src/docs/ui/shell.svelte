<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import TextGradient from '$lib/text/textGradient.svelte';
	import Webhook from '$lib/icons/webhook.svelte';
	import { ThemeSwitcher } from '$lib/index.js';
	import { LogoGithub, MenuAlt } from '$lib/icons/index.js';
	import MobileNavmenu from './mobileNavmenu.svelte';
	import { preventScroll } from '$lib/utils/general.js';

	let { asideSlot, contSlot }: { asideSlot: Snippet; contSlot: Snippet } = $props();

	// Mobile Navmenu
	let isMobileMenuOpen = $state(false);

	$effect(() => {
		preventScroll(isMobileMenuOpen);
	});
</script>

<header
	class="z-50 fixed top-0 mx-auto w-full max-w-[1220px] h-[64px] md:sticky bg-kui-light-bg dark:bg-kui-dark-bg"
>
	<div
		class=" bg-kui-light-bg dark:bg-kui-dark-bg w-full h-[64px] flex border-b border-r border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		<div
			class="hidden lg:block w-full max-w-[260px] h-full border-l border-r border-kui-light-gray-200 dark:border-kui-dark-gray-400"
		>
			<div class="hidden w-full h-full px-6 lg:flex items-center">
				<a href="/">
					<div class="flex items-center gap-2">
						<div class="w-[27px] h-[27px]">
							<Webhook />
						</div>
						<div>
							<TextGradient
								text="kampsy-ui"
								variant="vision"
								class="text-base font-semibold leading-[24px]"
							/>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="w-full h-full">
			<!---->
			<div class="w-full h-full px-6 flex items-center justify-between">
				<div class="flex items-center gap-x-3">
					<div class="block lg:hidden">
						<div class="w-4 h-4 flex items-center justify-center">
							<button
								onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
								class="w-4 h-4 bg-transparent"
							>
								<MenuAlt />
							</button>
						</div>
					</div>
					<a href="/">
						<div class="lg:hidden flex items-center gap-2">
							<div class="w-[27px] h-[27px]">
								<Webhook />
							</div>
							<div>
								<TextGradient
									text="kampsy-ui"
									variant="vision"
									class="text-base font-semibold leading-[24px]"
								/>
							</div>
						</div>
					</a>
				</div>
				<div class="flex items-center justify-center gap-x-3">
					<div
						class="w-[32px] h-[32px] flex items-center justify-center rounded-full border border-kui-light-gray-200 dark:border-kui-dark-gray-400"
					>
						<div class="w-4 h-4">
							<a
								href="https://github.com/kampsy/ui"
								target="_blank"
								class="w-full h-full transition-colors text-kui-light-gray-900 hover:text-kui-light-gray-1000 dark:text-kui-dark-gray-900 dark:hover:text-kui-dark-gray-1000"
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
<div class="h-[64px] md:hidden">
	<!---->
</div>
<main
	class="flex max-w-[1220px] flex-col md:mx-auto min-[1200px]:mt-0 min-[1200px]:grid min-[1200px]:grid-cols-[260px_1fr]"
>
	<aside
		class="w-[260px] h-[calc(100vh-64px)] hidden sticky border-l border-r border-kui-light-gray-200 dark:border-kui-dark-gray-400 bottom-0 top-[64px] order-1 flex-col min-[1200px]:flex"
	>
		{@render asideSlot()}
	</aside>
	<div class="order-2 grow overflow-x-hidden">
		<div
			class="relative border-r border-kui-light-gray-200 dark:border-kui-dark-gray-400 flex h-full w-full flex-col"
		>
			{@render contSlot()}
		</div>
	</div>
</main>

<!--Mobile mavmenu -->
<MobileNavmenu bind:isOpen={isMobileMenuOpen} {asideSlot} />
