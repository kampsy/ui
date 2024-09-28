<script lang="ts">
	import { switcher } from './themeSwitcher.svelte.js';
	import DeviceAlternative from '$lib/icons/device-alternate.svelte';
	import Sun from '$lib/icons/sun.svelte';
	import Moon from '$lib/icons/moon.svelte';
	import { randomString } from '$lib/utils/random.js';

	const randStr = randomString(8);

	const onchange = (evt: any) => {
		switcher.setTheme(evt.currentTarget.value);
	};

	let contBorder = $derived.by(() => {
		switch (switcher.theme) {
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
		switch (switcher.theme) {
			case 'system':
				return [
					'border border-kui-light-gray-200 dark:border-kui-dark-gray-400 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 ',
					'text-kui-light-gray-900 dark:text-kui-dark-gray-900 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000',
					'text-kui-light-gray-900 dark:text-kui-dark-gray-900 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000'
				];
			case 'light':
				return [
					'text-kui-light-gray-900 dark:text-kui-dark-gray-900 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000',
					'border border-kui-light-gray-200 dark:border-kui-dark-gray-400 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000',
					'text-kui-light-gray-900 dark:text-kui-dark-gray-900 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000'
				];
			case 'dark':
				return [
					'text-kui-light-gray-900 dark:text-kui-dark-gray-900 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000',
					'text-kui-light-gray-900 dark:text-kui-dark-gray-900 hover:text-kui-light-gray-1000 dark:hover:text-kui-dark-gray-1000',
					'border border-kui-light-gray-200 dark:border-kui-dark-gray-400 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000'
				];
			default:
				return [
					'border border-kui-light-gray-200 dark:border-kui-dark-gray-400 text-kui-light-gray-1000 dark:text-kui-dark-gray-1000',
					'dark:text-kui-dark-gray-900 hover:text-kui-dark-gray-1000 dark:hover:text-kui-dark-gray-1000',
					'dark:text-kui-dark-gray-900 hover:text-kui-dark-gray-1000 dark:hover:text-kui-dark-gray-1000'
				];
		}
	});

	$effect(() => {
		if (switcher.theme === 'system') {
			const str = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
			document.body.className = `${str} text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary`;
		} else {
			document.body.className = `${switcher.theme} text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 bg-kui-light-bg-secondary dark:bg-kui-dark-bg-secondary`;
		}
	});
</script>

<span>
	<div
		class="w-[96px] h-[32px] rounded-full overflow-hidden flex items-center {contBorder} border-kui-light-gray-200 dark:border-kui-dark-gray-400"
	>
		<div class="w-[32px] h-[32px]">
			<input
				{onchange}
				checked={switcher.theme === 'system'}
				id="theme-switch-system-{randStr}"
				type="radio"
				value="system"
				name="theme"
				class="hidden"
			/>
			<label
				for="theme-switch-system-{randStr}"
				class="w-full h-full rounded-full transition duration-0 {system} flex items-center justify-center cursor-pointer"
			>
				<DeviceAlternative />
			</label>
		</div>
		<div class="w-[32px] h-[32px]">
			<input
				{onchange}
				checked={switcher.theme === 'light'}
				id="theme-switch-light-{randStr}"
				type="radio"
				value="light"
				name="theme"
				class="hidden"
			/>
			<label
				for="theme-switch-light-{randStr}"
				class="w-full h-full rounded-full transition duration-0 {light} flex items-center justify-center cursor-pointer"
			>
				<Sun />
			</label>
		</div>
		<div class="w-[32px] h-[32px]">
			<input
				{onchange}
				checked={switcher.theme === 'dark'}
				id="theme-switch-dark-{randStr}"
				type="radio"
				value="dark"
				name="theme"
				class="hidden"
			/>
			<label
				for="theme-switch-dark-{randStr}"
				class="w-full h-full rounded-full transition duration-0 {dark} flex items-center justify-center cursor-pointer"
			>
				<Moon />
			</label>
		</div>
	</div>
</span>
