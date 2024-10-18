<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
		class?: string | undefined;
		size?:
			| sizeOption
			| {
					sm: sizeOption;
					md: sizeOption;
					lg: sizeOption;
			  }
			| undefined;
		variant?:
			| variantOption
			| {
					sm: variantOption;
					md: variantOption;
					lg: variantOption;
			  }
			| undefined;
		truncate?: boolean;
		children: Snippet;
	};
	let {
		class: klass = '',
		size = undefined,
		variant = undefined,
		truncate = false,
		children
	}: propsT = $props();

	type sizeOption = 10 | 12 | 14 | 16 | 20 | 24 | 32 | 48;
	type variantOption =
		| 'copy-13'
		| 'copy-14'
		| 'copy-16'
		| 'copy-18'
		| 'copy-20'
		| 'copy-24'
		| 'label-12'
		| 'label-13'
		| 'label-14'
		| 'label-16'
		| 'label-18'
		| 'label-20'
		| 'button-12'
		| 'button-14'
		| 'button-16'
		| 'heading-16'
		| 'heading-20'
		| 'heading-24'
		| 'heading-32'
		| 'heading-40'
		| 'heading-48'
		| 'heading-56'
		| 'heading-64'
		| 'heading-72';

	const sizeObj = {
		10: 'text-[10px] leading-[12px] tracking-normal font-normal',
		12: 'text-[12px] leading-[16px] tracking-normal font-normal',
		14: 'text-[14px] leading-[20px] tracking-normal font-normal',
		16: 'text-[16px] leading-[24px] tracking-normal font-normal',
		20: 'text-[20px] leading-[24px] tracking-[-0.33px] font-semibold',
		24: 'text-[24px] leading-[32px] tracking-[-0.47px] font-semibold',
		32: 'text-[32px] leading-[40px] tracking-[-0.79px] font-semibold',
		48: 'text-[48px] leading-[56px] tracking-[-1.07px] font-bold'
	};

	const variantObj = {
		'copy-13': 'text-[13px] leading-[16px] tracking-normal font-normal',
		'copy-14': 'text-[14px] leading-[20px] tracking-normal font-normal',
		'copy-16': 'text-[16px] leading-[24px] tracking-normal font-normal',
		'copy-18': 'text-[18px] leading-[28px] tracking-normal font-normal',
		'copy-20': 'text-[20px] leading-[36px] tracking-normal font-normal',
		'copy-24': 'text-[24px] leading-[36px] tracking-normal font-normal',
		'label-12': 'text-[12px] leading-[16px] tracking-normal font-normal',
		'label-13': 'text-[13px] leading-[16px] tracking-normal font-normal',
		'label-14': 'text-[14px] leading-[20px] tracking-normal font-normal',
		'label-16': 'text-[16px] leading-[20px] tracking-normal font-normal',
		'label-18': 'text-[18px] leading-[20px] tracking-normal font-normal',
		'label-20': 'text-[20px] leading-[32px] tracking-normal font-normal',
		'button-12': 'text-[12px] leading-[16px] tracking-normal font-medium',
		'button-14': 'text-[14px] leading-[20px] tracking-normal font-medium',
		'button-16': 'text-[16px] leading-[20px] tracking-normal font-medium',
		'heading-16': 'text-[16px] leading-[24px] tracking-[-0.32px] font-semibold',
		'heading-20': 'text-[20px] leading-[26px] tracking-[-0.4px] font-semibold',
		'heading-24': 'text-[24px] leading-[32px] tracking-[-0.96px] font-semibold',
		'heading-32': 'text-[32px] leading-[40px] tracking-[-1.28px] font-semibold',
		'heading-40': 'text-[40px] leading-[48px] tracking-[-2.4px] font-semibold',
		'heading-48': 'text-[48px] leading-[56px] tracking-[-2.88px] font-semibold',
		'heading-56': 'text-[56px] leading-[56px] tracking-[-3.36px] font-semibold',
		'heading-64': 'text-[64px] leading-[64px] tracking-[-3.84px] font-semibold',
		'heading-72': 'text-[72px] leading-[72px] tracking-[-4.32px] font-semibold'
	};

	let view = $state('mobile');

	let sizeClass = $derived.by(() => {
		if (size) {
			if (typeof size === 'number') {
				return sizeObj[size];
			} else if (typeof size === 'object') {
				if (view === 'mobile') {
					return sizeObj[size.sm];
				} else if (view === 'tablet') {
					return sizeObj[size.md];
				} else if (view === 'desktop') {
					return sizeObj[size.lg];
				}
			}
		} else if (variant) {
			if (typeof variant === 'string') {
				return variantObj[variant];
			} else if (typeof variant === 'object') {
				if (view === 'mobile') {
					return variantObj[variant.sm];
				} else if (view === 'tablet') {
					return variantObj[variant.md];
				} else if (view === 'desktop') {
					return variantObj[variant.lg];
				}
			}
		}
	});

	let truncateClass = truncate ? 'truncate' : '';

	$effect(() => {
		if (window.innerWidth < 767) {
			view = 'mobile';
		} else if (window.innerWidth >= 767 && window.innerWidth <= 1024) {
			view = 'tablet';
		} else {
			view = 'desktop';
		}
		// update when the user is resizing the window
		window.addEventListener('resize', () => {
			if (window.innerWidth < 767) {
				view = 'mobile';
			} else if (window.innerWidth >= 767 && window.innerWidth <= 1024) {
				view = 'tablet';
			} else {
				view = 'desktop';
			}
		});
	});
</script>

<p
	class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 {sizeClass} {truncateClass} {klass}"
>
	{@render children()}
</p>
