//button

export const buttonSize = `
import { Button } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button size="sm">upload</Button>
	<Button>upload</Button>
	<Button size="lg">upload</Button>
</div>`;


export const buttonTypes = `
import { Button } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button type="secondary">upload</Button>
	<Button type="tertiary">upload</Button>
	<Button type="error">upload</Button>
	<Button type="warning">upload</Button>
</div>`;

export const buttonShapes = `
import { Button } from 'kampsy-ui';
import { ArrowUp } from 'kampsy-ui/icons';

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button aria-label="Upload" shape="square" size="tiny">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="Upload" shape="square" size="small">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="Upload" shape="square">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="Upload" shape="square" size="large">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="Upload" shape="circle" size="tiny">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="Upload" shape="circle" size="small">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="Upload" shape="circle">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="Upload" shape="circle" size="large">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>
</div>`;

export const buttonPrefixAndSuffix = `
import { Button } from 'kampsy-ui';
import { ArrowLeft, ArrowRight } from 'kampsy-ui/icons';

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button prefix={ArrowLeft}>upload</Button>
	<Button suffix={ArrowRight}>upload</Button>
	<Button prefix={ArrowLeft} suffix={ArrowRight}>upload</Button>
</div>`;

export const buttonRounded = `
import { Button } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button size="sm" type="secondary" rounded>upload</Button>
	<Button type="secondary" rounded>upload</Button>
	<Button size="lg" type="secondary" rounded>upload</Button>
</div>`;

export const buttonLoading= `
import { Button } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button size="sm" loading>upload</Button>
	<Button loading>upload</Button>
	<Button size="lg" loading>upload</Button>
</div>`;

export const buttonDisabled= `
import { Button } from 'kampsy-ui';

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button size="sm" disabled>upload</Button>
	<Button disabled>upload</Button>
	<Button size="lg" disabled>upload</Button>
</div>`;