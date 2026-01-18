export const statusDotDefault = `
import { StatusDot } from 'kampsy-ui';

<div class="space-y-6">
	<StatusDot state="QUEUED" />
	<StatusDot state="BUILDING" />
	<StatusDot state="ERROR" />
	<StatusDot state="READY" />
	<StatusDot state="CANCELED" />
</div>`;

export const statusDotLabel = `
import { StatusDot } from 'kampsy-ui';

<div class="space-y-6">
	<StatusDot label state="QUEUED" />
	<StatusDot label state="BUILDING" />
	<StatusDot label state="ERROR" />
	<StatusDot label state="READY" />
	<StatusDot label state="CANCELED" />
</div>`;