import { describe, expect, it } from "vitest"
import { resolveSkeletonClass, shellInsetStyle, sizeStyle } from "./styles.js"

describe("skeleton styles", () => {
	it("formats numeric dimensions as pixels", () => {
		expect(sizeStyle(160, 20)).toBe("width: 160px; height: 20px;")
	})

	it("passes string dimensions through unchanged", () => {
		expect(sizeStyle("100%", 32)).toBe("width: 100%; height: 32px;")
	})

	it("omits undefined dimensions", () => {
		expect(sizeStyle(160, undefined)).toBe("width: 160px;")
	})

	it("uses the requested shape", () => {
		const pill = resolveSkeletonClass({
			animated: false,
			pill: true,
			rounded: false,
			squared: false,
		})
		expect(pill).toContain("rounded-full")
		expect(pill).not.toContain("skeleton-shimmer")

		const squared = resolveSkeletonClass({
			animated: true,
			pill: false,
			rounded: false,
			squared: true,
		})
		expect(squared).toContain("rounded-none")
		expect(squared).toContain("skeleton-shimmer")

		const rounded = resolveSkeletonClass({
			animated: false,
			pill: false,
			rounded: true,
			squared: false,
		})
		expect(rounded).toContain("rounded-full")
	})

	it("defaults to a subtle radius", () => {
		const defaultShape = resolveSkeletonClass({
			animated: false,
			pill: false,
			rounded: false,
			squared: false,
		})
		expect(defaultShape).toContain("rounded-sm")
	})

	it("extends the shell by 1px when button is true", () => {
		expect(shellInsetStyle(true)).toBe("inset: -1px;")
		expect(shellInsetStyle(false)).toBe("inset: 0;")
	})
})
