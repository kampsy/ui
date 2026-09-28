<script lang="ts">
	import { Button, toast } from "$lib/index.js"

	interface Props {
		variant?:
			| "default"
			| "positioning"
			| "multi-line"
			| "preserve"
			| "action"
			| "undo"
			| "success"
			| "warning"
			| "error"
	}

	let { variant = "default" }: Props = $props()
	function showToast() {
		if (variant === "multi-line") {
			toast(
				"The Evil Rabbit jumped over the fence. The Evil Rabbit jumped over the fence. The Evil Rabbit jumped over the fence.",
			)
		} else if (variant === "preserve") {
			toast("The Evil Rabbit jumped over the fence.", { preserve: true })
		} else if (variant === "action") {
			toast(
				"The Evil Rabbit jumped over the fence. The Evil Rabbit jumped over the fence again.",
				{
					action: "Undo",
					onAction: () => console.log("undone"),
				},
			)
		} else if (variant === "undo") {
			toast(
				"The Evil Rabbit jumped over the fence. The Evil Rabbit jumped over the fence again.",
				{
					onUndoAction: () => console.log("undone"),
				},
			)
		} else if (variant === "success" || variant === "warning" || variant === "error") {
			toast[variant]("The Evil Rabbit jumped over the fence.")
		} else {
			toast("The Evil Rabbit jumped over the fence.")
		}
	}
</script>

<Button onclick={showToast}>Show Toast</Button>
