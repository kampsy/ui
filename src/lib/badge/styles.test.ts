import { describe, it, expect } from "vitest"
import {
	resolveBadgeClass,
	badgeVariants,
	variantStyles,
	sizeStyles,
	badgeBase,
} from "./styles.js"

describe("resolveBadgeClass", () => {
	it("includes base, default variant, and default size classes", () => {
		const result = resolveBadgeClass({})
		expect(result).toEqual(
			expect.arrayContaining([badgeBase, variantStyles.gray.high, sizeStyles.md]),
		)
	})

	it("uses subtle contrast classes when contrast is low", () => {
		const result = resolveBadgeClass({ variant: "blue", contrast: "low" })
		expect(result).toEqual(expect.arrayContaining([variantStyles.blue.low]))
		expect(result).not.toEqual(expect.arrayContaining([variantStyles.blue.high]))
	})

	it("maps size aliases to size styles", () => {
		expect(resolveBadgeClass({ size: "sm" })).toEqual(expect.arrayContaining([sizeStyles.sm]))
		expect(resolveBadgeClass({ size: "lg" })).toEqual(expect.arrayContaining([sizeStyles.lg]))
	})

	it("appends consumer class value", () => {
		const result = resolveBadgeClass({ class: "w-full" })
		expect(result).toEqual(expect.arrayContaining(["w-full"]))
	})

	it("renders trial and turbo variants", () => {
		expect(resolveBadgeClass({ variant: "trial" })).toEqual(
			expect.arrayContaining([variantStyles.trial.high]),
		)
		expect(resolveBadgeClass({ variant: "turbo" })).toEqual(
			expect.arrayContaining([variantStyles.turbo.high]),
		)
	})

	it("applies turbo brand gradient and white text", () => {
		const result = resolveBadgeClass({ variant: "turbo" })
		expect(result).toEqual(
			expect.arrayContaining([
				"bg-linear-to-r from-[#ff0080] via-[#7928ca] to-[#0070f3] text-white",
			]),
		)
	})
})

describe("badgeVariants", () => {
	it("returns a space-joined class string", () => {
		const result = badgeVariants({ variant: "green", contrast: "low", size: "lg" })
		expect(result).toBe([badgeBase, variantStyles.green.low, sizeStyles.lg].join(" "))
	})

	it("defaults to gray/high/md", () => {
		const result = badgeVariants({})
		expect(result).toBe([badgeBase, variantStyles.gray.high, sizeStyles.md].join(" "))
	})
})
