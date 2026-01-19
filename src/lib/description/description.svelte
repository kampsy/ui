<script lang="ts">
	import { InformationFillSmall } from '$lib/icons/index.js';
	import { Tooltip } from '$lib/index.js';

	interface Props {
		content?: string;
		title?: string;
		tooltip?: string;
	};

	let { content = undefined, title = undefined, tooltip = undefined }: Props = $props();
</script>

<div>
	<dl class="">
		<dt
			class="flex items-center mb-2 text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900 leading-3.5"
		>
			{#if title}
				{title}
			{/if}
			{#if tooltip}
				<span class="w-3.5 h-3.5 ml-1">
					<Tooltip text={tooltip}>
						<div class="w-3.5 h-3.5">
							<InformationFillSmall />
						</div>
					</Tooltip>
				</span>
			{/if}
		</dt>
		{#if content}
			<dd
				class="text-sm text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 font-medium leading-4"
			>
				{content}
			</dd>
		{/if}
	</dl>
</div>
