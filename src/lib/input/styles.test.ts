import { describe, expect, it } from "vitest"
import {
	resolveAdornmentClass,
	resolveInputClass,
	resolveInputPadding,
	sizeStyles,
} from "./styles.js"

describe("resolveInputClass", () => {
	it("includes the requested size and radius", () => {
		const result = resolveInputClass({ size: "large" })

		expect(result).toEqual(expect.arrayContaining([sizeStyles.large, "rounded-lg"]))
	})

	it("uses a full radius when rounded", () => {
		const result = resolveInputClass({ rounded: true })

		expect(result).toEqual(expect.arrayContaining(["rounded-full"]))
	})

	it("uses error and disabled states", () => {
		expect(resolveInputClass({ error: "Invalid" })).toEqual(
			expect.arrayContaining([expect.stringContaining("color-kui-light-red-900")]),
		)
		expect(resolveInputClass({ disabled: true })).toEqual(
			expect.arrayContaining([expect.stringContaining("cursor-not-allowed")]),
		)
		expect(resolveInputClass({ disabled: true })).toEqual(
			expect.arrayContaining([expect.stringContaining("color-kui-light-gray-alpha-600")]),
		)
	})

	it("prioritizes disabled, error, and focused states in that order", () => {
		const disabledResult = resolveInputClass({
			disabled: true,
			error: "Invalid",
			focused: true,
		})
		const errorResult = resolveInputClass({ error: "Invalid", focused: true })

		expect(disabledResult).toEqual(
			expect.arrayContaining([expect.stringContaining("cursor-not-allowed")]),
		)
		expect(disabledResult).not.toEqual(
			expect.arrayContaining([expect.stringContaining("color-kui-light-red-900")]),
		)
		expect(errorResult).toEqual(
			expect.arrayContaining([expect.stringContaining("color-kui-light-red-900")]),
		)
		expect(errorResult).not.toEqual(
			expect.arrayContaining([expect.stringContaining("color-kui-light-gray-alpha-600")]),
		)
	})

	it("appends consumer classes", () => {
		expect(resolveInputClass({ class: "w-full" })).toEqual(expect.arrayContaining(["w-full"]))
	})
})

describe("resolveInputPadding", () => {
	it("reserves space for styled adornments", () => {
		expect(resolveInputPadding()).toBe("px-3")
		expect(resolveInputPadding(true, false)).toBe("pl-3")
		expect(resolveInputPadding(false, true)).toBe("pr-3")
		expect(resolveInputPadding(false, false)).toBe("")
	})
})

describe("resolveAdornmentClass", () => {
	it("adds the correct side border", () => {
		expect(resolveAdornmentClass(true, "prefix")).toContain("border-r")
		expect(resolveAdornmentClass(true, "suffix")).toContain("border-l")
	})
})
