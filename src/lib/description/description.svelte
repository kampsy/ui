<script lang="ts">
	import { InformationFillSmall } from "$lib/icons/index.js"
	import { Tooltip } from "$lib/index.js"

	interface Props {
		content?: string
		title?: string
		tooltip?: string
	}

	let { content = undefined, title = undefined, tooltip = undefined }: Props = $props()
</script>

<div>
	<dl class="">
		<dt
			class="text-kui-light-gray-900 dark:text-kui-dark-gray-900 mb-2 flex items-center text-sm leading-3.5"
		>
			{#if title}
				{title}
			{/if}
			{#if tooltip}
				<span class="ml-1 h-3.5 w-3.5">
					<Tooltip text={tooltip}>
						<div class="h-3.5 w-3.5">
							<InformationFillSmall />
						</div>
					</Tooltip>
				</span>
			{/if}
		</dt>
		{#if content}
			<dd
				class="text-kui-light-gray-1000 dark:text-kui-dark-gray-1000 text-sm leading-4 font-medium"
			>
				{content}
			</dd>
		{/if}
	</dl>
</div>
