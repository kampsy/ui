export const buttonSize = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="flex flex-col md:flex-row items-start gap-4 flex-initial">
	<Button size="tiny" aria-label="tiny">Upload</Button>
	<Button size="small" aria-label="small">Upload</Button>
	<Button aria-label="medium">Upload</Button>
	<Button size="large" aria-label="large">Upload</Button>
</div>`

export const buttonVariants = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-3">
		<Button size="small" variant="default">Upload</Button>
		<Button size="small" variant="error">Upload</Button>
		<Button size="small" variant="warning">Upload</Button>
		<Button size="small" variant="secondary">Upload</Button>
		<Button size="small" variant="tertiary">Upload</Button>
	</div>
	<div class="flex items-center gap-3">
		<Button variant="default">Upload</Button>
		<Button variant="error">Upload</Button>
		<Button variant="warning">Upload</Button>
		<Button variant="secondary">Upload</Button>
		<Button variant="tertiary">Upload</Button>
	</div>
	<div class="flex items-center gap-3">
		<Button size="large" variant="default">Upload</Button>
		<Button size="large" variant="error">Upload</Button>
		<Button size="large" variant="warning">Upload</Button>
		<Button size="large" variant="secondary">Upload</Button>
		<Button size="large" variant="tertiary">Upload</Button>
	</div>
</div>`

export const buttonShapes = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
	import { ArrowUp } from 'kampsy-ui/icons';
</script>

<div class="flex flex-col md:flex-row items-start gap-4 flex-initial">
	<Button aria-label="Upload" shape="square" size="tiny" svgOnly>
		<ArrowUp />
	</Button>

	<Button aria-label="Upload" shape="square" size="small" svgOnly>
		<ArrowUp />
	</Button>

	<Button aria-label="Upload" shape="square" svgOnly>
		<ArrowUp />
	</Button>

	<Button aria-label="Upload" shape="square" size="large" svgOnly>
		<ArrowUp />
	</Button>

	<Button aria-label="Upload" shape="circle" size="tiny" svgOnly>
		<ArrowUp />
	</Button>

	<Button aria-label="Upload" shape="circle" size="small" svgOnly>
		<ArrowUp />
	</Button>

	<Button aria-label="Upload" shape="circle" svgOnly>
		<ArrowUp />
	</Button>

	<Button aria-label="Upload" shape="circle" size="large" svgOnly>
		<ArrowUp />
	</Button>
</div>`

export const buttonPrefixAndSuffix = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
	import { ArrowLeft, ArrowRight } from 'kampsy-ui/icons';
</script>

<div class="flex flex-col md:flex-row items-start gap-4 flex-initial">
	<Button>
		{#snippet prefix()}
			<ArrowLeft />
		{/snippet}
		Upload
	</Button>
	<Button>
		{#snippet suffix()}
			<ArrowRight />
		{/snippet}
		Upload
	</Button>
	<Button>
		{#snippet prefix()}
			<ArrowLeft />
		{/snippet}
		{#snippet suffix()}
			<ArrowRight />
		{/snippet}
		Upload
	</Button>
</div>`

export const buttonRounded = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="flex flex-col md:flex-row items-start gap-4 flex-initial">
	<Button size="small" variant="secondary" shape="rounded" shadow>Upload</Button>
	<Button variant="secondary" shape="rounded" shadow>Upload</Button>
	<Button size="large" variant="secondary" shape="rounded" shadow>Upload</Button>
</div>`

export const buttonLoading = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="flex flex-col md:flex-row items-start gap-4 flex-initial">
	<Button size="small" loading>Upload</Button>
	<Button loading>Upload</Button>
	<Button size="large" loading>Upload</Button>
</div>`

export const buttonDisabled = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="flex flex-col md:flex-row items-start gap-4 flex-initial">
	<Button disabled size="small">Upload</Button>
	<Button disabled>Upload</Button>
	<Button disabled size="large">Upload</Button>
</div>`

export const buttonDisabledVariants = `
<script lang="ts">
	import { Button } from 'kampsy-ui';
</script>

<div class="flex flex-col md:flex-row items-start gap-4 flex-initial">
	<Button disabled>Default</Button>
	<Button disabled variant="secondary">Secondary</Button>
	<Button disabled variant="tertiary">Tertiary</Button>
	<Button disabled variant="error">Error</Button>
	<Button disabled variant="warning">Warning</Button>
</div>`
