<script lang="ts">
	import DeviceAlternative from '$lib/icons/device-alternate.svelte';
	import Sun from '$lib/icons/sun.svelte';
	import Moon from '$lib/icons/moon.svelte';
	import { scheme } from '$lib/utils/colorScheme.svelte.js';

	let selected = $state('system');

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
					'border border-light-bor-hover dark:border-dark-bor text-light-txt-primary dark:text-dark-txt-primary ',
					'text-light-txt-secondary dark:text-dark-txt-secondary hover:text-light-txt-primary dark:hover:text-dark-txt-primary',
					'text-light-txt-secondary dark:text-dark-txt-secondary hover:text-light-txt-primary dark:hover:text-dark-txt-primary'
				];
			case 'light':
				return [
					'text-light-txt-secondary dark:text-dark-txt-secondary hover:text-light-txt-primary dark:hover:text-dark-txt-primary',
					'border border-light-bor-hover dark:border-dark-bor text-light-txt-primary dark:text-dark-txt-primary',
					'text-light-txt-secondary dark:text-dark-txt-secondary hover:text-light-txt-primary dark:hover:text-dark-txt-primary'
				];
			case 'dark':
				return [
					'text-light-txt-secondary dark:text-dark-txt-secondary hover:text-light-txt-primary dark:hover:text-dark-txt-primary',
					'text-light-txt-secondary dark:text-dark-txt-secondary hover:text-light-txt-primary dark:hover:text-dark-txt-primary',
					'border border-light-bor-hover dark:border-dark-bor text-light-txt-primary dark:text-dark-txt-primary'
				];
			default:
				return [
					'border border-light-bor-hover dark:border-dark-bor text-light-txt-primary dark:text-dark-txt-primary',
					'dark:text-dark-txt-secondary hover:text-dark-txt-primary dark:hover:text-dark-txt-primary',
					'dark:text-dark-txt-secondary hover:text-dark-txt-primary dark:hover:text-dark-txt-primary'
				];
		}
	});
</script>

<header
	class="z-50 fixed top-0 mx-auto w-full max-w-[1220px] h-[64px] md:sticky bg-light-bg dark:bg-dark-bg"
>
	<div
		class=" bg-light-bg dark:bg-dark-bg w-full h-[64px] flex border-b border-r border-light-bor-hover dark:border-dark-bor"
	>
		<div
			class="w-full max-w-[260px] h-full border-l border-r border-light-bor dark:border-dark-bor"
		>
			<!---->
		</div>
		<div class="w-full h-full">
			<!---->
			<div class="w-full h-full px-4 flex items-center justify-end">
				<div
					class="w-[96px] h-[32px] rounded-full overflow-hidden flex items-center {contBorder} border-light-bor-hover dark:border-dark-bor"
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
<main
	class="sidebar -mx-px -mt-px flex max-w-[1220px] flex-col md:mx-auto xl:mt-0 xl:grid xl:grid-cols-[260px_1fr]"
>
	<div class="order-2 grow">
		<div
			class="relative border-r border-light-bor-hover dark:border-dark-bor flex h-full w-full flex-col"
		>
			<!---->
		</div>
	</div>
	<aside
		class="border-l border-r border-light-bor-hover dark:border-dark-bor sticky bottom-0 top-[64px] order-1 hidden w-[260px] flex-col xl:flex"
		style="height:calc(100vh - 64px);"
	>
		<!---->
	</aside>
</main>
