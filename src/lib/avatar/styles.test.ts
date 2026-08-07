import { describe, it, expect } from "vitest"
import { sizeStyle, fontSizeStyle, resolveAvatarClass, avatarBase } from "./styles.js"

describe("sizeStyle", () => {
	it("returns width and height px", () => {
		expect(sizeStyle(32)).toBe("width: 32px; height: 32px;")
	})
})

describe("fontSizeStyle", () => {
	it("scales with size with a floor", () => {
		expect(fontSizeStyle(32)).toBe("font-size: 13px;")
		expect(fontSizeStyle(90)).toBe("font-size: 36px;")
		expect(fontSizeStyle(16)).toBe("font-size: 10px;")
	})
})

describe("resolveAvatarClass", () => {
	it("includes base and inline size", () => {
		const result = resolveAvatarClass({ size: 48 })
		expect(result).toEqual(expect.arrayContaining([avatarBase, sizeStyle(48)]))
	})

	it("appends consumer class", () => {
		const result = resolveAvatarClass({ size: 32, class: "border-red" })
		expect(result).toEqual(expect.arrayContaining(["border-red"]))
	})
})
