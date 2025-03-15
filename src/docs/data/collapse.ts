export const collapseDefault = `
import { Collapse } from 'kampsy-ui';

<Collapse.Root>
	<Collapse.Item value="tab1">
		<Collapse.Trigger
			role="heading"
			aria-level={3}
			type="button"
			aria-controls="tab1-section"
			aria-expanded="false">Question A</Collapse.Trigger>
		<Collapse.Content id="tab1-section" aria-hidden="true" aria-labelledby="tab1">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</Collapse.Content>
	</Collapse.Item>
	<Collapse.Item value="tab2">
		<Collapse.Trigger
			role="heading"
			aria-level={3}
			type="button"
			aria-controls="tab2-section"
			aria-expanded="false">Question B</Collapse.Trigger>
		<Collapse.Content id="tab2-section" aria-hidden="true" aria-labelledby="tab2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</Collapse.Content>
	</Collapse.Item>
</Collapse.Root>`;

export const collapseExpanded = `
import { Collapse } from 'kampsy-ui';

<Collapse.Root>
	<Collapse.Item value="tab1">
		<Collapse.Trigger
			role="heading"
			aria-level={3}
			type="button"
			aria-controls="tab1-section"
			aria-expanded="false">Question A</Collapse.Trigger>
		<Collapse.Content id="tab1-section" aria-hidden="true" aria-labelledby="tab1">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</Collapse.Content>
	</Collapse.Item>
	<Collapse.Item defaultExpanded value="tab2">
		<Collapse.Trigger
			role="heading"
			aria-level={3}
			type="button"
			aria-controls="tab2-section"
			aria-expanded="false">Question B</Collapse.Trigger>
		<Collapse.Content id="tab2-section" aria-hidden="false" aria-labelledby="tab2">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</Collapse.Content>
	</Collapse.Item>
</Collapse.Root>`;

export const collapseSize = `
import { Collapse } from 'kampsy-ui';

<Collapse.Root>
	<Collapse.Item size="small" value="tab1">
		<Collapse.Trigger
			role="heading"
			aria-level={3}
			type="button"
			aria-controls="tab1-section"
			aria-expanded="false">Question A</Collapse.Trigger>
		<Collapse.Content id="tab1-section" aria-hidden="true" aria-labelledby="tab1">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
			exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</Collapse.Content>
	</Collapse.Item>
</Collapse.Root>`;


