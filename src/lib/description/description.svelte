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
			class="flex items-center mb-[8px] text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900 leading-[14px]"
		>
			{#if title}
				{title}
			{/if}
			{#if tooltip}
				<span class="w-[14px] h-[14px] ml-[4px]">
					<Tooltip text={tooltip}>
						<div class="w-[14px] h-[14px]">
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
