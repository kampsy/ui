export const skeletonDefault = `
<script lang="ts">
	import { Skeleton } from 'kampsy-ui';
</script>

<Skeleton width={160} />`

export const skeletonBoxHeight = `
<script lang="ts">
	import { Skeleton } from 'kampsy-ui';
</script>

<Skeleton boxHeight={42} width={160} />`

export const skeletonChildren = `
<script lang="ts">
	import { Button, Skeleton } from 'kampsy-ui';
</script>

<Skeleton>
	<Button>Hidden by skeleton</Button>
</Skeleton>

<Skeleton show={false}>
	<Button>Not hidden by skeleton</Button>
</Skeleton>`

export const skeletonFixedSize = `
<script lang="ts">
	import { Button, Skeleton } from 'kampsy-ui';
</script>

<Skeleton height={100} width="100%" />

<Skeleton height={100} width="100%">
	<Button>Not hidden by Skeleton</Button>
</Skeleton>`

export const skeletonPill = `
<Skeleton pill width={48} />`

export const skeletonRounded = `
<Skeleton boxHeight={48} height={48} rounded width={48} />`

export const skeletonSquared = `
<Skeleton boxHeight={48} height={48} squared width={48} />`

export const skeletonNoAnimation = `
<Skeleton animated={false} height={100} width="100%" />`

export const skeletonButton = `
<script lang="ts">
	import { Button, Skeleton } from 'kampsy-ui';
</script>

<Skeleton height={32} width={120}>
	<Button>Loading...</Button>
</Skeleton>

<Skeleton button height={32} width={120}>
	<Button>Loading...</Button>
</Skeleton>

<Skeleton button>
	<Button>Save</Button>
</Skeleton>

<Skeleton button>
	<Button variant="secondary">Cancel</Button>
</Skeleton>`
