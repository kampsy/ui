export const emptyStateDefault = `
<script lang="ts">
	import { EmptyState, ChartBarPeak } from 'kampsy-ui';
</script>

<EmptyState.Root
  description="A message conveying the state of the product."
  icon={ChartBarPeak}
  title="Title"
/>`;

export const blankStateDocs = emptyStateDefault;

export const informationalDocs = `
<script lang="ts">
	import { EmptyState, ChartBarPeak, Button} from 'kampsy-ui';
</script>

<EmptyState.Root
	description="This should detail the actions you can take on this screen, as well as why it’s valuable."
	icon={ChartBarPeak}
	title="Title"
>
	<Button variant="secondary">Primary Action</Button>
</EmptyState.Root>
`;
