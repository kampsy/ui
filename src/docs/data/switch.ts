export const switchDefault = `
import { Switch } from 'kampsy-ui';

<Switch.Root name="default">
	<Switch.Control defaultChecked label="Source" value="source" />
	<Switch.Control label="Output" value="output" />
</Switch.Root>`;

export const switchLabel = `
import { Switch } from 'kampsy-ui';

<div class="space-y-6">
	<StatusDot label state="QUEUED" />
	<StatusDot label state="BUILDING" />
	<StatusDot label state="ERROR" />
	<StatusDot label state="READY" />
	<StatusDot label state="CANCELED" />
</div>`;