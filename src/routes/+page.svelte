<script lang="ts">
	import Aside from '$lib/../docs/ui/aside.svelte';
	import Row from '$lib/../docs/ui/row.svelte';
	import Shell from '$lib/../docs/ui/shell.svelte';
	import { asideData } from '$lib/../docs/utils/data.js';
	import { GridSquare, ListUnordered, Shield, ShieldGlobe, UserPlus } from '$lib/icons/index.js';
	import { Badge, Button, Pagination, Switch } from '$lib/index.js';

	let value = $state('');
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>Kampsy UI</title>
	<meta name="title" content="Kampsy-ui | A Svelte 5 component library" />
	<meta
		name="description"
		content="Kampsy-ui - A Svelte 5 component library, thoughtfully designed to deliver consistent and cohesive web experiences."
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://ui.kampsy.xyz" />
	<meta property="og:title" content="Kampsy-ui | A Svelte 5 component library" />
	<meta
		property="og:description"
		content="Kampsy-ui - A Svelte 5 component library, thoughtfully designed to deliver consistent and cohesive web experiences."
	/>
	<meta
		property="og:image"
		content="https://ucarecdn.com/91722eb1-c95a-42b2-b851-cdfe01a9bdf7/-/preview/1200x628/"
	/>

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ui.kampsy.xyz" />
	<meta property="twitter:title" content="Kampsy-ui | A Svelte 5 component library" />
	<meta
		property="twitter:description"
		content="Kampsy-ui - A Svelte 5 component library, thoughtfully designed to deliver consistent and cohesive web experiences."
	/>
	<meta
		property="twitter:image"
		content="https://ucarecdn.com/91722eb1-c95a-42b2-b851-cdfe01a9bdf7/-/preview/1200x628/"
	/>

	<!-- Meta Tags Generated with https://metatags.io -->
	<meta name="robots" content="noindex,nofollow" />
</svelte:head>

