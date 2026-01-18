export const showMoreDefault = `
<script lang="ts">
	import { ShowMore } from 'kampsy-ui';

	let isActive = $state(false);
</script>

<div class="w-full">
    <ShowMore bind:isActive />
</div>`;