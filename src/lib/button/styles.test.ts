import { describe, it, expect } from "vitest"
import {
	resolveButtonClass,
	resolveRadius,
	variantStyles,
	disabledVariantStyles,
	loadingStyles,
	interactiveCursorStyles,
	disabledCursorStyles,
	shadowStyles,
	shapeSizeStyles,
	sizeStyles,
} from "./styles.js"

describe("resolveRadius", () => {
	it("returns full radius for circle shape", () => {
		expect(resolveRadius("medium", "circle")).toBe("rounded-full")
	})

	it("returns full radius for rounded shape", () => {
		expect(resolveRadius("tiny", "rounded")).toBe("rounded-full")
	})

	it("returns size radius for square shape", () => {
		expect(resolveRadius("large", "square")).toBe("rounded-lg")
	})

	it("returns size radius when shape is omitted", () => {
		expect(resolveRadius("medium")).toBe("rounded-md")
	})
})

describe("resolveButtonClass", () => {
	it("includes base size and default variant classes", () => {
		const result = resolveButtonClass({})
		expect(result).toEqual(
			expect.arrayContaining([sizeStyles.medium, variantStyles.default, "rounded-md"]),
		)
	})

	it("uses shape size map when svgOnly is set", () => {
		const result = resolveButtonClass({ svgOnly: true, shape: "square", size: "small" })
		expect(result).toEqual(expect.arrayContaining([shapeSizeStyles.small]))
		expect(result).not.toEqual(expect.arrayContaining([sizeStyles.small]))
	})

	it("keeps text size styles for rounded shape without svgOnly", () => {
		const result = resolveButtonClass({ shape: "rounded", size: "small" })
		expect(result).toEqual(expect.arrayContaining([sizeStyles.small, "rounded-full"]))
	})

	it("applies disabled variant styles when disabled", () => {
		const result = resolveButtonClass({ disabled: true, variant: "error" })
		expect(result).toEqual(expect.arrayContaining([disabledVariantStyles.error]))
		expect(result).not.toEqual(expect.arrayContaining([variantStyles.error]))
	})

	it("keeps variant styles and adds loading styles when loading", () => {
		const result = resolveButtonClass({ loading: true, variant: "secondary" })
		expect(result).toEqual(expect.arrayContaining([variantStyles.secondary, loadingStyles]))
	})

	it("adds shadow styles when shadow is set", () => {
		const result = resolveButtonClass({ shadow: true, shape: "rounded" })
		expect(result).toEqual(expect.arrayContaining([shadowStyles, "rounded-full"]))
	})

	it("appends consumer class value", () => {
		const result = resolveButtonClass({ class: "w-full" })
		expect(result).toEqual(expect.arrayContaining(["w-full"]))
	})

	it("uses pointer cursor when interactive", () => {
		const result = resolveButtonClass({})
		expect(result).toEqual(expect.arrayContaining([interactiveCursorStyles]))
	})

	it("uses not-allowed cursor when disabled", () => {
		const result = resolveButtonClass({ disabled: true })
		expect(result).toEqual(expect.arrayContaining([disabledCursorStyles]))
		expect(result).not.toEqual(expect.arrayContaining([interactiveCursorStyles]))
	})

	it("uses wait cursor when loading", () => {
		const result = resolveButtonClass({ loading: true })
		expect(result).toEqual(expect.arrayContaining([loadingStyles]))
		expect(result).not.toEqual(expect.arrayContaining([interactiveCursorStyles]))
	})
})
