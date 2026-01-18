export const buttonSize = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button size="tiny" aria-label="tiny">upload</Button>
	<Button size="small" aria-label="small">upload</Button>
	<Button aria-label="medium">upload</Button>
	<Button size="large" aria-label="large">upload</Button>
</div>`;

export const buttonVariants = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button variant="secondary" aria-label="secondary" >upload</Button>
	<Button variant="tertiary" aria-label="tertiary">upload</Button>
	<Button variant="error" aria-label="error">upload</Button>
	<Button variant="warning" aria-label="warning">upload</Button>
</div>`;

export const buttonShapes = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
	import { ArrowUp } from 'kampsy-ui/icons';
</script>

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button aria-label="tiny square" shape="square" size="tiny">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="small square" shape="square" size="small">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="medium square" shape="square">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="large square" shape="square" size="large">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="tiny circle" shape="circle" size="tiny">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="small circle" shape="circle" size="small">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="medium circle" shape="circle">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>

	<Button aria-label="large circle" shape="circle" size="large">
		<div class="w-[16px] h-[16px]">
			<ArrowUp />
		</div>
	</Button>
</div>`;

export const buttonPrefixAndSuffix = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
	import { ArrowLeft, ArrowRight } from 'kampsy-ui/icons';
</script>

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button iconPrefix={ArrowLeft} aria-label="icon prefix">upload</Button>
	<Button iconSuffix={ArrowRight} aria-label="icon suffix">upload</Button>
	<Button iconPrefix={ArrowLeft} iconSuffix={ArrowRight} aria-label="icon prefix and suffix">upload</Button>
</div>`;

export const buttonRounded = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button size="tiny" variant="secondary" rounded aria-label="tiny rounded">upload</Button>
	<Button size="small" variant="secondary" rounded aria-label="small rounded">upload</Button>
	<Button variant="secondary" rounded aria-label="medium rounded">upload</Button>
	<Button size="large" variant="secondary" rounded aria-label="large rounded">upload</Button>
</div>`;

export const buttonLoading = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button size="tiny" loading aria-label="tiny loading">upload</Button>
	<Button size="small" loading aria-label="small loading">upload</Button>
	<Button loading aria-label="medium loading">upload</Button>
	<Button size="large" loading aria-label="large loading">upload</Button>
</div>`;

export const buttonDisabled = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="w-full flex flex-wrap gap-4 justify-between">
	<Button size="tiny" disabled aria-label="tiny disabled">upload</Button>
	<Button size="small" disabled aria-label="small disabled">upload</Button>
	<Button disabled aria-label="medium disabled">upload</Button>
	<Button size="large" disabled aria-label="large disabled">upload</Button>
</div>`;
