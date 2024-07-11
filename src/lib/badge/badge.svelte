<script lang="ts">
	import type { Snippet } from 'svelte';

	type propsT = {
        class?: string;
		variant:
			| 'gray'
			| 'gray-subtle'
			| 'blue'
			| 'blue-subtle'
			| 'purple'
			| 'purple-subtle'
			| 'amber'
			| 'amber-subtle'
			| 'red'
			| 'red-subtle'
            | 'pink'
            | 'pink-subtle'
            | 'green'
            | 'green-subtle'
            | 'teal'
            | 'teal-subtle'
            | 'inverted';
		children: Snippet;
	};

	let {class:klass = '', variant = 'gray', children }: propsT = $props();

	let variantClass = $derived.by(() => {
		switch (variant) {
			case 'gray':
				return 'bg-light-gray-700 text-light-bg dark:bg-dark-gray-700 dark:text-light-bg';
			case 'gray-subtle':
				return 'bg-light-gray-200 text-light-gray-1000 dark:bg-dark-gray-200 dark:text-dark-gray-1000';
			case 'blue':
				return 'bg-light-blue-700 text-light-bg dark:bg-dark-blue-700 dark:text-light-bg';
			case 'blue-subtle':
				return 'bg-light-blue-200 text-light-blue-900 dark:bg-dark-blue-200 dark:text-dark-blue-900';
			case 'purple':
				return 'bg-light-purple-700 text-light-bg dark:bg-dark-purple-700 dark:text-light-bg';
			case 'purple-subtle':
				return 'bg-light-purple-200 text-light-purple-900 dark:bg-dark-purple-200 dark:text-dark-purple-900';
            case 'amber':
                return 'bg-light-amber-700 text-light-bg dark:bg-dark-amber-700 dark:text-black';
            case 'amber-subtle':
                return 'bg-light-amber-200 text-light-amber-900 dark:bg-dark-amber-200 dark:text-dark-amber-900';
            case 'red':
                return 'bg-light-red-700 text-light-bg dark:bg-dark-red-700 dark:text-light-bg';
            case 'red-subtle':
                return 'bg-light-red-200 text-light-red-900 dark:bg-dark-red-200 dark:text-dark-red-900';
            case 'pink':
                return 'bg-light-pink-700 text-light-bg dark:bg-dark-pink-700 dark:text-light-bg';
            case 'pink-subtle':
                return 'bg-light-pink-200 text-light-pink-900 dark:bg-dark-pink-200 dark:text-dark-pink-900';
            case 'green':
                return 'bg-light-green-700 text-light-bg dark:bg-dark-green-700 dark:text-light-bg';
            case 'green-subtle':
                return 'bg-light-green-200 text-light-green-900 dark:bg-dark-green-200 dark:text-dark-green-900';
            case 'teal':
                return 'bg-light-teal-700 text-light-bg dark:bg-dark-teal-700 dark:text-light-bg';
            case 'teal-subtle':
                return 'bg-light-teal-200 text-light-teal-900 dark:bg-dark-teal-200 dark:text-dark-teal-900';
            case 'inverted':
                return 'bg-light-gray-1000 text-light-gray-100 dark:bg-dark-gray-1000 dark:text-dark-gray-100';
		}
	});

	let badgeClass = $derived.by(() => {
		return `${variantClass}`;
	});
</script>

<span class="flex items-center justify-center h-[24px] rounded-full px-[10px] py-0 {badgeClass} {klass}">
	<span class="text-[12px] font-medium capitalize">
		{@render children()}
	</span>
</span>
