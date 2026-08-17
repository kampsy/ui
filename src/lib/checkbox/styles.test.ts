import { describe, it, expect } from "vitest"
import {
	resolveBoxClass,
	resolveIconClass,
	resolveLabelClass,
	resolveRootClass,
	boxBase,
	boxUnchecked,
	boxChecked,
	boxIndeterminate,
	boxDisabledUnchecked,
	boxDisabledChecked,
	boxDisabledIndeterminate,
	iconBase,
	iconChecked,
	iconIndeterminate,
	iconDisabledIndeterminate,
	iconUnchecked,
	labelBase,
	labelDefault,
	labelDisabled,
	rootBase,
	focusStyles,
} from "./styles.js"

describe("resolveBoxClass", () => {
	it("returns unchecked styles by default", () => {
		const result = resolveBoxClass({})
		expect(result).toEqual(expect.arrayContaining([boxBase, boxUnchecked, focusStyles]))
	})

	it("returns checked styles when checked", () => {
		const result = resolveBoxClass({ checked: true })
		expect(result).toEqual(expect.arrayContaining([boxBase, boxChecked, focusStyles]))
	})

	it("returns indeterminate styles when indeterminate", () => {
		const result = resolveBoxClass({ indeterminate: true })
		expect(result).toEqual(expect.arrayContaining([boxBase, boxIndeterminate, focusStyles]))
	})

	it("prefers disabled unchecked styles when disabled and unchecked", () => {
		const result = resolveBoxClass({ disabled: true })
		expect(result).toEqual(
			expect.arrayContaining([boxBase, boxDisabledUnchecked, focusStyles]),
		)
	})

	it("prefers disabled checked styles when disabled and checked", () => {
		const result = resolveBoxClass({ disabled: true, checked: true })
		expect(result).toEqual(expect.arrayContaining([boxBase, boxDisabledChecked, focusStyles]))
	})

	it("prefers disabled indeterminate styles when disabled and indeterminate", () => {
		const result = resolveBoxClass({ disabled: true, indeterminate: true })
		expect(result).toEqual(
			expect.arrayContaining([boxBase, boxDisabledIndeterminate, focusStyles]),
		)
	})
})

describe("resolveIconClass", () => {
	it("returns transparent icon when unchecked", () => {
		const result = resolveIconClass({})
		expect(result).toEqual(expect.arrayContaining([iconBase, iconUnchecked]))
	})

	it("returns checked icon when checked", () => {
		const result = resolveIconClass({ checked: true })
		expect(result).toEqual(expect.arrayContaining([iconBase, iconChecked]))
	})

	it("returns indeterminate icon when indeterminate", () => {
		const result = resolveIconClass({ indeterminate: true })
		expect(result).toEqual(expect.arrayContaining([iconBase, iconIndeterminate]))
	})

	it("returns disabled indeterminate icon when disabled and indeterminate", () => {
		const result = resolveIconClass({ disabled: true, indeterminate: true })
		expect(result).toEqual(expect.arrayContaining([iconBase, iconDisabledIndeterminate]))
	})
})

describe("resolveLabelClass", () => {
	it("returns default label color", () => {
		const result = resolveLabelClass({})
		expect(result).toEqual(expect.arrayContaining([labelBase, labelDefault]))
	})

	it("returns muted label color when disabled", () => {
		const result = resolveLabelClass({ disabled: true })
		expect(result).toEqual(expect.arrayContaining([labelBase, labelDisabled]))
	})
})

describe("resolveRootClass", () => {
	it("returns pointer cursor by default", () => {
		const result = resolveRootClass({})
		expect(result).toEqual(expect.arrayContaining([rootBase, "cursor-pointer"]))
	})

	it("returns not-allowed cursor when disabled", () => {
		const result = resolveRootClass({ disabled: true })
		expect(result).toEqual(expect.arrayContaining([rootBase, "cursor-not-allowed"]))
	})
})
