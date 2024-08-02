<script lang="ts">
	type propsT = {
		class?: string | undefined
	};
	let { class: klass = '' }: propsT = $props();
</script>

<col class="{klass}"/>
