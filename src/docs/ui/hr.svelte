<script lang="ts">
	type propsT = {
		class?: string;
	};

	let { class: klass = "" }: propsT = $props();
</script>

<section class="{klass}">
    <div class="w-full border-t border-kui-light-gray-200 dark:border-kui-dark-gray-400"></div>
</section>
