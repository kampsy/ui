<script lang="ts">
	import DeviceAlternative from '$lib/icons/device-alternate.svelte';
	import Sun from '$lib/icons/sun.svelte';
	import Moon from '$lib/icons/moon.svelte';
	import { scheme } from '../utils/colorScheme.svelte.js';
	import type { Snippet } from 'svelte';
	import LogoGeist from '$lib/icons/logo-geist.svelte';
	import TextGradient from '$lib/text/textGradient.svelte';

	let { asideSlot, contSlot }: { asideSlot: Snippet; contSlot: Snippet } = $props();

	let selected = $state(scheme.theme);

	const onchange = (evt: any) => {
		selected = evt.currentTarget.value;
		scheme.setTheme(selected);
	};

	let contBorder = $derived.by(() => {
		switch (selected) {
			case 'system':
				return 'border-r border-y';
			case 'light':
				return 'border';
			case 'dark':
				return 'border-l border-y';
			default:
				return 'border-r border-y';
		}
	});

	let [system, light, dark] = $derived.by(() => {
		switch (selected) {
			case 'system':
				return [
					'border border-light-gray-200 dark:border-dark-gray-400 text-light-gray-1000 dark:text-dark-gray-1000 ',
					'text-light-gray-900 dark:text-dark-gray-900 hover:text-light-gray-1000 dark:hover:text-dark-gray-1000',
					'text-light-gray-900 dark:text-dark-gray-900 hover:text-light-gray-1000 dark:hover:text-dark-gray-1000'
				];
			case 'light':
				return [
					'text-light-gray-900 dark:text-dark-gray-900 hover:text-light-gray-1000 dark:hover:text-dark-gray-1000',
					'border border-light-gray-200 dark:border-dark-gray-400 text-light-gray-1000 dark:text-dark-gray-1000',
					'text-light-gray-900 dark:text-dark-gray-900 hover:text-light-gray-1000 dark:hover:text-dark-gray-1000'
				];
			case 'dark':
				return [
					'text-light-gray-900 dark:text-dark-gray-900 hover:text-light-gray-1000 dark:hover:text-dark-gray-1000',
					'text-light-gray-900 dark:text-dark-gray-900 hover:text-light-gray-1000 dark:hover:text-dark-gray-1000',
					'border border-light-gray-200 dark:border-dark-gray-400 text-light-gray-1000 dark:text-dark-gray-1000'
				];
			default:
				return [
					'border border-light-gray-200 dark:border-dark-gray-400 text-light-gray-1000 dark:text-dark-gray-1000',
					'dark:text-dark-gray-900 hover:text-dark-gray-1000 dark:hover:text-dark-gray-1000',
					'dark:text-dark-gray-900 hover:text-dark-gray-1000 dark:hover:text-dark-gray-1000'
				];
		}
	});
</script>

<header
	class="z-50 fixed top-0 mx-auto w-full max-w-[1220px] h-[64px] md:sticky bg-light-bg dark:bg-dark-bg"
>
	<div
		class=" bg-light-bg dark:bg-dark-bg w-full h-[64px] flex border-b border-r border-light-gray-200 dark:border-dark-gray-400"
	>
		<div
			class="hidden lg:block w-full max-w-[260px] h-full border-l border-r border-light-gray-200 dark:border-dark-gray-400"
		>
			<div class="hidden w-full h-full px-6 lg:flex items-center">
				<a href="/#">
					<div class="flex items-center gap-2">
						<div class="w-[27px] h-[27px]">
							<LogoGeist />
						</div>
						<div>
							<TextGradient
								text="Kodo Design System"
								variant="ios"
								class="text-base font-semibold leading-[24px]"
							/>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div class="w-full h-full">
			<!---->
			<div class="w-full h-full px-4 flex items-center justify-between">
				<div>
					<div class="lg:hidden flex items-center gap-2">
						<div class="w-[27px] h-[27px]">
							<LogoGeist />
						</div>
						<div>
							<TextGradient
								text="Kodo Design System"
								variant="ios"
								class="text-base font-semibold leading-[24px]"
							/>
						</div>
					</div>
				</div>
				<div
					class="w-[96px] h-[32px] rounded-full overflow-hidden flex items-center {contBorder} border-light-gray-200 dark:border-dark-gray-400"
				>
					<div class="w-[32px] h-[32px]">
						<input
							{onchange}
							checked={selected === 'system'}
							id="theme-switch-system"
							type="radio"
							value="system"
							name="theme"
							class="hidden"
						/>
						<label
							for="theme-switch-system"
							class="w-full h-full rounded-full transition duration-0 {system} flex items-center justify-center cursor-pointer"
						>
							<DeviceAlternative />
						</label>
					</div>
					<div class="w-[32px] h-[32px]">
						<input
							{onchange}
							checked={selected === 'light'}
							id="theme-switch-light"
							type="radio"
							value="light"
							name="theme"
							class="hidden"
						/>
						<label
							for="theme-switch-light"
							class="w-full h-full rounded-full transition duration-0 {light} flex items-center justify-center cursor-pointer"
						>
							<Sun />
						</label>
					</div>
					<div class="w-[32px] h-[32px]">
						<input
							{onchange}
							checked={selected === 'dark'}
							id="theme-switch-dark"
							type="radio"
							value="dark"
							name="theme"
							class="hidden"
						/>
						<label
							for="theme-switch-dark"
							class="w-full h-full rounded-full transition duration-0 {dark} flex items-center justify-center cursor-pointer"
						>
							<Moon />
						</label>
					</div>
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
	class="sidebar -mx-px -mt-px flex max-w-[1220px] flex-col md:mx-auto min-[1200px]:mt-0 min-[1200px]:grid min-[1200px]:grid-cols-[260px_1fr]"
>
	<div class="order-2 grow">
		<div
			class="relative border-r border-light-gray-200 dark:border-dark-gray-400 flex h-full w-full flex-col"
		>
			{@render contSlot()}
		</div>
	</div>
	<aside
		class="border-l border-r border-light-gray-200 dark:border-dark-gray-400 sticky bottom-0 top-[64px] order-1 hidden w-[260px] flex-col min-[1200px]:flex"
		style="height:calc(100vh - 64px);"
	>
		{@render asideSlot()}
	</aside>
</main>
