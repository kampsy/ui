export const textSize = `
import { Text } from 'kampsy-ui';

<div class="w-full space-y-2">
    <Text size={48}>The Evil Rabbit jumps.</Text>
    <Text size={32}>The Evil Rabbit jumps.</Text>
    <Text size={24}>The Evil Rabbit jumps.</Text>
    <Text size={20}>The Evil Rabbit jumps.</Text>
    <Text size={16}>The Evil Rabbit jumps.</Text>
    <Text size={14}>The Evil Rabbit jumps.</Text>
    <Text size={12}>The Evil Rabbit jumps.</Text>
    <Text size={10}>The Evil Rabbit jumps.</Text>
</div>`;


export const textResponsive = `
import { Text } from 'kampsy-ui';

<div class="w-full">
    <Text size={{ sm: 24, md: 32, lg: 48 }}>The Evil Rabbit jumps.</Text>
</div>`;


export const textVariants = `
import { Text } from 'kampsy-ui';

type VariantOption =
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

const variants: Array<VariantOption> = [
    'heading-72',
    'heading-64',
    'heading-56',
    'heading-48',
    'heading-40',
    'heading-32',
    'heading-24',
    'heading-20',
    'heading-16',
    'button-16',
    'button-14',
    'button-12',
    'label-20',
    'label-18',
    'label-16',
    'label-14',
    'label-13',
    'label-12',
    'copy-24',
    'copy-20',
    'copy-18',
    'copy-16',
    'copy-14',
    'copy-13'
];

<div class="w-full space-y-2">
	{#each variants as variant}
		<Text class="capitalize" {variant}>
			{variant.replace('-', ' ')}
		</Text>
	{/each}
</div>`;


export const textResponsiveVariant = `
import { Text } from 'kampsy-ui';

<div class="w-full space-y-6">
	<Text variant={{ sm: 'heading-24', md: 'heading-32', lg: 'heading-48' }}>
		Responsive Heading
	</Text>
	<Text variant={{ sm: 'copy-14', md: 'copy-16', lg: 'copy-20' }}>
		Responsive Copy, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	</Text>
</div>`;

export const textModifiers = `
import { Text } from 'kampsy-ui';

<div class="w-full">
    <Text size={16}>
        The <strong>Evil Rabbit</strong> <em>jumps</em>
        over the <s>quick brown fox</s> <u>Lawful Meerkat</u>.
    </Text>
</div>`;

export const textTruncate = `
import { Text } from 'kampsy-ui';

<div class="w-full">
    <Text size={16} class="max-w-[100px]" truncate>
        The Evil Rabbit jumps.
    </Text>
</div>`;