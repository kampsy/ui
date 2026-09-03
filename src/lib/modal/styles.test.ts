import { describe, expect, it } from "vitest"
import {
	modalDefaultHeader,
	modalFooter,
	modalStickyHeader,
	resolveModalContentClass,
	resolveModalFooterClass,
	resolveModalHeaderClass,
} from "./styles.js"

describe("modal class resolvers", () => {
	it("resolves sticky and default header classes", () => {
		expect(resolveModalHeaderClass(true)).toBe(modalStickyHeader)
		expect(resolveModalHeaderClass(false)).toBe(modalDefaultHeader)
	})

	it("appends consumer classes to content and footer", () => {
		expect(resolveModalContentClass("max-w-lg")).toEqual(expect.arrayContaining(["max-w-lg"]))
		expect(resolveModalFooterClass("gap-2")).toEqual(
			expect.arrayContaining([modalFooter, "gap-2"]),
		)
	})
})
