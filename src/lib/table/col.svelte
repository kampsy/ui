<script lang="ts">
	interface Props {
		class?: string | undefined
	};
	let { class: klass = '' }: Props = $props();
</script>

<col class="{klass}"/>