{#snippet foundation()}
	<Row>
		<h1
			class=" text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-[24px] lg:text-[40px] font-semibold leading-[32px] lg:leading-[48px] tracking-[-0.96px] lg:tracking-[-2.4px] mb-3"
		>
			Kampsy-ui
		</h1>
		<p
			class="first-letter:capitalize text-kui-light-gray-900 dark:text-kui-dark-gray-900 text-[16px] lg:text-[20px] font-normal leading-[24px] lg:leading-[30px] tracking-normal lg:tracking-[-0.33px]"
		>
			A Svelte 5 component library, inspired by Vercel's Geist, thoughtfully designed to deliver
			consistent and cohesive web experiences.
		</p>
	</Row>
{/snippet}

{#snippet grid()}
	<section class="grid grid-cols-1 lg:grid-cols-2 box-border">
		<div class="border-b border-r border-kui-light-gray-200 dark:border-kui-dark-gray-400">
			<a
				href="/avatar"
				class="w-full h-full group block p-[32px] transition-colors hover:bg-kui-light-bg dark:hover:bg-kui-dark-bg"
			>
				<div class="relative w-full min-h-[104px]">
					<div class="flex items-center gap-4 flex-wrap">
						<Button type="secondary">
							<div class="w-4 h-4">
								<ShieldGlobe />
							</div>
						</Button>

						<Switch.Root bind:value name="size-default">
							<Switch.Control defaultChecked icon={GridSquare} value="source" />
							<Switch.Control icon={ListUnordered} value="output" />
						</Switch.Root>

						<Button type="secondary" prefix={UserPlus}>collaborate</Button>

						<div class="flex items-center gap-1">
							<Badge icon={Shield} size="lg" variant="blue">purple</Badge>
							<Badge icon={Shield} size="md" variant="purple">purple</Badge>
							<Badge icon={Shield} size="md" variant="amber-subtle">purple</Badge>
							<Badge icon={Shield} size="lg" variant="red-subtle">purple</Badge>
						</div>

						<Button size="small">
							<div class="w-4 h-4">
								<ShieldGlobe />
							</div>
						</Button>
					</div>
					<div class="babsolute top-0 left-0 w-full h-full"></div>
				</div>
				<div class="mt-[32px] w-full h-[48px]">
					<p
						class="first-letter:capitalize text-base text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-semibold leading-6 tracking-[-0.32px]"
					>
						components
					</p>
					<p
						class="first-letter:capitalize text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900 leading-6"
					>
						building blocks for svelte applications.
					</p>
				</div>
			</a>
		</div>
		<div class="border-b border-kui-light-gray-200 dark:border-kui-dark-gray-400">
			<a
				href="#/"
				class="w-full h-full group block p-[32px] transition-colors hover:bg-kui-light-bg dark:hover:bg-kui-dark-bg"
			>
				<div class="flex flex-col gap-7 text-kui-light-gray-900 dark:text-kui-dark-gray-900">
					<div class="flex justify-between">
						<span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[0ms]"
							style="transition-delay: 0ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M2.5 5.5V2.5H5.5V5.5H2.5ZM1 2C1 1.44772 1.44772 1 2 1H6C6.55228 1 7 1.44772 7 2V6C7 6.55228 6.55228 7 6 7H2C1.44772 7 1 6.55228 1 6V2ZM2.5 13.5V10.5H5.5V13.5H2.5ZM1 10C1 9.44772 1.44772 9 2 9H6C6.55228 9 7 9.44772 7 10V14C7 14.5523 6.55228 15 6 15H2C1.44772 15 1 14.5523 1 14V10ZM10.5 2.5V5.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V2C15 1.44772 14.5523 1 14 1H10ZM10.5 13.5V10.5H13.5V13.5H10.5ZM9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[0ms]"
							style="transition-delay: 0ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.5 10.25V13.25C13.5 13.3881 13.3881 13.5 13.25 13.5H2.75C2.61193 13.5 2.5 13.3881 2.5 13.25L2.5 2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H5.75H6.5V1H5.75H2.75C1.7835 1 1 1.7835 1 2.75V13.25C1 14.2165 1.7835 15 2.75 15H13.25C14.2165 15 15 14.2165 15 13.25V10.25V9.5H13.5V10.25ZM9 1H9.75H14.2495C14.6637 1 14.9995 1.33579 14.9995 1.75V6.25V7H13.4995V6.25V3.56066L8.53033 8.52978L8 9.06011L6.93934 7.99945L7.46967 7.46912L12.4388 2.5H9.75H9V1Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[0ms]"
							style="transition-delay: 0ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[0ms]"
							style="transition-delay: 0ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M5.35066 2.06247C5.96369 1.78847 6.62701 1.60666 7.32351 1.53473L7.16943 0.0426636C6.31208 0.1312 5.49436 0.355227 4.73858 0.693033L5.35066 2.06247ZM8.67651 1.53473C11.9481 1.87258 14.5 4.63876 14.5 8.00001C14.5 11.5899 11.5899 14.5 8.00001 14.5C4.63901 14.5 1.87298 11.9485 1.5348 8.67722L0.0427551 8.83147C0.459163 12.8594 3.86234 16 8.00001 16C12.4183 16 16 12.4183 16 8.00001C16 3.86204 12.8589 0.458666 8.83059 0.0426636L8.67651 1.53473ZM2.73972 4.18084C3.14144 3.62861 3.62803 3.14195 4.18021 2.74018L3.29768 1.52727C2.61875 2.02128 2.02064 2.61945 1.52671 3.29845L2.73972 4.18084ZM1.5348 7.32279C1.60678 6.62656 1.78856 5.96348 2.06247 5.35066L0.693033 4.73858C0.355343 5.4941 0.131354 6.31152 0.0427551 7.16854L1.5348 7.32279ZM8.75001 4.75V4H7.25001V4.75V7.875C7.25001 8.18976 7.3982 8.48615 7.65001 8.675L9.55001 10.1L10.15 10.55L11.05 9.35L10.45 8.9L8.75001 7.625V4.75Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[0ms]"
							style="transition-delay: 0ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.268 14.0934C11.9051 13.4838 13.2303 12.2333 13.9384 10.6469C13.1192 10.7941 12.2138 10.9111 11.2469 10.9925C11.0336 12.2005 10.695 13.2621 10.268 14.0934ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.48347 14.4823C8.32384 14.494 8.16262 14.5 8 14.5C7.83738 14.5 7.67616 14.494 7.51654 14.4823C7.5132 14.4791 7.50984 14.4759 7.50647 14.4726C7.2415 14.2165 6.94578 13.7854 6.67032 13.1558C6.41594 12.5744 6.19979 11.8714 6.04101 11.0778C6.67605 11.1088 7.33104 11.125 8 11.125C8.66896 11.125 9.32395 11.1088 9.95899 11.0778C9.80021 11.8714 9.58406 12.5744 9.32968 13.1558C9.05422 13.7854 8.7585 14.2165 8.49353 14.4726C8.49016 14.4759 8.4868 14.4791 8.48347 14.4823ZM11.4187 9.72246C12.5137 9.62096 13.5116 9.47245 14.3724 9.28806C14.4561 8.87172 14.5 8.44099 14.5 8C14.5 7.55901 14.4561 7.12828 14.3724 6.71194C13.5116 6.52755 12.5137 6.37904 11.4187 6.27753C11.4719 6.83232 11.5 7.40867 11.5 8C11.5 8.59133 11.4719 9.16768 11.4187 9.72246ZM10.1525 6.18401C10.2157 6.75982 10.25 7.36805 10.25 8C10.25 8.63195 10.2157 9.24018 10.1525 9.81598C9.46123 9.85455 8.7409 9.875 8 9.875C7.25909 9.875 6.53877 9.85455 5.84749 9.81598C5.7843 9.24018 5.75 8.63195 5.75 8C5.75 7.36805 5.7843 6.75982 5.84749 6.18401C6.53877 6.14545 7.25909 6.125 8 6.125C8.74091 6.125 9.46123 6.14545 10.1525 6.18401ZM11.2469 5.00748C12.2138 5.08891 13.1191 5.20593 13.9384 5.35306C13.2303 3.7667 11.9051 2.51622 10.268 1.90662C10.695 2.73788 11.0336 3.79953 11.2469 5.00748ZM8.48347 1.51771C8.4868 1.52089 8.49016 1.52411 8.49353 1.52737C8.7585 1.78353 9.05422 2.21456 9.32968 2.84417C9.58406 3.42562 9.80021 4.12856 9.95899 4.92219C9.32395 4.89118 8.66896 4.875 8 4.875C7.33104 4.875 6.67605 4.89118 6.04101 4.92219C6.19978 4.12856 6.41594 3.42562 6.67032 2.84417C6.94578 2.21456 7.2415 1.78353 7.50647 1.52737C7.50984 1.52411 7.51319 1.52089 7.51653 1.51771C7.67615 1.50597 7.83738 1.5 8 1.5C8.16262 1.5 8.32384 1.50597 8.48347 1.51771ZM5.73202 1.90663C4.0949 2.51622 2.76975 3.7667 2.06159 5.35306C2.88085 5.20593 3.78617 5.08891 4.75309 5.00748C4.96639 3.79953 5.30497 2.73788 5.73202 1.90663ZM4.58133 6.27753C3.48633 6.37904 2.48837 6.52755 1.62761 6.71194C1.54392 7.12828 1.5 7.55901 1.5 8C1.5 8.44099 1.54392 8.87172 1.62761 9.28806C2.48837 9.47245 3.48633 9.62096 4.58133 9.72246C4.52807 9.16768 4.5 8.59133 4.5 8C4.5 7.40867 4.52807 6.83232 4.58133 6.27753ZM4.75309 10.9925C3.78617 10.9111 2.88085 10.7941 2.06159 10.6469C2.76975 12.2333 4.0949 13.4838 5.73202 14.0934C5.30497 13.2621 4.96639 12.2005 4.75309 10.9925Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[0ms]"
							style="transition-delay: 0ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M2.5 2.38401C2.64568 2.28957 2.84672 2.17097 3.09632 2.0516C3.67556 1.77457 4.50202 1.5 5.5 1.5C6.36835 1.5 7.01666 1.91731 7.76416 2.47582C7.81395 2.51302 7.86487 2.55137 7.91678 2.59046C8.2325 2.82825 8.58515 3.09385 8.94862 3.30046C9.38732 3.54983 9.90016 3.75 10.5 3.75C11.4771 3.75 12.5081 3.46807 13.2589 3.20897C13.3421 3.18026 13.4226 3.15157 13.5 3.12321V8.81917C13.366 8.88807 13.1923 8.96944 12.9825 9.05151C12.4127 9.27435 11.5825 9.49998 10.5568 9.49998C9.65149 9.49998 9.11435 9.17173 8.42753 8.74001L8.40495 8.72582C7.70405 8.28516 6.85285 7.75 5.5 7.75C4.25466 7.75 3.22521 8.08445 2.5 8.42432V2.38401ZM2.5 10.134V15.25V16H1V15.25V2V1.65215L1.26554 1.42746L1.75 2C1.26554 1.42746 1.26576 1.42728 1.26599 1.42709L1.26646 1.42668L1.26752 1.42579L1.27005 1.42367L1.27679 1.41807L1.29689 1.4017C1.31321 1.38857 1.33537 1.37107 1.36321 1.34985C1.41885 1.30743 1.49735 1.24998 1.59739 1.18261C1.79715 1.04807 2.08466 0.872716 2.44914 0.698399C3.17671 0.350428 4.22526 0 5.5 0C6.90437 0 7.9038 0.707694 8.66198 1.27418C8.72015 1.31765 8.77638 1.3599 8.831 1.40094C9.15213 1.64223 9.41729 1.84147 9.68987 1.99641C9.99337 2.16892 10.2476 2.25 10.5 2.25C11.2275 2.25 12.0715 2.03193 12.7695 1.79103C13.1109 1.67321 13.4025 1.55523 13.6079 1.46707C13.7104 1.42308 13.7908 1.38677 13.8446 1.36197C13.8714 1.34957 13.8916 1.34007 13.9044 1.33395L13.9182 1.32736L13.9206 1.32621L13.9208 1.32612L13.9209 1.32608L13.9209 1.32605L13.9211 1.32597L15 0.798502V2V9.24998V9.6392L14.6817 9.86326L14.25 9.24998C14.6817 9.86326 14.6815 9.86342 14.6813 9.86359L14.6808 9.86394L14.6797 9.86471L14.6771 9.86653L14.6702 9.87124L14.6502 9.88477C14.6341 9.89556 14.6123 9.90981 14.5851 9.92701C14.5307 9.96141 14.4542 10.0077 14.3569 10.0618C14.1624 10.1699 13.8834 10.3098 13.5289 10.4485C12.8202 10.7256 11.8039 11 10.5568 11C9.20395 11 8.35275 10.4648 7.65185 10.0242L7.62928 10.01C6.94245 9.57826 6.40532 9.25 5.5 9.25C4.50202 9.25 3.67557 9.52457 3.09633 9.8016C2.84672 9.92098 2.64568 10.0396 2.5 10.134ZM2.23212 10.3245C2.23169 10.3249 2.23159 10.325 2.23184 10.3248L2.23212 10.3245Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[0ms]"
							style="transition-delay: 0ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M7.9925 0C4.95079 0 2.485 2.46579 2.485 5.5075V8.22669C2.485 8.77318 2.21321 9.28388 1.75992 9.58912L1.33108 9.8779L1 10.1009V10.5V11.25V12H1.75H14.25H15V11.25V10.5V10.0986L14.666 9.87596L14.2306 9.58565C13.7741 9.28137 13.5 8.76913 13.5 8.22059V5.5075C13.5 2.46579 11.0342 0 7.9925 0ZM3.985 5.5075C3.985 3.29422 5.77922 1.5 7.9925 1.5C10.2058 1.5 12 3.29422 12 5.5075V8.22059C12 9.09029 12.36 9.91233 12.9801 10.5H3.01224C3.62799 9.91235 3.985 9.09303 3.985 8.22669V5.5075ZM10.7486 13.5H9.16778L9.16337 13.5133C9.09591 13.716 8.94546 13.9098 8.72067 14.0501C8.52343 14.1732 8.27577 14.25 8.00002 14.25C7.72426 14.25 7.47661 14.1732 7.27936 14.0501C7.05458 13.9098 6.90412 13.716 6.83666 13.5133L6.83225 13.5H5.25143L5.41335 13.9867C5.60126 14.5516 5.99263 15.0152 6.48523 15.3226C6.92164 15.5949 7.44461 15.75 8.00002 15.75C8.55542 15.75 9.07839 15.5949 9.5148 15.3226C10.0074 15.0152 10.3988 14.5516 10.5867 13.9867L10.7486 13.5Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[0ms]"
							style="transition-delay: 0ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
									fill="currentColor"
								></path></svg
							></span
						>
					</div>
					<div class="flex justify-between">
						<span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[100ms]"
							style="transition-delay: 20ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.5 4.057V9.52717C3.5 10.9221 4.27429 12.2018 5.50997 12.849L8 14.1533L10.49 12.849C11.7257 12.2018 12.5 10.9221 12.5 9.52717V4.057C12.3094 4.00405 12.1074 3.9513 11.8932 3.89539C11.746 3.85699 11.5932 3.81709 11.4344 3.7746C10.8476 3.61758 10.204 3.43066 9.61101 3.17017C9.02666 2.91351 8.44336 2.56529 8 2.05704C7.55664 2.56529 6.97334 2.91351 6.38899 3.17017C5.79596 3.43066 5.15243 3.61758 4.5656 3.7746C4.40682 3.81709 4.25396 3.85699 4.10684 3.89539C3.89262 3.9513 3.69055 4.00405 3.5 4.057ZM7.25 0C7.25 0.467199 7.10537 0.796772 6.87802 1.06132C6.6357 1.34329 6.26955 1.58432 5.78576 1.79681C5.30375 2.00853 4.75351 2.17155 4.17787 2.32558C4.04421 2.36134 3.90727 2.39707 3.76932 2.43305C3.33687 2.54586 2.89458 2.66124 2.51283 2.78849L2 2.95943V3.5V9.52717C2 11.4801 3.084 13.2716 4.81396 14.1778L7.65199 15.6644L8 15.8467L8.34801 15.6644L11.186 14.1778C12.916 13.2716 14 11.4801 14 9.52717V3.5V2.95943L13.4872 2.78849C13.1054 2.66124 12.6631 2.54586 12.2307 2.43305C12.0927 2.39707 11.9558 2.36134 11.8221 2.32558C11.2465 2.17155 10.6962 2.00853 10.2142 1.79681C9.73045 1.58432 9.3643 1.34329 9.12198 1.06132C8.89463 0.796772 8.75 0.467199 8.75 0H7.25Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[100ms]"
							style="transition-delay: 20ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1.67705 7.5L3.92705 3H12.0729L14.3229 7.5H10H9.25V8.25C9.25 8.94036 8.69036 9.5 8 9.5C7.30964 9.5 6.75 8.94036 6.75 8.25V7.5H6H1.67705ZM1.5 9V12C1.5 12.5523 1.94772 13 2.5 13H13.5C14.0523 13 14.5 12.5523 14.5 12V9H10.6465C10.32 10.1543 9.25878 11 8 11C6.74122 11 5.67998 10.1543 5.35352 9H1.5ZM3 1.5H13L15.8944 7.28885C15.9639 7.42771 16 7.58082 16 7.73607V12C16 13.3807 14.8807 14.5 13.5 14.5H2.5C1.11929 14.5 0 13.3807 0 12V7.73607C0 7.58082 0.0361451 7.42771 0.105573 7.28885L3 1.5Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[100ms]"
							style="transition-delay: 20ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M11.75 0.189331L12.2803 0.719661L15.2803 3.71966L15.8107 4.24999L15.2803 4.78032L5.15901 14.9016C4.45575 15.6049 3.50192 16 2.50736 16H0.75H0V15.25V13.4926C0 12.4981 0.395088 11.5442 1.09835 10.841L11.2197 0.719661L11.75 0.189331ZM11.75 2.31065L9.81066 4.24999L11.75 6.18933L13.6893 4.24999L11.75 2.31065ZM2.15901 11.9016L8.75 5.31065L10.6893 7.24999L4.09835 13.841C3.67639 14.2629 3.1041 14.5 2.50736 14.5H1.5V13.4926C1.5 12.8959 1.73705 12.3236 2.15901 11.9016ZM9 16H16V14.5H9V16Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[100ms]"
							style="transition-delay: 20ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.5 13.5V6.5V5.41421C14.5 5.149 14.3946 4.89464 14.2071 4.70711L9.79289 0.292893C9.60536 0.105357 9.351 0 9.08579 0H8H3H1.5V1.5V13.5C1.5 14.8807 2.61929 16 4 16H12C13.3807 16 14.5 14.8807 14.5 13.5ZM13 13.5V6.5H9.5H8V5V1.5H3V13.5C3 14.0523 3.44772 14.5 4 14.5H12C12.5523 14.5 13 14.0523 13 13.5ZM9.5 5V2.12132L12.3787 5H9.5ZM5.13 5.00062H4.505V6.25062H5.13H6H6.625V5.00062H6H5.13ZM4.505 8H5.13H11H11.625V9.25H11H5.13H4.505V8ZM5.13 11H4.505V12.25H5.13H11H11.625V11H11H5.13Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[100ms]"
							style="transition-delay: 20ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.5 3C14.5 3.82843 13.8284 4.5 13 4.5C12.1716 4.5 11.5 3.82843 11.5 3C11.5 2.17157 12.1716 1.5 13 1.5C13.8284 1.5 14.5 2.17157 14.5 3ZM13.5 5.95852C13.3374 5.9858 13.1704 6 13 6C11.3431 6 10 4.65685 10 3C10 2.82964 10.0142 2.6626 10.0415 2.5H4.75C3.50736 2.5 2.5 3.50736 2.5 4.75V11.25C2.5 12.4926 3.50736 13.5 4.75 13.5H11.25C12.4926 13.5 13.5 12.4926 13.5 11.25V5.95852ZM15 5.23611V11.25C15 13.3211 13.3211 15 11.25 15H4.75C2.67893 15 1 13.3211 1 11.25V4.75C1 2.67893 2.67893 1 4.75 1H10.7639C11.3132 0.386251 12.1115 0 13 0C14.6569 0 16 1.34315 16 3C16 3.8885 15.6137 4.68679 15 5.23611Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[100ms]"
							style="transition-delay: 20ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.8591 1.70735C10.3257 1.70735 9.81417 1.91925 9.437 2.29643L3.19455 8.53886C2.56246 9.17095 2.20735 10.0282 2.20735 10.9222C2.20735 11.8161 2.56246 12.6734 3.19455 13.3055C3.82665 13.9376 4.68395 14.2927 5.57786 14.2927C6.47178 14.2927 7.32908 13.9376 7.96117 13.3055L14.2036 7.06304L14.7038 6.56287L15.7041 7.56321L15.204 8.06337L8.96151 14.3058C8.06411 15.2032 6.84698 15.7074 5.57786 15.7074C4.30875 15.7074 3.09162 15.2032 2.19422 14.3058C1.29682 13.4084 0.792664 12.1913 0.792664 10.9222C0.792664 9.65305 1.29682 8.43592 2.19422 7.53852L8.43666 1.29609C9.07914 0.653606 9.95054 0.292664 10.8591 0.292664C11.7678 0.292664 12.6392 0.653606 13.2816 1.29609C13.9241 1.93857 14.2851 2.80997 14.2851 3.71857C14.2851 4.62718 13.9241 5.49858 13.2816 6.14106L13.2814 6.14133L7.0324 12.3835C7.03231 12.3836 7.03222 12.3837 7.03213 12.3838C6.64459 12.7712 6.11905 12.9888 5.57107 12.9888C5.02297 12.9888 4.49731 12.7711 4.10974 12.3835C3.72217 11.9959 3.50444 11.4703 3.50444 10.9222C3.50444 10.3741 3.72217 9.8484 4.10974 9.46084L4.11004 9.46054L9.877 3.70039L10.3775 3.20051L11.3772 4.20144L10.8767 4.70131L5.11008 10.4612C5.11005 10.4612 5.11003 10.4612 5.11 10.4613C4.98779 10.5835 4.91913 10.7493 4.91913 10.9222C4.91913 11.0951 4.98782 11.2609 5.11008 11.3832C5.23234 11.5054 5.39817 11.5741 5.57107 11.5741C5.74398 11.5741 5.9098 11.5054 6.03206 11.3832L6.03233 11.3829L12.2813 5.14072C12.2814 5.14063 12.2815 5.14054 12.2816 5.14045C12.6586 4.7633 12.8704 4.25185 12.8704 3.71857C12.8704 3.18516 12.6585 2.6736 12.2813 2.29643C11.9041 1.91925 11.3926 1.70735 10.8591 1.70735Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[100ms]"
							style="transition-delay: 20ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.4382 11.5H10.8242H10.0742V13H10.8242H14.9988C15.5511 13 15.9988 12.5523 15.9988 12V7.82537V7.07537H14.4988V7.82537V10.4393L9.20706 5.14755C8.81659 4.75708 8.18353 4.75702 7.79298 5.14742L5.50009 7.43942L1.78032 3.71966L1.24999 3.18933L0.189331 4.24999L0.719662 4.78032L4.79292 8.85357C5.18339 9.24404 5.81645 9.2441 6.207 8.8537L8.49989 6.5617L13.4382 11.5Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[100ms]"
							style="transition-delay: 20ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M2.5 3.5C2.5 2.94771 2.94772 2.5 3.5 2.5H4.25V1H3.5C2.11929 1 1 2.11929 1 3.5V6.29449C1 6.65016 0.881575 6.86927 0.738252 7.00305C0.587949 7.14333 0.344525 7.24999 0 7.24999V8.74999C0.344525 8.74999 0.587948 8.85665 0.738251 8.99694C0.881575 9.13071 1 9.34982 1 9.70549V12.5C1 13.8807 2.11929 15 3.5 15H4.25V13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5V9.70549C2.5 9.03542 2.27894 8.44137 1.86198 7.99999C2.27894 7.55861 2.5 6.96457 2.5 6.29449V3.5ZM12.5 1H11.75V2.5H12.5C13.0523 2.5 13.5 2.94772 13.5 3.5V6.29449C13.5 6.96453 13.7212 7.5586 14.1382 7.99999C13.7212 8.44139 13.5 9.03545 13.5 9.70549V12.5C13.5 13.0523 13.0523 13.5 12.5 13.5H11.75V15H12.5C13.8807 15 15 13.8807 15 12.5V9.70549C15 9.35012 15.1184 9.13095 15.2618 8.99706C15.4122 8.85668 15.6556 8.74999 16 8.74999V7.24999C15.6556 7.24999 15.4122 7.1433 15.2618 7.00292C15.1184 6.86903 15 6.64986 15 6.29449V3.5C15 2.11928 13.8807 1 12.5 1ZM8.75 10.25V9.5H7.25V10.25V12.5986C7.25 13.0383 7.11985 13.4681 6.87596 13.834L6.45994 14.458L7.70801 15.2901L8.12404 14.666C8.5322 14.0538 8.75 13.3344 8.75 12.5986V10.25ZM8 7C8.69036 7 9.25 6.44036 9.25 5.75C9.25 5.05964 8.69036 4.5 8 4.5C7.30964 4.5 6.75 5.05964 6.75 5.75C6.75 6.44036 7.30964 7 8 7Z"
									fill="currentColor"
								></path></svg
							></span
						>
					</div>
					<div class="flex justify-between">
						<span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[200ms]"
							style="transition-delay: 40ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M6.5 5.5C6.5 3.29086 8.29086 1.5 10.5 1.5C12.7091 1.5 14.5 3.29086 14.5 5.5C14.5 7.70914 12.7091 9.5 10.5 9.5C10.0496 9.5 9.61798 9.42583 9.21589 9.28964L9.09885 9.25H8.97528H8H7.25V10V12.25H5.75H5V13V14.5H1.5V11.5818L6.38022 7.14521L6.70674 6.84837L6.60585 6.41878C6.53673 6.12449 6.5 5.81702 6.5 5.5ZM10.5 0C7.46243 0 5 2.46243 5 5.5C5 5.77753 5.02062 6.05064 5.06048 6.31778L0.245495 10.695L0 10.9182V11.25V15.25V16H0.75H5.75H6.5V15.25V13.75H8H8.75V13V10.75H8.85639C9.37626 10.9126 9.92859 11 10.5 11C13.5376 11 16 8.53757 16 5.5C16 2.46243 13.5376 0 10.5 0ZM10.5 6.5C11.0523 6.5 11.5 6.05228 11.5 5.5C11.5 4.94772 11.0523 4.5 10.5 4.5C9.94771 4.5 9.5 4.94772 9.5 5.5C9.5 6.05228 9.94771 6.5 10.5 6.5Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[200ms]"
							style="transition-delay: 40ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.5 4.72094V13.5C13.5 14.0523 13.0523 14.5 12.5 14.5H11.5V11C11.5 10.4477 11.0523 10 10.5 10H5.5C4.94772 10 4.5 10.4477 4.5 11V14.5H3.5C2.94772 14.5 2.5 14.0523 2.5 13.5V1.5H5V3.25V4H6.5V3.25V1.5H9.47383L13.5 4.72094ZM6 14.5H10V11.5H6V14.5ZM4.5 16H3.5C2.11929 16 1 14.8807 1 13.5V1.5V0H2.5H9.64922C9.87629 0 10.0966 0.0772807 10.2739 0.219131L14.6247 3.69976C14.8619 3.88953 15 4.17684 15 4.48062V13.5C15 14.8807 13.8807 16 12.5 16H11.5H10H6H4.5Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[200ms]"
							style="transition-delay: 40ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M5.71051 1.74152L6.33567 1.32719C7.60121 0.488465 9.1197 7.12626e-08 10.75 0C12.3803 -7.12625e-08 13.8988 0.488465 15.1643 1.32719L15.7895 1.74152L14.9608 2.99185L14.3357 2.57752C13.3082 1.8966 12.0766 1.5 10.75 1.5C9.42343 1.5 8.19176 1.8966 7.16433 2.57752L6.53916 2.99185L5.71051 1.74152ZM11.25 8.00003V5.99996H9.75V8.00003H1.5H0V9.50003V13.5C0 14.8807 1.11929 16 2.5 16H13.5C14.8807 16 16 14.8807 16 13.5V9.50003V8.00003H14.5H11.25ZM1.5 9.50003H14.5V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V9.50003ZM3.75 12.5C4.16421 12.5 4.5 12.1642 4.5 11.75C4.5 11.3358 4.16421 11 3.75 11C3.33579 11 3 11.3358 3 11.75C3 12.1642 3.33579 12.5 3.75 12.5ZM7 11.75C7 12.1642 6.66421 12.5 6.25 12.5C5.83579 12.5 5.5 12.1642 5.5 11.75C5.5 11.3358 5.83579 11 6.25 11C6.66421 11 7 11.3358 7 11.75ZM8.39655 3.58749L7.73506 3.94094L8.44195 5.26393L9.10345 4.91048C9.59344 4.64868 10.1532 4.49994 10.75 4.49994C11.3468 4.49994 11.9066 4.64868 12.3966 4.91048L13.0581 5.26393L13.7649 3.94094L13.1034 3.58749C12.4013 3.21232 11.5993 2.99994 10.75 2.99994C9.90067 2.99994 9.09871 3.21232 8.39655 3.58749Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[200ms]"
							style="transition-delay: 40ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M4.75 1.75V1H3.25V1.75V9.09451C1.95608 9.42754 1 10.6021 1 12C1 13.6569 2.34315 15 4 15C5.42051 15 6.61042 14.0127 6.921 12.6869C8.37102 12.4872 9.7262 11.8197 10.773 10.773C11.8197 9.7262 12.4872 8.37102 12.6869 6.921C14.0127 6.61042 15 5.42051 15 4C15 2.34315 13.6569 1 12 1C10.3431 1 9 2.34315 9 4C9 5.37069 9.91924 6.52667 11.1749 6.8851C10.9929 7.94904 10.4857 8.9389 9.71231 9.71231C8.9389 10.4857 7.94904 10.9929 6.8851 11.1749C6.59439 10.1565 5.77903 9.35937 4.75 9.09451V1.75ZM13.5 4C13.5 4.82843 12.8284 5.5 12 5.5C11.1716 5.5 10.5 4.82843 10.5 4C10.5 3.17157 11.1716 2.5 12 2.5C12.8284 2.5 13.5 3.17157 13.5 4ZM4 13.5C4.82843 13.5 5.5 12.8284 5.5 12C5.5 11.1716 4.82843 10.5 4 10.5C3.17157 10.5 2.5 11.1716 2.5 12C2.5 12.8284 3.17157 13.5 4 13.5Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[200ms]"
							style="transition-delay: 40ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M1 3.75C1 2.23122 2.23122 1 3.75 1C5.26878 1 6.5 2.23122 6.5 3.75V5H9.5V3.75C9.5 2.23122 10.7312 1 12.25 1C13.7688 1 15 2.23122 15 3.75C15 5.26878 13.7688 6.5 12.25 6.5H11V9.5H12.25C13.7688 9.5 15 10.7312 15 12.25C15 13.7688 13.7688 15 12.25 15C10.7312 15 9.5 13.7688 9.5 12.25V11H6.5V12.25C6.5 13.7688 5.26878 15 3.75 15C2.23122 15 1 13.7688 1 12.25C1 10.7312 2.23122 9.5 3.75 9.5H5V6.5H3.75C2.23122 6.5 1 5.26878 1 3.75ZM11 5H12.25C12.9404 5 13.5 4.44036 13.5 3.75C13.5 3.05964 12.9404 2.5 12.25 2.5C11.5596 2.5 11 3.05964 11 3.75V5ZM9.5 6.5H6.5V9.5H9.5V6.5ZM11 12.25V11H12.25C12.9404 11 13.5 11.5596 13.5 12.25C13.5 12.9404 12.9404 13.5 12.25 13.5C11.5596 13.5 11 12.9404 11 12.25ZM5 11H3.75C3.05964 11 2.5 11.5596 2.5 12.25C2.5 12.9404 3.05964 13.5 3.75 13.5C4.44036 13.5 5 12.9404 5 12.25V11ZM5 3.75V5H3.75C3.05964 5 2.5 4.44036 2.5 3.75C2.5 3.05964 3.05964 2.5 3.75 2.5C4.44036 2.5 5 3.05964 5 3.75Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[200ms]"
							style="transition-delay: 40ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.75 5.5C11.7165 5.5 12.5 4.7165 12.5 3.75C12.5 2.7835 11.7165 2 10.75 2C9.7835 2 9 2.7835 9 3.75C9 4.7165 9.7835 5.5 10.75 5.5ZM10.75 0.75C12.1479 0.75 13.3225 1.70608 13.6555 3H15.25H16V4.5H15.25H13.6555C13.3225 5.79392 12.1479 6.75 10.75 6.75C9.35212 6.75 8.17754 5.79392 7.84451 4.5H0.75H0V3H0.75H7.84451C8.17754 1.70608 9.35212 0.75 10.75 0.75ZM15.25 13H16V11.5H15.25L8.15549 11.5C7.82245 10.2061 6.64788 9.25 5.25 9.25C3.85212 9.25 2.67755 10.2061 2.34451 11.5H0.75H0V13H0.75H2.34451C2.67755 14.2939 3.85212 15.25 5.25 15.25C6.64788 15.25 7.82246 14.2939 8.15549 13L15.25 13ZM7 12.2513C7 12.2509 7 12.2504 7 12.25C7 12.2496 7 12.2491 7 12.2487C6.99929 11.2828 6.21606 10.5 5.25 10.5C4.2835 10.5 3.5 11.2835 3.5 12.25C3.5 13.2165 4.2835 14 5.25 14C6.21606 14 6.99929 13.2172 7 12.2513Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[200ms]"
							style="transition-delay: 40ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M13.5 13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V7H9.14987C8.1619 7 7.2666 6.41816 6.86534 5.51535L5.52519 2.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H13.5ZM7.16667 2.5L8.23606 4.90614C8.39656 5.26727 8.75468 5.5 9.14987 5.5H14.5V2.5H7.16667ZM13.5 15C14.8807 15 16 13.8807 16 12.5V6.5V2.5V1H14.5H6.5H1.5H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5Z"
									fill="currentColor"
								></path></svg
							></span
						><span
							class="group-hover:text-kui-light-gray-1000 dark:group-hover:text-kui-dark-gray-1000 transition-colors delay-[200ms]"
							style="transition-delay: 40ms; transition-property: color; transition-duration: 200ms;"
							><svg
								data-testid="geist-icon"
								height="16"
								stroke-linejoin="round"
								viewBox="0 0 16 16"
								width="16"
								style="color: currentcolor;"
								><path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.30204 0.785875C4.54182 0.289965 6.20312 0 8 0C9.79688 0 11.4582 0.289965 12.698 0.785875C13.3158 1.033 13.8661 1.34602 14.2742 1.73197C14.6839 2.11942 15 2.63215 15 3.25V8V12.75C15 13.3679 14.6839 13.8806 14.2742 14.268C13.8661 14.654 13.3158 14.967 12.698 15.2141C11.4582 15.71 9.79688 16 8 16C6.20312 16 4.54182 15.71 3.30204 15.2141C2.68423 14.967 2.13394 14.654 1.72583 14.268C1.31613 13.8806 1 13.3679 1 12.75V8V3.25C1 2.63215 1.31613 2.11942 1.72583 1.73197C2.13394 1.34602 2.68423 1.033 3.30204 0.785875ZM2.5 5.33081V8C2.5 8.0725 2.53365 8.21745 2.75649 8.4282C2.98091 8.64044 3.34591 8.86612 3.85913 9.07141C4.8814 9.48032 6.3451 9.75 8 9.75C9.6549 9.75 11.1186 9.48032 12.1409 9.07141C12.6541 8.86612 13.0191 8.64044 13.2435 8.4282C13.4664 8.21745 13.5 8.0725 13.5 8V5.33081C13.2518 5.47297 12.982 5.60051 12.698 5.71412C11.4582 6.21004 9.79688 6.5 8 6.5C6.20312 6.5 4.54182 6.21004 3.30204 5.71412C3.018 5.60051 2.74824 5.47297 2.5 5.33081ZM13.5 3.25C13.5 3.3225 13.4664 3.46746 13.2435 3.6782C13.0191 3.89044 12.6541 4.11612 12.1409 4.32141C11.1186 4.73032 9.6549 5 8 5C6.3451 5 4.8814 4.73032 3.85913 4.32141C3.34591 4.11612 2.98091 3.89044 2.75649 3.6782C2.53365 3.46746 2.5 3.3225 2.5 3.25C2.5 3.1775 2.53365 3.03254 2.75649 2.8218C2.98091 2.60956 3.34591 2.38388 3.85913 2.17859C4.8814 1.76968 6.3451 1.5 8 1.5C9.6549 1.5 11.1186 1.76968 12.1409 2.17859C12.6541 2.38388 13.0191 2.60956 13.2435 2.8218C13.4664 3.03254 13.5 3.1775 13.5 3.25ZM13.5 10.0808C13.2518 10.223 12.982 10.3505 12.698 10.4641C11.4582 10.96 9.79688 11.25 8 11.25C6.20312 11.25 4.54182 10.96 3.30204 10.4641C3.018 10.3505 2.74824 10.223 2.5 10.0808V12.75C2.5 12.8225 2.53365 12.9675 2.75649 13.1782C2.98091 13.3904 3.34591 13.6161 3.85913 13.8214C4.8814 14.2303 6.3451 14.5 8 14.5C9.6549 14.5 11.1186 14.2303 12.1409 13.8214C12.6541 13.6161 13.0191 13.3904 13.2435 13.1782C13.4664 12.9675 13.5 12.8225 13.5 12.75V10.0808Z"
									fill="currentColor"
								></path></svg
							></span
						>
					</div>
				</div>
				<div class="mt-[32px] w-full h-[48px]">
					<p
						class="first-letter:capitalize text-base text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-semibold leading-6 tracking-[-0.32px]"
					>
						icons
					</p>
					<p
						class="first-letter:capitalize text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900 leading-6"
					>
						icon set tailored for developer tools.
					</p>
				</div>
			</a>
		</div>

		<div class="border-b border-r border-kui-light-gray-200 dark:border-kui-dark-gray-400">
			<a
				href="/colors"
				class="w-full h-full group block p-[32px] transition-colors hover:bg-kui-light-bg dark:hover:bg-kui-dark-bg"
			>
				<div class="flex justify-between">
					<div
						class="bg-background-200 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full"
					>
						<div
							class="h-[72px] w-2 rounded-full bg-kui-light-gray-800 dark:bg-kui-dark-gray-800"
						></div>
					</div>
					<div
						class="bg-background-200 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full"
					>
						<div
							class="h-[72px] w-2 rounded-full bg-kui-light-blue-800 dark:bg-kui-dark-blue-800"
						></div>
					</div>
					<div
						class="bg-background-200 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full"
					>
						<div
							class="h-[72px] w-2 rounded-full bg-kui-light-purple-800 dark:bg-kui-dark-purple-800"
						></div>
					</div>
					<div
						class="bg-background-200 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full"
					>
						<div
							class="h-[72px] w-2 rounded-full bg-kui-light-pink-800 dark:bg-kui-dark-pink-800"
						></div>
					</div>
					<div
						class="bg-background-200 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full"
					>
						<div
							class="h-[72px] w-2 rounded-full bg-kui-light-red-800 dark:bg-kui-dark-red-800"
						></div>
					</div>
					<div
						class="bg-background-200 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full"
					>
						<div
							class="h-[72px] w-2 rounded-full bg-kui-light-amber-800 dark:bg-kui-dark-amber-800"
						></div>
					</div>
					<div
						class="bg-background-200 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full"
					>
						<div
							class="h-[72px] w-2 rounded-full bg-kui-light-green-800 dark:bg-kui-dark-green-800"
						></div>
					</div>
					<div
						class="bg-background-200 border border-kui-light-gray-alpha-400 dark:border-kui-dark-gray-alpha-400 flex h-[96px] w-[32px] items-center justify-center overflow-hidden rounded-full"
					>
						<div
							class="h-[72px] w-2 rounded-full bg-kui-light-teal-800 dark:bg-kui-dark-teal-800"
						></div>
					</div>
				</div>
				<div class="mt-[32px] w-full h-[48px]">
					<p
						class="first-letter:capitalize text-base text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-semibold leading-6 tracking-[-0.32px]"
					>
						colors
					</p>
					<p
						class="first-letter:capitalize text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900 leading-6"
					>
						a high contrast accessible color system.
					</p>
				</div>
			</a>
		</div>
	</section>
{/snippet}

{#snippet prevAndNext()}
	<Row bottomLine={false}>
		<Pagination next={{ title: 'installation', href: '/installation' }} />
	</Row>
{/snippet}

{#snippet cont()}
	{@render foundation()}
	{@render grid()}
	{@render prevAndNext()}
{/snippet}

{#snippet aside()}
	<Aside asideDataList={asideData} />
{/snippet}

<Shell asideSlot={aside} contSlot={cont} />
