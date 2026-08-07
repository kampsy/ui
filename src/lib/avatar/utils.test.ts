import { describe, it, expect } from "vitest"
import {
	resolveAvatarSrc,
	normalizeLetter,
	resolveOverlapPx,
	vercelAvatarUrl,
} from "./utils.js"

describe("vercelAvatarUrl", () => {
	it("returns pravatar URL with size", () => {
		expect(vercelAvatarUrl("evil rabbit", 64)).toBe("https://i.pravatar.cc/64")
	})
})

describe("resolveAvatarSrc", () => {
	it("prefers explicit src", () => {
		expect(
			resolveAvatarSrc({ src: "https://example.com/a.png", username: "evilrabbit" }, 32),
		).toBe("https://example.com/a.png")
	})

	it("falls back to pravatar URL from username", () => {
		expect(resolveAvatarSrc({ username: "evilrabbit" }, 32)).toBe("https://i.pravatar.cc/32")
	})

	it("returns undefined when nothing provided", () => {
		expect(resolveAvatarSrc({}, 32)).toBeUndefined()
	})
})

describe("normalizeLetter", () => {
	it("keeps first two uppercase letters", () => {
		expect(normalizeLetter("SL")).toBe("SL")
		expect(normalizeLetter("sam")).toBe("SA")
	})

	it("strips emoji and punctuation", () => {
		expect(normalizeLetter("S?L")).toBe("SL")
		expect(normalizeLetter("👍AB")).toBe("AB")
	})

	it("returns undefined for empty strings", () => {
		expect(normalizeLetter("")).toBeUndefined()
		expect(normalizeLetter("???")).toBeUndefined()
	})
})

describe("resolveOverlapPx", () => {
	it("returns fixed number when provided", () => {
		expect(resolveOverlapPx(32, 10)).toBe(10)
	})

	it("auto scales with size", () => {
		expect(resolveOverlapPx(32, "auto")).toBe(9)
		expect(resolveOverlapPx(64, "auto")).toBe(18)
	})
})
