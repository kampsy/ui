<script lang="ts">
	type propsT = {
		size?: number;
		placeholder?: boolean;
	};

	let { size = 32, placeholder = false }: propsT = $props();

	let widthHeight = $derived.by(() => {
		return ` width: ${size}px; height: ${size}px;`;
	});
</script>

<div class="group cursor-pointer transition duration-150 ease-out hover:ease-in hover:bg-kui-light-gray-200 hover:dark:bg-kui-dark-gray-200 px-[10px] py-[8px] rounded-[8px]">
	<div class="flex items-center gap-x-[10px]">
		<div
			style={widthHeight}
			class="flex items-center justify-center rounded-full overflow-hidden text-[10px] font-semibold border dark:text-kui-dark-gray-1000 border-kui-light-gray-200 dark:border-kui-dark-gray-400 group-hover:border-kui-light-gray-500 group-hover:dark:border-kui-dark-gray-500"
		></div>
        <div>
            <div class="first-letter:capitalize text-base font-medium text-kui-light-gray-1000 dark:text-kui-dark-gray-1000">
                Jese Leos
            </div>
            <div class="first-letter:capitalize text-sm text-kui-light-gray-900 dark:text-kui-dark-gray-900">
                Joined in August 2014
            </div>
        </div>
	</div>
</div>
