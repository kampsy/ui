export const statusDotDefault = `
<script lang="ts">
	import { StatusDot } from 'kampsy-ui';
</script>

<div class="space-y-6">
	<StatusDot state="QUEUED" />
	<StatusDot state="BUILDING" />
	<StatusDot state="ERROR" />
	<StatusDot state="READY" />
	<StatusDot state="CANCELED" />
</div>`;

export const statusDotLabel = `
<script lang="ts">
	import { StatusDot } from 'kampsy-ui';
</script>

<div class="space-y-6">
	<StatusDot label state="QUEUED" />
	<StatusDot label state="BUILDING" />
	<StatusDot label state="ERROR" />
	<StatusDot label state="READY" />
	<StatusDot label state="CANCELED" />
</div>`;