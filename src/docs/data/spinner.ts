export const spinnerDefault = `
<script lang="ts">
	import { Spinner } from 'kampsy-ui';
</script>

<Spinner />`;

export const spinnerCustom = `
<script lang="ts">
	import { Spinner } from 'kampsy-ui';
</script>

<div class="flex items-center gap-8">
	<Spinner size={12} />
	<Spinner size={32} />
	<Spinner size={40} />
</div>`;
