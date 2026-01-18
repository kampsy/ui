<script lang="ts">
	interface Props {
		class?: string;
		variant?: 'ios' | 'ipad' | 'mac' | 'watch' | 'vision';
		text?: string;
	};
	let { class:klass = '', variant = 'mac', text }: Props = $props();

	let utilities = $state('');

	const ios = [
		'from-[#CF807F]',
		'via-[#EA6F7D]',
		'via-33%',
		'via-[#0D8EB4]',
		'via-66%',
		'to-[#0D4E4E]'
	];
	const ipad = [
		'from-[#339AAF]',
		'via-[#2E76DB]',
		'via-33%',
		'via-[#1B175F]',
		'via-66%',
		'to-[#6F57B4]'
	];
	const mac = [
		'from-[#021B8B]',
		'via-[#1E84D9]',
		'via-33%',
		'via-[#BD83A2]',
		'via-66%',
		'to-[#EF6F33]'
	];
	const watch = ['from-[#1AB7A1]', 'via-[#3D2DA9]', 'via-51%', 'to-[#A53A9F]'];
	const vision = [
		'from-[#FF6148]',
		'via-[#E15C96]',
		'via-33%',
		'via-[#4153E0]',
		'via-66%',
		'to-[#7D7FEB]'
	];

	switch (variant) {
		case 'ios':
			utilities = `bg-linear-to-r ${ios.join(' ')} bg-clip-text text-transparent`;
			break;
		case 'ipad':
			utilities = `bg-linear-to-r ${ipad.join(' ')} bg-clip-text text-transparent`;
			break;
		case 'mac':
			utilities = `bg-linear-to-r ${mac.join(' ')} bg-clip-text text-transparent`;
			break;
		case 'watch':
			utilities = `bg-linear-to-r ${watch.join(' ')} bg-clip-text text-transparent`;
			break;
		case 'vision':
			utilities = `bg-linear-to-r ${vision.join(' ')} bg-clip-text text-transparent`;
			break;
		default:
			utilities = `bg-linear-to-r ${mac.join(' ')} bg-clip-text text-transparent`;
			break;
	}
</script>

<div class="{utilities} {klass}">
	{text}
</div>
