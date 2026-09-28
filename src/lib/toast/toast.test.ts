import { describe, expect, it } from "vitest"
import { toast, toastState } from "./toast.svelte.js"

describe("toast", () => {
	it("adds a message to the shared queue", () => {
		const id = toast("My first toast", { preserve: true })

		expect(toastState.toasts).toContainEqual({
			id,
			text: "My first toast",
			type: "message",
			preserve: true,
		})

		toast.dismiss(id)
	})

	it("supports typed toast methods", () => {
		const ids = [
			toast.success("Saved", { preserve: true }),
			toast.warning("Check this", { preserve: true }),
			toast.error("Failed", { preserve: true }),
		]

		expect(toastState.toasts.map(({ type }) => type)).toEqual(["success", "warning", "error"])

		for (const id of ids) toast.dismiss(id)
	})
})
